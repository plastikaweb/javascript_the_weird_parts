/**
 * Created by plastik on 15/11/15.
 */
'use strict';

var person = {
    firstName: 'Carlos',
    lastName: 'Matheu',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

// ---- BIND ---- //
//Bind object to refer as this inside the function expression
var logName = function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------------');
};
var logNamePerson = logName.bind(person);
logNamePerson('pl', 'ca');

//attaching bind directly to function expression
var logName2 = function (lang1, lang2) {
    console.log('Logged one more time: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------------');
}.bind(person);
logName2('ch', 'it');

//IIEF passing a bind to person -- this --
(function (lang1, lang2) {
    console.log('Logged again: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------------');
}.bind(person, 'sw', 'fr')()); // or:  bind(person)('sw', 'fr'));


// ---- CALL ---- // call automatically executes de function
logName.call(person, 'en', 'ca');
(function (lang1, lang2) {
    console.log("logged: " + this.getFullName());
    console.log("arguments: " + lang1 + " " + lang2);
    console.log("---------");
}.call(person, "mx", "ca"));

// ---- APPLY ---- // like call, just passing an array of parameters
logName.apply(person, ['es', 'fr']);
(function (lang1, lang2) {
    console.log("logged: " + this.getFullName());
    console.log("arguments: " + lang1 + " " + lang2);
    console.log("---------");
}.apply(person, ["ar", "br"]));

// Function Borrowing
var person2 = {
    firstName: 'Paul',
    lastName: 'Newman'
};

console.log(person.getFullName.apply(person2));

// Function currying
function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));