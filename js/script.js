$(document).ready(function(){

  //game logic :1.constructor

  function Gamer(name){
    this.name =name;
    this.current_roll=0;
    this.totalscore =0;

  }

  var scores=[]; 

  Gamer.prototype.roll=function(){
    this.current_roll=Math.floor(Math.random() * 6 + 1);
    scores.push(this.current_roll);

  }

  Gamer.prototype.add_all_score=function(){
    var sum =0;
    scores.forEach(function(score){
      sum=sum+score;

      
    });
    this.totalscore=sum;

  }



  $("#roll1").click(function(event){

    var playerone = new Gamer("abdul");
      playerone.roll();
      playerone.add_all_score();

              

      if (playerone.current_roll ==1 ) {

 
                  scores =[];
              playerone.current_roll=0;
              playerone.totalscore=0;
             alert("ach !! you rolled 1");
          $("#current-score-p1").text(playerone.current_roll);
          $("#total-score-p1").text(playerone.totalscore);   
      }else if(playerone.current_roll==6){ 



                  scores =[];
        playerone.current_roll=0;
        playerone.totalscore=0;
         alert("ach!! you rolled 6."); 


                   $("#current-score-p1").text(playerone.current_roll);
          $("#total-score-p1").text(playerone.totalscore);   
      }else {
        
          $("#current-score-p1").text(playerone.current_roll);
          $("#total-score-p1").text(playerone.totalscore);        
      }



 event.preventDefault();
  });
  $("#roll2").click(function(event){
   
   //starts here

    var playertwo = new Gamer("abdul");
      playertwo.roll();
      playertwo.add_all_score();

                

      if (playertwo.current_roll ==1 ) {

 
                  scores =[];
              playertwo.current_roll=0;
              playertwo.totalscore=0;
             alert("ach!!! you rolled 1.");
          $("#current-score-p2").text(playertwo.current_roll);
          $("#total-score-p2").text(playertwo.totalscore);   
      }else if(playertwo.current_roll==6){ 



                  scores =[];
        playertwo.current_roll=0;
        playertwo.totalscore=0;
         alert("ach1111 you rolled 6"); 


                   $("#current-score-p2").text(playertwo.current_roll);
          $("#total-score-p2").text(playertwo.totalscore);   
      }else {
        
          $("#current-score-p2").text(playertwo.current_roll);
          $("#total-score-p2").text(playertwo.totalscore);        
      }
//ends here
     event.preventDefault();
  });


 
   });