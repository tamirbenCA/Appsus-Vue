import EventBusService from '../services/EventBusService.js'


const GOOGLE_API_KEY = 'AIzaSyCkGXo73iO3SNrjIp9hxptFfE5duOCgKk4';
var gLat;
var gLng;
var gMap;
var gCurrPosition = {};
var gMarkers;


const ICON_AMBULANCE = {
    path: "M23.04-13.751q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm-13.824-18.432h13.824v-9.216h-5.688q-.504.072-.792.324l-7.02 7.02q-.252.432-.324.792v1.08zm46.08 18.432q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm4.608-24.192v-6.912q0-.504-.324-.828t-.828-.324h-8.064v-8.064q0-.504-.324-.828t-.828-.324h-6.912q-.504 0-.828.324t-.324.828v8.064h-8.064q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h8.064v8.064q0 .504.324.828t.828.324h6.912q.504 0 .828-.324t.324-.828v-8.064h8.064q.504 0 .828-.324t.324-.828zm9.216-19.584v41.472q0 .936-.684 1.62t-1.62.684h-6.912q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516h-13.824q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516h-4.608q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684v-14.976q0-.936.468-2.088t1.152-1.836l7.128-7.128q.684-.684 1.836-1.152t2.088-.468h5.76v-11.52q0-.936.684-1.62t1.62-.684h41.472q.936 0 1.62.684t.684 1.62z",
    fillColor: '#E32831',
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 0.35
}
const ICON_RESTAURANT = {
    path: "M23.04-62.135v23.04q0 2.196-1.278 3.996t-3.33 2.52v28.044q0 1.872-1.368 3.24t-3.24 1.368h-4.608q-1.872 0-3.24-1.368t-1.368-3.24v-28.044q-2.052-.72-3.33-2.52t-1.278-3.996v-23.04q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62v14.976q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62v-14.976q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62v14.976q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62v-14.976q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62zm27.648 0v57.6q0 1.872-1.368 3.24t-3.24 1.368h-4.608q-1.872 0-3.24-1.368t-1.368-3.24v-18.432h-8.064q-.468 0-.81-.342t-.342-.81v-28.8q0-4.752 3.384-8.136t8.136-3.384h9.216q.936 0 1.62.684t.684 1.62z",
    fillColor: '#300436',
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 0.35
}
const ICON_SCHOOL = {
    path: "M34.56-64.439l34.56 13.824v4.608h-4.608q0 .936-.738 1.62t-1.746.684h-54.936q-1.008 0-1.746-.684t-.738-1.62h-4.608v-4.608zm-25.344 23.04h9.216v27.648h4.608v-27.648h9.216v27.648h4.608v-27.648h9.216v27.648h4.608v-27.648h9.216v27.648h2.124q1.008 0 1.746.684t.738 1.62v2.304h-59.904v-2.304q0-.936.738-1.62t1.746-.684h2.124v-27.648zm57.42 34.56q1.008 0 1.746.684t.738 1.62v4.608h-69.12v-4.608q0-.936.738-1.62t1.746-.684h64.152z",
    fillColor: '#36057A',
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 0.35
}

const ICON_SHOOPING = {
    path: "M23.04-9.143q0 1.872-1.368 3.24t-3.24 1.368-3.24-1.368-1.368-3.24 1.368-3.24 3.24-1.368 3.24 1.368 1.368 3.24zm32.256 0q0 1.872-1.368 3.24t-3.24 1.368-3.24-1.368-1.368-3.24 1.368-3.24 3.24-1.368 3.24 1.368 1.368 3.24zm4.608-39.168v18.432q0 .864-.594 1.53t-1.458.774l-37.584 4.392q.468 2.16.468 2.52 0 .576-.864 2.304h33.12q.936 0 1.62.684t.684 1.62-.684 1.62-1.62.684h-36.864q-.936 0-1.62-.684t-.684-1.62q0-.396.288-1.134t.576-1.296.774-1.44.558-1.062l-6.372-29.628h-7.344q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h9.216q.576 0 1.026.234t.702.558.468.882.288.936.198 1.062.162.936h43.236q.936 0 1.62.684t.684 1.62z","FOLDER":"M59.904-42.551v25.344q0 3.312-2.376 5.688t-5.688 2.376h-43.776q-3.312 0-5.688-2.376t-2.376-5.688v-34.56q0-3.312 2.376-5.688t5.688-2.376h11.52q3.312 0 5.688 2.376t2.376 5.688v1.152h24.192q3.312 0 5.688 2.376t2.376 5.688z","FOLDER_OPEN":"M67.644-30.167q0 1.116-1.116 2.376l-12.096 14.256q-1.548 1.836-4.338 3.114t-5.166 1.278h-39.168q-1.224 0-2.178-.468t-.954-1.548q0-1.116 1.116-2.376l12.096-14.256q1.548-1.836 4.338-3.114t5.166-1.278h39.168q1.224 0 2.178.468t.954 1.548zm-12.348-12.384v5.76h-29.952q-3.384 0-7.092 1.71t-5.904 4.302l-12.132 14.256-.18.216-.018-.45-.018-.45v-34.56q0-3.312 2.376-5.688t5.688-2.376h11.52q3.312 0 5.688 2.376t2.376 5.688v1.152h19.584q3.312 0 5.688 2.376t2.376 5.688z",
    fillColor: '#008000',
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 0.35
}

