<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

ini_set('post_max_size', '40M');
ini_set('upload_max_filesize', '40M');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Méthode non autorisée']);
    exit;
}

$resendApiKey = getenv('RESEND_API_KEY') ?: 're_QDFYYM99_K3t4Cr1LMKD5S7DTXr8BmkT4';
$fromEmail = 'info@laglobalcorporate.ch';
$adminEmail = 'info@laglobalcorporate.ch'; 

$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'JSON invalide']);
    exit;
}

$attachments = [];
if (!empty($data['attachment']) && is_array($data['attachment'])) {
    if (!empty($data['attachment']['content'])) {
        $attachments[] = [
            'content' => $data['attachment']['content'],
            'filename' => $data['attachment']['filename']
        ];
    }
}

$errors = [];

if (empty($data['name']) || strlen($data['name']) < 2) $errors[] = "Le nom doit contenir au moins 2 caractères";
if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) $errors[] = "Email invalide";
if (!empty($data['phone']) && strlen($data['phone']) < 10 && $data['phone'] !== '+41 ') $errors[] = "Téléphone invalide";
if (empty($data['service'])) $errors[] = "Le service est obligatoire";
if (empty($data['details']) || strlen($data['details']) < 10) $errors[] = "Le message doit contenir au moins 10 caractères";

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'error' => 'Données du formulaire invalides',
        'details' => $errors
    ]);
    exit;
}

function sendResendEmail($apiKey, $payload) {
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    return ['code' => $httpCode, 'body' => json_decode($response, true)];
}

function buildCompanyEmailHtml($data) {
    $name = htmlspecialchars($data['name'] ?? '');
    $company = htmlspecialchars($data['company'] ?? 'Non spécifiée');
    $email = htmlspecialchars($data['email'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? 'Non spécifié');
    $service = htmlspecialchars($data['service'] ?? '');
    $messageSafe = nl2br(htmlspecialchars($data['details'] ?? ''));
    
    return <<<HTML
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle Demande de Contact - Confœderatio Logistica</title>
    </head>
    <body style="background-color: #ffffff; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em; margin: 0 auto;">
        <tbody>
          <tr>
            <td>
              <div style="border: 1px solid #eaeaea; border-radius: 4px; margin: 40px auto; padding: 20px; width: 465px; max-width: 100%;">
                <h1 style="color: #000000; font-size: 24px; font-weight: normal; text-align: center; margin: 30px 0; padding: 0;">
                  Nouvelle Demande de Contact
                </h1>
                <p style="font-size: 14px; line-height: 24px; margin: 16px 0; color: #000000;">
                  <strong>Nom :</strong> {$name}
                </p>
                <p style="font-size: 14px; line-height: 24px; margin: 16px 0; color: #000000;">
                  <strong>Entreprise :</strong> {$company}
                </p>
                <p style="font-size: 14px; line-height: 24px; margin: 16px 0; color: #000000;">
                  <strong>Email :</strong> <a href="mailto:{$email}" style="color: #067df7; text-decoration: none;">{$email}</a>
                </p>
                <p style="font-size: 14px; line-height: 24px; margin: 16px 0; color: #000000;">
                  <strong>Téléphone :</strong> <a href="tel:{$phone}" style="color: #067df7; text-decoration: none;">{$phone}</a>
                </p>
                <p style="font-size: 14px; line-height: 24px; margin: 16px 0; color: #000000;">
                  <strong>Service d'Intérêt :</strong> {$service}
                </p>
                <hr style="width: 100%; border: none; border-top: 1px solid #eaeaea; margin: 26px 0;" />
                <p style="font-size: 14px; line-height: 24px; margin: 16px 0 8px; color: #000000;">
                  <strong>Message :</strong>
                </p>
                <p style="font-size: 14px; line-height: 24px; margin: 0; color: #000000; white-space: pre-wrap;">
                  {$messageSafe}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>
HTML;
}

function buildClientEmailHtml($data) {
    $name = htmlspecialchars($data['name']);
    $service = htmlspecialchars($data['service']);
    $dateNow = date('d/m/Y');
    
    return <<<HTML
    <div style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #111827; background-color: #f3f4f6; padding: 24px;">
      <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb;">
        <div style="background: linear-gradient(135deg, #0F172A, #1e293b); padding: 28px 32px;">
          <h1 style="color: #f9fafb; margin: 0; font-size: 24px;">Merci pour votre demande, {$name} !</h1>
        </div>
        <div style="padding: 24px;">
          <p>Bonjour {$name},</p>
          <p>Nous avons bien reçu votre demande de contact.</p>
          <div style="border-radius: 12px; border: 1px solid #e5e7eb; padding: 16px; background: #f9fafb; margin-bottom: 18px;">
            <p style="text-transform: uppercase; color: #6b7280; font-size: 12px;">Récapitulatif</p>
            <p><strong>Service:</strong> {$service}</p>
            <p><strong>Date:</strong> {$dateNow}</p>
          </div>
          <div style="background: #fef2f2; padding: 14px; border-radius: 12px; color: #b91c1c;">
             ✓ Notre équipe vous répondra dans les plus brefs délais.
          </div>
          <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
             <p><strong>La Global Corporate | Confœderatio Logistica</strong><br>Av. des Communes-Réunies 43<br>1212 Grand-Lancy, Suisse<br>+41 22 535 63 33<br>info@laglobalcorporate.ch</p>
          </div>
        </div>
      </div>
    </div>
HTML;
}

try {
    $htmlCompany = buildCompanyEmailHtml($data);
    
    $payloadCompany = [
        'from' => $fromEmail,
        'to' => [$adminEmail],
        'subject' => "Nouveau contact de {$data['name']} - Confœderatio Logistica" . (count($attachments) > 0 ? " 📎" : ""),
        'html' => $htmlCompany,
        'reply_to' => $data['email']
    ];

    if (!empty($attachments)) {
        $payloadCompany['attachments'] = $attachments;
    }

    $respCompany = sendResendEmail($resendApiKey, $payloadCompany);

    $htmlClient = buildClientEmailHtml($data);
    $payloadClient = [
        'from' => $fromEmail,
        'to' => [$data['email']],
        'subject' => "Confirmation de votre demande - Confœderatio Logistica",
        'html' => $htmlClient
    ];
    $respClient = sendResendEmail($resendApiKey, $payloadClient);

    if ($respCompany['code'] >= 200 && $respCompany['code'] < 300) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'companyEmailId' => $respCompany['body']['id'] ?? null,
            'clientEmailId' => $respClient['body']['id'] ?? null,
            'message' => 'Demande envoyée avec succès !'
        ]);
    } else {
        throw new Exception("Erro Resend (Company): " . json_encode($respCompany['body']));
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Échec de l’envoi.', 'details' => $e->getMessage()]);
}
?>
