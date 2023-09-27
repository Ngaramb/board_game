const start = document.getElementById("start");
const woman = document.getElementById("woman");
const tennis = document.getElementById("tennis");
const computer = document.getElementById("computer");
const toilet = document.getElementById("toilet");
const gorilla = document.getElementById("gorilla");
const pregnant = document.getElementById("pregnant");
const open_pad = document.getElementById("open_pad");
const white_girl = document.getElementById("white_girl");
const black_girl = document.getElementById("black_girl");
const headband_girl = document.getElementById("headband_girl");
const drummer = document.getElementById("drummer");
const giraffe = document.getElementById("giraffe");
const closed_pad = document.getElementById("closed_pad");
const cup = document.getElementById("cup");
const bottle = document.getElementById("bottle");
const lion = document.getElementById("lion");
const serum = document.getElementById("serum");
const motorcycle = document.getElementById("motorcycle");
const waist = document.getElementById("waist");
const pills = document.getElementById("pills");
const headphones = document.getElementById("headphones");
const wet_pad = document.getElementById("wet_pad");
const calendar = document.getElementById("calendar");
const house = document.getElementById("house");
const phone = document.getElementById("phone");
const wet_underwear = document.getElementById("wet_underwear");
const rider = document.getElementById("rider");
const billboard = document.getElementById("billboard");
const underwear = document.getElementById("underwear");
const pad = document.getElementById("pad");
const women_gemitals = document.getElementById("women_gemitals");
const finish = document.getElementById("finish");
const cards_container = document.getElementById("cards_container");
const shuffle_btn = document.getElementById("shuffle");
const image = document.getElementById("image");
const card_title = document.getElementById("card_title");
const card_desc = document.getElementById("card_desc");
const cards = [
  {
    id: 1,
    image: 0,
    description: "Meat",
  },
  {
    id: 2,
    image: 1,
    description: "Board game for women knowledge",
  },
  {
    id: 3,
    image: 2,
    description: "Women periods",
  },
  {
    id: 4,
    image: 3,
    description: "Board game for men knowledge",
  },
  {
    id: 5,
    image: 4,
    description: "Board game for men knowledge",
  },
  {
    id: 6,
    image: 5,
    description: "Board game for men knowledge",
  },
  {
    id: 7,
    image: 6,
    description: "Board game for men knowledge",
  },
];
const len = cards.length;

const all_cards = cards.forEach((card) => {
  console.log(card.id);
  console.log(card.description);
  console.log(card.image);
});

function shuffleCards() {
  cards_container.classList.remove("hidden");
  image.classList.remove("hidden");
  cards_container.classList.remove("hidden");
  if (image) {
    function getRandomElement(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomImage = array[randomIndex].image;
      image.setAttribute("src", "cards/" + randomImage + ".png");
      return array[randomIndex].description;
    }

    const randomObject = getRandomElement(cards);
    console.log("Randomly picked object:", randomObject);
    card_title.innerText = "Card Details";
    card_desc.innerText = randomObject;
  }
}
shuffle_btn.addEventListener("click", shuffleCards);
