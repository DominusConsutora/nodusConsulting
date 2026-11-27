// Genera las imágenes para compartir (Open Graph, 1200x630, JPG) en public/og/.
// LinkedIn no muestra de forma confiable imágenes WebP, por eso se generan en JPG.
// Se ejecuta antes de cada build (prebuild) y solo crea las imágenes que faltan.
// Para regenerar todo: npm run og -- --force
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = (...parts) => path.join(root, "public", ...parts);
const force = process.argv.includes("--force");
const W = 1200;
const H = 630;
const INK = "#292857";
const PAPER = "#f8f8fb";

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.warn("[og] sharp no está disponible: se omite la generación de imágenes para compartir.");
  process.exit(0);
}

const escapeXml = (text) => text.replace(/[<>&"']/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[c]);
const svg = (body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${body}</svg>`);
const FONT = "Manrope, 'Segoe UI', Arial, Helvetica, sans-serif";
const MONO = "'DM Mono', Consolas, 'Courier New', monospace";

async function logo(width) {
  return sharp(pub("brand", "logo-nodus.png")).resize({ width }).png().toBuffer();
}

async function save(image, ...target) {
  const file = pub("og", ...target);
  mkdirSync(path.dirname(file), { recursive: true });
  await image.jpeg({ quality: 82, mozjpeg: true }).toFile(file);
  console.log(`[og] ${path.relative(root, file)}`);
}

const needs = (...target) => force || !existsSync(pub("og", ...target));

// Imagen institucional por defecto: panel claro con logo + foto de puerto.
async function defaultImage() {
  if (!needs("nodus.jpg")) return;
  const panel = 660;
  const photo = await sharp(pub("images", "puerto01.webp")).resize(W - panel, H, { fit: "cover", position: "attention" }).toBuffer();
  const overlay = svg(`
    <rect x="0" y="0" width="${panel}" height="${H}" fill="${PAPER}"/>
    <rect x="${panel}" y="0" width="${W - panel}" height="${H}" fill="${INK}" fill-opacity="0.35"/>
    <rect x="${panel}" y="0" width="6" height="${H}" fill="${INK}"/>
    <text x="80" y="345" font-family="${FONT}" font-size="40" font-weight="600" fill="${INK}">Consultoría portuaria</text>
    <text x="80" y="395" font-family="${FONT}" font-size="40" font-weight="600" fill="${INK}">estratégica</text>
    <rect x="80" y="440" width="64" height="3" fill="${INK}"/>
    <text x="80" y="490" font-family="${MONO}" font-size="20" letter-spacing="3" fill="#555487">ARGENTINA · LATINOAMÉRICA</text>
    <text x="80" y="560" font-family="${MONO}" font-size="18" letter-spacing="1" fill="#5d5d70">nodusconsulting.com.ar</text>`);
  const image = sharp({ create: { width: W, height: H, channels: 3, background: PAPER } }).composite([
    { input: photo, left: panel, top: 0 },
    { input: overlay, left: 0, top: 0 },
    { input: await logo(440), left: 80, top: 110 },
  ]);
  await save(image, "nodus.jpg");
}

// Una imagen por nota: foto de portada + franja inferior con el logo.
async function blogImages() {
  const source = readFileSync(path.join(root, "src", "data", "blogPosts.ts"), "utf8");
  const posts = [...source.matchAll(/slug:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?heroImage:\s*"([^"]+)"/g)].map(([, slug, category, heroImage]) => ({ slug, category, heroImage }));
  for (const post of posts) {
    if (!needs("blog", `${post.slug}.jpg`)) continue;
    const heroPath = pub(...post.heroImage.replace(/^\//, "").split("/"));
    if (!existsSync(heroPath)) {
      console.warn(`[og] falta la imagen ${post.heroImage} de ${post.slug}`);
      continue;
    }
    const photo = await sharp(heroPath).resize(W, H, { fit: "cover", position: "attention" }).toBuffer();
    const overlay = svg(`
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0.45" stop-color="${INK}" stop-opacity="0"/><stop offset="1" stop-color="${INK}" stop-opacity="0.85"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#g)"/>
      <rect x="48" y="${H - 138}" width="300" height="90" rx="10" fill="${PAPER}"/>
      <text x="${W - 56}" y="${H - 80}" text-anchor="end" font-family="${MONO}" font-size="22" letter-spacing="3" fill="${PAPER}">BLOG / ${escapeXml(post.category.toUpperCase())}</text>`);
    const image = sharp(photo).composite([
      { input: overlay, left: 0, top: 0 },
      { input: await logo(240), left: 78, top: H - 123 },
    ]);
    await save(image, "blog", `${post.slug}.jpg`);
  }
}

// Perfiles de los fundadores: retrato sobre fondo de marca con nombre y cargo.
async function profileImages() {
  const people = [
    { slug: "diego-salom", name: "Diego Salom", role: ["Cofundador de NODUS", "Consultor de UNCTAD en Argentina"], photo: "diego-salom-recorte.png" },
    { slug: "cristian-rigueiro", name: "Cristian Rigueiro", role: ["Cofundador de NODUS", "Gestión jurídica e institucional portuaria"], photo: "cristian-rigueiro-recorte.png" },
  ];
  for (const person of people) {
    if (!needs(`${person.slug}.jpg`)) continue;
    const portrait = await sharp(pub("brand", person.photo)).resize({ height: H - 116, width: 520, fit: "inside" }).toBuffer();
    const { width: pw = 0, height: ph = 0 } = await sharp(portrait).metadata();
    const overlay = svg(`
      <rect width="${W}" height="${H}" fill="${INK}"/>
      <rect x="0" y="0" width="${W}" height="96" fill="${PAPER}"/>
      <text x="80" y="290" font-family="${FONT}" font-size="62" font-weight="600" fill="${PAPER}">${escapeXml(person.name)}</text>
      <rect x="80" y="325" width="64" height="3" fill="${PAPER}"/>
      ${person.role.map((line, i) => `<text x="80" y="${385 + i * 44}" font-family="${FONT}" font-size="30" fill="#d8d7ee">${escapeXml(line)}</text>`).join("")}
      <text x="80" y="560" font-family="${MONO}" font-size="18" letter-spacing="1" fill="#b9b9c9">nodusconsulting.com.ar</text>`);
    const image = sharp({ create: { width: W, height: H, channels: 3, background: INK } }).composite([
      { input: overlay, left: 0, top: 0 },
      { input: await logo(200), left: 80, top: 14 },
      { input: portrait, left: W - pw - 60, top: H - ph },
    ]);
    await save(image, `${person.slug}.jpg`);
  }
}

// Ícono para iOS / accesos directos (180x180) a partir del ícono SVG del sitio.
async function appleIcon() {
  const target = path.join(root, "src", "app", "apple-icon.png");
  if (!force && existsSync(target)) return;
  await sharp(path.join(root, "src", "app", "icon.svg"), { density: 600 }).resize(180, 180).png().toFile(target);
  console.log("[og] src/app/apple-icon.png");
}

await defaultImage();
await blogImages();
await profileImages();
await appleIcon();
