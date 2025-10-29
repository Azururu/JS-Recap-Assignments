const d = document.querySelector("#distance");

const x1 = parseFloat(prompt("Enter x of coordinate point 1"));
const y1 = parseFloat(prompt("Enter y of coordinate point 1"));
const x2 = parseFloat(prompt("Enter x of coordinate point 2"));
const y2 = parseFloat(prompt("Enter y of coordinate point 2"));


const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

const strDistance = distance.toString();

d.innerText = strDistance;