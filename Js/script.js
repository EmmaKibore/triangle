

function checkTriangle() {
  var sideA = parseInt(document.getElementById("sidea").value);
  var sideB = parseInt(document.getElementById("sideb").value);
  var sideC = parseInt(document.getElementById("sidec").value);
  console.log(sideA);
  console.log(sideB);
  console.log(sidec);
  if (sideA + sideB <=sideC && sideB + sideC <= sideA && sideC + sideA <= sideB) {
  alert("Cannot form a triangle");
  }
  if(sideA === sideB && sideB === sideC && sideC === sideA) {
  alert("Equilateral triangle");
  }
  else if(sideA === sideB && sideB!==sideC || sideB === sideC&&sideB!==sideA || sideC === sideA&&sideB!==sideC) {
  alert("Isosceles triangle");
  }
  else if(sideA !== sideB && sideB !== sideC && sideC !== sideA && sideA+sideB>sideC&&sideB+sideC>sideA&&sideA+sideC>sideB) {
  alert("Scalene triangle");
} else {
  alert("Cannot form a triangle")
}
}
