
// Attach a listener to the end of the animation
const element = document.getElementById("firstimg");
element.addEventListener("animationend", listener, false);

// Actions at the end of the animation
function listener(event) {
  document.getElementById("radarsweep").style.visibility = "hidden";
  document.getElementById("radarsweep").style.animationPlayState = "paused";
  document.getElementById("solnset").style.backgroundImage = "url('./img/deepsleep-screen-final.png')";
}

// When the "Solve" button gets pressed
function findSoln() {
  // Make button invisible
  document.getElementById("play").style.visibility = "hidden";
  // Change background to DeepSleep screen with a hole in the middle
  document.getElementById("solnset").style.backgroundImage = "url('./img/deepsleep-screen-nohypno.jpg')";
  // Start solution animations
  [...document.getElementsByClassName("solnimg")].forEach(e => e.style.animationPlayState = "running");
  // Start radar sweep animation
  document.getElementById("radarsweep").style.visibility = "visible";
  document.getElementById("radarsweep").style.animationPlayState = "running";
}
