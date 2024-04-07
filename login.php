<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Example: Hashing the password using bcrypt
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Here you would typically validate the credentials against a database
    // For simplicity, let's just output the hashed password
    echo "Username: $username<br>";
    echo "Hashed Password: $hashedPassword";
}
?>