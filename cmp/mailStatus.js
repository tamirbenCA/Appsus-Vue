

export default {
    template: `
    <div class="status-bar-container">
        <div class="status-bar":style="{width:width + '%'}" >
        {{width}} % 
        </div>
    </div>
        
    `,
    props: ['width'],
 
}

