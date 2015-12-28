/**
 * Created by plastik on 28/12/15.
 */
var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var john = {
    firstName: 'John',
    lastName: 'Doe'
};

//don't do this EVER! for demo porpouses only!!!
john.__proto__ = person;
console.log(john.getFullName());

var jane = {
    firstName: 'jane'
};

jane.__proto__ = person;
console.log(jane.hello);