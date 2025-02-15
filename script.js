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
        
