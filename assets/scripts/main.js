// without jQuery (doesn't work in older IEs)
var takenCards = 0;
var tarot = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

document.addEventListener('DOMContentLoaded', function(){ 
  const deckElem = document.getElementById('deck');
  const backCardElem = document.getElementById('back-card');
  const takenCardsContainer = document.getElementById('taken-card-container');
  deckElem.addEventListener('click', function() {
    shuffle(tarot);
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
    var cardNumber = tarot.shift();
    var takenCard = document.createElement('div');
    takenCard.classList.add('taken-card');

    var takenCardInner = document.createElement('div');
    takenCardInner.classList.add('taken-card__inner');
    var front = document.createElement('div');
    front.classList.add('taken-card__front');
    var back = document.createElement('div');
    back.classList.add('taken-card__back');
    back.style.backgroundImage = `url(assets/img/${cardNumber}.jpg)`;
    takenCardInner.appendChild(front);
    takenCardInner.appendChild(back);

    takenCard.appendChild(takenCardInner);
    
    takenCardsContainer.children[takenCards - 1].appendChild(takenCard);
    animateElemFromTo(takenCard, deckElem, takenCardsContainer.children[takenCards - 1]);
  }
  
  function nextCardPlacement() {
    return (deckElem.offsetHeight + 20);
  }

  function animateElemFromTo(elem, fromElem, toElem) {
    elem.style.top = `${fromElem.offsetTop}px`;
    elem.style.left = `${fromElem.offsetLeft}px`;
    toElem.style.height = `${elem.offsetHeight}px`;
    
    setTimeout(() => {
      elem.getElementsByClassName('taken-card__inner')[0].style.transform = 'rotateY(180deg)';
    }, 800);
    
    setTimeout(() => {
      elem.style.transform = `translateY(${toElem.offsetTop - fromElem.offsetTop}px) translateX(${(toElem.offsetLeft - fromElem.offsetLeft) + ((toElem.offsetWidth - elem.offsetWidth) / 2)}px)`;
    }, 10);
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  // your code goes here
}, false);


