const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const SortedArray = require('sorted-array');
const OrderedArray = require('ordered-array');
const SortedObjectArray = require('sorted-object-array');
const SortedArray2 = require('collections/sorted-array');
const { v4 } = require('uuid');

suite.add('SortedArray(real case)', () => {
    const array = new SortedArray([]);
    for(let i = 0; i < 100; i ++){
        array.insert(Math.random());
    }
}).add('OrderedArray(real case)', () => {
    const array = new OrderedArray();
    for(let i = 0; i < 100; i ++){
        array.insert(Math.random());
    }
}).add('collections/sorted-array(real case)', () => {
    const array = new SortedArray2([]);
    for(let i = 0; i < 100; i ++){
        array.push(Math.random());
    }
}).add('SortedArray(worst case)', () => {
    const array = new SortedArray([]);
    for(let i = 100; i > 0; i --){
        array.insert(i);
    }
}).add('OrderedArray(worst case)', () => {
    const array = new OrderedArray();
    for(let i = 100; i > 0; i --){
        array.insert(i);
    }
}).add('collections/sorted-array(worst case)', () => {
    const array = new SortedArray2([]);
    for(let i = 100; i > 0; i --){
        array.push(i);
    }
}).add('SortedArray(best case)', () => {
    const array = new SortedArray([]);
    for(let i = 0; i < 100; i ++){
        array.insert(i);
    }
}).add('OrderedArray(best case)', () => {
    const array = new OrderedArray();
    for(let i = 0; i < 100; i ++){
        array.insert(i);
    }
}).add('collections/sorted-array(best case)', () => {
    const array = new SortedArray2([]);
    for(let i = 0; i < 100; i ++){
        array.push(i);
    }
}).add('SortedArray(objects)', () => {
    const array = new SortedArray([], (a ,b) => a.id === b.id ? 0 : a.id < b.id ? -1 : 1);
    for(let i = 0; i < 100; i ++){
        array.insert({ id: v4() });
    }
}).add('OrderedArray(objects)', () => {
    const array = new OrderedArray();
    array.setEquals((a ,b) => a.id === b.id ? 0 : a.id < b.id ? -1 : 1);
    for(let i = 0; i < 100; i ++){
        array.insert({ id: v4() });
    }
}).add('SortedObjectArray(objects)', () => {
    const array = new SortedObjectArray('id');
    for(let i = 0; i < 100; i ++){
        array.insert({ id: v4() });
    }
}).add('collections/sorted-array(objects)', () => {
    const array = new SortedArray2([],
        (a, b) => a.id === b.id,
        (a ,b) => a.id === b.id ? 0 : a.id < b.id ? -1 : 1);
    for(let i = 0; i < 100; i ++){
        array.push({ id: v4() });
    }
}).on('cycle', event => {
    console.log(String(event.target));
}).on('complete', function(){
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run();
