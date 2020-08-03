window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('done');
    console.log('loading done');
});

url = 'http://www.boredapi.com/api/activity?type=recreational';
function makeactivity() {
    fetch(url)
        .then((data) => data.json())
        .then((activity) => block(activity));

    const block = (data) => {
        console.log(data)
        const html = `
    <h5 class="heading">Here's an activity for you</h5>
    <p id="activity_title">- ${data.activity}</p>
    <p>Activity type : ${data.type}</p>
    <p>Only <span>${data.participants}</span> participant is needed</p>
    <p>Here's a link to the activity &nbsp;<a href="">${data.link}</a></p>
    <p class="other">Have Fun!!!</p>
    `
        const activityBlock = document.querySelector('#activity_card')
        activityBlock.innerHTML = html
    }
}

$(document).ready(function () {
    var imageFile = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
    var currentIndex = 0;
    setInterval(function () {
        if (currentIndex == imageFile.length) {
            currentIndex = 0;
        }
        $(".description").css('background-image', 'url("./assets/images/' + imageFile[currentIndex++] + '")');
    }, 3000);
});

const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
let showMenu = false;
menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menu.classList.add('close');
        nav.classList.add('show');
        // navLinks.forEach((item) => item.classList.add('show'));

        //set menu state
        showMenu = true;
    } else {
        menu.classList.remove('close');
        nav.classList.remove('show');
        // navLinks.forEach((item) => item.classList.remove('show'));

        //set menu state
        showMenu = false;
    }

}
const link = document.querySelector('.nav-link');

link.addEventListener('click', close);
function close() {
    console.log('I have been clicked');
    menu.classList.remove('close');
    nav.classList.remove('show');
    showMenu = false;
}


