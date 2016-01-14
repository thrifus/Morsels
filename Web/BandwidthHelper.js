var poll = setInterval(timer, 1000);

function timer() {
   var date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var minuteString = minutes < 10 ? "0" + minutes : minutes;

   // Display the time
   $(".time").html("<h1>" + hours + ":" + minuteString + "</h1>");

   // Disable videos and games
   if ((hours >= 8 && hours < 15) || (hours == 14 && minutes <= 40)) {
      /* hours == 15, minutes <= 14 */
      $("video").hide();
      $("video").parent().html("<b>Can you do us all a favor and not eat up all the bandwidth with your video watching?</b>" + "<br/>" + "<b>Thank you!" + "<br /> <i>(This was a video)</i></b>" + "<br/>" + "<br/>");
      $("embed").hide();
      $("embed").parent().html("<b>This is no time for childish games.</b>" + "<br/>" + "<b>Shouldn't you be studying or doing something related to school?" + "<br /> <i>(This was an embedded frame, such as a game)</i></b>" + "<br/>" + "<br/>");
   } else {
      $("video").show();
      $("embed").show();
   }
}
