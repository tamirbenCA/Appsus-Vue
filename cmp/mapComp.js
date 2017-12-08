import mapService from '../services/mapService.js'

export default {
    template: `
            <div id="mapAppsus"> </div>
            `,
    mounted() {
        mapService.initMap();
        this.$emit('loadMap')
        mapService.getUserLocation().then(res=>console.log(res))
    }
}