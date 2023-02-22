let input = document.querySelector('input');
let addTask = document.querySelector('#add-task');
let taskContainer = document.querySelector('.list-container');








addTask.addEventListener ('click', () => {
    let div = document.createElement('div');//create a new div
    div.classList.add('new-list-container');

    let li = document.createElement("li");//create a new li

    let btnOne = document.createElement('button');//create a new btn 1
    let btnTwo = document.createElement('button');// create a new btn 2
    btnOne.innerText = "Strike";
    btnTwo.innerText = "Del"



    div.append(li);
    div.append(btnOne);
    div.append(btnTwo);

    li.classList.add('list-style');//adds a classname for li
    li.setAttribute("contenteditable", "true");//can be edited afetr being set
    li.setAttribute("spellcheck", 'true');
    btnOne.classList.add('btn-js');//adds a classname for btn 1
    btnTwo.classList.add('btn-js');//adds a classname for btn 2

    btnTwo.style.color = 'red';
    taskContainer.append(div);//appends the div-box to the taskContainer

    btnOne.addEventListener('click', () => {
        li.style.fontStyle = 'oblique';
        li.style.color = 'gray';
        li.style.fontWeight = '500';
        li.style.textDecoration = 'line-through';
        li.removeAttribute('contenteditable');
        li.style.borderColor = 'red';
        li.style.borderRadius = '3px';
    });
    
    btnTwo.addEventListener('click', () => {
        btnTwo.parentElement.remove();
    })

    if (input.value !== ''){
        li.innerText = input.value;
        input.value = '';
    }else {
        alert('Textfield is empty!');
        btnTwo.parentElement.remove();

    }

    
})

input.addEventListener ('keyup', (event) => {
    if (event.key === 'Enter'){
    let div = document.createElement('div');//create a new div
    div.classList.add('new-list-container');

    let li = document.createElement("li");//create a new li

    let btnOne = document.createElement('button');//create a new btn 1
    let btnTwo = document.createElement('button');// create a new btn 2
    btnOne.innerText = "Strike";
    btnTwo.innerText = "Del"



    div.append(li);
    div.append(btnOne);
    div.append(btnTwo);

    li.classList.add('list-style');//adds a classname for li
    li.setAttribute("contenteditable", "true");//can be edited afetr being set
    li.setAttribute("spellcheck", 'true');
    btnOne.classList.add('btn-js');//adds a classname for btn 1
    btnTwo.classList.add('btn-js');//adds a classname for btn 2

    btnTwo.style.color = 'red';
    taskContainer.append(div);//appends the div-box to the taskContainer

    btnOne.addEventListener('click', () => {
        li.style.fontStyle = 'oblique';
        li.style.color = 'gray';
        li.style.fontWeight = '500';
        li.style.textDecoration = 'line-through';
        li.removeAttribute('contenteditable');
        li.style.borderColor = 'red';
        li.style.borderRadius = '3px';
    });
    
    btnTwo.addEventListener('click', () => {
        btnTwo.parentElement.remove();
    })

    if (input.value !== ''){
        li.innerText = input.value;
        input.value = '';
    }else {
        alert('Textfield is empty!');
        btnTwo.parentElement.remove();

    }

    

    }
    })

