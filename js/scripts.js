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
    var userArray = [];
    var numberArray = [];

    for (var i = 0; i <= countTo; i++) {
        userArray.push(i.toString());
    };

    numberArray.forEach(function(number){
        var zero = number.search(/0/gm);
        var one = number.search(/1/gm);
        
        if ((number%3) === 0 && number!=0) {
            switch(number) {
             default:
                number = userName + ", FATAL ERROR CANNOT COMPUTE, "
                break; 
            }
        } else if (one >= 0) {
            switch(one) {
                default:
                    number = "bloop";
                break;
            }
    
        } else if (zero >= 0) {
            switch(zero) {
                default:
                    number = "bleep";
                break;
            }
        } else { }
        resultArray.push(number);
        
    });

    resultArray.push("The deveopers were slacking when they wrote me so I'm glitchy...");
    resultArrayJoined = resultArray.join(" ");
}
    
$(document).ready(function(){
    $("#container").submit(function(event){

        event.preventDefault();
        var userName = $("input#name").val();
        var numberInput = parseInt($("input#number").val());

        $("#result").show();
        $("#sysinit").hide();
        $("#robo2").fadeIn();
        $("#robo1").hide();

        bleepBloop(numberInput);
        if (numberInput >=150) {
            
            $("#output").text("whoops too big");
            
        } else {
            $("#output").text(resultArrayJoined);
        }
        
    });

    $("#tryAgain").click(function() {
        location.reload();
    });
  
  });
