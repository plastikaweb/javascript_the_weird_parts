/**
 * Created by plastik on 14/2/16.
 */
//polyfill for enviroments that not support
//Object.create
if (!Object.create) {
    Object.create = function (o) {
        if(arguments.length > 1) {
            throw new Error('Object.create only accepts one parameter');
        }
        function F() {};
        F.prototype = o;
        return new F();
    };
}

var person = {
    firstName: 'Default',
    lastName: 'Default',
    greet: function () {
        return 'hi ' + this.firstName;
    }
};

var john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Dougals';

//add properties to prototype at any moment
person.age = 23;

var a = {
    firstName: 'general'
};

// inheritance
var a = {
    firstName: 'general'
};
var b = Object.create(a);
b.test = 'test';
var c = Object.create(b);
c.test = 'ahja';
console.log(b.__proto__);
console.log(c.__proto__);
console.log(b);
console.log(c);
console.log('-------');
a.lastName = 'kk';
console.log(b.__proto__);
console.log(c.__proto__);
console.log(b);
console.log(c);