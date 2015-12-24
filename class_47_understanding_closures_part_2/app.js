/**
 * Created by plastik on 15/11/15.
 */
'use strict';

function build() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
          (function (j) {
              return function () {
                  console.log(j);
              };
          }(i))
        );
    }

    return arr;
}

function build2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        (function (j) {
            arr.push(function () {
                console.log(j);
            });
        })(i);
    }

    return arr;
}

var fs = build();

var fs2 = build2();

fs[0]();
fs[1]();
fs[2]();

fs2[0]();
fs2[1]();
fs2[2]();