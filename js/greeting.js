var welcomeUser = function welcomeUser(){
    var userName = prompt('What is your name?');

    if(!userName){
        welcomeUser();
    }
    else{
        alert('Welcome to my fun stuff, ' + userName);
    }
};

welcomeUser();
