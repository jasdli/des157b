(function(){
    'user strict';
    console.log('reading js');
    const conVid = document.querySelector('#concertVid');
    const playToggle = document. querySelector('.fa-play');
        const volToggle = document.querySelector('.fa-volume');
        const volLevel = document.querySelector('#volumeLevel');
        let playing = false;
        playToggle.addEventListener('click', function(){
            if (!playing){
                myVideo.play();
                playToggle.className = 'fa-solid fa-pause';
            } else{
                myVideo.pause();
                playToggle.className = 'fa-solid fa-play';

            }
            plating = !playing;
        })
        volToggle.addEventListener('click', function(){
            if (volToggle.className === 'fas fa-volume-up'){
                volToggle.className = 'fas fa-volume-mute';
                myVideo.muted = true;
            } else {
                volToggle.className = 'fas fa-volume-up';
                myVideo.muted = false;
            }
        })
        volLevel.addEventListener('change', function(){
            changeVolume(volLevel.value);
        })
        function changeVolume(value){
            myVideo.volume = value/100;
            console.log('volume is ' + myVideo.volume);
        }

        })();
