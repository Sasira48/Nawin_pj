<?php
session_start();
include('config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE username = '$username'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
       
        // Verify the password
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];

            // Redirect based on role
            if ($user['role'] == 'admin') {
                header('Location: admin_dashboard.php');
                } elseif ($user['role'] == 'staff') {
                header('Location: staff_dashboard.php');
                } elseif ($user['role'] == 'customer') {
                header('Location: customer_dashboard.php');
                } else {
                header('Location: user_dashboard.php');
                }
        } else {
            echo "Invalid credentials.";
        }
    } else {
        echo "ไม่มีบัญชีนี้ในระบบ.";
    }
}
?>

<form method="POST" action="login.php">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Login</button>
</form>