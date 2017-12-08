
const GOOGLE_API_KEY = 'AIzaSyCkGXo73iO3SNrjIp9hxptFfE5duOCgKk4'
var gLat;
var gLng;
var gUrl;

var locations = [{
    id: 1,
    name: 'Arnold',
    description: '',
    photos: '../img/locations/arnold.jpg',
    lat: 32.1047547,
    lng: 34.8197589,
    tag: 'restaurant'
},
{
    id: 2,
    name: 'Asuta',
    description: '',
    photos: '../img/locations/asuta.jpg',
    lat: 34.8307266,
    lng: 34.8307266,
    tag: 'hospital'
},
{
    id: 3,
    name: 'david yalin',
    description: '',
    photos: '../img/locations/david-yalin.jpg',
    lat: 32.1116409,
    lng: 34.8197052,
    tag: 'school'
}]


function createNewLocation() {
    var newLoation = _emptyLocation();
    locations.push(newLoation);
    return newLoation.id + '/new';

}

function _emptyLocation() {
    return {
        id: _getNextId(),
        name: '',
        description: '',
        photos: '',
        lat: '',
        lng: '',
        tag: ''
    }
}

function _getNextId() {
    var maxId = locations.reduce((acc, note) => {
        return (location.id > acc) ? location.id : acc
    }, 0);
    return maxId + 1;
}

function getLocations() {
    return new Promise((resolve, reject) => { resolve(locations) });
    // return Promise.reject();
    return Promise.resolve(locations);
}

function showMyLocation() {

    var elLocation = document.querySelector('input').value;
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${elLocation}&key=AIzaSyBmuWYnO-sINriMTx43J8ZUWho25YphaIs`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            var lat = data.results[0].geometry.location.lat;
            var lng = data.results[0].geometry.location.lng;
            getGeoLocation(lat, lng);
            initMap(lat, lng)
        })
}


function getGeoLocation(lat, lng) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBmuWYnO-sINriMTx43J8ZUWho25YphaIs`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            var address = data.results[0].formatted_address;
            document.querySelector('.pst').innerText = address;
        })
}


function saveLocation(note) {
    return new Promise((resolve, reject) => {
        if (location.id) {
            var locationToUpdateIdx = locations.findIndex(currLocation => currLocation.id === location.id)
            locations.splice(locationToUpdateIdx, 1, note);
        }
        else {
            location.id = _getNextId();
            locations.push(location);
        }

        resolve()
        // reject()
    });

}


function deleteLocationChosen(locationId) {
    return new Promise((resolve, reject) => {
        var locationIdx = locations.findIndex(location => location.id === locationId)
        locations.splice(locationId, 1);
        resolve()
    });
}


function getLocationById(locationId) {
    return new Promise((resolve, reject) => {
        var foundLocation = locations.find(location => location.id === +locationId)
        if (foundLocation) resolve(foundLocation)
        else reject();
    })

}

// function getPosition() {
//     if (!navigator.geolocation) {
//         alert("HTML5 Geolocation is not supported in your browser.");
//         return;
//     }
//     navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
//     //navigator.geolocation.watchPosition(showLocation, handleLocationError);
// }

// function showLocation(position) {
//     var date = new Date(position.timestamp);
//     getGeoLocation(position.coords.latitude, position.coords.longitude);
//     gLat = position.coords.latitude;
//     gLng = position.coords.longitude;
//     gUrl = `https://mayschil.github.io/ca-gallery-2/projects/TravelTip/index.html?lat=${gLat}&lng=${gLng} `;
//     initMap(position.coords.latitude, position.coords.longitude);
// }

// function initMap(lat, lng) {
//     if (!lat) lat = 32.0749831;
//     if (!lng) lng = 34.9120554;

//     var map = new google.maps.Map(
//         document.getElementById('map'),
//         {
//             center: { lat: lat, lng: lng },
//             zoom: 21
//         }
// );

//     var image = 'oldman.png';
//     var marker = new google.maps.Marker({
//         position: { lat: lat, lng: lng },
//         map: map,
//         title: 'You Are Here!',
//         icon: image
//     });
// }