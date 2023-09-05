var addTwoPromises = async function(promise1,promise2){
    return new Promise(function(resolve,reject)=>{
        promise1.then((num1)) => {
            promise2. then((num2) =>{
                resolve(num1+num2);
            }
        };
    }
}

// correct code//
const addTwoPromises = async function(promise1, promise2) {
    return new Promise(function(resolve, reject) {
        Promise.all([promise1, promise2])
            .then(([num1, num2]) => {
                resolve(num1 + num2);
            })
            .catch(reject);
    });
};

