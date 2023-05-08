function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key =  document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //  stops the function from running all together
    audio.currentTime = 0; // rewinds audio file to the start when key pressed
    audio.play();
    key.classList.add('playing');
    // console logs audio file playing// console.log(audio);
    // console logs the key element// console.log(key);
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if its not a transform
    //console logs transition and transform// console.log(e, e.propertyName);
    this.classList.remove('playing'); //equal to div data-key
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
