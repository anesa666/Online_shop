<?php

include("../dbconn.php");

$db = new DBConnection();
$conn = $db->connect();

$id = $_POST['id'] ?? null;

if (!$id) {
    die(json_encode(["error" => "Missing id"]));
}

$sql = "DELETE FROM products WHERE id=$id";

$conn->query($sql);

echo json_encode(["message" => "Product deleted"]);