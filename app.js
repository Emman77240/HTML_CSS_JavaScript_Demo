const apiUrl = 'http://www.boredapi.com/api/activity/';
const main = document.getElementById("response");
const button = document.querySelector("button");

button.addEventListener('click', randomActivity);
function randomActivity() {
    fetch(apiUrl).then(res => res.json())
    .then(function(data) {
        const text = document.createElement('h2');
        text.innerHTML = `${data.activity}`;
        main.appendChild(text);
    }); 

}


