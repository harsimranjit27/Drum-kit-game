// alert('Hello');
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.textContent);
    buttonAnimations(this.textContent);   
  });
}

// Listen to key press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimations(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
          let tom1 = new Audio("/sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          let tom2 = new Audio("/sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          let tom3 = new Audio("/sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          let tom4 = new Audio("/sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          let crash = new Audio("/sounds/crash.mp3");
          crash.play();
          break;
        case "k":
          let kick_bass = new Audio("/sounds/kick-bass.mp3");
          kick_bass.play();
          break;
        case "l":
          let snare = new Audio("/sounds/snare.mp3");
          snare.play();
          break;
        default:
            console.log("Press the valid button");
          break;
      }
}

function buttonAnimations(currentKey) {
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed')
    },250);
}