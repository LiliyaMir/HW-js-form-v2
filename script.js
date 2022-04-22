const ul = document.querySelector("ul");
let addButton = document.querySelector('.add_button');
let input = document.querySelector('.to_do'); 

function createTodo() {
  const li = document.createElement("li");
  li.append(input.value);
  // li.append(`${input.value}`);
  ul.appendChild(li);

  var span = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

function stopDefAction(evt) {
  evt.preventDefault();
}
addButton.addEventListener('click', stopDefAction, false);
addButton.addEventListener("click", function() {
  if(input.validity.valid) {
    createTodo();
    input.value = ''; 
  }
  // createTodo();
  // input.value = ''; 
});

ul.addEventListener('click', function (event) {
  let item = event.target.closest('li');
  if (item) {
    item.classList.toggle('fulfilled');
  }
})
ul.addEventListener('click', function (event) {
  let item = event.target.closest('.close');
  if (item) {
    item.parentNode.remove();
  }
})

const form  = document.querySelector('.to_do_form');
const inputError = document.querySelector('.to_do + span.error');

input.addEventListener('input', function() {
  if (input.validity.valid) {
    inputError.textContent = ''; 
    inputError.className = 'error'; 
  } 
  else {
    showError();
  }
});
function showError() {
  inputError.className = 'error active';
  inputError.textContent = 'invalid'; 
}