const map = L.map('map').setView([38.546719, -121.744339], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
/*const fullMap = new L.Map('map', {
    fullscreenControl: true,
    // OR
    fullscreenControl: {
        pseudoFullscreen: false // if true, fullscreen to page width and height
    }
});*/
const marker = L.marker([38.543487, -121.753717]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
const popup = L.popup()
    .setLatLng([38.5617427,-121.7638948])
    .setContent("where i live")
    .openOn(map);

  

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    
    map.on('click', onMapClick);

    const coffeeIcon = L.icon({
        iconUrl: 'images/coffee.png',
    
        iconSize:     [38, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([	38.5639426043, -121.472421579], {icon: coffeeIcon}).addTo(map).bindPopup("I am a green leaf.");

   // different restaurants
    /*const littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');*/
   //vegan restaurants 
    /*const vegan = L.layerGroup([littleton, denver, aurora, golden]);*/

/*// or, add to an existing map:
fullMap.addControl(new L.Control.Fullscreen());

fullMap.isFullscreen() // Is the map fullscreen?
fullMap.toggleFullscreen() // Either go fullscreen, or cancel the existing fullscreen.

// `fullscreenchange` Event that's fired when entering or exiting fullscreen.
fullMap.on('fullscreenchange', function () {
    if (fullMap.isFullscreen()) {
        console.log('entered fullscreen');
    } else {
        console.log('exited fullscreen');
    }
});
fullMap.addControl(new L.Control.Fullscreen({
    title: {
        'false': 'View Fullscreen',
        'true': 'Exit Fullscreen'
    }
}));*/