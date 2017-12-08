function sortBySubject() {
    console.log('sorting')
    var temp2 = temp.sort((a, b) => {
        if (a.subject.toLowerCase() > b.subject.toLowerCase()) return 1;
        else if (a.subject.toLowerCase() < b.subject.toLowerCase()) return -1;
        else return 0;
    })
    console.log(temp2)
}


var temp = [
    {subject: 'kadsfjh asdjfhj asdfjh safdjh adsjfh'},
    {subject: 'Lorem slakf asdfhjsadfh jsdh fjasdh fljadsfh '},
    {subject: 'akjdfskljajjasd ksad fkadshhf jsadfh'},
    {subject: 'klfhds fjash fkjhsad fhasdkjfhaskd '},
    {subject: 'lkhfas jhf ajksfh ajsh jfshajhf '},
    {subject: 'fjkashfsadhfjsadhfjhds sadfhjh'},
    {subject: 'akfkf asdfh sjfh sdfhsadu;'},
    {subject: 'lkhfasjdhfj dsfjsadfh  sjadhfjkasdfhjashfio'},
    {subject: 'jkahewqwasdjkh jashdqjdhasjfh sdb'},
    {subject: 'bbsajkdbfasdbfbjasdfnaljdsfvb'},
    {subject: 'zzkhdshafjkdshfj dasf hafdsjfh'},
    {subject: 'ccjcklhsdcjh asdjch cdsjh'},
    {subject: 'asdfakadsfjh asdjfhj asdfjh safdjh adsjfh'},
]