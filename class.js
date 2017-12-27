const suite = require('./core/suite')();

class MyClass extends Array{
    constructor(){
        super();

        this.method = function(){
            this.a = 1;
            this.a ++;
        }
    }
};
function MyFunctionClass(){
    Array.call(this, arguments);

    this.method = function(){
        this.a = 1;
        this.a ++;
    }
}
MyFunctionClass.prototype = Array.prototype;


function MyFunctionClass2(){
    Array.call(this, arguments);
}
MyFunctionClass2.prototype = Object.assign({}, Array.prototype, {
    method: function(){
        this.a = 1;
        this.a ++;
    }
});

var a1 = new MyFunctionClass();
var a2 = new MyFunctionClass2();
var b1 = new MyClass();

suite.add('Function(instance)', () => {
    var a = new MyFunctionClass();
}).add('Class(instance)', () => {
    var b = new MyClass();
}).add('Function(function call)', () => {
    a1.push(1);
    a1.splice(0, 1);
}).add('Class(function call)', () => {
    b1.push(1);
    b1.splice(0, 1);
}).add('function(method call)', () => {
    a1.method();
}).add('function(proto method call)', () => {
    a2.method();
}).add('Class(method call)', () => {
    b1.method();
}).run();
