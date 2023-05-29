(function () {
    'use strict';
  
    const map = L.map('map').setView([38.546719, -121.744339], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    const coffeeIcon = L.icon({
      iconUrl: 'images/coffee.png',
      iconSize: [48, 35],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
    L.marker([38.5639426043, -121.472421579], { icon: coffeeIcon }).addTo(map);
  
    const schoolIcon = L.icon({
      iconUrl: 'images/school.png',
      iconSize: [48, 35],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });

    L.marker([38.5450052, -121.7537113], { icon: schoolIcon }).addTo(map);

    const apartmentIcon = L.icon({
      iconUrl: 'images/apartment.png',
      iconSize: [30, 45],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
    L.marker([38.5620644, -121.7632155], { icon: apartmentIcon }).addTo(map);
    
  
    const appleIcon = L.icon({
      iconUrl: 'images/apple.png',
      iconSize: [45, 45],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
    L.marker([38.5467537, -121.7614973], { icon: appleIcon }).addTo(map);
  })();
  
  