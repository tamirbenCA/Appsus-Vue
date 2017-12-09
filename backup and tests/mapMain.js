import navBar from '../cmp/navBar.js'
// import mapService from '../services/mapService.js'

// const GOOGLE_API_KEY = 'AIzaSyCkGXo73iO3SNrjIp9hxptFfE5duOCgKk4';
var gMyPos = {};

export default {
    template: `
            <section class="mapPageContainer">
                <div class="locationsContanier">
                    <input placeholder="🔎 search" class="searchInput" @keydown="searchPlace" type="text">
                </div>
                <div class="googleMap"> </div>
            </section>
            `, 
    created: {
        // getPosition() {
        //     if (!navigator.geolocation) {
        //         alert("HTML5 Geolocation is not supported in your browser.");
        //         return;
        //     }
        //     // One shot position getting or continus watch
        //     navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
        // },
    },
    computed: {
        // showLocation(position) {
        //     gMyPos.lat = position.coords.latitude;
        //     gMyPos.lng = position.coords.longitude;
        //     this.initMap(gMyPos.lat, gMyPos.lng);
        //     // console.log('pos:', position);
        //     // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${gMyPos.lat},${gMyPos.lng}&key=${GOOGLE_API_KEY}`).then(getAddress);
        // },
        // initMap() {
        //     var map = new google.maps.Map(
        //         document.querySelector('#map'),
        //         {
        //             center: { gMyPos },
        //             zoom: 17
        //         }
        //     );
        // },
        
    },  
    methods: {
        
    }, 
    
    
    
    components:{
        navBar
        
    },
}