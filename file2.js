var methods = {};

this.newVar = 'Hello There';

methods.firstMethod = function (a,b) {
    console.log(a + b);
}

methods.secondMethod = function (a,b) {
    console.log(a - b);
}

exports.myData = methods;