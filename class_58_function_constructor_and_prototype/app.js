/**
 * Created by plastik on 1/2/16.
 */
'use strict';

function Person(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

var john = new Person('john', 'wallace');
console.log(john.getFullName());

var claire = Person('claire', 'martin');
console.log(claire);