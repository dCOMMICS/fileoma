Array.prototype.last = function() {
    
    if(this.length === 0){
        console.log(-1)
        return -1
    }
    
    console.log(this[this.length -1])
    return this[this.length -1]
};


// array  prototype last //


Array.prototype.groupBy = function(fn) {
    let result = {};
    for (let i = 0; i < this.length; i++) {
        let key = fn(this[i]);
        if (!result[key]){
            result[key] = [];
        }
        result[key].push(this[i]);
    }
    return result;
}