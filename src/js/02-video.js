import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const onTimeupdate = function ({ seconds }) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
};

const getSeconds = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || 0;

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(getSeconds());

player.on('timeupdate', throttle(onTimeupdate, 1000));
