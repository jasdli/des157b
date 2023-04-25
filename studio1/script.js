(function(){
    'user strict';
    console.log('reading js');

 const video = document.querySelector('video');
 const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playButton.textContent = 'Pause';
  } else {
    video.pause();
    playButton.textContent = 'Play';
  }
});




        })();

          
          
          