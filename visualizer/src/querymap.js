


function createMap() {
    var queryMap = L.map('MapWindow').setView([0, 0], 0);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © ' +
        '<a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        z: 1,
        x: 0,
        y: 0,
        id: 'mapbox.dark',
        accessToken: 'pk.eyJ1IjoiY2NoZXNsZXkyMzk3IiwiYSI6ImNqYTR4endzNTMxY2sycXFyemduaXIxM3EifQ.gvT6NeQ0Q6ykY8PVzMhTTw'
    }).addTo(queryMap);

}










