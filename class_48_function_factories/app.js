/**
 * Created by plastik on 15/11/15.
 */
'use strict';

function makeGreeting(lang) {

    return function(firstmane, lastname) {
        if(lang === 'en') {
            console.log('Hello ' + firstmane + ' ' + lastname);
        }

        if(lang === 'es') {
            console.log('Hola ' + firstmane + ' ' + lastname);
        }
    };

}

var greetEng = makeGreeting('en');
var greetSpa = makeGreeting('es');


greetEng('Carlos', 'Matheww');
greetSpa('Carlos', 'Mateo');