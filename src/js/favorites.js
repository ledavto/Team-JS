import axios from "axios";
import Pagination from 'tui-pagination';
// import '../node_modules/tui-pagination/dist/tui-pagination';
const favorites=document.querySelector('.js-favorites');
const favoritesMessage=document.querySelector('.js-favorites-message');

const FAVORITES_LS_KEY = "checkout";


const checkoutProducts=[
  {
    "_id": "64f389465ae26083f39b17a2",
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0001.gif",
    "name": "3/4 sit-up",
    "target": "abs",
    "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    "rating": 4.5,
    "burnedCalories": 220,
    "time": 3,
    "popularity": 1322
},
{
    "_id": "64f389465ae26083f39b17a7",
    "bodyPart": "chest",
    "equipment": "leverage machine",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0009.gif",
    "name": "assisted chest dip (kneeling)",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 329,
    "time": 3,
    "popularity": 99
},
{
    "_id": "64f389465ae26083f39b17a3",
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0002.gif",
    "name": "45° side bend",
    "target": "abs",
    "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    "rating": 3,
    "burnedCalories": 323,
    "time": 3,
    "popularity": 263
},
{
    "_id": "64f389465ae26083f39b17a4",
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0003.gif",
    "name": "air bike",
    "target": "abs",
    "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    "rating": 4.64,
    "burnedCalories": 312,
    "time": 3,
    "popularity": 638
},
{
    "_id": "64f389465ae26083f39b17a5",
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0006.gif",
    "name": "alternate heel touchers",
    "target": "abs",
    "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    "rating": 3,
    "burnedCalories": 116,
    "time": 3,
    "popularity": 74
},
{
    "_id": "64f389465ae26083f39b17ac",
    "bodyPart": "waist",
    "equipment": "medicine ball",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0014.gif",
    "name": "assisted motion russian twist",
    "target": "abs",
    "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    "rating": 3,
    "burnedCalories": 212,
    "time": 3,
    "popularity": 0
},
{
    "_id": "64f389465ae26083f39b17b7",
    "bodyPart": "upper legs",
    "equipment": "barbell",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0026.gif",
    "name": "barbell bench squat",
    "target": "quads",
    "description": "Located at the front of the upper leg, the quads are responsible for knee extension and hip flexion. Exercises include squats, leg press, and lunges.",
    "rating": 3,
    "burnedCalories": 259,
    "time": 3,
    "popularity": 60
},
{
    "_id": "64f389465ae26083f39b17ba",
    "bodyPart": "upper legs",
    "equipment": "barbell",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0029.gif",
    "name": "barbell clean-grip front squat",
    "target": "glutes",
    "description": "Located in the buttocks, these are powerful muscles used in hip extension, abduction, and external rotation. Exercises like squats, deadlifts, and hip thrusts target the glutes.",
    "rating": 3,
    "burnedCalories": 128,
    "time": 3,
    "popularity": 56
},
{
  "_id": "64f389465ae26083f39b17bc",
  "bodyPart": "upper arms",
  "equipment": "barbell",
  "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0031.gif",
  "name": "barbell curl",
  "target": "biceps",
  "description": "Located on the front part of the upper arm, the biceps are responsible for elbow flexion and supination of the forearm. Exercises that target biceps include bicep curls, hammer curls, and chin-ups.",
  "rating": 3,
  "burnedCalories": 245,
  "time": 3,
  "popularity": 160
},
{
  "_id": "64f389465ae26083f39b17c1",
  "bodyPart": "chest",
  "equipment": "barbell",
  "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0036.gif",
  "name": "barbell decline wide-grip press",
  "target": "pectorals",
  "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
  "rating": 3,
  "burnedCalories": 209,
  "time": 3,
  "popularity": 5
}
];
localStorage.setItem(FAVORITES_LS_KEY, JSON.stringify(checkoutProducts));

    let checkoutFavorites = JSON.parse(localStorage.getItem(FAVORITES_LS_KEY)) ?? [];
    
    console.log(checkoutFavorites);

    checkoutFavorites.length===0
    ?
    favoritesMessage.hidden = false
    :favorites.insertAdjacentHTML("beforeend", createMarkup(checkoutFavorites))


