const myArray = [];
const resultContainer = document.querySelector('.result-container');

function addTodo(){
  const inputElement = document.querySelector('.todoinput');
  const inputValue = inputElement.value.trim();
 if (inputValue === "") return;
 myArray.push(inputValue);
 
 resultContainer.innerHTML = "";
 
 for (let i = 0; i < myArray.length; i++) {
   let p = document.createElement('p');
   p.innerHTML = `<p>${myArray[i]}</p>`
   resultContainer.appendChild(p)
   let button = document.createElement('button');
   button.innerHTML ='❌'
   button.addEventListener('click', () =>{
     myArray.splice(i, 1)
     displaytodo();
   })
   p.appendChild(button)
 }
 inputElement.value = "";
  console.log(myArray)
}
function displaytodo(){
   resultContainer.innerHTML = "";
 
 for (let i = 0; i < myArray.length; i++) {
   let p = document.createElement('p');
   p.innerHTML = `<p>${myArray[i]}</p>`
   resultContainer.appendChild(p)
   let button = document.createElement('button');
   button.innerHTML = '❌'
   button.addEventListener('click', () => {
     myArray.splice(i, 1)
     displaytodo();
   })
   p.appendChild(button)
 }
}
