$(document).ready(function(){
  // var loaderVideo = $("#loader")[0]; // Get the raw DOM element

// Function to unmute the video
// function unmuteVideo() {
//   loaderVideo.muted = false;
// }

// Unmute the video on page load
// unmuteVideo();

function cloneSVG() {
  const svgContainer = document.getElementById('svgContainer');
  const originalSvg = document.getElementById('logo');
  const rect = originalSvg.getBoundingClientRect();
  const containerRect = svgContainer.getBoundingClientRect();

  const cloneX = rect.left - containerRect.left;// - svgContainer.scrollLeft;
  const cloneY = rect.top - containerRect.top;// - svgContainer.scrollTop;

  const clone = originalSvg.cloneNode(true);
  clone.removeAttribute('id');
  //clone.style.left = `${cloneX}px`;
  //clone.style.top = `${cloneY}px`;
  clone.classList.add('clone'); // Apply clone-specific styles
  
  const computedStyle = window.getComputedStyle(originalSvg);
  clone.style.transform = computedStyle.transform;

  svgContainer.appendChild(clone);

  setTimeout(() => {
    clone.parentNode?.removeChild(clone);
  }, 200); // Remove clone after fade out
}

setInterval(cloneSVG, 30);

var video = $('<video id="loader1" width="100%" height="99%" autoplay playsinline></video>');


// Check screen width and set video source accordingly
if ($(window).width() <= $(window).height()) {
  // Small screen, load mobile video
  console.log('mobile');
  // var video = $('<video id="loader" width="100%" height="99%" autoplay playsinline></video>');
  video.append('<source src="./images/loader_mobile.mp4" type="video/mp4">');
  // var promise = video[0].play();
  video.removeAttr("controls");

  function isVideoPlaying(video) {
    // Check if video is paused; if it's paused, it's definitely not playing
    console.log(video[0].paused,video[0].ended,video[0].readyState);
    return !video[0].paused && !video[0].ended && video[0].readyState > 2;
}
  $('.loader-container').append(video);
  if (!isVideoPlaying(video)) {
    $('.loader-container').append('<video id="loader2" width="100%" height="99%" autoplay muted playsinline><source src="./images/loader_mobile.mp4" type="video/mp4"></video>');
    
  }
  


// promise.then(function() {
//     // Autoplay with sound is enabled
//     console.log('Autoplay with sound is enabled.');
//     // Here, you don't need to change the video attributes since autoplay with sound worked
//     video.prop('muted', false)
//     $('.loader-container').append(video);
// }).catch(function(error) {
//     // Autoplay with sound is not allowed
//     console.log('Autoplay with sound is not allowed. Error: ' + error);
//     //alert(promise);
//     // Here, you might decide to mute the video and try to play it again or handle it differently
//     // $('#loader2').remove();
//     // var video1 = $('</video>');
    
//     setTimeout(1000);
//     var promise2 = video[0].play();
//     promise2.then(function() {
//       video.prop('muted', false)
//       $('.loader-container').append(video);
//       }).catch(function(error2) {
//       console.log(error2);
//       video.prop('muted', true)
//       $('.loader-container').append(video);
        
//       }
      
//     )
    // video1[0].play().catch(e => console.log("Failed to play muted video automatically after rejection:", e)); // Attempt to play it muted
    
  //   $('#loader').on('ended', function() {
  //     console.log('Video playback has ended. Removing the video element.');
  //     $('video').remove(); // Removes the video element from the DOM
  // });
// }
  // );

} else {
  // Larger screen, load desktop video
//   console.log($(window).height())
//   video.append('<source src="./images/loader.mp4" type="video/mp4">');
//   var promise = video[0].play();

// promise.then(function() {
//   // Autoplay with sound is enabled
//   console.log('Autoplay with sound is enabled.');
//   // Here, you don't need to change the video attributes since autoplay with sound worked
// }).catch(function(error) {
//   // Autoplay with sound is not allowed
//   console.log('Autoplay with sound is not allowed. Error: ' + error.message);
//   // Here, you might decide to mute the video and try to play it again or handle it differently
//   video.attr('muted', true); // Mute the video as a fallback
  // alert('Please enable audio to enjoy our video content.');
  //video[0].resume().catch(e => console.log("Failed to play muted video automatically after rejection:", e)); // Attempt to play it muted
   console.log('desktop');
  // var video = $('<video id="loader" width="100%" height="99%" autoplay playsinline></video>');
  video.append('<source src="./images/loader.mp4" type="video/mp4">');
  // var promise = video[0].play();

  function isVideoPlaying(video) {
    // Check if video is paused; if it's paused, it's definitely not playing
    console.log(video[0].paused,video[0].ended,video[0].readyState);
    
    // sleep(2000);
    return !video[0].paused && !video[0].ended && video[0].readyState > 2;
}
  $('.loader-container').append(video);
  
      console.log(isVideoPlaying(video));
      video.css("display", "none");
      // $('.loader-container').css("display", "none");
      $('#loader1').before('<video id="loader" width="100%" height="99%"  autoplay muted playsinline><source src="./images/loader.mp4" type="video/mp4"></video>');
  
}


// removeLoader()
// Append the video element to the loader-container
//$('.loader-container').append(video);



$('video').on('ended',function(){
  $("#work").toggleClass("hide");
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
console.log("abouticonclick")
});

$("#contactIcon").click(function(){
$("#contact").toggleClass("hide");
$("#home").toggleClass("hide");
$("#logo").addClass("scale-down-logo").removeClass("scale-up-logo");
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

$( "#loader" ).fadeOut(5000, function() {
// fadeOut complete. Remove the loading div

$( "#loader" ).remove();
});  
}


