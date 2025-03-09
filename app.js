let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");


const genCompChoices = () => {
    const options = ["rock","paper","scissor"];
    const Idx=Math.floor(Math.random()*3);
return options[Idx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game Draw.Play Again";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("You Win");
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
} else{
    compScore++;
    compScorePara.innerText=compScore;
console.log("You Lose");
msg.innerText= `You Lose! ${compChoice} beats your ${userChoice}`;
msg.style.backgroundColor="red";
}
};

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //Generate comp choice
    const compChoice=genCompChoices();
    console.log("comp choice = "+compChoice);
    if(userChoice===compChoice){
        //Draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissor or paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissor
          userWin = compChoice==="scissor"?false:true;     
           }
           else{
            //rock or paper
            userWin = compChoice==="rock"?false:true;
           }
           showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});