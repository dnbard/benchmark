const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const CollectionsArray = require("collections/shim-array");
const CollectionsList = require("collections/list");
const CollectionsSet = require("collections/set");
const CollectionsFastSet = require("collections/fast-set");

let array = [];

console.log('ADD / PUSH');

suite.add('array', () => {
    const array = [];
    array.push(Math.random());
}).add('collections-array', () => {
    const array = new CollectionsArray();
    array.push(Math.random());
}).add('collections-list', () => {
    const array = new CollectionsList();
    array.push(Math.random());
}).add('collections-set', () => {
    const array = new CollectionsSet();
    array.add(Math.random());
}).add('collections-fastset', () => {
    const array = new CollectionsFastSet();
    array.add(Math.random());
}).on('cycle', event => {
    console.log(String(event.target));
}).on('complete', function(){
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('\n\nREMOVE BY VALUE');

    const suite = new Benchmark.Suite;
    suite.add('array', () => {
        const value = Math.random();
        const array = [ value ];
        array.splice(array.indexOf(value), 1);
    }).add('collections-array', () => {
        const value = Math.random();
        const array = CollectionsArray.from(value);
        array.delete(value);
    }).add('collections-list', () => {
        const value = Math.random();
        const array = CollectionsList.from(value);
        array.delete(value);
    }).add('collections-set', () => {
        const value = Math.random();
        const array = CollectionsSet.from(value);
        array.delete(value);
    }).add('collections-fastset', () => {
        const value = Math.random();
        const array = CollectionsFastSet.from(value);
        array.delete(value);
    }).on('cycle', event => {
        console.log(String(event.target));
    }).on('complete', function(){
        console.log('\n\nADD 100 VALUES');
        
        const suite = new Benchmark.Suite;
        suite.add('array', () => {
            const array = [];
            for(let i = 0; i < 100; i ++)
                array.push(Math.random());
        }).add('collections-array', () => {
            const array = new CollectionsArray();
            for(let i = 0; i < 100; i ++)
                array.push(Math.random());
        }).add('collections-list', () => {
            const array = new CollectionsList();
            for(let i = 0; i < 100; i ++)
                array.push(Math.random());
        }).add('collections-set', () => {
            const array = new CollectionsSet();
            for(let i = 0; i < 100; i ++)
                array.add(Math.random());
        }).add('collections-fastset', () => {
            const array = new CollectionsFastSet();
            for(let i = 0; i < 100; i ++)
                array.add(Math.random());
        }).on('cycle', event => {
            console.log(String(event.target));
        }).run();
    }).run();
}).run();
