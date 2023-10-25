import api from './api.js'

const refs = {
    quoteText: document.querySelector('.js-quoteText'),
    quoteAutor: document.querySelector('.js-quoteAutor'),
};

function getDate(date) {
    let currentDate = new Date();
    let curentDate = currentDate.toLocaleDateString();
    return curentDate;
}
function chekDate() {
    if (localStorage.getItem('LS-curentDate') === null) {
        localStorage.setItem("LS-curentDate", getDate());
        // console.log(localStorage.setItem("LS-curentDate", getDate()));
    }

    if (localStorage.getItem('LS-curentDate') !== getDate()) {
        localStorage.setItem("LS-curentDate", getDate());
        // alert("Date is not actual!")y
    }
    api.getQuote().then((data) => {
        refs.quoteText.textContent = data.quote;
        refs.quoteAutor.textContent = data.author;
    }
    )
}
chekDate();

//? ***************** fetch api ********************************

// function serviceQoute() {
//     return fetch("https://your-energy.b.goit.study/api/quote")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Sorry, error status: ${response.status}`)
//             }
//             return response.json();
//         })
//         .then((data) => {
//             refs.quoteText.innerHTML = data.quote;
//             refs.quoteAutor.innerHTML = data.author;
//         }
//         )
//         .catch(error => refs.quoteText.innerHTML = "Sorry. There is currently a problem with the server. Try again a little later. :("); // add to call function
// }


