function addOne(x){
    return x + 1;
}
function pipe(x){
    let result = x;
    for(let i=1; i < arguments.length; i++){
        result = arguments[i](result);
    }
    return result;
}
pipe(1,addOne);
pipe(1, addOne, addOne);