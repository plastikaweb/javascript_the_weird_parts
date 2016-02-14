/**
 * Created by plastik on 3/2/16.
 */
'use strict';

String.prototype.isLengthGreatherThan = function(limit) {
  return this.length > limit;
};

console.log('John'.isLengthGreatherThan(3));

Number.prototype.isPositive = function() {
    return this > 0;
};

var a = -3;

console.log(a.isPositive());