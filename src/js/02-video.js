import Player from '@vimeo/player';

const player = new Player('vimeo-player');
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const throttle = require('lodash.throttle');
const querryTimeObject = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

 player.on('timeupdate', throttle((function(currentTime) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
}), 1000));
player.setCurrentTime(querryTimeObject.seconds)