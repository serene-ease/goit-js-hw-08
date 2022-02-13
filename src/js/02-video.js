import throttle from 'lodash/throttle';

const playerMarkup = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(playerMarkup);
const VIDEO_BEGIN_POSITION = 'video-time-point';
const playedSeconds = JSON.parse(localStorage.getItem(VIDEO_BEGIN_POSITION));
// const playedSeconds = localStorage.getItem(VIDEO_BEGIN_POSITION);


player.setCurrentTime(playedSeconds);


player.on('timeupdate', throttle(function (currentTime) {
    localStorage.setItem(VIDEO_BEGIN_POSITION, JSON.stringify(currentTime.seconds));
    // localStorage.setItem(VIDEO_BEGIN_POSITION, currentTime.seconds);
}, 1000));


