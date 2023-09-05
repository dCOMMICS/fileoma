var cancellable = function(fn, args, t) {
    fn(...args);
    var interval = setInterval(()=> fn(...args),t);
    const cancelFn = () => clearInterval(interval);
    return cancelFn;
};