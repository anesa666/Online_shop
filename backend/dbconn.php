<?php

class DBConnection {
    private $host = 'localhost';
    private $db = 'online_shop';
    private $user = 'root';
    private $password = 'Password';

    public function connect() {
        $conn = new mysqli(
            $this->host,
            $this->user,
            $this->password,
            $this->db
        );

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        return $conn;
    }
}