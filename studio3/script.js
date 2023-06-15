  
  (function() {
    'use strict';
  })();
  //map
  const map = L.map('map').setView([38.546719, -121.744339], 17);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  
  

  
    const coffeeIcon = L.icon({
      iconUrl: 'images/coffee.png',
      iconSize: [48, 35],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
    const coffeeMarker = L.marker([38.544123,-121.7391475], { icon: coffeeIcon });
   coffeeMarker.addTo(map);
    coffeeMarker.addEventListener('click', function(){
      showPopupContent("<strong>Restaurant:</strong> Davis Farmers' Market<br><strong>Address:</strong> 301 C St, Davis, CA 95616 <img src='images/templecoffee.jpeg'><strong>Reason:</strong> I like to study at this coffee place all the time.");
    });


  
    const schoolIcon = L.icon({
      iconUrl: 'images/school.png',
      iconSize: [48, 35],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });

    const schoolMarker =L.marker([38.5450052, -121.7537113], { icon: schoolIcon });schoolMarker.addTo(map);
    schoolMarker.addEventListener('click', function(){
      showPopupContent("<strong>Place:</strong> Cruess Hall<br><strong>Address:</strong> 301 C St, Davis, CA 95616 <img src='images/cruess_building.jpg'><strong>Reason:</strong> I always go to classes at this school building.")
    })


    const apartmentIcon = L.icon({
      iconUrl: 'images/apartment.png',
      iconSize: [30, 45],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
   const apartmentMarker= L.marker([38.5620644, -121.7632155], { icon: apartmentIcon });
   apartmentMarker.addTo(map);
   apartmentMarker.addEventListener('click', function(){
    showPopupContent("<strong>Place:</strong> My Apartment at Fountain Circle<img src='images/fc.jpeg'><strong>Reason:</strong> This is where I live.")
  })
    
  
    const appleIcon = L.icon({
      iconUrl: 'images/apple.png',
      iconSize: [45, 45],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
    const appleMarker=  L.marker([38.5467537, -121.7614973], { icon: appleIcon });appleMarker.addTo(map);
    appleMarker.addEventListener('click', function(){
      showPopupContent("<strong>Place:</strong> Trader Joe's<img src='images/traderjoes.jpeg'><strong>Reason:</strong> My favorite grocery place.")
    })
 
function showPopupContent(content) {
  const popupElement = document.querySelector('#popup-content');
  popupElement.innerHTML = content;
}

  AOS.init();
  
  