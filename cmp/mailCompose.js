import mailService from '../services/mailService.js'

export default {
    template: `
    <div class="modal" :class="{'is-active' : isComposeActive}">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Compose Mail</p>
        <router-link tag="button" to="/mail/main/" class="delete" aria-label="close"></router-link>
      </header>
      <section class="modal-card-body">
        <h2></h2>
        <form @submit.prevent="sendMail">
          <div class="field">
            <div class="control">
              <input v-model="mail.senderMail" class="input" type="email" placeholder="To e.g name@client.com" required>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input v-model="mail.subject" class="input" type="text" placeholder="Subject" required>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="mail.body" class="textarea mail-compose-body" rows="2" placeholder="Description"></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Send</button>
       
            </div>
            <div class="control">
              <router-link to="/mail/main/" class="button is-text">Cancel</router-link>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
`,
data() {
  return {
    isComposeActive : true,
    mail: {
      isRead: false,
      senderName: 'May & Ben',
      timeStamp: Date.now()
    }
  }
},
    methods: {
      closeModal() {
          this.$router.push('/')
      },
      sendMail() {
    
        mailService.sendMail(this.mail)
          .then(this.$router.push('/mail/main'))
      },
      

    },
}

