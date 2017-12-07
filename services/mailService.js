// const MIN_TIMESTAMP = 1483221600000;        // 1/1/2017 00:00:00
// const MAX_TIMESTAMP = 1512943199000;        // 10/12/2017 23:59:59
// date format: MM/DD/YYYY format
const MIN_DATE = '1-1-2017';
const MAX_DATE = '12-10-2017';

var mails = [];

function getMails() {
    if (mails.length > 0)       return Promise.resolve(mails)
    else {
        // prev ajax `http://www.filltext.com/?rows=50&senderName={firstName}~{lastName}&senderMail={email}&subject={lorem}&timeStamp={numberRange|${MIN_TIMESTAMP},${MAX_TIMESTAMP}}&body={lorem|30}&isRead={bool}&pretty=true`
        return axios.get(`http://www.filltext.com/?rows=50&senderName={firstName}~{lastName}&senderMail={email}&subject={lorem}&time={date|${MIN_DATE},${MAX_DATE}}&body={lorem|30}&isRead={bool}&pretty=true`)
            .then(fillTextMails => {
                mails = fillTextMails.data
                // first time after receving the mails from server it sort by date, newest first.
                mails.forEach((mail, idx) => {
                    mail.id = idx + 1;
                    mail.timeStamp = (new Date(mail.time)).getTime();
                })
                mails = mails.sort((a, b) => {
                    return b.timeStamp - a.timeStamp
                })
                // console.log('mails:', mails)
                return mails
            })
            .catch(err => {
                mails = [
                    {
                    id: 1,
                    senderName: 'Ben Tamir',
                    senderMail: 'tamirben@gmail.com',
                    subject: 'no filltext service',
                    timeStamp: Date.now(),
                    body: 'When will filltext fix the site? error 503'
                },
                {
                    id: 2,
                    senderName: 'May Schiller',
                    senderMail: 'mayschiller@gmail.com',
                    subject: 'ben wrote this for me',
                    timeStamp: Date.now(),
                    body: 'bla bla bla'
                },
                ]
                return mails;
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
    var res = UnreadMailsCount / mails.length * 100;
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