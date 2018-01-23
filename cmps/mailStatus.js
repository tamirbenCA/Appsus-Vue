

export default {
    template: `
    <div class="status-bar-container">
        <div v-if="width>0" class="status-bar":style="{width:width + '%'}"  >
        {{width}} % 
        </div>
        <div v-else class="status-bar-empty">
            NO UNREAD EMAILS
        </div>
    </div>
        
    `,
    props: ['width'],
 
}

