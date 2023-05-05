(function(){
    'use strict';

    // add your script here
    const map = L.map('map').setView([(38.546719, -121.744339)], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    

    
}());

const marker = L.marker([38.5617427,-121.7638948]).addTo(map);
const circle = L.circle([38.543487, -121.753717], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [38.544384, -121.739090],
    [38.543550, -121.738937],
    [38.544155, -121.739624]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I live here!").openPopup();
circle.bindPopup("I take classes here.");
polygon.bindPopup("I go here for my interview project");

/*const popup = L.popup()
    .setLatLng([38.543487, -121.743717])
    .setContent("I am a standalone popup.")
    .openOn(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }*/
    const popup = L.popup();
    




function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);