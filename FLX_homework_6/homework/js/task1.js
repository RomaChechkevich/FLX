let inputA = +prompt('Input a', '0'),
    inputB = +prompt('Input b'),
    inputC = +prompt('Input c'),
    result;  

if( inputA === 0 || 
   (isNaN(inputA) || isNaN(inputB) || isNaN(inputC)) || 
   (!isFinite(inputA) || !isFinite(inputB) || !isFinite(inputC)) ){
    result = 'Invalid input data';
    alert(result);
} else {
    let discriminant = Math.pow(inputB , 2) - 4 * inputA * inputC;
    if(discriminant > 0) {
        let x1 = (-1 * inputB + Math.sqrt(discriminant)) / (2 * inputA);
        let x2 = (-1 * inputB - Math.sqrt(discriminant)) / (2 * inputA);
        result = `x1=${x1}, x2=${x2}`;
        alert(result);
    } else if(discriminant === 0){
        let x = -inputB / (2 * inputA);
        result = `x=${x}`;
        alert(result);
    } else {
        result = 'no solution';
        alert(result);
    }
}
