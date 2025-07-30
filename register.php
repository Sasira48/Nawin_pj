<?php
include('config.php'); // Database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hashing the password
    $role = $_POST['role'];

    // Inserting data into the database
    $query = "INSERT INTO users (username, password, role) VALUES ('$username', '$password', '$role')";
   
    if (mysqli_query($conn, $query)) {
        echo "User registered successfully.";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>

<form method="POST" action="register.php">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <select name="role" required>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="staff">Staff</option>
        <option value="customer">Customer</option>
    </select>
    <button type="submit">Register</button>
</form>