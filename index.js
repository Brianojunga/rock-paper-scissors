const rock = document.querySelector(".rock");
const paper  = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const buttonscontainer = document.querySelector(".buttons")
const playerscore = document.querySelector(".playerscore");
const computerscore = document.querySelector(".computerscore");
const outcomemsg = document.querySelector('.outcomemsg');
const winmsg = document.querySelector('.winmsg');
const resetbtn = document.querySelector(".resetbtn");
const lastbtn = document.querySelector(".lastbtn");


function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}
let playerScore = 0;
let computerScore = 0;


function getPlayOutcome(userChoice){
    computerChoice = getComputerChoice();
    if(userChoice === computerChoice){
        return `You picked ${userChoice} the computer picked ${computerChoice}. Its a tie`
    }else if(userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper"){
        playerScore += 1;
        return `You picked ${userChoice} the computer picked ${computerChoice}. You won`
    } else{
        computerScore += 1;
        return `You picked ${userChoice} the computer picked ${computerChoice}. You Lost`
    }
}


function showResult(userChoice){
    const resultMsg = getPlayOutcome(userChoice);
    outcomemsg.textContent = resultMsg;
    playerscore.textContent = playerScore;
    computerscore.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5){
        winmsg.textContent = `${playerScore === 5 ? "Player" : "Computer"} won the game`
        buttonscontainer.style.display = "none";
        lastbtn.style.display = "block";
    }
    }
function resetGame(){
    winmsg.textContent = "";
    outcomemsg.textContent = "";
    playerscore.textContent = 0;
    computerscore.textContent = 0;
    playerScore = 0;
    computerScore = 0;
    buttonscontainer.style.display = "flex";
    lastbtn.style.display = "none";

}


    

rock.addEventListener("click", () => showResult('rock'));
paper.addEventListener("click", () => showResult('paper'));
scissors.addEventListener("click", () => showResult('scissors'));
resetbtn.addEventListener("click", () => resetGame())