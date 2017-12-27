const Benchmark = require('benchmark');

function createPromiseMethodWrapper(oldSuite){
    return function(handler){
        oldSuite.onthen = handler;
        oldSuite.run();
        return module.exports();
    }
}

module.exports = function(){
    const suite = new Benchmark.Suite();
    suite.on('complete', function(){
        // console.log(typeof suite.onthen);

        if (typeof suite.onthen === 'function'){
            suite.onthen(this);
        }
    });

    suite.on('error', function(err){
        if (typeof suite.oncatch === 'function'){
            suite.oncatch(this);
        }
    });

    suite.on('cycle', event => {
        console.log(String(event.target));
    });

    suite.then = createPromiseMethodWrapper(suite, 'then');
    // suite.catch = createPromiseMethodWrapper('catch', suite);

    return suite;
}
