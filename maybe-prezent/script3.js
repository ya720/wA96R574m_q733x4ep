
function startMemoryGame() {
  const cards = [ 
  { src: "abi.png" },
  { src: "abi.png" },
  { src: "miamore.png" },
  { src: "miamore.png" },
  { src: "misza.png" },
  { src: "misza.png" },
  { src: "shibako.png" },
  { src: "shibako.png" },
  { src: "ja.png" },
  { src: "ja.png" },
  { src: "amaya.png" },
  { src: "amaya.png" },
  { src: "house.png" },
  { src: "house.png" },
  { src: "tamamuff.png" },
  { src: "tamamuff.png" },
		
  ];
  
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;

 
  let game = document.querySelector('.game');

  if (!game) {
    console.error("Nie znaleziono .game");
    return;
  }
  
   game.innerHTML = "";

  let shuf_images = cards.sort(() => Math.random() - 0.5);

  for (let i = 0; i < shuf_images.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
	
	
    
	box.innerHTML = `
  <div class="card-inner">
    <div class="card-front"></div>
    <div class="card-back">
      <img src="${shuf_images[i].src}">
    </div>
  </div>
`;

	box.addEventListener("click", () => {
  if (lockBoard) return;
  if (box === firstCard) return;

  box.classList.add("flipped");

  if (!firstCard) {
    firstCard = box;
    return;
  }

  secondCard = box;
  lockBoard = true;

  checkMatch();
});


  game.appendChild(box);
  }
  
  function checkMatch() {
    let img1 = firstCard.querySelector("img").src;
    let img2 = secondCard.querySelector("img").src;

    if (img1 === img2) {
      firstCard.classList.add("matched");
      secondCard.classList.add("matched");
      resetTurn();
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetTurn();
      }, 800);
    }
  }
  
  function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
  }

}
  
  

