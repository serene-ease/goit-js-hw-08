// import throttle from 'lodash/throttle';
const throttle = require('lodash.throttle');
/////////////////////////////////////////////////
const VIDEO_BEGIN_POSITION = 'video-time-point';

const playerMarkup = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(playerMarkup);
const playedSeconds = JSON.parse(localStorage.getItem(VIDEO_BEGIN_POSITION));
// const playedSeconds = localStorage.getItem(VIDEO_BEGIN_POSITION);

if (playedSeconds) {
    player.setCurrentTime(playedSeconds);
}
player.on('timeupdate', throttle(function(spendedSeconds) {
    localStorage.setItem(VIDEO_BEGIN_POSITION, JSON.stringify(spendedSeconds.seconds));
    // localStorage.setItem(VIDEO_BEGIN_POSITION, spendedSeconds.seconds);
}, 1000));

player.setCurrentTime(playedSeconds.seconds);


/*
progress
Triggered as the video is loaded. Reports back the amount of the video that has been buffered.

{
    duration: 61.857
    percent: 0.502
    seconds: 31.052
}
*/