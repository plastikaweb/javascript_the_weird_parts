/**
 * Created by plastik on 15/11/15.
 */
'use strict';

var c = {
    name: 'The c object',
    log: function() {
        this.name = 'Updated c object';
        console.log(this);
        var setName = function(newName) {
            this.name = newName;
        }.bind(this);
        setName('Updated again the c object!');
        console.log(this);
    }
};
