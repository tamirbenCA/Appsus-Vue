import EventBusService from '../services/EventBusService.js'


const GOOGLE_API_KEY = 'AIzaSyCkGXo73iO3SNrjIp9hxptFfE5duOCgKk4';
var gLat;
var gLng;
var gUrl; // DO WE NEED THIS?
var gMap;

var locations = [
    {
    id: 1,
    name: 'Current Location',
    description: '',
    photo: '',
    lat: '',
    lng: '',
    tag: 'current'
    },
    {
    id: 2,
    name: 'Arnold',
    description: '',
    photo: '../img/locations/arnold.jpg',
    lat: 32.1047547,
    lng: 34.8197589,
    tag: 'restaurant'
    },
    {
    id: 3,
    name: 'Assuta',
    description: '',
    photo: '../img/locations/asuta.jpg',
    lat: 32.1079742,
    lng: 34.8307266,
    tag: 'hospital'
    },
    {
    id: 4,
    name: 'David Yalin',
    description: '',
    photo: '../img/locations/david-yalin.jpg',
    lat: 32.1116409,
    lng: 34.8197052,
    tag: 'school'
    },
    {
    id: 5,
    name: 'Coding Academy',
    description: '',
    photo: '',
    lat: 32.0878925,
    lng: 34.8030375,
    tag: 'school'
    }
]

function getMap() {
    return gMap;
}

function getPosition() {
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
        .then(() => { return Promise.resolve()
            console.log('test1 showLocation')
        } );
}

function showLocation(position) {
    locations[0].lat = position.coords.latitude
    locations[0].lng = position.coords.longitude
    console.log('showLoacation:', position)
    return Promise.resolve('test1');
}

function initMap() {
    // var currLocation = { lat: locations[0].lat , lng: locations[0].lng };
    var gMap = new google.maps.Map(document.querySelector('.map'), {
        zoom: 15,
        // center: currLocation
    });
    locations.forEach(location => {
        var marker = new google.maps.Marker({
            position: { lat: location.lat , lng: location.lng },
            map: gMap,
            title: location.name
        });
        // console.log('location:', location)
    });
    console.log('gMap:', gMap)
    return Promise.resolve();
}

function handleLocationError(error) {
    switch (error.code) {
        case 0:
            EventBusService.$emit('errorMsg', 'There was an error while retrieving your location: ' + error.message)
            break;
        case 1:
            EventBusService.$emit('errorMsg', 'The user didn\'t allow this page to retrieve a location.')
            break;
        case 2:
            EventBusService.$emit('errorMsg', 'The browser was unable to determine your location: ' + error.message)
            break;
        case 3:
            EventBusService.$emit('errorMsg', 'The browser timed out before retrieving the location.')
            break;
    }
}

function getLocations() {
    // return new Promise((resolve, reject) => { resolve(locations) });
    return Promise.resolve(locations);
    // return Promise.reject();
}


function displayMap(lat, lng) {
    var gMap = new google.maps.Map(document.querySelector('.map'),{
            center: { lat, lng },
            zoom: 15
        }
    );
    var marker = new google.maps.Marker({
        position: { lat, lng },
        map: gMap,
    });
}

function searchLocation(searchTerm) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${GOOGLE_API_KEY}`)
        .then(function (res){
            // console.log('getLatLng:', res.data.results[0].geometry.location);
            var geoLatLng = res.data.results[0].geometry.location;
            console.log(geoLatLng)
            // displayMap(geoLatLng.lat, geoLatLng.lng);
            return Promise.resolve(geoLatLng)
        });
}



export default {
    getLocations,
    getPosition,
    searchLocation,
    getMap,
    initMap
    getCurrLocation
}


// ***********************************************************************

// function search() {
//     var searchInput = document.querySelector('.searchInput');
    
//     if (searchInput.value) {
//         var input = document.querySelector('.searchInput').value;
//         axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyD7eT89AbQfxKhzxEKg_lah7h0MnX_9dZc`)
//         .then(function (res) {
//          var latUser = res.data.results[0].geometry.location.lat;   
//          var lngUser = res.data.results[0].geometry.location.lng;   
//         initMap(latUser, lngUser);
//         });
//     }
// }


// function createNewLocation() {
//     var newLoation = _emptyLocation();
//     locations.push(newLoation);
//     return newLoation.id + '/new';

// }

// function _emptyLocation() {
//     return {
//         id: _getNextId(),
//         name: '',
//         description: '',
//         photo: '',
//         lat: '',
//         lng: '',
//         tag: ''
//     }
// }

// function _getNextId() {
//     var maxId = locations.reduce((acc, note) => {
//         return (location.id > acc) ? location.id : acc
//     }, 0);
//     return maxId + 1;
// }


// function showMyLocation() {

//     var elLocation = document.querySelector('input').value;
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${elLocation}&key=AIzaSyBmuWYnO-sINriMTx43J8ZUWho25YphaIs`)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             var lat = data.results[0].geometry.location.lat;
//             var lng = data.results[0].geometry.location.lng;
//             getGeoLocation(lat, lng);
//             initMap(lat, lng)
//         })
// }


// function getGeoLocation(lat, lng) {
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBmuWYnO-sINriMTx43J8ZUWho25YphaIs`)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             var address = data.results[0].formatted_address;
//             document.querySelector('.pst').innerText = address;
//         })
// }


// function saveLocation(note) {
//     return new Promise((resolve, reject) => {
//         if (location.id) {
//             var locationToUpdateIdx = locations.findIndex(currLocation => currLocation.id === location.id)
//             locations.splice(locationToUpdateIdx, 1, note);
//         }
//         else {
//             location.id = _getNextId();
//             locations.push(location);
//         }

//         resolve()
//         // reject()
//     });

// }


// function deleteLocationChosen(locationId) {
//     return new Promise((resolve, reject) => {
//         var locationIdx = locations.findIndex(location => location.id === locationId)
//         locations.splice(locationId, 1);
//         resolve()
//     });
// }


// function getLocationById(locationId) {
//     return new Promise((resolve, reject) => {
//         var foundLocation = locations.find(location => location.id === +locationId)
//         if (foundLocation) resolve(foundLocation)
//         else reject();
//     })

// }


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