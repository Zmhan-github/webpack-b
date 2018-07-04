require('babel-runtime/regenerator');
require('normalize.css');
require('./sass/main.scss');
require('./index.html');


const usersJSON = [
    {
        "_id": 1,
        "name": "Марат",
        "lastname": "Журмухамедов",
        "status": "online"
    },
    {
        "_id": 2,
        "name": "Марат",
        "lastname": "Журмухамедов",
        "status": "online"
    },
    {
        "_id": 3,
        "name": "Марат",
        "lastname": "Журмухамедов",
        "status": "online"
    },
    {
        "_id": 4,
        "name": "Марат",
        "lastname": "Журмухамедов",
        "status": "online"
    },

];

// itemsHTML to itemInput data-id send!
window.addEventListener('load', (event) => {

    const sl = document.getElementById('scroll');
    sl.scrollTop = sl.scrollHeight;

    const usersbox = document.getElementsByClassName('items')[0];

    usersJSON.map(item => {
        usersbox.insertAdjacentHTML('beforeend', `
        <li class="items__item" data-id="${item._id}">
        <figure class="items__image" data-id="${item._id}">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" data-id="${item._id}">
        </figure> 
        <div class="items__wrapper" data-id="${item._id}">
            <h2 data-id="${item._id}">${item.name} ${item.lastname}</h2>
            <p class="items__status active" data-id="${item._id}">${item.status}</p>
        </div>
        </li>`);
    })

    const items = document.getElementsByClassName('items__item');
    const msgInput = document.getElementsByClassName('message-input')[0];



    Array.from(items).forEach(item => {
        item.addEventListener('click', (e) => {
            msgInput.setAttribute('data-id', e.target.getAttribute('data-id'));
            sl.innerText = e.target.getAttribute('data-id');
        });
    });

});



// {/* <div class="message new">
// <figure class="avatar">
//     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg">
// </figure>Hi there, I'm Fabio and you?
// <div class="timestamp">17:43</div>
// </div>
// <div class="message message-personal new">hello
// <div class="timestamp">17:43</div>
// </div>
// <div class="message message-personal new">how are you&amp;
// <div class="timestamp">17:43</div>
// </div>
// <div class="message new">
// <figure class="avatar">
// <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg">
// </figure>How are you?
// </div>  */}