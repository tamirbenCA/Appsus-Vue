var mails = [];

function sendMail() {
    console.log('sending')
}

function getMails() {
    if (mails.length > 0) return Promise.resolve(mails)
    else {
        return axios.get('http://www.filltext.com/?rows=50&senderName={firstName}~{lastName}&senderMail={email}&subject={lorem}&timeStamp={date|2015-1-1}&body={lorem|30}&isRead={bool}&pretty=true')
            .then(fillTextMails => {
                mails = fillTextMails.data
                return mails
            })
    }
}

function queryBySearchWord(term) {
    var filteredMails = [];
    mails.forEach(mail => {
        for (i = 0; i < 4; i++) {
            if (mail.senderName.includes(term) || mail.senderMail.includes(term) || mail.subject.includes(term) || mail.body.includes(term)) {
                filteredMails.push(mail);
            }
        }
    })
    return Promise.reslove(filteredMails);
}

function checkUnreadMails() {
    // use reduce
}

export default {
    getMails,
    sendMail,
    queryBySearchWord,
    checkUnreadMails
}