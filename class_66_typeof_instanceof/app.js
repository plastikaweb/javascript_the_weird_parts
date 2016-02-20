/**
 * Created by plastik on 20/2/16.
 */
var a = 3;
console.log(typeof a); // number
var b = 'hi';
console.log(typeof b); // string
var c = {};
console.log(typeof c); // object
var d = [];
console.log(typeof d); // object
console.log(Object.prototype.toString.call(d)); // [object Array]
console.log(function(){}.prototype.toString.call(d)); // [object Array]
console.log(Array.isArray(d)); // true

function Person(name) {
    this.name = name;
}
var e = new Person('Charles');
console.log(typeof e); // object
//The instanceof operator tests whether an object
//has in its prototype chain the prototype property of a constructor.
console.log(e instanceof Person); // true
console.log(e.constructor); // [Function: Person]
console.log(e instanceof Object); // true

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(Object.prototype.toString.call(null)); // [object Null]

var z = function() {
    return this;
};
console.log(z); // [Function]
console.log(typeof z); // function
console.log(z instanceof Object); // true