<?php
require "db-config.php";



	if(isset($_GET['action']) && $_GET['action']=='update_users'){	
		 $username = $_POST["username"];
		$id = $_POST["id"];
 
     $rep = mysqli_query($mooreadvice, "UPDATE `users` SET `username`='$username' WHERE `id`='$id'");
			
		
		 echo $rep;
		
	}
	
	
	if(isset($_GET['action']) && $_GET['action']=='insert_users'){
	    $username = $_POST["username"];
		$password = $_POST["password"];

		$rep = mysqli_query($mooreadvice, "INSERT INTO `users`(`username`, `password`) VALUES ('$username','$password') ");

		 echo $rep;
	
}

if(isset($_GET['action']) && $_GET['action']=='delete_users'){
     
      
      //activate_album_please
      
		$id=$_POST['id'];
	
  
       $rep = mysqli_query($mooreadvice, "DELETE FROM `users` WHERE id='$id'");
		 echo $rep;

	}


if(isset($_GET['action']) && $_GET['action']=='get_users'){
     
      
     
	
  
        mysqli_query($mooreadvice, "SELECT `id`, `username`, `password`, `date_inserted` FROM `users`");
		

	}

		
	
	
mysqli_close($mooreadvice);
?>