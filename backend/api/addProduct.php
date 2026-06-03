<?php

include("../dbconn.php");

$db = new DBConnection();
$conn = $db->connect();

$name = "Laptop";
$description = "Gaming laptop";
$price = 1200;
$stock = 5;

$sql = "INSERT INTO products (name, description, price, stock)
        VALUES ('$name', '$description', $price, $stock)";

$conn->query($sql);

echo "Product added";