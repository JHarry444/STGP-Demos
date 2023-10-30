

document.getElementById("username").addEventListener("change", function(event) {
    if (event.target.value.length < 3) alert("Too short!");
});