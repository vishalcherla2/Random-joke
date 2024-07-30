let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

function createJoke() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    }
    spinner.classList.remove("d-none");
    jokeText.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            jokeText.classList.remove("d-none");
            let jokeTextValue = jsonData.value;
            jokeText.textContent = jokeTextValue;

        })
}
jokeBtn.addEventListener("click", createJoke);