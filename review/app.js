// local reviews data
const reviews = [
  {
    id: 1,
    name: "best ukpai",
    job: "wordpress developer",
    img:
      "img/best.jpg",
    text:
      "Best Ukpai is the CEO Testrogen HUb Abakaliki. He has been a developer for 10 years now. He has expertise on web development and a professional on WordPress development",
  },
  {
    id: 2,
    name: "vincent jnr",
    job: "ux / ui designer",
    img:
      "img/vincet.jpg",
    text:
      "Vincent have been working as a UI/UX designer for a decade now. He is the founder of DESIGN  HUB also in Abakaliki ",
  },
  {
    id: 3,
    name: "ifeanyichukwu john",
    job: "artificial intelligence engineer",
    img:
      "img/me.jpg",
    text:
      "Ifeanyichukwu is a Machine Learning Engineer,Python developer,Data Scientist,Ai Engineer",
  },
  {
    id: 4,
    name: "bontus japh",
    job: "vue js developer",
    img:
      "img/bontus.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "jidechi ukor",
    job: "python/react js developer",
    img:
      "img/jide.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//select DOM element
const id = document.getElementById('id');
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
showPerson()
})

function showPerson(){
  let item = reviews[currentItem];
  // id.textContent = item.id;
  img.src = item.img
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson()
})

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson()
});

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson()
});



