import mapService from '../services/mapService.js';
import EventBusService from '../services/EventBusService.js';


export default {
    template: `
        <section>
            <i class="fa fa-times-circle-o" aria-hidden="true" @click="closeDetails"></i>
            <section class="top-section">
                <img :src="'../img/locations/' + location.photo" />
            </section>
            <section class="bottom-section">
       
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input  v-model="location.name" class="input" type="text" placeholder="Text input">
                    </div>
                </div>
        
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea   rows="2" cols="30" v-model="location.description" class="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>
        
                <!-- <div class="field">
                    <label class="label">Latitude</label>
                    <div class="control">
                        <input v-model="location.lat" class="input" type="text" placeholder="Text input">
                    </div>
                </div> -->

                <!-- <div class="field">
                    <label class="label">Longtitude</label>
                    <div class="control">
                        <input v-model="location.lng" class="input" type="text" placeholder="Text input">
                    </div>
                </div> -->

                <div class="field">
                    <label class="label">Tag</label>
                    <div class="control">
                        <input v-model="location.tag" class="input" type="text" placeholder="Text input">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Insert image</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input"  v-model="location.photo">
                        <!-- <img :src="location.photo"> -->
                    </div>
                </div>
            </section>

            <section class="field is-grouped map-details-footer">
                <div class="control">
                    <button class="button is-link" @click="saveLocation(location)">Save</button>
                </div>
                <div class="control">
                    <button class="button is-text" @click="closeDetails">Cancel</button>
                </div>
                <i class="fa fa-trash-o" aria-hidden="true" @click="deletLocation(location.id)"></i>
            </section>
        </section>
    `,
    
    props: ['location'],
    methods: {
        saveLocation(location) {
            mapService.saveLocation(location)
                .then(addedNote => {
                    this.$router.push('/map/main')
                })
                .catch(err => {
                    console.error(err);
                })
        },
        deletLocation(locationId) {
            console.log('locationId', locationId)
            mapService.deleteLocationChosen(locationId)
                .then(res =>
                    this.$router.push('/map/main')
                )
        },
        closeDetails() {
            console.log('closing in location details');
            this.$emit('closeDetails')
            console.log('emiting')
        }
    },

}