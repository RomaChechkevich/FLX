const NUM = 0;
let todoContainer = document.querySelector('.todo-list-container');
let data = localStorage.getItem('todoLists') ? JSON.parse(localStorage.getItem('todoLists') ) : {
    todo: [],
    completed: []
};

renderTodoList();

function addItem (value) {
    let number = data.todo.length;
    addItemToDOM(value, number);
    document.getElementById('item').value = '';
    let elem = {value:value,id: number};
    data.todo.push(elem);
    dataObjectUpdated();    
}

function renderTodoList() {
    if (!data.todo.length && !data.completed.length) { 
        return 
    } 
    for (let i = 0; i < data.todo.length; i++) {
        let value = data.todo[i];
        addItemToDOM(value);
    }

    for (let j = 0; j < data.completed.length; j++) {
        let value = data.completed[j];
        addItemToDOM(value, true);
    }
}

function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}

function removeItem() {
    let remitem = this.parentNode.parentNode;
    let remparent = remitem.parentNode;
    let remid = remparent.id;
    let remvalue = remitem.innerText;
    if (remid === 'todo') {
        data.todo.splice(data.todo.indexOf(remvalue), 1);
    } else {
        data.completed.splice(data.completed.indexOf(remvalue), 1);
    }
    dataObjectUpdated();
    remparent.removeChild(remitem);
}

function completeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;
    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);
    }
    dataObjectUpdated();
    let target = id === 'todo' ? document.getElementById('completed'):document.getElementById('todo');
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[NUM]);
}

function addItemToDOM(text, id, completed) {
    let list = completed ? document.getElementById('completed'):document.getElementById('todo');
    let item = document.createElement('li');
        item.setAttribute('id', id);
    let span = document.createElement('span');
        item.appendChild(span);
        span.innerText = text;
    let buttons = document.createElement('div');
        buttons.classList.add('buttons');
    let remove = document.createElement('button');
        remove.classList.add('remove');
    let removeIcon = document.createElement('img');
        removeIcon.setAttribute('src','./assets/img/remove-s.jpg');
        remove.appendChild(removeIcon);
        remove.addEventListener('click', removeItem);
    let complete = document.createElement('button');
        complete.classList.add('complete');
    let completeIcon = document.createElement('img');
        completeIcon.setAttribute('src','./assets/img/todo-s.png');
        complete.appendChild(completeIcon);
        complete.addEventListener('click', completeItem);
        buttons.appendChild(remove);
        buttons.appendChild(complete);
        item.appendChild(buttons);
        list.insertBefore(item, list.childNodes[NUM]);
}

let children = todoContainer.children;  
function load(){
    children = document.querySelector('.todo-list-container .main-section');
    children.classList.add('active');
    let hiddenP = document.querySelector('.main-section p');
    if(data.todo.length === 0){
        hiddenP.classList.add('active');
    } else {
        hiddenP.classList.remove('active');
    }
    let addNewBtn = document.querySelector('#new');
    let listItem = document.querySelector('span');
    addNewBtn.onclick = () => {
        window.location.hash = '/add';
        children.classList.remove('active');
        add();
    };
    if(data.todo.length > NUM ){
        listItem.onclick = function(){
            window.location.hash = `/modify/${this.parentNode.id}`;
            children.classList.remove('active');      
            modify(this.parentNode);
        }
    }
}

function add(){
    children = document.querySelector('.todo-list-container .add-section');
    children.classList.add('active');
    let addBtn = document.querySelector('#add');
    let cancelBtn = document.querySelector('#cancel');
    addBtn.onclick = () => {
        let value = document.getElementById('item').value;
        if (value) {
            addItem(value);
        }
        window.history.pushState('', '/', window.location.pathname);
        children.classList.remove('active');
        load();
    };
    cancelBtn.onclick = () => {
        window.history.pushState('', '/', window.location.pathname);
        children.classList.remove('active');
        load();
    } 
}

function modify(elem){
    children = document.querySelector('.todo-list-container .modify-section');
    children.classList.add('active');
    let cancelBtn1 = document.querySelector('#cance');
    let modifyBtn1 = document.querySelector('#ad');
    cancelBtn1.onclick = () => {
        window.history.pushState('', '/', window.location.pathname);
        children.classList.remove('active');
        load();
    } 
    modifyBtn1.onclick = () => {
        let newValue = document.querySelector('#ite').value;
        for(let i=0; i < data.todo.length; i++) {    
            let obj = data.todo[i];
            if(obj.id === +elem.id){
                obj.value = newValue;
            }
        }
        dataObjectUpdated();
        window.history.pushState('', '/', window.location.pathname);
        children.classList.remove('active');
        load();
        let span = elem.firstChild.innerText = newValue;
        document.querySelector('#ite').value = '';
        return data;
    }
}

window.onload = load;