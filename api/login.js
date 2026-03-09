<!DOCTYPE html>
<html>
<head>
<title>Dashboard</title>
</head>

<body>

<h1>Dashboard</h1>

<input id="titleInput" placeholder="Homepage Title"><br><br>
<input id="bgInput" placeholder="Background Image URL"><br><br>

<button onclick="save()">Save</button>

<script>

function save(){

let t = document.getElementById("titleInput").value
let bg = document.getElementById("bgInput").value

localStorage.setItem("title",t)
localStorage.setItem("bg",bg)

alert("Saved!")
}

</script>

</body>
</html>