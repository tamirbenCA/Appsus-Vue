import mapService from '../services/mapService.js'
import eventBusService from '../services/eventBusService.js'

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
        eventBusService.$on('errorMsg',msg => {
            this.errorMsg = msg;
        });
    }
}