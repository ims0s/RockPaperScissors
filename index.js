const rockPath = './photos/rock.jpg'
const paperPath = './photos/paper.jpg'
const scissorPath= './photos/scissor.jpg'
let compScore=0;
let playerScore=0;
const rock=document.getElementById("r")
const paper=document.getElementById("p")
const scissor=document.getElementById("s")
const score=document.getElementById('score')
const playerUi=document.getElementById('player')
const computerUi = document.getElementById('computer')
function computer(){
    let Cchoise=Math.floor(Math.random()*10)%3; //generate random numbre from 0 to 2 
    if(Cchoise ==0){
        computerUi.src=rockPath
    }else if (Cchoise==1){
        computerUi.src=paperPath;
    }else if(Cchoise==2){
        computerUi.src=scissorPath;
    }
    return Cchoise // return  a number as 0 --> rock 
                                       // 1 --> paper
                                       // 2 --> scissor
}
function player(choise){
    while(true){
        // let choise=prompt('rock, paper or scissor ');
        
        //swap the player choice to a number  
        if(choise.toLowerCase() == 'rock' ){
            return 0; // 0 means rock
        }else if(choise.toLowerCase() == 'paper' ){
            return 1; // 1 means paper
        }else if(choise.toLowerCase() == 'scissor' ){
            return 2 // 2 means scissor
        }else{
            console.warn('your choise is not correct') // this for tell the player is writing
            break;                                     // a wrong choise  and keeping the loop turned.
        }
    }
    
}
function playground(player , comp){
    // here i made the game tell who's the winner or if there is a tie
    console.log(player,comp)
    if(player == comp){
        return 'Tie';
    }else if(player==0&&comp==2){
        return 'player';
    }else if (player==2&&comp==0){
        return 'comp'
    }else if(player >comp){
        return 'player'
    }else if(player < comp){
        return 'comp'
    }


}


rock.addEventListener("click",(e)=>{
    let winner =playground(player("rock"),computer())
    console.log(winner)
    assignScore(winner)
    playerUi.src=rockPath;
})

paper.addEventListener("click",(e)=>{
    let winner =playground(player("paper"),computer())
    console.log(winner)
    assignScore(winner)
    playerUi.src=paperPath;
})

scissor.addEventListener("click",(e)=>{
    let winner =playground(player("scissor"),computer())
    console.log(winner)
    assignScore(winner)
    playerUi.src=scissorPath
})

function assignScore (winner){
    
    if(winner =='player'){
        playerScore++
        
    }else if (winner =='comp'){
        compScore++;
    }else{
        playerScore++;
        compScore++;
    }
    score.innerText =`computer  ${compScore} - ${playerScore} player`
}




