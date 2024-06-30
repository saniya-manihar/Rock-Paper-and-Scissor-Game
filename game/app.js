let user=0
let comp=0
const scissor=document.getElementsByClassName("scissor-img")
const rock=document.getElementsByClassName("rock-img")
const paper=document.getElementsByClassName("paper-img")
const choices=document.getElementsByClassName("choice")
const choose=document.getElementsByClassName("choose")
const message=document.getElementById("msg")
const para1=document.getElementById("user")
const para2=document.getElementById("comp")


 const getcomputerchoice=()=>{
    const arr=["rock","paper","scissor"]
     const conputernum= Math.floor(Math.random()*3);
     return arr[conputernum];
     
 }
 const drawgame=()=>{
    console.log("Game Was Draw")
    message.innerText = "Game was a draw 🤝";
    message.style.color="grey"
    
 }
 const showwinner=(userwin)=>{
    if (userwin){
        user++;
        para1.innerText=user
        message.innerText = "YOU WON THE GAME 🎉";
        message.style.color="green"
    }
    else{
        comp++
        para2.innerText=comp;
        console.log("Computer Won")
        message.innerText = "YOU LOSE THE GAME 💔";
        message.style.color="red"
    }
 }
const computerplay=(userchoice)=>{
    console.log("userchoice is=" ,userchoice)
    //geretate computer randonchouce
   const computerchoice=getcomputerchoice();
   console.log("computer choice is:" +computerchoice)
   if(userchoice===computerchoice){
   drawgame()
   }
   else{
    let userwin=true;
    if(userchoice==="rock"){
       userwin= computerchoice=="scissor"?true:false}

else if(userchoice==="scissor"){
    userwin=computerchoice=="paper"?true:false;}
    else (userchoice==="paper")
   userwin= computerchoice=="rock"?true:false;
   showwinner(userwin);
    }
   


   

}
Array.from(choices).forEach((c) => {
    c.addEventListener("click", () => {
        const userchoice=c.getAttribute("id")
      
      computerplay(userchoice);
      
    });
  });