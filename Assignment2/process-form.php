<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>LightBulb™</title>
		<link rel="stylesheet" href="lightbulb.css" />
	</head>
	<body>
		<h1>LightBulb™</h1>
		<h2>Shopping Cart Updated</h2>
<?php
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	echo('<p>Thank You, '.$fname.'&nbsp;'.$lname.' &mdash; your settings have been saved.</p>');
	?>
	</body>
</html>
