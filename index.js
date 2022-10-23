function computer(){
let Cchoise=Math.floor(Math.random()*10)%3;
    return Cchoise
}
function player(){
    while(true){
        let choise=prompt('rock, paper or scissors ');

        if(choise.toLowerCase() == 'rock' ){
            return 0; 
        }else if(choise.toLowerCase() == 'paper' ){
            return 1;
        }else if(choise.toLowerCase() == 'scissor' ){
            return 2
        }else{
            console.warn('your choise is not correct')
        }
    }
    
}
function playground(player , comp){
    if(player == comp){
        return 'Tie';
    }else if(player==0&&comp==3){
        return 'player';
    }else if (player==3&&comp==0){
        return 'comp'
    }else if(player >comp){
        return 'player'
    }else if(player < comp){
        return 'comp'
    }


}
let compScore=0;
let playerScore=0;
for(let i =0;i<5;i++){
    
    let winner=playground(player(),computer());
    if(winner == 'Tie'){
        compScore++;
        playerScore++;
    }else if(winner == 'player'){
        playerScore++;
    }else if(winner == 'comp'){
        compScore++;
    }
    console.log(`Player: ${playerScore} - Computer: ${compScore}`)
}