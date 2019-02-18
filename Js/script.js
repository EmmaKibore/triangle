

function checkTriangle() {

  var sideA = parseInt(document.getElementById("sidea").value);
  var sideB = parseInt(document.getElementById("sideb").value);
  var sideC = parseInt(document.getElementById("sidec").value);
  alert("values -- " + sideA);
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
}
