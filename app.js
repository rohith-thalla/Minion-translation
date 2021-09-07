var button = document.querySelector("#btn");
var input = document.querySelector("#int");
var output = document.querySelector("#out");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

//calling a server replicating postman program 
function servercall(text){
    return serverURL + "?" + "text=" + text;
}

//function to handle error
function errorhandler(error){
    console.log("error" + error);
    alert("Maximum server requests received, try again in an hour")
}

// function to fetch the data
function clickeventhandler(){
    var inputtext = input.value
    fetch(servercall(inputtext))
        .then(response => response.json())
        .then(json => output.innerText = json.contents.translated)
        .catch(errorhandler)      
};

alert("The server is restricted to only 5 trials per hour if you encounter an error try again after an hour")
button.addEventListener("click",clickeventhandler)