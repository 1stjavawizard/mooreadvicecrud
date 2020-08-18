<?php 
session_start();?>
<?php 

date_default_timezone_set("Africa/Lagos");
 //$date = date('Y-m-d H:i:s');
	$dbhost = 'localhost';
     $dbuser = 'root';
     $dbpass = '';
     $mooreadvice = mysqli_connect($dbhost, $dbuser, $dbpass, 'mooreadvice');

     if(!$mooreadvice){
        die('Could not connect: ' . mysqli_error());
        mysqli_close($mooreadvice);
     }
   
   

     
     
?>