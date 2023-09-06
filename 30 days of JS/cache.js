var TimeLimitedCache = function (){
    this.data = {};
}

TimeLimitedCache.prototype.set = function (key, value, duration){
    var now = Date.now();
    var expiredAt = now + duration;

    if (this.data[key] && this.data[key].expiresAt > now) {
        this.data[key].value = value;
        this.data[key].expiresAt = expiredAt;
        return true;
    } else {
        this.data[key] = { value: value, expiresAt: now};
    }
    return false;
}

TimeLimitedCache.prototype.get = function (key){
    var now = Date.now();
    var value;

    if (this.data[key] && this.data[key].expiresAt > now) {
        value = this.data[key].value;
    } else{
        value = -1
    }

    return value;
};

TimeLimitedCache.prototype.count = function (){
    var count = 0;

    for (var key in this.data) {
        if(this.data.hasOwnProperty(key)&& this.data[key].expiredAt> Date.now
        count ++;
    }

}

return count;
};


// fixed version of Time limited cache code//

var TimeLimitedCache = function () {
    this.data = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    var now = Date.now();
    var expiredAt = now + duration;

    if (this.data[key] && this.data[key].expiresAt > now) {
        this.data[key].value = value;
        this.data[key].expiresAt = expiredAt;
    } else {
        this.data[key] = { value: value, expiresAt: expiredAt };
    }
};

TimeLimitedCache.prototype.get = function (key) {
    var now = Date.now();
    var value = null;

    if (this.data[key] && this.data[key].expiresAt > now) {
        value = this.data[key].value;
    }

    return value;
};

TimeLimitedCache.prototype.count = function () {
    var count = 0;
    var now = Date.now();

    for (var key in this.data) {
        if (this.data.hasOwnProperty(key) && this.data[key].expiresAt > now) {
            count++;
        }
    }

    return count;
};
