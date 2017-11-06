$(document).ready(function(){

  $("#roll1").click(function(event){
   
    var myscorePlayer1=Math.floor(Math.random() * 6 + 1);
    $("#current-score-p1").text(myscorePlayer1);
     event.preventDefault();
  });
  $("#roll2").click(function(event){
   
    var myscorePlayer2=Math.floor(Math.random() * 6 + 1);
    $("#current-score-p2").text(myscorePlayer2);
     event.preventDefault();
  });


 
   });