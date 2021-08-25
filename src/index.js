function Sync(selector, audioSelector) {
  var modelViewer = document.querySelector(selector);
  var sound = document.querySelector(audioSelector);
  var playRequest = document.querySelector("#overlay");

  sound.addEventListener("timeupdate", () => {
    modelViewer.currentTime = sound.currentTime;
    //   console.log("modelViewer time: " + modelViewer.currentTime);
  });

  sound.addEventListener("pause", () => {
    modelViewer.pause();
  });

  sound.addEventListener("play", () => {
    modelViewer.play();

    playRequest.classList.add("hide");
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") {
      sound.pause();
    }
  });

  var promise = sound.play();
  if (promise !== undefined) {
    promise
      .then((_) => {
        console.log("Autoplay has worked");
        playRequest.classList.add("hide");
      })
      .catch((error) => {
        // Show a "Play" button so that user can start playback.
        console.log("Autoplay has not worked");

        // show the modal dialogue to play this
        playRequest.classList.remove("hide");
      });
  }
}

function playNow() {
  var playRequest = document.querySelector("#overlay");
  playRequest.classList.add("hide");

  var sound = document.querySelector("#sound");
  sound.play();
}

// function jumpTo(time) {
//   var sound = document.querySelector("#sound");
//   sound.currentTime = time;
// }

window.addEventListener("load", () => {
  Sync("#model-viewer", "#sound");
});

const button = document.querySelector('#play-button');
button.addEventListener('click', () => {
   playNow();
 })