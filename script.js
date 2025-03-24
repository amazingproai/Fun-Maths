function calculateCircleArea() {
    let radius = document.getElementById("radius").value;
    let area = Math.PI * Math.pow(radius, 2);
    document.getElementById("circleResult").innerText = area.toFixed(2);
}

function calculateHypotenuse() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("pythagorasResult").innerText = c.toFixed(2);
}
