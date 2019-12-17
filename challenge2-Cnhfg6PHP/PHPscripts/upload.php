<?php
if(isset($_POST["submit"])){
        $image = $_FILES['image']['tmp_name'];
        $target = "uploads/" . $_FILES['image']['name'];
        $result = move_uploaded_file($image, $target);

        /*
         * Insert image data into database
         */
        
        //DB details
        
        //Create connection and select DB
        $db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
        
        // Check connection
        if($db->connect_error){
            die("Connection failed: " . $db->connect_error);
        }
        else {
            echo("Connection successful <br>");
        }
        
        $dataTime = date("Y-m-d H:i:s");
        
        $fileType = $_FILES["image"]["type"]; 
        $fileSize = $_FILES["image"]["size"];
    
        echo $fileType . "<br>";
        echo $fileSize . "<br>";
        
        //Insert image content into database
        $insert = $db->query("INSERT into images (image, file_size, file_type, file_path, uploaded) VALUES ('$image', '$fileSize', '$fileType', '$target', '$dataTime')");
    
//        $insert = $db->query("INSERT into images (image, file_size, file_type, uploaded) VALUES ('$image', '$fileSize', '$fileType', '$dataTime')");
    
        if($insert){
            echo "File uploaded successfully.";
            
            header("Location: http://www.clairehough.com/images/view.php?path=$target");
        }else{
            echo "File upload failed, please try again.";
        }
}
?>