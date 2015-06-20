module.exports = runner;

/*
git remote add origin https://github.com/hollowdoor/taskticker.git
git push -u origin master
npm publish
*/

function runner(timing){

    timing = timing || 1000;

    return function(comment, cb){
        if(typeof cb === 'undefined' && typeof comment === 'function'){
            cb = comment;
            comment = null;
        }

        timing = timing + 1000;

        setTimeout(function(){
            if(comment)
                console.log(comment);
            cb();
        }, timing);
    };
}

runner.stack = function(timing){
    timing = timing || 1000;

    var stack = [],
        index = -1,
        started = false,
        next = function(){

            var i = ++index;


            setTimeout(function(){
                if(stack[i]){
                    if(stack[i].comment)
                        console.log(stack[i].comment);
                    stack[i].cb(next);
                }else{
                    index = -1;
                }
            }, timing);
        };

    return function(comment, cb){
        if(typeof cb === 'undefined' && typeof comment === 'function'){
            cb = comment;
            comment = null;
        }

        stack.push({
            comment: comment,
            cb: cb
        });

        if(!started){
            next();
            started = true;
        }
    };
};
