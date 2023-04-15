(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section');
    const buttonIcon = document.querySelector('button img');
  

   const officeBanner = document.querySelector('#office-animation');
    const nightBanner = document.querySelector('#night-animation');

    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            buttonIcon.src = 'images/button1.png';
            officeBanner.className = 'hidden';
            nightBanner.className = 'showing'
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            buttonIcon.src = 'images/button2.png';
            officeBanner.className = 'showing';
            nightBanner.className = 'hidden'
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()