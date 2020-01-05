const keys = document.querySelector(".key");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) {
    return;
  }

  audio.play();
}

window.addEventListener("keydown", playNote);
