// import axios from 'axios';
// import api from './api.js'

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
        return;
    }
}

console.log(chekDate());
// console.log(api.quote());
console.log(serviceQoute());
// if (typeof localStorage.getItem('LS-curentDate') == "undefined" || localStorage.getItem('LS-curentDate') === null) {} ;

// const getQuote = async () => {
//     try {
//         const response = await axios.get(`https://your-energy.b.goit.study/api/quote`)
//         return response.data

//     } catch (err) {
//         console.error(err.toJSON())
//     }
//     console.log(data);
// }
// console.log(getQuote());

//? *************************************************

function serviceQoute() {
    return fetch("https://your-energy.b.goit.study/api/quote")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Sorry, error status: ${response.status}`)
            }
            return response.json();
        })
        .then((data) => {
            // console.log(data.author)
            // console.log(data.quote)
            refs.quoteText.innerHTML = data.quote;
            refs.quoteAutor.innerHTML = data.author;
        }
        )
    // .catch(error => alert(" Error http!!! ")); // add to call function
        .catch(error => refs.quoteText.innerHTML = "Sorry. There is currently a problem with the server. Try again a little later. :("); // add to call function
}
//*** 

// refs.quoteText.innerHTML = "data.quote";

// function createMarkup({ author, quote, }) {
//     return `
//        <p class="js-quoteText">
//           <b>Quote: </b>${quote}
//         </p>
   
//        <p class="js-quoteAutor">
//           <b>Author: </b>${author}
//         </p>
//      `;
// }
// console.log();
