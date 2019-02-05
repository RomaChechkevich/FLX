let amountOfMoney,
    discount,
    priceWithDiscount,
    save;

amountOfMoney = +prompt('Input amount of money', '0');
discount = +prompt('Input discount', '0');
if( amountOfMoney >= 0 && amountOfMoney <= 9999999 && discount >= 0 && discount <= 99){
    save = amountOfMoney * discount / 100;
    priceWithDiscount = amountOfMoney - save;
    alert(`
        Price without discount: ${Math.round( amountOfMoney * 100 ) / 100} 
        Discount: ${discount}%
        Price with discount: ${Math.round( priceWithDiscount * 100 ) / 100} 
        Saved: ${Math.round( save * 100 ) / 100}`);
} else {
    alert('Invalid input data');
}