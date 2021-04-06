const addbutton = document.querySelector('.addbutton');
var inputValue = document.querySelector('.input');
const container = document.querySelector('.container')

class item {
  constructor(itemName) {

    this.createDiv(itemName);
  }

createDiv(itemName) {
  let input = document.createElement('input');
  input.value = itemName;
  input.disabled = true;
  input.classList.add('iteminput');
  input.type = "text";

  let itemBox = document.createElement('div');
  itemBox.classList.add('item');

  let editbutton = document.createElement('button');
  editbutton.innerHTML = 'EDIT';
  editbutton.classList.add('editbutton');

  let removebutton = document.createElement('button');
  removebutton.innerHTML = 'REMOVE';
  removebutton.classList.add('removebutton');

  container.appendChild(itemBox);

  itemBox.appendChild(input);
  itemBox.appendChild(editbutton);
  itemBox.appendChild(removebutton);

  editbutton.addEventListener('click',() => this.edit(input));
  removebutton.addEventListener('click', () => this.remove(itemBox));
}

  dit(input) {
    input.disabled = !input.disabled;
  }

  remove(item) {
    container.removeChild(item);
  }
}

function check() {
  if(input.value != "") {
    new item(input.value);
    input.value = "";
  }
}


addbutton.addEventListener('click', check);
window.addEventListener''keydown, ()e =>
  if(e.which ==13) {
    check(); 
  }
  ;