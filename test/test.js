var runner = require('../index'),
    run = runner(),
    stack = runner.stack(),
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
