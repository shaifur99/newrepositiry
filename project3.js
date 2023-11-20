let totallAttend=5;
let attempts=0;
let totalwon=0;
let totalloss=0;




const form=document.querySelector("form");
const cardbody=document.querySelector(".card-body");
const guessingNumber=form.querySelector("#guessingNumber");
const checkButton=form.querySelector("#check");
const resultText=document.querySelector(".resultText");
const lossWonmessage=document.createElement("p");
const remainingAttempts=document.querySelector(".remainingAttempts");

form.addEventListener("submit",function(event){
    event.preventDefault();//bar bar submit na hoyar jonno

   attempts++;
   if(attempts>5){
    guessingNumber.disabled=true;
    checkButton.disabled=true;
   }
   else{
    checkResult(guessingNumber.value);
    remainingAttempts.innerHTML=`Remaining attempts : ${totallAttend-attempts}`;
   }
});

function checkResult(guessingNumbe){
    var randovalue =getRandomNumber(5);
 if(randovalue!=guessingNumbe){
    resultText.innerHTML=`you have lost randomnumber was : ${randovalue}`;
    totalloss++;
 }else{
    resultText.innerHTML=`you have won`;
    totalwon++;
 }
 lossWonmessage.innerHTML=`won : ${totalwon},Lost: ${totalloss}`;
 lossWonmessage.classList.add("large-Text");
 cardbody.appendChild(lossWonmessage);
   
console.log(guessingNumbe);
}

function getRandomNumber(x){
    return ( Math.floor(Math.random() * x))+1;
   
}