/**
 * Created by carlos.matheu on 29/12/2015.
 */
var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var john = {
    firstName: 'john',
    lastName: 'Doe'
};

john.__proto__ = person;

//REFLECTION
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

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