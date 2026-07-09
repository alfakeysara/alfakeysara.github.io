//35.6762° N latitude and 139.6503° E longitude
var coordinates = [35.6762, 139.6503];
var place1 = [35.6598, 139.7008];
var place2 = [35.6586, 139.7454];
var place3 = [35.7069, 139.7508];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, From Japan!</p>").addTo(map);
var marker1 = L.circle(place1,{color: "black", fillColor: "#5e1f12", radius: 120}).addTo(map);
