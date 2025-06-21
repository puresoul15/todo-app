
let list=['Your tak'];
let dates=['date'];
display()
document.querySelector('.ad').onclick=function(){
  addtotodo();
}
// console.log(list);
function addtotodo(){
  let newtask=document.querySelector('.box');
  let work=newtask.value;
  let nedate=document.querySelector('#tarik');
  let taskdate=nedate.value;
  list.push(work);
  dates.push(taskdate);
  newtask.value='';
  nedate.value='';
  display();
}
function display(){
  let tak_add=document.querySelector('.todo-container');
  let newhtml='';
  for(let i=0; i<list.length; i++){
  newhtml+=`
  <span class="task-background">${list[i]}</span>
  <span class="date-background">${dates[i]}</span>
  <button class="button-background" onclick="
  list.splice(${i},1);
  display();
  "> Delete  </button>
  `
 }
  tak_add.innerHTML=newhtml;
}