const cardArray = [
  { name: "fries", img: "images/fries.jpg" },
  { name: "cheeseBurger", img: "images/cheeseBurger.jpg" },
  { name: "hotdog", img: "images/hotdog.jpg" },
  { name: "icecream", img: "images/icecream.jpg" },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  { name: "pizza", img: "images/pizza.jpg" },
  { name: "fries", img: "images/fries.jpg" },
  { name: "cheeseBurger", img: "images/cheeseBurger.jpg" },
  { name: "hotdog", img: "images/hotdog.jpg" },
  { name: "icecream", img: "images/icecream.jpg" },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  { name: "pizza", img: "images/pizza.jpg" },
];

cardArray.sort(() => {
  0.5 - Math.random();
});

const gridDisplay = document.querySelector("#grid");
let cardsWon = [];
let cardsChosen = [];
let cardsChosenId = [];

function CreateBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blanks.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

CreateBoard();

function flipCard() {
  let cardId = this.getAttribute("data-id");

  if (cardsChosenId.includes(cardId)) {
    return;
  }

  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}


function checkMatch() {
  const cards = document.querySelectorAll("img");
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match");
    cards[cardsChosenId[0]].setAttribute("src", "images/white.jpg");
    cards[cardsChosenId[1]].setAttribute("src", "images/white.jpg");
    cardsWon.push(cardsChosen);
  } else {
    cards[cardsChosenId[0]].setAttribute("src", "images/blanks.jpg");
    cards[cardsChosenId[1]].setAttribute("src", "images/blanks.jpg");
  }

  cardsChosen = [];
  cardsChosenId = [];

  if(cardsWon.length===cardArray.length/2){
    alert('You found all the  pairs !');
  }
}



