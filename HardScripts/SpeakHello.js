
(function (window) {
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.Hello = function (names) {
		console.log(speakWord + " " + names);
	}
	window.helloSpeaker = helloSpeaker;
})(window);