// loops //
// 1 for loop //

for (var h = 0; h < 10; h++){
    document.write (h + ":" + h *3 + "<br/>");

    var sum = 0;
    for (var h = 0; h < a.length; h++ ) {
        sum += a[h]; // parsing an array 
    }
    html = "";

    for (var h of custOrder){
        html += "<li>" + h +"</li>";
    }
}


// while loop //

var i = 1;          // initialize
while (i < 100){        // enter the cycle if statement
    i*=2;               // increment to avoid infinite loop 
    document.write(i+ ","); // output
}