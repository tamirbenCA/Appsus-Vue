
export default {
    template: `
        <section>
        <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" required>
        </div>
      </div>
      
      
      
      <div class="field">
        <label class="label">To:</label>
        <div class="control has-icons-left has-icons-right">
          <!-- <input class="input" type="email" placeholder="Email input"> -->
          <input class="input" type="email" placeholder="name@email.com" required/>
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          <span v-show="true" class="icon is-small is-right">
            <i class="fa fa-warning"></i>
          </span>
        </div>
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

