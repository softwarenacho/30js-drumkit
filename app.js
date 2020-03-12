function playAudio(e) {
  const code = e.keyCode ? e.keyCode : e.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.drum-key[data-key="${code}"]`);
    key.classList.add('playing')
    setTimeout(() => key.classList.remove('playing'), 2500);
  }
}

function removeTransition(e) {
  if (e.propertyName === 'transform') this.classList.remove('playing');
}

window.addEventListener('keydown', playAudio);
var keys = document.querySelectorAll('.drum-key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));
