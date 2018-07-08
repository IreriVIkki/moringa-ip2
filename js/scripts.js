$(document).ready(function(){
  $("#subscribe").click(function(){
    var email = $("email-entry").val();

    if (email.length < 5){
      alert("Please enter a valid email");
    }else {
      alert("Tommorow's Menu has been sent to your email");
    }
  });
});
