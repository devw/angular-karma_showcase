/*global app*/
/* 
    This filter makes first letter uppercase and the rest lowercase in a string
*/
app.filter('titleCase', function () {
    'use strict';
    return function (val) {
        return val ? val.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) : val;
    };
});
