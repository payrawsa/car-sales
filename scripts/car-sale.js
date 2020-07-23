const urlParams = new URLSearchParams(window.location.search);
const car = urlParams.get('car');

function setImage(){
    document.getElementById("car").src = "../images/" + car;
}
function sellCar(){
alert("your car is sold");
window.location.href="used-cars.html";
}

function cancel(){
window.location.href="main.html"
}