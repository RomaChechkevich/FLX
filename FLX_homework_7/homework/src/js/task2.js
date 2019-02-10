let playGame,
    start,
    continueGame,
    randNumber,
    userValue,
    totalPrize,
    MIN = 0,
    MAX = 5,
    maxPrize = 10;
    

playGame = confirm('Do you want to play a game?');

if(playGame){
    start = true;
    do{
        randNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
        totalPrize = 0;
        for(let attempts = 3; attempts > 0; attempts--, maxPrize = Math.floor(maxPrize / 2) ){
            userValue = +prompt(`
        Enter a number from ${MIN} to ${MAX}
        Attempts left - ${attempts}
        Total Prize - ${totalPrize}
        Possible prize on current attemps - ${maxPrize}
        `);
            if(userValue === randNumber){
                totalPrize += maxPrize;
                alert(`Congratulation! Your prize is: ${totalPrize}$`);
                continueGame = true;
                break;
            }
        }
        if(continueGame){
            start = confirm('Do you want to play a game?')
            if(start && userValue === randNumber){
                MAX = 10;
                maxPrize = 30;
            } else {
                alert(`Thank you for a game. Your prize is: ${totalPrize}$`);
                start = confirm('Do you want to play again?');
                totalPrize = 0;
                MAX = 5;
                maxPrize = 10;
            }
        } else {
            alert(`Thank you for a game. Your prize is: ${totalPrize}$`);
            start = confirm('Do you want to play again?');
            totalPrize = 0;
            MAX = 5;
            maxPrize = 10;    
        }
    } while(start);
} else {
    alert('You did not become a millionaire, but can.');
}
