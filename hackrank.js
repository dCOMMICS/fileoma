function plusMinus(arr){
    let positive=0;
    let negative=0;
    let zero=0;

    for (let i=0; i<arr.length; i++) {
        if(arr[i]==0){
            zero++;
        } else if(arr[i]>0){
            positive++;
        } else {
            negative++;
        }
    }

    console.log((positive/arr.length).toFixed(6));
    console.log((negative/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));

} return go (f,seed,[])