function createMarkup(exercises) {
  return exercises
    .map(
      ({ _id, name, burnedCalories, time, bodyPart, target }) =>
        `
    <li data-id="${_id}"class="favorites-card-item">
    <h2 class="workout">WORKOUT</h2>
    <svg class="trash-icon" width="16" height="16">
     <use href="../img/icons.svg#icon-trash"></use>
    </svg>        
    <svg class="trash-icon" width="16" height="16">
     <use href="./images/icons.svg#icon-trash"></use>
    </svg>
    <p class="favorites-start">Start</p>
            <div>
              <svg class="favorites-header-arrow" width="16" height="16">
                <use href="../img/icons.svg#icon-arrow"></use>
              </svg>
            </div>
            <div class="favorites-name">
            <div class="favorites-name-svg">
              <svg class="favorites-name-svg-svg" width="20" height="20">
                <use href="../img/icons.svg#icon-running-stick-figure"></use>
              </svg>
            </div>
            <div class="favorites-name-text">${name}</div>
          </div>
          <div clasdescription">
          <p class="description-burned-grey">Burned calories:</p>
          <p class="description-burned-normal">${burnedCalories} / ${time} min</p>
          <p class="description-part-grey">Body part:</p>
          <p class="description-part-normal">${bodyPart}</p>
          <p class="description-target-grey">Target:</p>
          <p class="description-target-normal">${target}</p>
          </div>
    </li>
    `
    )
    .join("");
    
}

favorites.addEventListener('click', trashcard);

function trashcard(event) {
  if (!event.target.classList.contains("trash-icon")){
    return;
  }
  const card = event.target.closest(".favorites-card-item") // отримаємо посилання на всю лішку

  const cardId = card.dataset.id; // через дата атрибут отримали id поточної вправи
console.log(cardId);

let checkoutFavorites = JSON.parse(localStorage.getItem(FAVORITES_LS_KEY)) ?? [];
  const currentCard = checkoutFavorites.find(({ _id }) => _id === cardId); // знайшли обʼєкт поточного товару в масиві всіх товарів за id
  console.log(currentCard);

  const newCardIdx = checkoutFavorites.findIndex(
    ({_id }) =>_id === cardId
  ); // знаходимо індекс вправи з масиву favorites (якщо такої вправи немає - повертає -1)

  if (newCardIdx !== -1) {
    // якщо це вправа є в localStorage
    checkoutFavorites.splice(newCardIdx, 1);
    localStorage.setItem(FAVORITES_LS_KEY, JSON.stringify(checkoutFavorites));
    card.remove();
    };
  if (checkoutFavorites.length===0)
    {favoritesMessage.hidden = false};
    
  }
  // let totalPages=checkoutFavorites.length / 8;
  // updatePaginationExercises(totalPages);
// const itemsPerPage=8
// let currentPage = 1;
// updatePagination(3);

// function updatePagination(totalPages) {
//   const paginationContainer = document.getElementById('pagination');

//   const options = {
//     totalItems: totalPages * itemsPerPage,
//     itemsPerPage: itemsPerPage,
//     visiblePages: 3,
//     page: currentPage,
//   };

//   const pagination = new Pagination(paginationContainer, options);

//   pagination.on('beforeMove', event => {
//     const newPage = event.page;
//     currentPage = newPage;
//   });
// }

// function updatePaginationExercises(totalPages) {
//   const paginationContainer = document.getElementById('pagination');
//   paginationContainer.innerHTML = '';

//   const options = {
//     totalItems: totalPages * itemsPerPage,
//     itemsPerPage: itemsPerPage,
//     visiblePages: 5,
//     page: currentPage,
//   };

//   const pagination = new Pagination(paginationContainer, options);

//   pagination.on('beforeMove', event => {
//     const newPage = event.page;
//     currentPage = newPage;
//     showExercises(
//       newPage
//     );
//   });
// }