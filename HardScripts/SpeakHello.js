
(function(window){

 var helloSpeaker ={};
helloSpeaker.names;


  var speakWord = "Hello";

  
  helloSpeaker.speak=function() {
    console.log(speakWord + " " + helloSpeaker.names);
  }
  
  window.helloSpeaker=helloSpeaker;
  
})(window);
