var n1=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src", "images/"+"dice"+n1+".png");

var n2=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src", "images/"+"dice"+n2+".png");

if(n1>n2){
  document.querySelector("h1").innerHTML="player 1 Wins!!!"
}
else if(n1<n2){
  document.querySelector("h1").innerHTML="player 2 Wins!!!"
}
else{
  document.querySelector("h1").innerHTML="It's a DRAW!!!";
}
