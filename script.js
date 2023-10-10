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
const checkboxContainer = document.getElementById('checkboxContainer');
const alignment = document.getElementById("alignment");
const cards = [
  {
    id: 1,
    image: 0,
    hint: "Food",
    description: "Mushikake, Berbecue, Grilled meat on a stick.",
  },
  {
    id: 3,
    image: 2,
    hint: "Women",
    description: "Menstruation is a woman's monthly bleeding, often called your “period.” When you menstruate, your body discards the monthly buildup of the lining of your uterus (womb). Menstrual blood and tissue flow from your uterus through the small opening in your cervix and pass out of your body through your vagina.",
  },
  {
    id: 4,
    image: 3,
    hint: "Women.",
    description: "An absorbent pad worn by women to absorb menstrual blood; a sanitary towel.",
  },
  {
    id: 5,
    image: 4,
    hint: "Human Body",
    description: "The organ in the lower body of a woman or female mammal where offspring are conceived and in which they gestate before birth; the womb.",
  },
  {
    id: 6,
    image: 5,
    hint: "Hygiene",
    description: "A menstrual cup is a small, bell-shaped cup that a person can insert into their vagina to collect menstrual blood during a period. They are made of medical-grade silicone, rubber, or plastic and are usually reusable. People simply empty the cup, wash it with soap and water, and insert it again.",
  },
  {
    id: 7,
    image: 6,
    hint: "Hygiene",
    description: "Reusable menstrual pads are cloth pads that can be used several times. They absorbs the menstrual blood and the pad should stay for about 4-5 hours depending on your menstrual flow. After use, you need to wash the cloth really well and remove every stain of blood and then you can reuse the same pad.",
  },
  {
    id: 8,
    image: 7,
    hint: "Hygiene",
    description: "One of the materials/methods of absorbing menstrual flow during your period. Tampons are designed to be inserted into the vagina with or without an applicator. You may be surprised to learn that the FDA regulates tampons as medical devices. ",
  },
  {
    id: 9,
    image: 8,
    hint: "human Body",
    description: "Most women and girls get it. It's a fluid or mucus that keeps the vagina clean and moist, and protects it from infection.",
  },
  {
    id: 10,
    image: 9,
    hint: "Human Body",
    description: " The monthly series of changes the body goes through to prepare for pregnancy. Each month, one of the ovaries releases an egg. This is called ovulation. Hormonal changes at this time get the uterus ready for pregnancy. ",
  },
  {
    id: 11,
    image: 10,
    hint: "Medicine",
    description: "A contraceptive pill that is effective up to about seventy-two hours after intercourse.",
  },
  {
    id: 12,
    image: 11,
    hint: "Human Body",
    description: "A point in time 12 months after a woman's last period. The years leading up to that point, when women may have changes in their monthly cycles, hot flashes, or other symptoms, are called the menopausal transition or perimenopause. ",
  },
  {
    id: 13,
    image: 12,
    hint: "Prevention",
    description: "A sheath-shaped barrier device used during sexual intercourse to reduce the probability of pregnancy or a sexually transmitted infection (STI). ",
  },
  {
    id: 14,
    image: 13,
    hint: "STD",
    description: "HIV/AIDS, A chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV).",
  },
  {
    id: 15,
    image: 14,
    hint:"Establishment",
    description: " The station, located in Nyamirambo, is a safe place for the adolescent in the area where they can express themselves, learn about sexual activities, ...",
  },
  {
    id: 16,
    image: 15,
    hint: "Anniversary",
    description: "28 May, Anniversary of Kigali Menstruation station.",
  },
  {
    id: 17,
    image: 16,
    hint: "Establishment",
    description: "Women's room for hygiene and health during perods.",
  },
  {
    id: 18,
    image: 17,
    hint: "Medicine",
    description: "Used to reduce fever and treat pain or inflammation caused by many conditions such as headache, toothache, back pain, arthritis, menstrual cramps, ...",
  },
  {
    id: 19,
    image: 18,
    hint: "Women Support",
    description: "The program is aimed at providing psychosocial, medical, police and legal services to adult and child survivors of gender based violence and child abuse ... ",
  },
  {
    id: 20,
    image: 19,
    hint: "Human Body",
    description:
      "Women private part or the muscular tube leading from the external genitals to the cervix of the uterus in women and most female mammals.",
  },
  {
    id: 21,
    image: 20,
    hint: "Human Body",
    description: "sudden or intense change in a person's emotional state.",
  },
  {
    id: 22,
    image: 21,
    hint: "Hygiene",
    description: "agapira",
  },
  {
    id: 23,
    image: 22,
    hint: "Artist",
    description: "She Started poetry in Rwanda",
  },
  {
    id: 24,
    image: 23,
    hint: "Inventor",
    description: "the inventor of sanitary pad.",
  },
  {
    id: 25,
    image: 24,
    hint: "Politics",
    description: "Ministry of gender and faimily promotion.",
  },
  {
    id: 26,
    image: 25,
    hint: "Politics",
    description: "First black woman US Vice president in 2023.",
  },
  {
    id: 27,
    image: 26,
    hint: "Politics",
    description:
      "Rwandan former minister of foreign affairs, who have recently became the chairwoman of French Speaking countries union.",
  },
  {
    id: 28,
    image: 27,
    hint: "Artist",
    description:
      "Rwandan artist/Musician who sang many songs to honor the victims of 1994 Jenoside against Tutsi.",
  },
  {
    id: 29,
    image: 28,
    hint: "NGO",
    description:
      "Non profit organisation in Rwanda for women studies and empowerment.",
  },
  {
    id: 30,
    image: 29,
    hint: "Author",
    description:
      "Nigerian Author who wrote books such as Americanah, Half of the yellow sun, etc ...",
  },
  {
    id: 31,
    image: 30,
    hint: "Athlete",
    description:
      "First African woman to officiate world cup of soccer (Football).",
  },
  {
    id: 32,
    image: 31,
    hint: "Holiday",
    description: "Day in which the whole world celerabrates the woman.",
  },
  {
    id: 33,
    image: 32,
    hint: "We all love her.",
    description: "She Breastfed me and carried me for 9 months in her womb.",
  },

  {
    id: 35,
    image: 34,
    hint: "Program",
    description:
      "Program initited to support women and value their capabilities",
  },
  {
    id: 36,
    image: 35,
    hint: "Heroine",
    description:
      "Rwandan woman warrior, who went to the battle in the early years.",
  },

  {
    id: 38,
    image: 37,
    hint: "Social media",
    description:
      "Social media that is used to share information. Mostly used as text based posting platform.",
  },
  {
    id: 39,
    image: 38,
    hint: "Social media",
    description:
      "A person's followers on the social media application Twitter.",
  },
  {
    id: 40,
    image: 39,
    hint: "Tourism",
    description: "The Deepest Lake in Africa and it borders Rwanda.",
  },
  {
    id: 41,
    image: 40,
    hint: "Tourism",
    description: "The biggest mountain in Rwanda. With the highest peak.",
  },
  {
    id: 42,
    image: 41,
    hint: "Union",
    description: "English Speaking countries comference.",
  },
  {
    id: 43,
    image: 42,
    hint: "Musician",
    description: "The first musician to sing Pop music.",
  },
  {
    id: 44,
    image: 43,
    hint: "Name",
    description: "Name of flower mostly used to express love and it has the best smell",
  },
  {
    id: 45,
    image: 44,
    hint: "Sports",
    description: "Professional soccer players wear it.",
  },
  {
    id: 46,
    image: 45,
    hint: "Establishment",
    description: "The building of entertainment, mostlty used in Sports",
  },
  {
    id: 47,
    image: 46,
    hint: "Trade",
    description: "Used in trade and commerce. Mostly found in banks.",
  },
  {
    id: 48,
    image: 47,
    hint: "Entertainment",
    description: "Kids show of a cat and a mouse ",
  },
  {
    id: 49,
    image: 48,
    hint: "Entertainment",
    description:
      "You listen to it when you are bored and sometimes dance to it.",
  },
  {
    id: 50,
    image: 49,
    hint: "Tourism",
    description:
      "Campaign established to develop and boost Rwandan Tourism. Supports Arsenal and Paris St Germain.",
  },
];


cards.forEach(item => {
  const checkbox = document.createElement('input');
  checkbox.type = 'radio';
  checkbox.id = `checkbox${item.id}`;
  checkbox.name = toString(`checkbox${item.image}`);
  checkbox.value = item.description;

  const label = document.createElement('label');
  label.htmlFor = `checkbox${item.id}`;
  label.appendChild(document.createTextNode(item.description));
  
  alignment.appendChild(checkbox);
  alignment.appendChild(label);
  alignment.appendChild(document.createElement('br')); 
  checkboxContainer.appendChild(alignment);
  
});


const len = cards.length;

const all_cards = cards.forEach((card) => {
  console.log(card.id);
  console.log(card.description);
  console.log(card.hint);
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
      return array[randomIndex].hint;
    }

    const randomHint = getRandomElement(cards);
    console.log("Randomly picked object:", randomHint);
    card_title.innerText = "Hint";
    card_desc.innerText = randomHint;
  }
}
shuffle_btn.addEventListener("click", shuffleCards);

function guessTheCard(){
  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex].description;
  }

}