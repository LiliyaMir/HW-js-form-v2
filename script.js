const input = document.querySelector("input");
const ul = document.querySelector("ul");
let addButton = document.querySelector('.add_button');
let toDo = document.querySelector('.to_do');

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

addButton.addEventListener("click", function() {
  createTodo();
  toDo.value = ''; 
});

ul.addEventListener('click', function (event) {
  let item = event.target.closest('li');
  if (item) {
    item.classList.toggle('fulfilled')
  }
})

ul.addEventListener('click', function (event) {
  let item = event.target.closest('.close');
  if (item) {
    item.parentNode.remove();
  }
})
