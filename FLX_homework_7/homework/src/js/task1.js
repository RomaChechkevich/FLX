let login,
    password;
const currentDate = new Date().getHours(); 
    

login = prompt('Input login');
if(login === null || login === ''){
    alert('Canceled');
} else if(login.length < 4){
    alert(`I don't know any users having name length less than 4 symbols`);
} else if(login === 'User' || login === 'Admin'){
    password = prompt('Input password');
    if(password === null || password === ''){
        alert('Canceled');
    } else if(login === 'User' && password === 'UserPass'){
        currentDate < 20 ? alert(`Good day, dear ${login}!`) : alert(`Good evening, dear ${login}!`);
    } else if(login === 'Admin' && password === 'RootPass'){
        currentDate < 20 ? alert(`Good day, dear ${login}!`) : alert(`Good evening, dear ${login}!`); 
    } else{
        alert('Wrong password');
    }
} else{
    alert(`I don't know you`);
}
