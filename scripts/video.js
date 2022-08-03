// INICIO SCRIPT VIDEO
let playBttn = document.querySelector('#playBttn');
let pauseBttn = document.querySelector('#pauseBttn');
let video = document.querySelector('video');

playBttn.addEventListener('click', () => {
    video.play();
});

pauseBttn.addEventListener('click', () => {
    video.pause();
})
// FIN SCRIPT VIDEO
