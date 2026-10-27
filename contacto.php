<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$name = trim((string) ($_POST['name'] ?? ''));
$organization = trim((string) ($_POST['organization'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$topic = trim((string) ($_POST['topic'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$honeypot = trim((string) ($_POST['website'] ?? ''));

if ($honeypot !== '') {
    echo json_encode(['success' => true]);
    exit;
}

if ($name === '' || $organization === '' || $topic === '' || $message === '' ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid form data']);
    exit;
}

// Los datos que van a encabezados no pueden contener saltos de línea.
$oneLine = fn (string $v) => trim(preg_replace('/[\r\n]+/', ' ', $v));
$name = mb_substr($oneLine($name), 0, 120);
$organization = mb_substr($oneLine($organization), 0, 160);
$phone = mb_substr($oneLine($phone), 0, 50);
$topic = mb_substr($oneLine($topic), 0, 120);
$message = mb_substr($message, 0, 5000);

$recipient = 'info@nodusconsulting.com.ar';
$sender = 'web@nodusconsulting.com.ar';
$mailSubject = '=?UTF-8?B?' . base64_encode('Nueva consulta desde NODUS: ' . $topic) . '?=';
$mailBody = implode("\n", [
    'Nueva consulta recibida desde el sitio web de NODUS.',
    '',
    'Nombre: ' . $name,
    'Organización: ' . $organization,
    'Email: ' . $email,
    'Teléfono: ' . ($phone !== '' ? $phone : 'No informado'),
    'Tema: ' . $topic,
    '',
    'Mensaje:',
    $message,
]);
$headers = implode("\r\n", [
    'From: NODUS <' . $sender . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
]);

$sent = mail($recipient, $mailSubject, $mailBody, $headers);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail could not be sent']);
    exit;
}

echo json_encode(['success' => true]);
