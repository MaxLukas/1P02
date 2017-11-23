function numThing(){
  var userNum = document.getElementById("userNum").value;

  for(i=0;i<=userNum;i++){
    document.getElementById("para").innerHTML += "<br />" + i;
  }
}
