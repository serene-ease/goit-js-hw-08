import throttle from 'lodash.throttle';

const playerMarkup = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(playerMarkup);
const VIDEO_BEGIN_POSITION = 'video-time-point';
const playedSeconds = JSON.parse(localStorage.getItem(VIDEO_BEGIN_POSITION));



player.on('timeupdate', throttle((currentTime => 
    {
        localStorage.setItem(VIDEO_BEGIN_POSITION, JSON.stringify(currentTime));
    }
    ),
    1000));


if (playedSeconds === 0)
{
player.setCurrentTime(playedSeconds.seconds);
}