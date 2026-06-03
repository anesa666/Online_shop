<?php

include("../dbconn.php");

$db = new DBConnection();
$conn = $db->connect();

$id = $_POST['id'] ?? null;
$name = $_POST['name'] ?? null;
$price = $_POST['price'] ?? null;

if (!$id || !$name || !$price) {
    die("Missing data");
}

$sql = "UPDATE products 
        SET name='$name', price='$price'
        WHERE id=$id";

$conn->query($sql);

echo json_encode(["message" => "Updated"]);