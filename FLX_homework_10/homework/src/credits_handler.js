function userCard(numb){
    const date = new Date();
    const dateFormat = date.toLocaleString('en-GB', { timeZone: 'UTC' });
    let card = {
        balance : 100,
        transactionLimit : 100,
        historyLogs : [],
        key : numb,
        
        getCardOptions : function(){
            return {
                balance : this.balance,
                transactionLimit : this.transactionLimit,
                historyLogs : this.historyLogs,
                key : numb
            };
        },
        
        putCredits : function(amount){
            this.balance = this.balance + amount;
            this.historyLogs.push({
                operationType : 'Recieved credits',
                credits : amount,
                operationTime : dateFormat
            });
        },
        
        takeCredits : function(amount){
            if( this.transactionLimit > amount && this.balance > amount ){
                this.balance = this.balance - amount;
                this.historyLogs.push({
                    operationType : 'Withdrawal of credits',
                    credits : amount,
                    operationTime : dateFormat
                });
            } else {
                console.error('Credits you want to take is greater than transaction limit or remaining balance');
            }
        },
        
        setTransactionLimit : function(limit){
            this.transactionLimit = limit;
            this.historyLogs.push({
                operationType : 'Transaction limit change',
                credits : limit,
                operationTime : dateFormat
            });
        },
        
        transferCredits : function(amount,card){
            if(this.balance > amount || this.transactionLimit > amount){
                const taxCoef = 0.005;
                const tax = amount * taxCoef;
                this.balance = this.balance - amount - tax;
                this.historyLogs.push({
                    operationType : 'Withdrawal of credits',
                    credits : amount,
                    operationTime : dateFormat
                });
                
                card.balance = card.balance + amount;
                card.historyLogs.push({
                    operationType : 'Recieved credits',
                    credits : amount,
                    operationTime : dateFormat
                });
            } else{
                console.error('Credits you want to transfer is greater than transaction limit or remaining balance');
            }
        }  
    }
    return card;
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
