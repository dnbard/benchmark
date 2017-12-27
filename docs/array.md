# Arrays/List/Set Comparison

```js
const myArray = [];
```

## Libraries: 

* [collections/sorted-array](https://github.com/montagejs/collections)

## Environment - Node v8.8.1

## Tests

1. Init new instance of array and add **1** value

|  | Result | ops/sec |
| ------- | ------ | -------:|
| array | ■■■■■■▢▢▢▢ | 21,970,896 |
| collections-array | ■■■■■■■■■■ | 35,940,431 |
| collections-list | ■■■▢▢▢▢▢▢▢ | 9,730,871 |
| collections-set | ■■■▢▢▢▢▢▢▢ | 8,940,638 |
| collections-fastset | ◧▢▢▢▢▢▢▢▢▢ | 749,350 |

2. Init new instance of array and add **100** values

|  | Result | ops/sec |
| ------- | ------ | -------:|
| array | ■■■■■■■■■■ | 605,885 |
| collections-array | ■■■■■■■■■◧ | 591,414 |
| collections-list | ■■■■■▢▢▢▢▢ | 290,862 |
| collections-set | ■◧▢▢▢▢▢▢▢▢ | 102,229 |
| collections-fastset | ▢▢▢▢▢▢▢▢▢▢ | 8,144 |

3. Remove **by value**

|  | Result | ops/sec |
| ------- | ------ | -------:|
| array | ■■■■▢▢▢▢▢▢ | 6,507,973 |
| collections-array | ■■■■■■■■■■ | 15,355,969 |
| collections-list | ■■■■■◧▢▢▢▢ | 8,344,454 |
| collections-set | ■■■■◧▢▢▢▢▢ | 7,198,435 |
| collections-fastset | ◧▢▢▢▢▢▢▢▢ | 940,239 |

[Test source](https://github.com/dnbard/benchmark/blob/master/array-vs.js)
