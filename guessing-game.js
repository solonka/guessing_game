const readline = require("readline");
let secretNumber;
let numAttempts;

function askLimit(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    rl.question("Enter number of attempt: ", answer => {
        console.log("You have " + answer +" attempts");
        numAttempts = answer;
        askRange();
        rl.close();

    });

}

function askRange(){

    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    rl.question('Enter a minimum number: ', firstAnswer =>{
        
        rl.question('Enter a maximum number: ', secondAnswer =>{
            
            console.log("I'm thinking of a number between "+ firstAnswer +' and '+ secondAnswer )
            
            randomInRange(firstAnswer, secondAnswer);
            rl.close();

        })
    })
     
    

}

function randomInRange(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    secretNumber =  Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    //console.log(secretNumber);
    askGuess();
}

function askGuess(){
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    if (numAttempts !== 0){
        rl.question("Enter a guess: ",answer =>{
            
            if(checkGuess(Number(answer)) === false){
                numAttempts--;
                rl.close();
                askGuess();
            }else{
                console.log('You Win!');
                rl.close();
            }
            
        });
    }else{
        console.log('You lose');
        rl.close();
    }
};


function checkGuess(num){
    if(num === secretNumber){
        
        return true;
    }else if(num > secretNumber){
        console.log("Too high");
        return false;
    }else{
        console.log('Too low');
        return false;
    }
}

askLimit();
