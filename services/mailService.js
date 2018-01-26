import eventBusService from './eventBusService.js'
import mailBackup from './mailBackup.js'


// const MIN_TIMESTAMP = 1483221600000;        // 1/1/2017 00:00:00
// const MAX_TIMESTAMP = 1512943199000;        // 10/12/2017 23:59:59
// date format: MM/DD/YYYY format
const MIN_DATE = '1-1-2017';
const MAX_DATE = '12-10-2017';

var mails = [];

function getMailsArray(){
    return Promise.resolve(mails);
}


function getMails() {
    if (mails.length > 3) return Promise.resolve(mails);
    else {
        // prev ajax `http://www.filltext.com/?rows=50&senderName={firstName}~{lastName}&senderMail={email}&subject={lorem}&timeStamp={numberRange|${MIN_TIMESTAMP},${MAX_TIMESTAMP}}&body={lorem|30}&isRead={bool}&pretty=true`
        return axios.get(`//www.filltext.com/?rows=50&senderName={firstName}~{lastName}&senderMail={email}&subject={lorem}&time={date|${MIN_DATE},${MAX_DATE}}&body={lorem|30}&isRead={bool}&pretty=true`)
            .then(fillTextMails => {
                mails = sortMails(fillTextMails.data)
                // console.log('mails:', mails)
                return mails;
            })
            .catch(err => {
                return axios.get('https://next.json-generator.com/api/json/get/EkwSSt3QN')
                    .then(jsonTextMails => {
                        mails = sortMails(jsonTextMails.data)
                        // console.log('catch:', mails)
                        mails.forEach(mail => {
                            mail.senderMail = mail.senderMail.split(' ').join('_');
                            // console.log('senderMail:', mail.senderMail)
                        })
                        return mails;
                })
            })
            .catch(err => {
                return mailBackup.getMails()
                    .then(mailsBackup => {
                        mails = sortMails(mailsBackup);
                        return mails;
                })
            })
    }
}

function sortMails(unsortMails) {
    // first time after receving the mails from server it sort by date, newest first.
    unsortMails.forEach((mail, idx) => {
        mail.id = idx + 1;
        mail.timeStamp = (new Date(mail.time)).getTime();
    })
    sortMails = unsortMails.sort((a, b) => {
        return b.timeStamp - a.timeStamp
    })
    return sortMails;
}

function queryBySearchWord(term) {
    var filteredMails = [];
    mails.forEach(mail => {
        if (mail.senderName.includes(term) || mail.senderMail.includes(term) || mail.subject.includes(term) || mail.body.includes(term)) {
            filteredMails.push(mail);
        }
    })
    return Promise.resolve(filteredMails);
}

function checkUnreadMails() {
    if (mails.length === 0) return Promise.resolve(0);
    var UnreadMailsCount = mails.reduce((acc, mail) => {
        if (!mail.isRead) acc += 1;
        return acc;
    }, 0);
    var res = parseInt(UnreadMailsCount / mails.length * 100);
    // console.log('UnreadMailsCount',UnreadMailsCount)
    eventBusService.$emit('unreadMailNotification', UnreadMailsCount)    
    return Promise.resolve(res);
}

function sendMail(newMail) {
    // console.log('newMail', newMail);
    // mails.splice(0, 0, newMail)     // inserting newMail into mails array at position 0 and deleting 0 items
    mails.unshift( newMail)
    return Promise.resolve();
}

function deleteMail(mailId) {
    return new Promise((resolve, reject) => {
        var mailIdx = mails.findIndex(mail => mail.id === mailId)
        mails.splice(mailIdx, 1);
        resolve(mails)
    });
}

function updateMailStatus(mail) {
    return new Promise((resolve, reject) => {
        var idx = mails.findIndex(item => item.id === mail.id)
        mails[idx].isRead = mail.isRead;
        resolve()
    });
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

// should be on client side
function sortBySender() {
    this.mails = this.mails.sort((a, b) => {
        if (a.senderName.toLowerCase() > b.senderName.toLowerCase()) return 1;
        else if (a.senderName.toLowerCase() < b.senderName.toLowerCase()) return -1;
        else return 0;
    })
}

function filterReadUnread(status) {
    var filteredMails = [];
    if (status === 'all') return Promise.resolve(mails);
    else {
        if (status === 'true') status = true
        if (status === 'false') status = false
        filteredMails = mails.filter(mail => {
            return mail.isRead === status
        })
        return Promise.resolve(filteredMails);
    }
}


function getMailById(mailId) {
    // console.log('mailId',mailId)
    return new Promise((resolve, reject) => {
        var foundMail = mails.find(mail => mail.id === +mailId)
        if (foundMail) resolve(foundMail)
        else reject();
    })
}

export default {
    getMails,
    queryBySearchWord,
    checkUnreadMails,
    sendMail,
    deleteMail,
    updateMailStatus,
    filterReadUnread,
    getMailById,
    getMailsArray
}
