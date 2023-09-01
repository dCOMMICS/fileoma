
var createCounter = function(init) {
    var ans = init;

    return {
        increment: () => ++ans,
        decrement: () => --ans,
        reset: () => ans = init,
    }
};

// counter function II//