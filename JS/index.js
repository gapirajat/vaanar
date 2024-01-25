$(document).ready(function(){
    // var loaderVideo = $("#loader")[0]; // Get the raw DOM element

      // Function to unmute the video
    // function unmuteVideo() {
    //   loaderVideo.muted = false;
    // }

    // Unmute the video on page load
    // unmuteVideo();

    var video = $('<video id="loader" width="100%" height="99%" autoplay playsinline></video>');

    // Check screen width and set video source accordingly
    if ($(window).width() <= 600) {
        // Small screen, load mobile video
        video.append('<source src="./images/loader_mobile.mp4" type="video/mp4">');
    } else {
        // Larger screen, load desktop video
        video.append('<source src="./images/loader.mp4" type="video/mp4">');
    }
    // removeLoader()
    // Append the video element to the loader-container
    $('.loader-container').append(video);
    $('video').on('ended',function(){
      removeLoader()
      console.log('Video has ended!');
    });

    $("#homeIcon").click(function(e){
        $("#menu-about-contact").toggleClass("hide");
        $("#home").toggleClass("hide");
        $("#work").toggleClass("hide");
        e.stopPropagation();
        console.log("homeiconclick")
      });


    $("#workIcon").click(function(){
      $("#work").toggleClass("hide");
      $("#home").toggleClass("hide");
      $("#menu-about-contact").toggleClass("hide");
      console.log("workiconclick")
    });

    $("#aboutIcon").click(function(){
      $("#about").toggleClass("hide");
      $("#home").toggleClass("hide");
      $("#logo").addClass("scale-down-logo").removeClass("scale-up-logo");
      // $("#logo-div").addClass("scale-down-div").removeClass("scale-up-div");
      console.log("abouticonclick")
    });

    $("#contactIcon").click(function(){
      $("#contact").toggleClass("hide");
      $("#home").toggleClass("hide");
      $("#logo").addClass("scale-down-logo").removeClass("scale-up-logo");
      // $("#logo").addClass("scale-down-div").removeClass("scale-up-div");
      console.log("contacticonclick")
    });


    $("#abouthomeIcon").click(function(){
      $("#about").toggleClass("hide");
      $("#home").toggleClass("hide");
      $("#logo").addClass("scale-up-logo").removeClass("scale-down-logo");
      console.log("homeiconclick")
    });
    
    $("#contacthomeIcon").click(function(){
      $("#contact").toggleClass("hide");
      $("#home").toggleClass("hide");
      $("#logo").addClass("scale-up-logo").removeClass("scale-down-logo");
      console.log("homeiconclick")
    });
});


function removeLoader(){
  $( "#loader" ).fadeOut(500, function() {
    // fadeOut complete. Remove the loading div
    $( "#loader" ).remove(); //makes page more lightweight 
    $("#work").toggleClass("hide");
  });  
}
