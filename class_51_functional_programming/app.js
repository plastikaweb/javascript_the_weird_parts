/**
 * Created by plastik on 15/11/15.
 */
'use strict';

var arr1 = [1, 2, 3];

function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
          fn(arr[i])
        );
    }

    return newArr;
}

var arr2 = mapForEach(arr1, function (item) {
    return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function (item) {
    return item < 2;
});
console.log(arr3);