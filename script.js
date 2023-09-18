"use strict";
/*
formular for area of a circle, A = π * (r * r) or A = π * (r **2)
Circumference of a circle, C = 2 * π * r
Surface Area of Cube, A = 6 * (s*s) or A = 6 * (s**2)
Volume of a cube, V = s**3 or V = s**3 
*/

//formular for area of a circle, A = π * (r * r) or A = π * (r **2)

const circleRadius = Number(
  prompt("To find the Area, A of a circle, enter the radius, r")
);
const areaOfCircle = 3.14 * circleRadius ** 2;
console.log(`Area of a Circle with radius ${circleRadius} is ${areaOfCircle}`);

//Circumference of a circle, C = 2 * π * r

const circleCircumference = 2 * 3.14 * circleRadius;
console.log(
  `Circumference of a Circle with radius ${areaOfCircle} is ${circleCircumference}`
);

//Circumference of a circle, C = 2 * π * r

const circleCircumference = 2 * 3.14 * circleRadius;
console.log(
  `Circumference of a Circle with radius ${areaOfCircle} is ${circleCircumference}`
);
