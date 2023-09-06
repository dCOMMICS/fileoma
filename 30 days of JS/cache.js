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


// corrected code.//

var TimeLimitedCache = function() {
    this.pairs = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const vol = this.pairs.get(key);
    const ans = vol && (vol !== -1) ? true : false
    this.pairs.set(key, {
        val: value,
        dur: duration,
        index: (vol?.index ?? 0) + 1,
    });
    const lll = (duration, ind) => {
        setTimeout(() => {
            const volIn =  this.pairs.get(key);
            if (ind === volIn.index) {
                this.pairs.set(key, {
                    ...volIn,
                    val: -1
                });
                return ans;
            }
            lll(volIn.dur, volIn.index)
        }, duration)
    }
    lll(duration, this.pairs.get(key).index);
    return ans;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.pairs.get(key)?.val ?? -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let sum = 0;
    for (let [key, value] of this.pairs) {
        if (value.val !== -1) sum++;
    }
    return sum;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */