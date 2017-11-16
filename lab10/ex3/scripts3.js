function eq(){
  var number2 = document.getElementById("number1").value;
  var number1 = document.getElementById("number2").value;
  var final = Number(number2) + Number(number1);
  document.getElementById("output").innerHTML = final;
}
