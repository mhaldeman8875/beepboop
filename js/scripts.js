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

    var name = $("input#name").val();
    var userArray = [];
    var resultArray = [];

    resultArrayLength = resultArray.length;
    if (resultArrayLength > 0) {
        resultArray = [];
    }

    for (i = 0; i <= countTo; i++) {
        i = i.toString();
        userArray.push(i);
    };

    userArray.forEach(function(number) {
        
        
        if((number%3) === 0 && number!=0) {
         $("results#output2").show();
        } else if (number.search(/1/gm) >= 0) {
    
        } else if (number.search(/0/gm) >= 0) {
    
        }
        resultArray.push(number);


   //var countTo = parseInt($("input#number").val());

    
$(document).ready(function(){
    $("#formOne").submit(function(event){
        

        $(".name").text(name);
        $("#results").show();
        $("#sysinit").hide();
        $("#robo2").fadeIn();
        $("#robo1").hide();


      event.preventDefault();
    });
  
  });
