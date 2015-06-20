### Install

npm install taskticker

### Usage

```javascript
var taskCreator = require('taskticker'),
    run = taskCreator(),
    stack = taskCreator.stack(),
    count = 0;


run('count', function(){
    console.log('--'+(++count));
});

run('count', function(){
    console.log('--'+(++count));
});

stack('first', function(next){
    console.log('--first');
    next();
});
stack('second', function(){
    console.log('--second');
});
```

The functions are run according to the order they are defined.

## Interface

### taskCreator(integer milliseconds)

The integer argument is optional with a default of 1000.

```javascript
var taskCreator = require('taskticker'),
    run = taskCreator(),
    count = 0;


run('count', function(){
    console.log('--'+(++count));
});

run('count', function(){
    console.log('--'+(++count));
});
```


### taskCreator.stack(integer)

Same as taskCreator, but this is the async version.

Calling the `next` callback in your function calls the next function in the stack.

```
var taskCreator = require('taskticker'),
    stack = taskCreator.stack(),
    count = 0;

stack('first', function(next){
    console.log('--first');
    //call the second function in the stack.
    next();
});
stack('second', function(){
    console.log('--second');
});
```
