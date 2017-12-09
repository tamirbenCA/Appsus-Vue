import mapService from '../services/mapService.js';

export default {
    template: `
        <section>
            {{location.name}}
        </section>
    `,
 
props: ['location'],

}