/**
<<<<<<< Updated upstream
 * Created by carlos.matheu on 29/12/2015.
 */
=======
 * Created by plastik on 12/1/16.
 */
'use strict';

>>>>>>> Stashed changes
var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var john = {
<<<<<<< Updated upstream
    firstName: 'john',
    lastName: 'Doe'
};

john.__proto__ = person;

//REFLECTION
=======
    firstName: 'John',
    lastName: 'Doe'
};

//don't do this EVER! for demo porpouses only!!!
john.__proto__ = person;

>>>>>>> Stashed changes
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

<<<<<<< Updated upstream
//EXTEND
var jane = {
    address: '111 St'
};

var jim = {
    getFirstName: function() {
        return this.firstName;
    }
}

_.extend(john, jane, jim);
=======
var jane = {
    address: 'Main St 11th',
    getFormalFullName: function() {
        return this.lastName + ', ' + this.firstName;
    }
};

var jim = {
  getFirstName: function() {
      return this.firstName;
  }
};

//needs underscore

_.extend(john, jane, jim);
console.log(john);

>>>>>>> Stashed changes
