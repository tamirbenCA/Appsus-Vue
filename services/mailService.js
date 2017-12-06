var mails = [];

function sendMail() {
    console.log('sending')
}

function getMails() {
    if (mails.length > 0) return Promise.resolve(mails)
    else {
        return axios.get('http://www.filltext.com/?rows=50&senderName={firstName}~{lastName}&senderMail={email}&subject={lorem}&timeStamp={date|2015-1-1}&body={lorem|30}&isRead={bool}&pretty=true')
            .then(fillTextMails => {
                mails = fillTextMails
                return mails
            })
    }
}



export default {
    getMails,
    sendMail

}