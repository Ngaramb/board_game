const start = documen.getElementById('start');
const woman = document.getElementById('woman');
const tennis = document.getElementById('tennis');
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
const shuffle_btn = documment.getElementById("shuffle");

const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38.39,40,41,42,43,44,45,46,47,48,49,50]

function shuffleCards(){
    cards.classList.remove("hidden");
    const card_images = cards.createElement("img");
    card_images.style.height("370px");
}
shuffle_btn.addEventListener("click", shuffleCards);