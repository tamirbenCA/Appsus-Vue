'use strict'
console.log('ajax-proj');


function getClashRoyalData() {
    clearScreen();
    axios.get('http://www.clashapi.xyz/api/chests')
        .then(function (res) {
            var filtered = res.data.filter(function (chest) {
                return chest.gemCost > 0;
            })
            renderChests(filtered)
        });
}

function renderChests(chests) {
    var elClashRoyal = document.querySelector('.clash-royal');

    // console.log(chests.length);
    var strHtml = '';

    //sort array of objects
    chests.sort(function (a, b) {
        return a.gemCost - b.gemCost;        
    });

    chests.forEach(function (chest) {
        // console.log(chest.idName);
        var idx = chest.idName.replace(/[-][\d]+/, '');
        // console.log(idx);
        strHtml += `
        <tr>
        <td> <b>Name:</b><br> ${chest.idName} </td>
        <td> <img src="http://www.clashapi.xyz/images/chests/${idx}.png" /></td>
        <td> <b>Gem Cost:</b><br> ${chest.gemCost} </td>
        <tr/>
        `
    });
    // console.log(strHtml);
    var elChests = document.querySelector('#chests');
    // console.log (elChests)
    elChests.innerHTML = strHtml;
    elClashRoyal.style.display = 'block';
}

// function sortArrOfObj(a, b) {
    // return a.gemCost - b.gemCost;
    
    // if (a.gemCost < b.gemCost)
    //   return -1;
    // if (a.gemCost > b.gemCost)
    //   return 1;
    // return 0;
// }

function getMyContacts() {
    clearScreen()
    // console.log('my contacts')

    var prmContacts = fetch('http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone%7Cformat%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState%7Cabbr%7d&zip=%7bzip%7d&pretty=true')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            // console.log(data);
            renderContacts(data);
        });
}

function renderContacts(contacts) {
    var elMyContacts = document.querySelector('.my-contacts');
    var elContacts = document.querySelector('#contacts');
    var strHtml = '';
    // console.log(contacts)


    contacts.forEach(function (contact) {
        // console.log(contact);
        strHtml += `
        <tr>
        <td> <b>First Name:</b><br> ${contact.fname} </td>
        <td> <b>Last Name:</b><br> ${contact.lname} </td>
        <td> <b>Tel:</b><br> ${contact.tel} </td>
        <td> <b>Address:</b><br> ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip} </td>
        <tr/>
        `
    });
    elContacts.innerHTML = strHtml;
    elMyContacts.style.display = 'block';
}


function getQuote() {
    clearScreen()
    var elQuote = document.querySelector('.quote-of-day');
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE &&
            httpRequest.status === 200) {
            var res = JSON.parse(httpRequest.responseText)
            // console.log(res);
            document.querySelector('.quote').innerText = '"' + res.quoteText + '"';
            document.querySelector('.quote-auther').innerText = res.quoteAuthor;
        }
    }

    httpRequest.open("GET", "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json", true);
    httpRequest.send();
    elQuote.style.display = 'block';
}

function yesNo() {
    clearScreen()
    var elYesNo = document.querySelector('.yes-no')
    elYesNo.style.display = 'block';
}

function renderYesNo() {
    var userInput = document.querySelector('.yes-no-input').value;
    var elAnswer = document.querySelector('.answer');
    var elImg = document.querySelector('.answerImg');
    var elJoke = document.querySelector('.answerJoke');
    
    console.log(userInput);
    
    if (userInput.toLowerCase() === 'answer to the ultimate answer of life the universe and everything') {
        elAnswer.innerText = '42';
        elImg.src = 'img/42.jpg';
    } else if (userInput) {
        axios.get('https://yesno.wtf/api')
            .then(function (res) {
                let answer = res.data.answer;
                elAnswer.innerText = answer;
                elImg.src = res.data.image;
                if (answer === 'yes') {
                    // render joke
                    axios.get('http://api.icndb.com/jokes/random')
                        .then(function (joke) {
                            elJoke.innerText = joke.data.value.joke;
                        })
                } else elJoke.innerText = '';
            })
    } else {
        elAnswer.innerText = 'Please type a question';
    }
}

function clearScreen() {
    var els = document.querySelectorAll('.section');
    els.forEach(function (el) {
        el.style.display = 'none';
    });
}