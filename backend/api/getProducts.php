<?php
include("../dbconn.php");

$db = new DBConnection();
$conn = $db->connect();

$sql = "SELECT * FROM products";
$result = $conn->query($sql);

$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);

?>