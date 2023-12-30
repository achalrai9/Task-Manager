const tasks = document.querySelector('.task-container');
const input = document.querySelector('.add-task');
const addTask = document.querySelector('.btn');
let deleteT = document.querySelectorAll('.delete');
//console.log(deleteT);

const taskAdder = function() {
    const taskInfo = input.value;

    if(taskInfo != '') {
        const newTaskGrid = document.createElement('div');
        newTaskGrid.classList.add('task');
        const newTask = document.createElement('div');
        newTask.classList.add('task-text');
        const deleteTask = document.createElement('div');
        deleteTask.classList.add('task-text');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        //console.log(deleteBtn.classList.value);
        deleteBtn.appendChild(document.createTextNode('Delete'));

        const text = document.createTextNode(taskInfo);

        newTaskGrid.appendChild(newTask);
        newTaskGrid.appendChild(deleteTask);
        deleteTask.appendChild(deleteBtn);
        newTask.appendChild(text);
        tasks.appendChild(newTaskGrid);

        deleteT = document.querySelectorAll('.delete');

        deleteT[deleteT.length - 1].addEventListener('click', (e) => {
            //console.log(deleteT[deleteT.length - 1].parentNode.parentNode);
            e.target.parentNode.parentNode.remove();
        });

        input.value = '';

    //console.log(deleteT);
    }

    else alert('Please add some text');
};

addTask.addEventListener('click', taskAdder);

// To delete existing tasks

deleteT.forEach((element) => {
    element.addEventListener('click', (e) => {
        //console.log(element.parentNode.parentNode);
        //console.log(e.target);
        //element.parentNode.parentNode.remove();
        e.target.parentNode.parentNode.remove();
    });
});