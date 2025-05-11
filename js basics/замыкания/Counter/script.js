var createCounter = function(n) {
    
    return function() {
        let counter = n++
        return counter
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */