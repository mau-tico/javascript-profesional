  import MediaPlayer from './MediaPlayer.js';
  import AutoPlay from './plugins/AutoPlay.js'

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video, Plugins: [new AutoPlay()] });

  const button = document.querySelector('button');
  button.onclick = () => player.togglePlay();