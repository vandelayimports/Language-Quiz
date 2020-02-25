$(document).ready(function() {
    $("#form").submit(function(event) {
  
    event.preventDefault();

    var total = 0;
    var nameInput = $("input#name").val();
    var question1Input = parseInt($("select#question1").val());
    var question2Input = parseInt($("select#question2").val());
    var question3Input = parseInt($("select#question3").val());
    var question4Input = parseInt($("select#question4").val());
    var question5Input = parseInt($("select#question5").val());
  

    $(".fadeIn").fadeIn();
    $(".name").text(nameInput);

    total = question1Input + question2Input + question3Input + question4Input + question5Input;

    if (total <= 6) {
    $("#python-result").show()
    $("#java-result").hide()
    $("#react-result").hide()
    } else if (total <= 12) {
    $("#java-result").show()
    $("#python-result").hide()
    $("#react-result").hide()
    } else {
    $("#react-result").show()
    $("#python-result").hide()
    $("#java-result").hide()
    }
        
    });
  });