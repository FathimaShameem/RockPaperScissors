let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const genCompChoice = () => {
    const options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random() * 3);
    return options[(idx)];
    //rock, paper, scissors
}
const draw=() =>{
    console.log("The game was draw");
    msg.style.backgroundColor= "#081b31";
    msg.innerText= "Game was draw. Play again";
    
}

const showWinner=(userWin, userChoice, compChoice) =>{
    if(userWin){
        userscore++;
        userScore.innerText=userscore;
        console.log("You win!");
        msg.innerText= `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        compscore++;
        compScore.innerText=compscore;
        console.log("You lose.");
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}

const playGame =(userChoice) =>{
    console.log("user choice= ",userChoice);
    //gen comp choice
    const compChoice= genCompChoice();
    console.log("computer choice= ",compChoice);

    if(userChoice==compChoice){
        //draw
        draw();
    }else{
        let userWin= true;
        if(userChoice=='rock'){
            userWin= compChoice == "paper" ? false : true;
        }
        else if(userChoice=='paper'){
            userWin= compChoice == "scissors" ? false: true;
        }
        else{
            userWin= compChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});