<?php
if(!empty($_GET['path'])){
    //DB details
    
    //Create connection and select DB
    $db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
    
    //Check connection
    if($db->connect_error){
       die("Connection failed: " . $db->connect_error);
    }
    
    $path = $_GET['path'];
    
    //Get image data from database
    $result = $db->query("SELECT * FROM images WHERE file_path = '$path'");
    
    
    while($row = $result->fetch_assoc()){
        $fileSize = $row['file_size'];
        $fileType = $row['file_type'];
        $filePath = $row['file_path'];
        $time = $row['uploaded'];
    }
    
    echo $fileSize . "<br>";
    echo $fileType . "<br>";
    echo $filePath . "<br>";
    echo $time . "<br>";
    echo "<img src='$filePath' alt='uploaded image'>";
}
?>