function findTypes(){
    let array = [];
    for(let i = 0; i < arguments.length; i++){
        let elementType = typeof(arguments[i]);
        array.push(elementType);
    }
    return array;
}
findTypes('number');
findTypes(null, 5, 'hello');


function executeforEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}
executeforEach([1,2,3], function(el) { 
    console.log(el) 
});


function mapArray(array, callback){
    let modifiedArray = [];
    executeforEach(array, function(el){
        modifiedArray.push(callback(el));
    });
    return modifiedArray;
}
mapArray([2, 5, 8], function(el) {
    return el + 3 
});


function filterArray(array, callback){
    let modifiedArray = [];
    executeforEach(array, function(el){
        if(callback(el)){
            modifiedArray.push(el);
        }
    });
    return modifiedArray;
}
filterArray([2, 5, 8], function(el) { 
    return el > 3 
});


const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];
function getAmountOfAdultPeople(data){
    let countPeople = 0;
    filterArray(data, function(el){
        if( el.age > 18){
            countPeople++;
        }
    });
    return countPeople;
}
getAmountOfAdultPeople(data);


function getGreenAdultBananaLovers(data){
    let bananaLovers = [];
    filterArray(data, function(el){
        if(el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green'){
            bananaLovers.push(el);
        }
    });
    return mapArray(bananaLovers, function(el){
        return el.name;
    });
}
getGreenAdultBananaLovers(data);


function keys(array){
    let keysArray = [];
    for (let key in array) {
        if (array.hasOwnProperty(key)) {
            keysArray.push(key);
        }
    }
    return keysArray;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3}); 


function values(array){
    let valuesArray = [];
    for (let value in array) {
        valuesArray.push(array[value]);
    }
    return valuesArray;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});


function showFormattedDate(time){
    let day = time.getDate();
    let month = time.toLocaleString('en-us', { 
        month: 'short' 
    });
    let year = time.getFullYear();
    return `Date: ${day} of ${month}, ${year}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00')); 


function isEvenYear(time){
    let year = time.getFullYear();
    return ( year % 2 ) === 0;
}
isEvenYear(new Date('2019-01-27T01:10:00')); 


function isEvenMonth(time){
    let month = time.getMonth() + 1;
    return ( month % 2 ) === 0;
}
isEvenMonth(new Date('2019-02-27T01:10:00')); 