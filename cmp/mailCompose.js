
export default {
    template: `
        <section>
        <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div>
      
      
      
      <div class="field">
        <label class="label">To:</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-warning"></i>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>
      
      
      
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      
      
      
      
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">

        <router-link to="/mail/main/"> 
        <button class="button is-text">Cancel</button>
        </router-link> 


          
        </div>
      </div>
      
        
        </section>
    `,
    

}

