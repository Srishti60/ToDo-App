function handletaskSubmit(event){
    event.preventDefault();
    const task = event.target.taskDetail.value;
   


localStorage.setItem("taskDetail",JSON.stringify(task))
showTaskOnScreen(task)
event.target.taskDetail.value = '';

}
function showTaskOnScreen(task){
    const parentEleme = document.getElementById('listOfItems');
    const childElem = document.createElement('li');
    childElem.textContent = task;
    parentEleme.appendChild(childElem)
    const deleteElem = document.createElement('input');
     deleteElem.type = 'button'
     deleteElem.value ='Delete'
     deleteElem.style.backgroundColor = 'red';
     deleteElem.style.color = 'white';
     deleteElem.style.width = '50px';
     deleteElem.style.height = '30px'; 
     deleteElem.style.border = 'none'; 
     deleteElem.style.borderRadius = '5px';
     deleteElem.style.marginLeft = '10px';
     childElem.style.marginBottom ='15px'
    
     deleteElem.onclick = () => {
        localStorage.removeItem(taskDetail);
        parentEleme.removeChild(childElem);
     }
     childElem.appendChild(deleteElem)
}

