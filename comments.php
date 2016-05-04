<html>
<head>
   <meta charset="utf-8"/>
   <title>HAPPY//GLYPH</title>
   <link rel='shortcut icon' type='image/x-icon' href='img/favicon.ico' />
     <link rel="stylesheet" type="text/css" href="css/styles.css"/>
	 <link href ="css/bootstrap.min.css" type="text/css" rel = "stylesheet">
				<link href ="css/custom.css" type="text/css" rel = "stylesheet">
	 <meta name="viewport" content="width=device-width, inital-scale=1.0"/>
	 <link href='https://fonts.googleapis.com/css?family=Nunito:400,700|Josefin+Sans:400,700' rel='stylesheet' type='text/css'>    
</head> 

<div class = "navbar navbar-default navbar-fixed-top navbar-custom">
		   <div class = "containter">
		   
		   
		   <button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navHeaderCollapse">
		     <img src = "img/heart.png">
		   </button>
		   
		   <div class = "collapse navbar-collapse navHeaderCollapse">
		
		 <ul class = "nav navbar-nav navbar-right">
		 
			<li><a href = "index.php">HEY BUDDY</a></li>
			<li><a href = "comments.php">CONTRIBUTE</a></li>
			<li><a href = "#"></a></li>
			<ul>
		 
		   </div>
		</div>
		</div>
		 
		 
<body>
		
<center><img class="title" src="img/happyglyph.png"></center>		

<center><img class="title" src="img/messageheart.png">
     <div id="respond">
<center><h1 class="share">SHARE THE LOVE!</h1>
  <center><h3>Feel free to leave a message!<br>
  (Keep it Nice and Clean! Strictly no bad vibes!)</h3>

    <form method='POST' action="">
  <input type="text" name="name" id="username" placeholder="Put down the topic header here e.g. 'Life' or 'Love'">
  <br><br>
  <textarea cols="35" rows="5"  id="comment" name="mes" placeholder="Make someone's day today, right here..."></textarea>
  <br>
  <input type="submit" name="post" value="Post">
  </form>
</div>

<center><footer><h3>Blanecorp &copy; <?php echo date("Y"); ?></h3></footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="js/bootstrap.js"></script>
	
	
</body>
</html>

<?php
if (isset($_POST['post'])) {
 $name = $_POST["name"]; 
 $text = $_POST["mes"]; 
 $post = $_POST["post"]; 


 if($post){ 
  #WRITE DOWN COMMENTS# 
  $write = fopen("com.txt", "a+"); 
  fwrite($write, "<br><b>$name<h3>$text</b><br><br>"); 
  fclose($write);
 
  

  #DISPLAY COMMENTS# 
  $read = fopen("com.txt", "r+t"); 
  echo "<h2>Messages</h2>"; 
  while(!feof($read)){
   echo fread($read, 1024); 
  } 
  header('location: comments.php');
  fclose($read); 
 } 
}
 else { 
  #DISPLAY COMMENTS#
  $read = fopen("com.txt", "r+t"); echo "<h2>Messages</h2>"; 
  while(!feof($read)){ 
   echo fread($read, 1024); 
  }
  fclose($read); 
 } 
 

?>﻿








