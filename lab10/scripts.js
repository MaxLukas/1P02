var start = new Date();
var startMilli = start.getTime();

function stopTime(){
  var end = new Date();
  var endMilli = end.getTime();
  var timeDif = endMilli - startMilli;
  var seconds = timeDif/1000;
  window.alert("You have been here for " + seconds + " seconds");
}
