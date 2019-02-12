function reverseNumber(x){
    var digit, result = 0;
    while( x ){
        digit = x % 10; 
        result = (result * 10) + digit; 
        x = x/10|0;     
    }  
    return result;
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);