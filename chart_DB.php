<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Chart (from Data Base)</title>
<!-- Load c3.css -->
<link href="c3.css" rel="stylesheet">

<!-- Load d3.js and c3.js -->
<script src="d3.v5.min.js"></script>
<script src="c3.min.js"></script>

<!-- Style -->
<script src="jquery.min.js"></script>
<link rel="stylesheet" href="bootstrap.min.css">
<script src="bootstrap.min.js"></script>
</head>
<body>

<div class="container p-3 mt-5 bg-light border border-info">		
	<div id="chart"></div>
</div>

<span id="text"></span>
<div class="container p-3 mt-5 bg-light border border-warning">		
	<div id="chart2"></div>
</div>

<div class="container p-3 mt-5 bg-light border border-success">		
	<div id="chart3"></div>
</div>


<script src="chart_db.js"></script>
</body>
</html>