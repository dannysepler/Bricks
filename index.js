      var context;
      var timer;
      
      var left = 170; // player vars
      var right = 250;

      
      var x = 10; // ball vars
      var y = 10;
      var dx = 3;
      var dy = 3;
      
      var brick1 = true; // brick1;
      var brick1x1 = 100;
      var brick1x2 = 170;
      var brick1y1 = 70;
      var brick1y2 = 100;
      
      var brick2 = true; // brick2
      var brick2x1 = 200;
      var brick2x2 = 270;
      var brick2y1 = 70;
      var brick2y2 = 100;
      
      var brick3 = true; // brick3
      var brick3x1 = 300;
      var brick3x2 = 370;
      var brick3y1 = 70;
      var brick3y2 = 100;
      
      function init() {
        context = document.getElementById('canvas').getContext('2d');
        
        context.beginPath();
        context.moveTo(0,0); // background walls define
        context.lineTo(0,500);
        context.lineTo(500,500);
        context.lineTo(500,0);
        context.lineTo(0,0);
        context.stroke();
        context.closePath();
       
        
        
        // defining brick(s)
        //drawBrick();
        
        /*context.beginPath();
        context.lineWidth = 4;
        context.moveTo(200,400); // player define
        context.lineTo(280,400);
        context.strokeStyle="rgba(35, 70, 237, .8)";
        context.stroke();
        context.closePath();*/

        //document.addEventListener('click',function() (
        //timer = true;
        //}, false);
        
        context.lineWidth=2;
        context.strokeStyle="rgba(35, 70, 237, .8)";
        context.font="28pt sans-serif";
        context.fillText("Brickbreaker", 140, 220);
        context.strokeText("Brickbreaker", 140, 220);
        
        context.font="14pt sans-serif";
        context.fillText("(Click to play)", 180,330);
        context.closePath();
      }
      
      function start() {
        brick1 = true;
        brick2 = true;
        brick3 = true;
        
        context.beginPath();
        context.lineWidth = 4;
        context.moveTo(200,400); // player define
        context.lineTo(280,400);
        context.strokeStyle="rgba(35, 70, 237, .8)";
        context.stroke();
        context.closePath();
        
        //GET IT STARTED!
        timer = setInterval('ballMove()', 10);
      }
      
      function drawBrick() {
        context.beginPath();
        if (brick1) {
          context.rect(100, 70, 70, 30);
        }
        if (brick2) {
          context.rect(200,70,70,30);
        }
        if (brick3) {
          context.rect(300,70,70,30);
        }
        context.fillStyle = 'blue';
        context.fill();
      }

      function ballMove() {
        
        if (brick1 || brick2 || brick3) {
          context.clearRect(1,1,498,398);
          drawBrick();
          context.beginPath();
          context.arc(x,y,3,0,Math.PI*2, true);
          context.closePath();
          context.fillStyle = 'red';
          context.fill();
          x += dx;
          y += dy;
        
          // hitting the paddle
          if (y > 395) {
            if (left < x && x < right) {
              if ((x < ((left + right)/2)) && (dx > 0)) {
                dy = -dy;
                dx = -dx;
              }
              else if ((x > ((left + right)/2)) && (dx < 0)) {
                dy = -dy;
                dx = -dx;
              }
              else {
                dy = -dy;
              }
            }
              
              //losing
            else {
              clearInterval(timer);
              
              context = document.getElementById("canvas").getContext('2d');
              context.beginPath();
              context.clearRect(1,1,498,498);
              context.lineWidth=2;
              context.strokeStyle="rgba(35, 70, 237, .8)";
              context.font="28pt sans-serif";
              context.fillText("Sorry, you lost...", 120, 220);
              context.strokeText("Sorry, you lost...", 120, 220);
        
              context.font="14pt sans-serif";
              context.fillStyle='black';
              context.fillText("(Click to play again)", 160,330);
              context.fillStyle='red';
              context.closePath();
              
              x = 10;
              y = 10;
              
              
              //clearInterval(timer);
              //alert("You lose!");
            }
          }
          if (y < 10) {
            dy = -dy;
          }
          if (x > 490 || x < 10) {
            dx = -dx;
          }
        
          // hitting bricks
          if (brick1) {
            if (((y > 70) && (y < 100)) && ((x < 170) && (x > 100))) {
              if ((y > 95) || (y < 75)) {
                brick1 = false;
                dy = -dy;
              }
              else {
                brick1 = false;
                dx = -dx;
              }
            } 
          }
          if (brick2) {
            if (((y > 70) && (y < 100)) && ((x < 270) && (x > 200))) {
              if ((y > 95) || (y < 75)) {
                dy = -dy;
                brick2 = false;
              }
              else {
                dx = -dx;
                brick2 = false;
              }
            }
          }
          
          
          if (brick3) {
            if (((y > 70) && (y < 100)) && ((x < 370) && (x > 300))) {
              if ((y > 95) || (y < 75)) {
                dy = -dy;
                brick3 = false;
              }
              else {
                dx = -dx;
                brick3 = false;
              }
            }
          }
        }
        
        else {
          clearInterval(timer);
          
              context = document.getElementById("canvas").getContext('2d');
              context.beginPath();
              context.clearRect(1,1,498,498);
              context.lineWidth=2;
              context.strokeStyle="rgba(35, 70, 237, .8)";
              context.font="28pt sans-serif";
              context.fillText("Congrats, you won!", 90, 220);
              context.strokeText("Congrats, you won!", 90, 220);
        
              context.font="14pt sans-serif";
              context.fillStyle='black';
              context.fillText("(Click to play again)", 160,330);
              context.fillStyle='red';
              context.closePath();
              
              x = 10;
              y = 10;        
        }
        
        //hitting the bar at different angles
        
        
      }
      
      function pause() {
        //if (timer) {
          clearInterval(timer);
          //timer = false;
        //}
        //else {
        //setInterval('ballMove()', 10);
          //timer = true;
        //}
      }
      
      
      document.addEventListener("keydown", keyDownTextField, false);

      function keyDownTextField(e) {
        var keyCode = e.keyCode;
        if(keyCode==37) {
          var context = document.getElementById('canvas').getContext('2d');
          if (left < 20) {
          }
          else {
            left = left - 30;
            right = right - 30;
            context.beginPath();
            context.clearRect(1,398,498,4);
            context.moveTo(left,400);
            context.lineWidth = 4;
            context.lineTo(right,400);
            context.stroke();
          }
        }
        else if (keyCode==39) {
          var context = document.getElementById('canvas').getContext('2d');
          if (right > 487) {
          }
          else {
            left = left + 30;
            right = right + 30;
            context.beginPath();
            context.clearRect(1, 398, 498, 4);
            context.moveTo(left, 400);
            context.lineWidth = 4;
            context.lineTo(right, 400);
            context.stroke();
          }
        }
      }
