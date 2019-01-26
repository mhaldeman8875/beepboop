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



var bleepBloop = function(number) {
    
    var numberArray = [];
    var numberList = "";

    for (var i = 0; i <= number; i++) {
        numberArray.push(i.toString());
    } 

    numberList += "beep";
    userName = $("#name").val();


    for (var index =1; index < numberArray.length; index++) {
        if (index%3 === 0) {
            numberList += " ERROR! I'm sorry " + userName + ", I'm afraid I can't do that. ";
        } else if (numberArray[index].includes("1")) {
           numberList += " bloop " + "";
        } else if (numberArray[index].includes("0")) {
            numberList += " bleep ";
        } else { 
            numberList += index + ", ";
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

        var number = parseInt($("input#number").val());
        
        var result = bleepBloop(number);
        
        $("#robotOutput").text(result);
        
    });

    $("$back").tryAgain(function() {
        location.reload();
    });
  
  });
