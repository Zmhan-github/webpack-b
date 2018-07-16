const usersJSON = [
  {
    "_id": 1,
    "name": "Марат",
    "lastname": "Журмухамедов",
    "status": "1"
  },{
    "_id": 2,
    "name": "Тимур",
    "lastname": "Оспанов",
    "status": "0"
  },{
    "_id": 3,
    "name": "Влад",
    "lastname": "Серебро",
    "status": "1"
  },{
    "_id": 4,
    "name": "Костя",
    "lastname": "Кологрив",
    "status": "0"
  }
];


const friendsBlock = document.querySelector('.items');
const messageInput = document.querySelector('.message-input');
const searchFriends = document.forms['search-friends'].querySelector('input');


/**
 * 
 *  Template Paste 
 * 
 */

const template = document.querySelector('#getFriends').content.querySelector('li');

for(let i = 0; i < usersJSON.length; i++){
  let el = template.cloneNode(true);
  let status = el.querySelector('.items__wrapper-status');

  el.setAttribute('data-id', usersJSON[i]._id);
  el.setAttribute('key', i);
  el.querySelector('.items__wrapper-name').textContent = usersJSON[i].name + ' ' + usersJSON[i].lastname;
 
  if (usersJSON[i].status == "0"){
    status.classList.add('not-active');
    status.textContent = 'offline';
  } else{
    status.classList.add('active');
    status.textContent = 'online';
  }
  friendsBlock.appendChild(el);
}

/**
 * 
 * 
 * paste data-id for main input
 */

Array.from(friendsBlock.children).forEach(item => {
  item.addEventListener('click', (e) => {
    messageInput.setAttribute('data-id', e.currentTarget.getAttribute('data-id'));
  });
});





// searchFriends.addEventListener('keyup', (e) => {
//   const term = e.target.value.toLowerCase();

//   Array.from(friendsBlock.children).forEach(item => {

//   const friendsName = friendsBlock.querySelector('.items__wrapper-name').textContent;

//   if(friendsName.toLowerCase().indexOf(term) !== -1){
//       item.style.display = 'flex';
//   } else {
//       item.style.display = 'none';
//   }

//   });
// });

// document.forms['search-friends'].addEventListener('submit', (e) => {
//   e.preventDefault();
// });
