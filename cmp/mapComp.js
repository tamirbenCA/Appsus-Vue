import mapService from '../services/mapService.js'
import EventBusService from '../services/EventBusService.js'

export default {
    template: `
        <section>
            {{ errorMsg }}    
            <div class="map"></div>
        </section>
            `,
    data() {
        return {
            errorMsg: '',          
        }
    },
    mounted() {
        mapService.getCurrPosition();        
        // mapService.initMap().then(() => {
            // console.log('emiting')
        // this.$emit('mapLoaded')})
    },
    created() {
        EventBusService.$on('errorMsg',msg => {
            this.errorMsg = msg;
        });
    }
}