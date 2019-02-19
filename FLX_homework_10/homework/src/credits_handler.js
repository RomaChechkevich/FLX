function userCard(numb){
    const date = new Date();
    const dateFormat = date.toLocaleString('en-GB', { timeZone: 'UTC' });
    
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = numb;
    
    return {  
        getCardOptions : function(){
            return {
                balance : balance,
                transactionLimit : transactionLimit,
                historyLogs : historyLogs,
                key : numb
            };
        },
        
        putCredits : function(amount){
            balance = balance + amount;
            historyLogs.push({
                operationType : 'Recieved credits',
                credits : amount,
                operationTime : dateFormat
            });
        },
        
        takeCredits : function(amount){
            if( transactionLimit > amount && balance > amount ){
                balance = balance - amount;
                historyLogs.push({
                    operationType : 'Withdrawal of credits',
                    credits : amount,
                    operationTime : dateFormat
                });
            } else {
                console.error('Credits you want to take is greater than transaction limit or remaining balance');
            }
        },
        
        setTransactionLimit : function(limit){
            transactionLimit = limit;
            historyLogs.push({
                operationType : 'Transaction limit change',
                credits : limit,
                operationTime : dateFormat
            });
        },
        
        transferCredits : function(amount,card){
            if(balance > amount || transactionLimit > amount){
                const taxCoef = 0.005;
                const tax = amount * taxCoef + amount;
                this.takeCredits(tax);
                card.putCredits(amount);
            } else{
                console.error('Credits you want to transfer is greater than transaction limit or remaining balance');
            }
        }  
    }    
}


class UserAccount{
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    
    addCard(){
        const arrayLength = 3;
        if(this.cards.length >= arrayLength){
            console.log('Too many cards for user');
        } else{
            this.cards.push(userCard());    
        }
    }
    
    getCardByKey(key){
        return userCard(key);
    }
}


//let user = new UserAccount('Bob');
//user.addCard();
//user.addCard();
//
//let card1 = user.getCardByKey(1);
//let card2 = user.getCardByKey(2);
//
//card1.putCredits(500);
//card1.setTransactionLimit(800);
//card1.transferCredits(300, card2);
//
//card2.takeCredits(50);
//
//console.log(card1.getCardOptions()); 
//console.log(card2.getCardOptions());
