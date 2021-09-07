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
    alert("error at the server please try again later")
}

// function to fetch the data
function clickeventhandler(){
    var inputtext = input.value
    fetch(servercall(inputtext))
        .then(response => response.json())
        .then(json => output.innerText = json.contents.translated)
        .catch(errorhandler)      
};


button.addEventListener("click",clickeventhandler)