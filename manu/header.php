
<?php

function active($currect_page){
	  $url_array =  explode('/', $_SERVER['REQUEST_URI']) ;
	  $url = end($url_array);  
	  if($currect_page == $url){
		  echo 'active'; //class name in css 
	  } 
	}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>index</title>
         <link href="manu.css" rel="stylesheet"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
       
         <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    </head>

<body>
    <!---header-->
    <div class="header">
        <div class="menu">
            <ul>
                <li><a href=""><i class="fa-solid fa-bars"></i></a></li>

                <li><a href="">Dashboard</a></li>

                <li><a href=""><i class="fa-solid fa-user icon"></i> Manthan</a></li>
            </ul>
        </div>
        </div>
        <!--- end header-->

        <!--- sidebar--->
   
    <div class="container">
        

        <div class="sidebar">
            <ul>
                <li><a><i class="fa-solid fa-house-chimney icon"></i> Dashboard</a></li>
                <br>
                <li><a href="contacts.php" <?php active('about.php')?>><i class="fa-solid fa-address-book icon"></i> Contacts</a></li>
                <br>
                <li><a><i class="fa-solid fa-user icon"></i> Leads</a></li>
                <br>
                <li><a><i class="fa fa-tasks icon" aria-hidden="true"></i> Tasks</a></li>
                <br>
                <li><a><i class="fa-solid fa-question icon"></i> FAQ</a></li>
                <br>
                <li><a><i class="fa fa-sign-out icon" aria-hidden="true"></i> Logout</a></li>
            </ul>
        </div>
        </div>
        <!---sidebar-->
