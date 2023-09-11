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

// do while loop //

var i = 1;
do {
    i *=2;
    document.write(i+",");

} while (i<100)


// break //

for (var i =0; i< 10; i++){
    if (i==5){
        break;      //stops and exits the cycle 
    }               // last output is 4

    document.write(i +",");
}

// continue //

for (var i = 0; i <10; i++){
    if (i==5){continue;}    // skips the rest of the cycle
    document.write(i+ ","); //skips 5
}

// if - else //

if ((age>=14)&&(age<19)) {
    status = "Eligible";  // name status depreciated //
} else {
    status = "not eligible.";
}


// switch statement //
switch(new Date().getDay()){
    case 6:
        text = "Saturday";
        break;
        case 0:
            text = "Sunday";
            break;
            default:
                text="Whatever";

}

// day 2 //

// finalizing things 

// work on the cheatsheet //  