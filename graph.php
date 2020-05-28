<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Получение данных для графика
$result = $conn->query("SELECT * FROM users");

// Close connection
$conn->close();

    $data = array();
    // Запись данных в массив
    for ($x = 0; $x < $result->num_rows; $x++) {
        $data[] = $result->fetch_assoc();
    }
    
    // Передаем данные обратно в chart_db.js
    echo json_encode($data); 
?>