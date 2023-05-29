const thumbPlaystation = document.querySelector('.playstation');
const thumb3M = document.querySelector('.film3M');
const thumbPropertyFinder = document.querySelector('.propertyFinder');
const thumbSungod = document.querySelector('.sungod');
const thumbJuliaBiel = document.querySelector('.juliaBiel');
const thumbCesar = document.querySelector('.cesar');

const filmPlaystation = document.querySelector('.playstationLink');
const film3M = document.querySelector('.link3M');
const filmPropertyFinder = document.querySelector('.propertyFinderLink');
const filmSungod = document.querySelector('.sungodLink');
const filmJuliaBiel = document.querySelector('.juliaBielLink');
const filmCesar = document.querySelector('.cesarLink');

const modal = document.querySelector('.modalBackdrop');
const videoWindow = document.querySelector('videoWindow');
const thumbnails = document.querySelectorAll('.thumbnail');


let player = new Vimeo.Player('vimeoPS');


loadEventListeners();



function loadEventListeners() {
    thumbPlaystation.addEventListener('click', function playPS() {
        filmPlaystation.style.display = 'inline-block';
        player = new Vimeo.Player('vimeoPS');
    });
    thumb3M.addEventListener('click', function play3M() {
        film3M.style.display = 'inline-block';
        player = new Vimeo.Player('vimeo3M');
    });
    thumbPropertyFinder.addEventListener('click', function playPF() {
        filmPropertyFinder.style.display = 'inline-block';
        player = new Vimeo.Player('vimeoPF');
    });
    thumbSungod.addEventListener('click', function playSG() {
        filmSungod.style.display = 'inline-block';
        player = new Vimeo.Player('vimeoSG');
    });
    thumbJuliaBiel.addEventListener('click', function playJB() {
        filmJuliaBiel.style.display = 'inline-block';
        player = new Vimeo.Player('vimeoJB');
    });
    thumbCesar.addEventListener('click', function playCes() {
        filmCesar.style.display = 'inline-block';
        player = new Vimeo.Player('vimeoCE');
        // player.on('play', function() {
        //     console.log('played the video!');
        //     });
        //     player.on('pause', function() {
        //     console.log('paused the video!');   
        //     });
        //     player.getVideoTitle().then(function(title) {
        //     console.log('title:', title);
        //     });
    });
}


for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function() {
        modal.style.display = 'block';
    });
}


if (modal) {
    modal.addEventListener('click', function() {
        modal.style.display = 'none';
        player.pause();
        player.unload();
        reset();
    });
}


function reset() {
    if (filmPlaystation) {
        filmPlaystation.style.display = 'none';
    }
    if (film3M) {
        film3M.style.display = 'none';
    }
    if (filmPropertyFinder) {
        filmPropertyFinder.style.display = 'none';
    }
    if (filmSungod) {
        filmSungod.style.display = 'none';
    }
    if (filmJuliaBiel) {
        filmJuliaBiel.style.display = 'none';
    }
    if (filmCesar) {
        filmCesar.style.display = 'none';
    }
}

//This is used for URL embedding, so that the PS modal is loaded upon click on embedded URL   (e.g. embed the following in a PDF hyperlink: https://davidtallonfilm.com/#PlayStation )
$(document).ready(function() {

  if(window.location.href.indexOf('#PlayStation') != -1) {
    filmPlaystation.style.display = 'inline-block';
    player = new Vimeo.Player('vimeoPS');
    modal.style.display = 'block';
  }

});
