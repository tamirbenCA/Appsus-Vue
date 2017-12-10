import mapService from '../services/mapService.js';



export default {
    template: `
        <section class="details-present-box">
            <i class="fa fa-times-circle-o" aria-hidden="true" @click="closeDetails"></i>
            <section class="top-section">
                <img class="img-location" :src="'../img/locations/' + location.photo" />
            </section>
            <section class="bottom-section">
       
                <div class="field">
                    <label class="label">Name</label>
                    {{location.name}} <span v-html="tagIcon"></span>
                    
                </div>
        
                <div class="field">
                    <label class="label">Description</label>
                    {{location.description}}
                </div>
        
            <section class="field is-grouped map-details-footer">
                <div class="control">
                    <button class="button is-warning" @click="editLocation(location)">Edit</button>
                </div>
                <div class="control">
                    <button class="button is-text" @click="closeDetails">Cancel</button>
                </div>
                <i class="fa fa-trash-o" aria-hidden="true" @click="deletLocation(location.id)"></i>
            </section>
        </section>
    </section>
    `,
    
    props: ['location'],
    methods: {
        editLocation(location) {
            this.$router.push('/map/' + location.id)
        },
        deletLocation(locationId) {
            console.log('locationId', locationId)
            mapService.deleteLocationChosen(locationId)
                .then(res => {
                    this.$router.push('/map/main');
                    mapService.getCurrPosition()
                })  
                this.$emit('closeDetails')
        },
        closeDetails() {
            console.log('closing in location details');
            this.$emit('closeDetails')
            console.log('emiting')
        }
    },
    computed: {
        tagIcon() {
            switch (this.location.tag) {
                case 'school':
                    return '<i class="fa fa-university" aria-hidden="true"></i> ';
                case 'hospital':
                    return '<i class="fa fa-ambulance" aria-hidden="true"></i>';
                case 'restaurant':
                    return '<i class="fa fa-cutlery" aria-hidden="true"></i>';
                case 'shopping':
                    return '<i class="fa fa-shopping-cart" aria-hidden="true"></i>';
            }
        }  
    }
}