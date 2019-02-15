//user interface
var sideA = parseInt(prompt("Enter first side"));
var sideB = parseInt(prompt("Enter second side"));
var sideC = parseInt(prompt("Enter third side"));
//business logic
if (sideA + sideB <=sideC || sideB + sideC <= sideA || sideC + sideA <= sideB) {
alert("Cannot form a triangle");
}
if(sideA == sideB && sideB == sideC && sideC == sideA) {
alert("Equilateral triangle");
}
else if(sideA == sideB || SideB == sideC || sideC == sideA) {
alert("Isosceles triangle");
}
else if(sideA != sideB && sideB != sideC && sideC != sideA) {
alert("Scalene triangle");
}
