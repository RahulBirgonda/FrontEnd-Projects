for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);

});
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch(key){
    case 'w':
    new Audio("sounds/tom-1.mp3").play();
    break;

    case 'a':
    var tom2 =new Audio("sounds/tom-2.mp3").play();
    break;

    case 's':
    var tom3 =new Audio("sounds/tom-3.mp3").play();
    break;

    case 'd':
    var tom4 =new Audio("sounds/tom-4.mp3").play();
    break;

    case 'j':
    var crash =new Audio("sounds/crash.mp3").play();
    break;

    case 'k':
    var kick =new Audio("sounds/kick-bass.mp3").play();
    break;

    case 'l':
    var snare =new Audio("sounds/snare.mp3").play();
    break;

    default: console.log("bla bla bla")

  }

}

function buttonAnimation(currentkey){
  document.querySelector("."+currentkey).classList.add("pressed");
  setTimeout(function(){
      document.querySelector("."+currentkey).classList.remove("pressed");
  },100);
}
