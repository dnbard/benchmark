const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

class MyClass extends Array{};
function MyFunctionClass(){}
MyClass.prototype = Array;

suite.add('Function', () => {
    var a = new MyClass();
}).add('Class', () => {
    var b = new MyFunctionClass();
}).on('cycle', event => {
    console.log(String(event.target));
}).on('complete', function(){
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run();