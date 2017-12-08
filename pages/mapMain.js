import mapService from '../services/mapService.js';
import navBar from '../cmp/navBar.js'

export default {
    template: `
    <section>
    <navBar></navBar>
    
        <section class="mapMainContainer">
            <!-- <div class="locationsContanier"></div> -->
            <!-- <p id="locationError"></p> -->
            {{ errorMsg }}    
            <div class="map"></div>
        </section>
        </section>
    `,
    data() {
        return {
            errorMsg: '',
            locations: []
        }
    },
    created() {
        mapService.getLocations() 
        .then(locations => {
            this.locations = locations
        })
    },
    mounted() {
        // mapService.getPosition()         
    },
    components:{
        navBar
    },
}
