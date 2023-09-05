var cancellable = function(fn, args, t) {
    var cleartime = setTimeout(() => fn(...args),t);
    var cancelFn = () =>  clearTimeout(cleartime);
    
    return cancelFn;
};