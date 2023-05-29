const map = L.map('map').setView([38.546719, -121.744339], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([38.5414, -121.7410]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>My Burma").openPopup();

const popup = L.popup()
    .setLatLng([38.544123,-121.7391475])
    .setContent("Temple Coffee Roaster at G street")
    .openOn(map);

    const circle = L.circle([38.54475754871805,-121.73894408741701], {
        color: 'greem',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 20
    }).addTo(map);
    circle.bindPopup("Woodstock Piza Davis");

