# Sorted Array

## Libraries: 

* [sorted-array](https://github.com/javascript/sorted-array)
* [ordered-array](https://www.github.com/dnbard/ordered-array)
* [sorted-object-array](https://github.com/encero/sorted-object-array)
* [collections/sorted-array](https://github.com/montagejs/collections)

## Environment: 

* Node v8.8.1

## Tests: 

1. Real case with **Numbers**  

Sorted array of random values. Create an array and add 100 values in it. **Some** values are going to require sorting.

| Library | Result | ops/sec |
| ------- | ------ | -------:|
| [sorted-array](https://github.com/javascript/sorted-array) | ■■■■■■■□□□ | 60,745 |
| [ordered-array](https://www.github.com/dnbard/ordered-array) | ■■■■■■■■■■ | 82,242 |
| [collections/sorted-array](https://github.com/montagejs/collections) | ■■■□□□□□□□ | 28,283 |

2. "Worst" case with **Numbers**  

Sorted array of non-random values. Create an array and add 100 values in it. **All** values are going to require sorting.

| Library | Result | ops/sec |
| ------- | ------ | -------:|
| [sorted-array](https://github.com/javascript/sorted-array) | ■■■■■■■■■■ | 63,406 |
| [ordered-array](https://www.github.com/dnbard/ordered-array) | ■■■■■■■■■□ | 57,322 |
| [collections/sorted-array](https://github.com/montagejs/collections) | ■■■■■□□□□□ | 34,242 |

3. "Best" case with **Numbers**  

Sorted array of non-random values. Create an array and add 100 values in it. **Zero** values are going to require sorting.

| Library | Result | ops/sec |
| ------- | ------ | -------:|
| [sorted-array](https://github.com/javascript/sorted-array) | ■■□□□□□□□□ | 108,735 |
| [ordered-array](https://www.github.com/dnbard/ordered-array) | ■■■■■■■■■■ | 481,945 |
| [collections/sorted-array](https://github.com/montagejs/collections) | ◧□□□□□□□□□ | 32,311 |

4. Real case with **Objects**

Sorted array of random Objects. Create an array and add 100 values in it. **Some** values are going to require sorting.

| Library | Result | ops/sec |
| ------- | ------ | -------:|
| [sorted-array](https://github.com/javascript/sorted-array) | ■■■■■■□□□□ | 1,782 |
| [ordered-array](https://www.github.com/dnbard/ordered-array) | ■■■■■■■□□□ | 2,009 |
| [sorted-object-array](https://github.com/encero/sorted-object-array) | ■■■■■■■■■□ | 2,564 |
| [collections/sorted-array](https://github.com/montagejs/collections) | ■■■■■■■■■■ | 2,939 |
