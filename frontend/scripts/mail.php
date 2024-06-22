<?php
require_once(__DIR__ . '/vendor/autoload.php');

use Dotenv\Dotenv;
use GuzzleHttp\Client;
use Brevo\Client\Configuration;
use Brevo\Client\Api\TransactionalEmailsApi;
use Brevo\Client\Model\SendSmtpEmail;

// Load environment variables from .env file
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Configure API key authorization: api-key
$config = Configuration::getDefaultConfiguration()->setApiKey('api-key', $_ENV['API_KEY']);
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config->setApiKeyPrefix('api-key', 'Bearer');

$apiInstance = new TransactionalEmailsApi(
    new Client(),
    $config
);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    // Check that the data is valid
    if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Construct the email payload
    $sendSmtpEmail = new SendSmtpEmail([
        'subject' => $subject,
        'sender' => ['name' => $name, 'email' => $email],
        'replyTo' => ['name' => $name, 'email' => $email],
        'to' => [[ 'name' => $_ENV['RECIPIENT_NAME'], 'email' => $_ENV['RECIPIENT_EMAIL']]],
        'htmlContent' => "<html><body>
                          <p><strong>Name:</strong> $name</p>
                          <p><strong>Email:</strong> $email</p>
                          <p><strong>Phone:</strong> $phone</p>
                          <p><strong>Message:</strong></p>
                          <p>$message</p>
                          </body></html>"
    ]);

    try {
        // Send the email via Brevo API
        $result = $apiInstance->sendTransacEmail($sendSmtpEmail);
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } catch (Exception $e) {
        http_response_code(500);
        echo 'There was a problem with your submission. Please try again.', PHP_EOL;
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission. Please try again.";
}
?>
