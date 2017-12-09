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
        mapService.getPosition().then(() => {
            console.log('1st promise')
            mapService.initMap().then(() => {
                this.$emit('mapLoaded') 
            })
        })
    },
    created() {
        EventBusService.$on('errorMsg',msg => {
            this.errorMsg = msg;
        });
    }
}