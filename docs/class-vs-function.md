# Class vs Function declaration

```js
class MyClass extends Array{
    constructor(){
        super();

        this.method = function(){
            this.a = 1;
            this.a ++;
        }
    }
}
```

**vs**

```js
function MyClass(){
    Array.call(this, arguments);

    this.method = function(){
        this.a = 1;
        this.a ++;
    }
}

MyClass.prototype = Array.prototype;
```

## Environment - Node v8.8.1

## Tests

1. New Object instantiation

|  | Result | ops/sec |
| ------- | ------ | -------:|
| Function | ■■■■■■■■▢▢ | 3,211,913 |
| Class | ■■■■■■■■■■ | 4,073,316 |

2. Prototype method call

```js
a.push(1);
a.splice(0, 1);
```

|  | Result | ops/sec |
| ------- | ------ | -------:|
| Function | ■■■■■■■■■■ | 1,422,512 |
| Class | ■■■■■■▢▢▢▢ | 837,225 |

3. Own method call

```js
function(){
    this.a = 1;
    this.a ++;
}
```

|  | Result | ops/sec |
| ------- | ------ | -------:|
| Function(method in `this`) | ■■■■■■■■■■ | 616,267,637 |
| Function(method in `prototype`) | ■■■■■■■■■■ | 619,904,483 |
| Class | ■■■■■■■■■■ | 614,892,513 |

[Test source](https://github.com/dnbard/benchmark/blob/master/class.js)
