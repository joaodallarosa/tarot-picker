// without jQuery (doesn't work in older IEs)
var takenCards = 0;
var tarot = [];

document.addEventListener('DOMContentLoaded', function(){ 
  const deckElem = document.getElementById('deck');
  const backCardElem = document.getElementById('back-card');
  const takenCardsContainer = document.getElementById('taken-card-container');
  deckElem.addEventListener('click', function() {
    console.log('clicked...');
    backCardElem.classList.add('animate');
    deckElem.classList.add('animate-deck');

    
    backCardElem.style.webkitAnimation = 'none';
    deckElem.style.webkitAnimation = 'none';
    setTimeout(function() {
      backCardElem.style.webkitAnimation = '';
      deckElem.style.webkitAnimation = '';
    }, 10);
  })

  document.getElementById('take-card').addEventListener('click', drawCard);

  function drawCard() {
    takenCards++;
    const container = document.getElementById('container');
    var takenCard = document.createElement('div');
    var card = document.createElement('div');
    card.classList.add('taken-card');
    takenCard.appendChild(card);
    container.appendChild(takenCard);

    takenCardsContainer.appendChild(takenCard);
  
    card.style.top = `${deckElem.offsetTop}px`;
    card.style.left = `${deckElem.offsetLeft}px`;
    setTimeout(() => {
      card.style.transform = `translateY(${nextCardPlacement()}px) translateX(${takenCard.offsetLeft - deckElem.offsetLeft}px)`;
      // card.style.transform = `translateX(-500px)`;
      // card.style.position = 'relative'; 
    }, 10);
  }
  
  function nextCardPlacement() {
    // console.log('jdaldjklsa', deckElem.offsetHeight);
    return (deckElem.offsetHeight + 20);
  }

  function shuffle() {
    
  }
  // your code goes here
}, false);


