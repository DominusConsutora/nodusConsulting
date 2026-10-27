param(
    [string]$Message
)

$ErrorActionPreference = "Continue"
Set-Location (Split-Path -Parent $PSScriptRoot)
$project = (Get-Location).Path

if ([string]::IsNullOrWhiteSpace($Message)) {
    $default = "Actualizacion del sitio"
    $input = Read-Host "Mensaje del commit (Enter para '$default')"
    $Message = if ([string]::IsNullOrWhiteSpace($input)) { $default } else { $input.Trim() }
}
Write-Host "Mensaje del commit: $Message" -ForegroundColor Yellow

function Run([string]$Label, [scriptblock]$Command) {
    Write-Host "`n==> $Label" -ForegroundColor Cyan
    & $Command
    if ($LASTEXITCODE -ne 0) { throw "Fallo: $Label" }
}

function Step([string]$Label, [scriptblock]$Command) {
    & $Command 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) { throw "Fallo: $Label" }
}

$trailer = "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

if ((git branch --show-current) -ne "develop") {
    throw "Tenés que estar en la rama develop (estás en '$(git branch --show-current)')."
}

Run "Build (npm run build)" { npm run build }
if (-not (Test-Path (Join-Path $project "out\index.html"))) { throw "El build no generó out/index.html" }

Write-Host "`n==> Cambios a commitear en develop" -ForegroundColor Cyan
git status --short
git add -A
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -q -m $Message -m $trailer
    if ($LASTEXITCODE -ne 0) { throw "Fallo el commit" }
} else {
    Write-Host "Sin cambios para commitear."
}

Run "Push develop" { git push origin develop }

Run "Cambiar a main" { git checkout main }
try {
    Run "Traer main desde GitHub" { git pull --ff-only origin main }
    Run "Merge develop en main" { git merge develop --no-edit }
    Run "Push main" { git push origin main }
}
finally {
    git checkout develop 2>&1 | Out-Null
}

$wt = Join-Path $env:TEMP "nodus-deploy-wt"
if (Test-Path $wt) { git worktree remove $wt --force 2>&1 | Out-Null; Remove-Item $wt -Recurse -Force -ErrorAction SilentlyContinue }
git worktree prune

try {
    git fetch origin deploy 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Run "Preparar worktree para deploy" { git worktree add --detach $wt origin/deploy }
    } else {
        Write-Host "No existe la rama deploy en GitHub: se crea vacía." -ForegroundColor Yellow
        Run "Preparar worktree para deploy (nueva)" { git worktree add --detach $wt develop }
        Push-Location $wt
        git checkout --orphan deploy 2>&1 | Out-Null
        Pop-Location
    }
    Push-Location $wt
    git rm -rf --quiet . 2>&1 | Out-Null
    Get-ChildItem -Force | Where-Object Name -ne ".git" | Remove-Item -Recurse -Force
    robocopy (Join-Path $project "out") $wt /E /NFL /NDL /NJH /NJS /NP | Out-Null
    Step "Agregar archivos" { git add -A }
    git diff --cached --quiet
    if ($LASTEXITCODE -ne 0) {
        git commit -q -m $Message -m $trailer
        if ($LASTEXITCODE -ne 0) { throw "Fallo el commit de deploy" }
        Run "Push deploy (solo contenido de out)" { git push origin HEAD:deploy }
    } else {
        Write-Host "deploy ya estaba al dia (sin cambios en out)."
    }
}
finally {
    Set-Location $project
    if (Test-Path $wt) { git worktree remove $wt --force 2>&1 | Out-Null }
}

git fetch origin deploy 2>&1 | Out-Null
git branch -f deploy origin/deploy 2>&1 | Out-Null

Write-Host "`nListo: develop, main y deploy actualizadas en GitHub." -ForegroundColor Green
