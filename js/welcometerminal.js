var lines = "Welcome to Department of Computer Science and Engineering";
i=0;
var text = '';

function loopLi() {
setTimeout(function () {
        text += lines.charAt(i);
        i=i+1;
        document.getElementById("welcomelines").innerHTML = text;
        if( i < lines.length ) {
          loopLi();
        }
        else {
          document.getElementById("terminalcursor").style.WebkitAnimation = "blink 1s step-end infinite";
          document.getElementById("terminalcursor").style.animation= "blink 1s step-end infinite";
        }
}, 200);
}

loopLi();

