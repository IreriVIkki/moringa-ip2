$(document).ready(function(){
  $("#subscribe").click(function(){
    var email = $("#email-entry").val();

    if (email.length < 5){
      $('#invalid-email').removeClass("invalid-email");
    }else {
      $('#valid-email').removeClass("valid-email");
    }
  });
});
