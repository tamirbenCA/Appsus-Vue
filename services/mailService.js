// const MIN_TIMESTAMP = 1420063200000     // 1/1/2015 00:00:00
const MIN_TIMESTAMP = 1483221600000     // 1/1/2017 00:00:00
const MAX_TIMESTAMP = 1512943199000     // 10/12/2017 23:59:59
                                        // timeStamp in MM/DD/YYYY format

var mails = [];

function getMails() {
    if (mails.length > 0)       return Promise.resolve(mails)
    else {
        // prev ajax 'http://www.filltext.com/?rows=50&senderName={firstName}~{lastName}&senderMail={email}&subject={lorem}&timeStamp={date|2015-1-1}&body={lorem|30}&isRead={bool}&pretty=true'
        return axios.get(`http://www.filltext.com/?rows=50&senderName={firstName}~{lastName}&senderMail={email}&subject={lorem}&timeStamp={numberRange|${MIN_TIMESTAMP},${MAX_TIMESTAMP}}&body={lorem|30}&isRead={bool}&pretty=true`)
            .then(fillTextMails => {
                mails = fillTextMails.data
                // first time after receving the mails from server it sort by date, newest first.
                mails = mails.sort((a, b) => {
                    return b.timeStamp - a.timeStamp
                })
                // console.log('mails:', mails)
                return mails
            })
    }
}

function queryBySearchWord(term) {
    var filteredMails = [];
    mails.forEach(mail => {
        if (mail.senderName.includes(term) || mail.senderMail.includes(term) || mail.subject.includes(term) || mail.body.includes(term)) {
            filteredMails.push(mail);
        }
    })
    // console.log('filtered:', filteredMails)
    return Promise.resolve(filteredMails);
}

function checkUnreadMails() {
    var UnreadMailsCount = mails.reduce((acc, mail) => {
        if (!mail.isRead)       acc += 1;
    return acc;
    }, 0);
    var res = {
        unreadMails: UnreadMailsCount,
        totelMails: mails.length
    }
    Promise.resolve(res);
}

function sendMail(newMail) {
    newMail.senderName = 'May & Ben'
    newMail.senderMail = 'codingAcademy@misterBit.com'    
    newMail.timeStamp = Date.now;
    newMail.isRead = false;
    mails.push(newMail)
    Promise.resolve(mails);
}

function deleteMail() {
    // how to find the correct mail? id???
}



// should be on client side
function sortByDate() {
    this.mails = this.mails.sort((a, b) => {
        return a.timeStamp - b.timeStamp
    })
}

// should be on client side
function sortBySubject() {
    this.mails = this.mails.sort((a, b) => {
        if (a.subject.toLowerCase() > b.subject.toLowerCase()) return 1;
        else if (a.subject.toLowerCase() < b.subject.toLowerCase()) return -1;
        else return 0;
    })
}


export default {
    getMails,
    queryBySearchWord,
    checkUnreadMails,
    sendMail,
    deleteMail
}