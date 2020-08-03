// Function to remove page preloader
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('done');
    console.log('loading done');


    // Api Implementation takes place here
    // i set the whole api url to 'url'
    // The API is called through the function 'makeactivity()' which is initialised on called on button press
    url = 'https://www.boredapi.com/api/activity?type=recreational';
    function makeactivity() {
        fetch(url)
            // API data is fetched as a promise but this line of code changes it to json format for easier manipulation 
            .then((data) => data.json())
            // Json data is set as a parameter to the function 'block()'
            .then((activity) => block(activity));

        const block = (data) => {
            // the block() function simply creates html elements using the json data values in ` `
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
});


// This contains the function that fulls out the navigation on smaller screens
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
// This is to hide the navigation when the button is clicked on
const link = document.querySelector('.nav-link');

link.addEventListener('click', close);
function close() {
    console.log('I have been clicked');
    menu.classList.remove('close');
    nav.classList.remove('show');
    showMenu = false;
}


// Here i utilised jquery to change background images of a div
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


