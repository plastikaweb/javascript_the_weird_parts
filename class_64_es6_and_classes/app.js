/**
 * Created by plastik on 14/2/16.
 */
var baseObj = {};
// properties and methods we want all objects to have access to

function myConstructorFunction() {
};
// let's make a constructor function too

myConstructorFunction.prototype = baseObj;
// remember objects are set equal by reference,
// so these two things now point to the same memory spot

var objA = Object.create(baseObj);
// __proto__ points to baseObj

var objB = new myConstructorFunction();
// __proto__ also points to baseObj!