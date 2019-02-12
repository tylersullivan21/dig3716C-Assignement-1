// Need to create variable so that the user can answer prompt with 1, 2, 3, or exit.


var userString= prompt("Please enter choice 1, 2, 3 or exit");
var userInput = parseInt(userInput);


//create a function that implements robot language

function robotLanguage() {
    if (case1String.length > 5){
        alert(case1String + '-bork')
    }
}

do {

        switch(userString) {

            case "1":
            var case1String = prompt("enter your name");
            robotLanguage(case1String);
            break;

            case "2":
            alert("you entered case two");
            break;

            case "3": 
            alert("you entered case three")
            break;
            

            default:
            alert("your answer wasnt valid");
            break;

        }
      
        var userString= prompt("Please enter choice 1, 2, 3 or exit");
}

while (userString != "exit");