var locations = [
    {
        id: 0,
        name: 'Arnold',
        description: '',
        photo: 'arnold.jpg',
        lat: 32.1047547,
        lng: 34.8197589,
        tag: 'restaurant'
    },
    {
        id: 1,
        name: 'Assuta',
        description: '',
        photo: 'assuta.jpg',
        lat: 32.1079742,
        lng: 34.8307266,
        tag: 'hospital'
    },
    {
        id: 2,
        name: 'David Yalin',
        description: '',
        photo: 'david-yalin.jpg',
        lat: 32.1116409,
        lng: 34.8197052,
        tag: 'school'
    },
    {
        id: 3,
        name: 'Coding Academy',
        description: '',
        photo: 'coding-academy.png',
        lat: 32.0878925,
        lng: 34.8030375,
        tag: 'school'
    },
    {
        id: 4,
        name: 'Benedict Tel-Aviv',
        description: '',
        photo: 'benedict.jpg',
        lat: 32.0636727,
        lng: 34.772772,
        tag: 'restaurant'
    },
    {
        id: 5,
        name: 'Ramat Aviv Mall',
        description: '',
        photo: 'ramat-aviv-mall.jpg',
        lat: 32.1122669,
        lng: 34.7958357,
        tag: 'shopping'
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
    marker.addListener('click', function () {
        console.log('hi85')
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
    EventBusService.$emit('defaultLocation', gCurrPosition)
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


function displayMap(lat, lng ,selectedLocation) {
    var location = { lat, lng ,selectedLocation}
    var gMap = new google.maps.Map(document.querySelector('.map'), {
        center: { lat, lng },
        zoom: 15
    }
    );

    if (selectedLocation === undefined) {
        var marker = new google.maps.Marker({
            position: { lat, lng },
            map: gMap
        })
    } else {
        var marker = new google.maps.Marker({
            position: { lat, lng },
            map: gMap,
            icon: _getIcon(selectedLocation.tag)
        });
    }
    marker.addListener('click', function () {
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
            // var autocomplete = new google.maps.places.Autocomplete(input);
            resolve(geoLatLng);
        });
    })
}
function _getIcon(location) {
    switch (location) {
        case 'school':
            return ICON_SCHOOL;
        case 'hospital':
            return ICON_AMBULANCE;
        case 'restaurant':
            return ICON_RESTAURANT;
        case 'shopping':
            return ICON_SHOOPING;
    }
}

function displayLocations(status) {
    console.log(status)
    if (status) {
        locations.forEach(location => {
            var marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: gMap,
                title: location.name,
                icon: _getIcon(location.tag)
            });
            marker.addListener('click', function () {
                EventBusService.$emit('selectLocation', location)
            })
            // console.log('location:', location)
        });
    } else {
        console.log('hi151')
        initMap(gCurrPosition.lat, gCurrPosition.lng);
    }
}



function saveLocation(location) {
    return new Promise((resolve, reject) => {
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
    displayMap,
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
    console.log('locationId', locationId)
    return new Promise((resolve, reject) => {
        var locationIdx = locations.findIndex(location => location.id === locationId)
        locations.splice(locationId, 1);
        // getCurrPosition();
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