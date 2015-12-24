/**
 * Created by plastik on 15/11/15.
 */
'use strict';

var arr = [
    1,
    false,
    {
        name: 'Tony',
        address: 'La casa 12'
    },
    function (name) {
        var greeting = 'hello';
        console.log(greeting + ' ' + name);
    },
    'hello'
];

console.log(arr);