import EventBusService from '../services/EventBusService.js'


const GOOGLE_API_KEY = 'AIzaSyCkGXo73iO3SNrjIp9hxptFfE5duOCgKk4';
var gLat;
var gLng;
var gMap;
var gCurrPosition = {};
var gMarkers;

var locations = [
    {
    id: 0,
    name: 'Arnold',
    description: '',
    photo: '',
    lat: 32.1047547,
    lng: 34.8197589,
    tag: 'restaurant'
    },
    {
    id: 1,
    name: 'Assuta',
    description: '',
    photo: '',
    lat: 32.1079742,
    lng: 34.8307266,
    tag: 'hospital'
    },
    {
    id: 2,
    name: 'David Yalin',
    description: '',
    photo: '',
    lat: 32.1116409,
    lng: 34.8197052,
    tag: 'school'
    },
    {
    id: 3,
    name: 'Coding Academy',
    description: '',
    photo: '',
    lat: 32.0878925,
    lng: 34.8030375,
    tag: 'school'
    }
]

function initMap(lat, lng) {
    gMap = new google.maps.Map(document.querySelector('.map'), {
        zoom: 15,
        center: { lat, lng }
    });
    // console.log('gMap:', gMap)
    var marker = new google.maps.Marker({
        position: { lat, lng },
        map: gMap,
        title: 'Current Position'
    });
    marker.addListener('click', function() {
        EventBusService.$emit('selectLocation', location)
    })
    // return Promise.resolve();
}

function getMap() {
    return gMap;
}

function getCurrPosition() {
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
}

function showLocation(position) {
    gCurrPosition.lat = position.coords.latitude
    gCurrPosition.lng = position.coords.longitude
    console.log('showLocation:', position)
    initMap(gCurrPosition.lat, gCurrPosition.lng);
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
    var location = { lat , lng }
    var gMap = new google.maps.Map(document.querySelector('.map'),{
            center: { lat, lng },
            zoom: 15
        }
    );
    var marker = new google.maps.Marker({
        position: { lat, lng },
        map: gMap,
    });
    marker.addListener('click', function() {
        EventBusService.$emit('selectLocation', location)
    })
}

function searchLocation(searchTerm) {
    return new Promise((resolve, reject) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${GOOGLE_API_KEY}`)
        .then(res => {
            // console.log(res)
            var geoLatLng = res.data.results[0].geometry.location;
            displayMap(geoLatLng.lat, geoLatLng.lng)
            // console.log(geoLatLng)
                resolve(geoLatLng);
        });
    })
}

function displayLocations(status) {
    console.log(status)
    if (status) {
        locations.forEach(location => {
            var marker = new google.maps.Marker({
                position: { lat: location.lat , lng: location.lng },
                map: gMap,
                title: location.name
            });
            marker.addListener('click', function() {
                console.log(location);
                EventBusService.$emit('selectLocation', location)
            })
            // console.log('location:', location)
        });
    } else {
        initMap(gCurrPosition.lat, gCurrPosition.lng);
    }
}

function saveLocation(location) {
    return new Promise((resolve, reject)=>{
        var locationToUpdateIdx = locations.findIndex(currLocation => currLocation.id === location.id)
        locations.splice(locationToUpdateIdx, 1, location);
        resolve(location);
    });
}


function createNewLocation(location) {
    var newLocation = _emptyLocation(location);
    locations.push(newLocation);
    console.log(locations)
    return newLocation.id + '/new';
}

function _emptyLocation(location) {
    return {
        id: _getNextId(),
        name: '',
        description: '',
        photo: '',
        lat: location.lat,
        lng: location.lng,
        tag: ''
    }
}

function _getNextId() {
    var maxId = locations.reduce((acc, location) => {
        return (location.id > acc) ? location.id : acc
    }, 0);
    return maxId + 1;
}


function getLocationById(locationId) {
    return new Promise((resolve, reject) => {
        var foundLocation = locations.find(location => location.id === +locationId)
        if (foundLocation) resolve(foundLocation)
        else reject();
    })
}

export default {
    initMap,
    getMap,
    getLocations,
    getCurrPosition,
    searchLocation,
    displayLocations,
    createNewLocation,
    getLocationById,
    saveLocation,
    deleteLocationChosen,
    displayMap
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





function deleteLocationChosen(locationId) {
    console.log('locationId',locationId)
    return new Promise((resolve, reject) => {
        var locationIdx = locations.findIndex(location => location.id === locationId)
        locations.splice(locationId, 1);
        console.log('locations',locations)
        
        resolve()
    });
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