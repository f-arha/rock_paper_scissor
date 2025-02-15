var humanScore=0;
var computerScore=0;
function getComputerChoice(){
    let s=Math.random();
    let a;
    if(s<=0.3){
        a="rock";
    }
    else if(s<=0.6){
        a="paper";
    }else{
        a="scissor";
    }
    console.log("computer:"+a);
    return a;
}
        
function getHumanChoice(){
    let h=prompt("Enter your choice");
    h=h.toLowerCase();
    console.log("You:"+h);
    return h;
}

function playRound(humanChoice,computerChoice){
    if(humanChoice=="paper" && computerChoice=="rock" || humanChoice=="rock" && computerChoice=="scissor" || humanChoice=="scissor" && computerChoice=="paper"){
     console.log("You win! "+humanChoice+" beats "+computerChoice);
     humanScore++;
    }
    else if(humanChoice=="rock" && computerChoice=="paper" || humanChoice=="paper" && computerChoice=="scissor" || humanChoice=="scissor" && computerChoice=="rock"){
     console.log("You lose!"+computerChoice+" beats "+humanChoice);
     computerScore++;
    }else if(humanChoice==computerChoice){
         console.log("It's a tie! Both chose " + humanChoice);
        
    }else{
     console.log("wrong input");
    }
    
    
 }
 
 
 function playGame(){
     for(let i=0;i<5;i++){
         const humanSelection=getHumanChoice();
         const computerSelection=getComputerChoice();
         playRound(humanSelection,computerSelection);
         console.log("human:"+humanScore);
         console.log("computer:"+computerScore);
     }
     if(humanScore<computerScore){
         console.log("COMPUTER WINS")
     }
     else if(humanScore>computerScore){
         console.log("You WINS");
     }
     else{
         console.log("It's a tie");
     }
 }
 playGame();