/**
 * Created by plastik on 15/11/15.
 */
'use strict';

function sayHiLater() {

    var greeting = 'HI!';

    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}

sayHiLater();


//CALLBACK

function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000;

    callback();
}



tellMeWhenDone(function() {
    console.log('All done...');
});