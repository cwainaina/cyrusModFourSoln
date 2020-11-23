
(function(window){
var byeSpeaker ={};
byeSpeaker.names;

var speakWord = "Good Bye";


byeSpeaker.speak=function (names) {
  console.log(speakWord + " " + byeSpeaker.names);
}


window.byeSpeaker = byeSpeaker;

})(window);

