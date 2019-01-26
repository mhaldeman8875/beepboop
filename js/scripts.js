//Business Logic:
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

//UI Logic:    
$(document).ready(function() {
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

    $("button#back").click(function(){
        location.reload(); //refreshes the page
      });
  });
