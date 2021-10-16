const addButton = document.querySelector('#add-button');


function addToList() {
  const list = document.querySelector('#list');

  const newListItem = document.createElement('li');
  newListItem.classList.add('item-list-user'); 

  newListItem.innerHTML = //li안에 있는 table 태그를 넣고 싶은데,,;

  list.appendChild(newListItem);
}