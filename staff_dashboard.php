<?php
session_start();

if ($_SESSION['role'] !== 'staff') {
    header('Location: login.php');
    exit();
}

echo "Welcome, staff " . $_SESSION['username'];
?>