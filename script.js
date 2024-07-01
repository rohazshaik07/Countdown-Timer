$(document).ready(function(){
    var countS = 15;
    $("#countdown").html(countS);
    var pos = "Timer";
    var countLama;
    var posLama;
    var count;
    $("#stats").html(pos);
    var clock = $(".timer").FlipClock(0, {
      countdown: true,
      clockFace: 'MinuteCounter',
      autoStart: false,
      callbacks: {
        interval: function(){
          if (clock.getTime() == 0){
            clock.stop();
            pos = "count over";
            $("#stats").html(pos);
          }        
        }
      }
    });
  
    $("#sessInc").on("click", function(){
      if ($("#countdown").html() > 0){
        countS = parseInt($("#countdown").html());
        countS+=1;
        $("#countdown").html(countS);
      }
    });
    $("#sessDec").on("click", function(){
      if ($("#countdown").html() > 1){
        countS = parseInt($("#countdown").html());
        countS-=1;
        $("#countdown").html(countS);
      }
    });
  
    $("#start").on("click", function(){
      if (count != countS || clock.getTime() == 0){
        clock.setTime(countS * 60);
        pos = "Lets Go!";
        $("#stats").html(pos);
      } else {
        pos = posLama;
        $("#stats").html(pos);
      }
      count = countS;    
      clock.start();    
    });
  
    $("#stop").on("click", function(){
      clock.stop();
      countLama = clock.getTime();
      posLama = $("#stats").html();
    });
  
    $("#clear").on("click", function(){
      clock.stop();
      pos = "Timer";
      $("#stats").html(pos);
      clock.setTime(0);
    });
  });
  