//intsAndStrings
// console.log("linked");

document.getElementById("sumDigits").onsubmit = function(event) {
    event.preventDefault();
        console.log("form submitted");
};
document.getElementById("submit").onclick = function() {
    //take the numbers from text field 
    var input = document.getElementById("input").value;
    //console.log(input);
        //display the input field in the display area next to the h1 "display"
        document.getElementById("display").innerHTML += input;
        //clear the input box
        document.getElementById("input").value = "";
        
};

document.getElementById("addDigits").onclick = function () {
    // console.log("addDigits submitted");
    //add digits from the display field
    var display = document.getElementById("display").innerHTML;
    //console.log(display);
    //have a variable to store the numbers that are added together
    var runningTotal = 0;
    //add the numbers in display to get the sum
    for (var i = 0; i < display.length; i++) {
        console.log(display[i]);
        runningTotal += parseInt(display[i]);
    }
    console.log(runningTotal);
    document.getElementById("display").innerHTML = runningTotal;
}