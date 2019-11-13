var profilepic = document.getElementById("profilepic");
var filenames = ["icon.jpg", "IMG_20171220_211814.jpg", "IMG_20171220_211819.jpg"];
profilepic.src = "images/" + filenames[Math.floor(Math.random() * 3)];