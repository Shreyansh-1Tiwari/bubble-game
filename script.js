var timer=60;
var score=0;
var number=0;

function increaseVal(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getHit(){
    number = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = number;
}

function makeBubble(){
    var save="";
    var num=0;
    for(var i=1; i<=80; i++){
        num = Math.floor(Math.random()*10);
        save += `<div class="bubble">${num}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = save;
}

function runTimer(){
    var timeInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector(".pbtm").innerHTML=`<h1> Game Over </h1>`;
        }
        
    }, 1000);
}

document.querySelector(".pbtm").addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent)
    if(clickedNum == number){
        increaseVal();
        makeBubble();
        getHit();
    }
})

makeBubble();
runTimer();
getHit();