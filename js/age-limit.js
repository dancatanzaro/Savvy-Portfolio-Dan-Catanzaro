var boolean = true;
var saveWater = 'if it is yellow, let it mellow';
var drinkingAge = 21;
var divideByZero;
var myNull = null;

var ageLimit = function ageLimit(){
    var userAge = prompt('How old are you?');

    if(userAge < drinkingAge){
        alert('Please wait until you are 21 to engage in this behaviour.');
        window.location.replace('http://google.com');
    }
    else{
        alert(boolean + ', ' + saveWater);
    }
};

console.log(ageLimit());
console.log(ageLimit);
console.log(saveWater);
console.log(boolean);
console.log(drinkingAge);
console.log(divideByZero);
console.log(myNull);

