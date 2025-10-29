const grade = document.querySelector("#grade");

const points = prompt("Enter a number of points");

let calculatedGrade;

if (points <= 39) {
  calculatedGrade = 0;
} else if (points <= 51) {
  calculatedGrade = 1;
} else if (points <= 63) {
  calculatedGrade = 2;
} else if (points <= 75) {
  calculatedGrade = 3;
} else if (points <= 87) {
  calculatedGrade = 4;
} else if (points <= 100) {
  calculatedGrade = 5;
}

grade.innerText = calculatedGrade;
