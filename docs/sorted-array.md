# Sorted Array

## Libraries: 

* [sorted-array](https://github.com/javascript/sorted-array)
* [ordered-array](https://www.github.com/dnbard/ordered-array)
* [sorted-object-array](https://github.com/encero/sorted-object-array)
* [collections/sorted-array](https://github.com/montagejs/collections)

## Environment: 

* Node v8.8.1

## Tests: 

1. Real Case with **Numbers**  

Sorted array of random values. Create an array and add 100 values in it. **Some** values are going to require sorting.

| Library | Result |
| ------- | ------ |
| [sorted-array](https://github.com/javascript/sorted-array) | ■■■■■■■□□□ 60,745 ops/sec |
| [ordered-array](https://www.github.com/dnbard/ordered-array) | ■■■■■■■■■■ 82,242 ops/sec |
| [collections/sorted-array](https://github.com/montagejs/collections) | ■■■□□□□□□□ 28,283 ops/sec |
