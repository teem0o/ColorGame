var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var myPick=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var msg=document.querySelector("#msg");
var h1=document.querySelector("h1");
var btn=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var rainbow=document.querySelector("#rain");
rainbow.style.display="none";

var btnDisco=document.querySelector("#activate");
var blue=true;
var intt;

var discoParty=document.querySelector("#discoParty");
var yay=true;


btnDisco.addEventListener("click",function(){
	colorDisplay.textContent=rainbow.textContent;
	h1.classList.toggle("rainbow");
	for(var i=0;i<squares.length;i++){
		squares[i].classList.toggle("asd");
	}
	msg.classList.toggle("asd");
	btn.classList.toggle("rainbow");
	easy.classList.toggle("rainbow");
	hard.classList.toggle("rainbow");
	this.classList.toggle("selected");
	btnDisco.classList.toggle("rainbow");
	easy.classList.remove("selected");
	hard.classList.remove("selected");
	
	if(blue)
	intt=setInterval(myFunction, 1000);
	else clearInterval(intt);
	blue=!blue;
	
	if(yay) discoParty.play();
	else discoParty.pause();
	yay=!yay;
	
});
function myFunction(){
	colors=generateRandomColors(6);
	myPick=pickColor();
	for(var i=0;i<squares.length;i++)
	squares[i].style.backgroundColor=colors[i];
	//h1.style.backgroundColor="#232323";
}

easy.addEventListener("click",function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(3);
	myPick=pickColor();
	colorDisplay.textContent=myPick;
	for(var i=0;i<squares.length;i++)
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else squares[i].style.display="none";
});
hard.addEventListener("click",function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	colors=generateRandomColors(6);
	myPick=pickColor();
	colorDisplay.textContent=myPick;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
});

btn.addEventListener("click",function(){
	colors=generateRandomColors(6);
	myPick=pickColor();
	colorDisplay.textContent=myPick;
	msg.textContent="";
	this.textContent="new color";
	for(var i=0;i<squares.length;i++)
		squares[i].style.backgroundColor=colors[i];
	h1.style.backgroundColor="bluesteel";
	
});

colorDisplay.textContent=myPick;

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		clickedColor=this.style.backgroundColor;
		if(clickedColor===myPick){
			msg.textContent="Well Done";
			changeColor(myPick);
			h1.style.backgroundColor=clickedColor;
			btn.textContent="Play Again?";
		}
		else {this.style.backgroundColor="transparent";
			msg.textContent="Try again";
		}
	});
}
function changeColor(clr){
	for(var i=0;i<squares.length;i++)
				squares[i].style.backgroundColor=clr;
}
function pickColor(){
	var rnd=Math.floor(Math.random() * colors.length);
	return colors[rnd];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
	
}