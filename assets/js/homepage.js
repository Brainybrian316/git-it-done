var getUserRepos = function (user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            displayRepos(data, user);
        });
    });
};

// /variables to reference and store the form element
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

// function to execute upon form submission for teh browser event
var formSubmitHandler = function (event) {
    event.preventDefault();
    // get value from input element
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
    console.log(event);
};

var displayRepos = function (repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
};

userFormEl.addEventListener("submit", formSubmitHandler);