<?php

new mysqli("127.0.0.1", "root", "");
global $mysqli;
mysql_select_db("comments");

$name = $_POST["name"];
$comment = $_POST["comment"];

$comment_length = strlen($comment);

if ($comment_length > 1000)
{
	header("location: comments.php?error=1");
}
else
{
	$mysqli->query("INSERT INTO comments VALUES('','$name','$comment')");
	header("location: comments.php");
}


?>