const el = document.querySelector("#splash-screen");
const HIDDEN_CLASSNAME ="hidden";

// function splashFadeOut(splash) {
//     let op = 1;
//     let timer = setInterval(function() {
//         if(op <= 0.1){
//             clearInterval(timer);
//             splash.classList.add(HIDDEN_CLASSNAME);
//         }
//         splash.style.opacity = op;
//         op -= op * 0.1;
//     }, 500);
// }

function fadeOut(){
    el.style.opacity = 1;
  
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        setTimeout(fade, 40);
      }
    })();
  }
  

setTimeout(fadeOut,1500);