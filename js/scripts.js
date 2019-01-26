// Specs in ascending order of priority:
//     * if the number inputted is divisible by 3, the program will return an error response using their name;
//         - input: 30
//         - output: Sorry, [name] but due to technical difficulties your input could not be computed
    
//     * the program will replace all digits in any number containing a 1 with "Boop";
//         -input example: 12
//         - output: boop, 2, [text], 4...Boop, boop, [text]
    
//     * the program will replace all digits in any number containing a zero with "Beep";
//         - input example: 10
//         - output example: beep, boop, 2, [text], 4, 5, [text], 7, 8, [text], beep



var bleepBloop = function(countTo) {
    var numberList = "";
    var numberArray = [];

    for (var i = 0; i <= countTo; i++) {
        numberArray.push(i.toString());
    } 

    numberList += "beep";
    userName = $("input#name").val;

    for (var index =1; index < numberArray.length; index++) {
        if (index%3 === 0) {
            numberList += "I'm sorry, " + userName + " my creators cut corners and I am broken as a result ";
        } else if (numberArray[index].includes("1")) {
           numberList += " bloop" + "";
        } else if (numberArray[index].includes("0")) {
            numberList += " bleep ";
        } else { 
            
        }
    }
    return numberList;        
};

    
$(document).ready(function(){
    $("#container").submit(function(event){

        event.preventDefault();

        $("#results").toggleClass("results");
        $("#sysinit").hide();
        $("#robo2").fadeIn();
        $("#robo1").hide();

        var countTo = parseInt($("input#number").val());
        
        var result = bleepBloop(countTo);
        
        $("#robotOutput").append(result);
        
    });

    $("#tryAgain").click(function() {
        location.reload();
    });
  
  });
