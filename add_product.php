<?php
include('config.php'); // Database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $productname = $_POST['productname'];
    $price = $_POST['price']; // Hashing the password
    $category = $_POST['category'];

    // Inserting data into the database
    $query = "INSERT INTO products (productname, price, category) VALUES ('$productname', '$price', '$category')";
   
    if (mysqli_query($conn, $query)) {
        echo "User registered successfully.";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>

<form method="POST" action="add_product.php">
    <input type="text" name="productname" placeholder="ชื่อสินค้า" required>
    <input type="number" name="price" placeholder="ราคา" required>
    <select name="category" required>
        <option value="food">Food</option>
        <option value="drink">Drink</option>
        <option value="desserts">Desserts</option>
    </select>
    <button type="submit">เพิ่มสินค้า</button>
</form>