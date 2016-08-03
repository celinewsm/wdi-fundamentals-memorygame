
var cards = [ 'Queen' , 'Queen' , 'King' , 'King' ];
var cardsInPlay = [];

var board = document.getElementById("game-board");

function createBoard() {
 for(var i = 0; i < cards.length; i++){ 
        var freshCards = document.createElement("div");
        freshCards.className = "card";
        board.appendChild(freshCards);
        freshCards.setAttribute('data-card',cards[i]);
        freshCards.addEventListener('click', isTwoCards );
    }
}


function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === "King") {
    this.innerHTML="<img src='http://i.imgur.com/bnuv5Im.png'>";
  }
  else {this.innerHTML="<img src='http://i.imgur.com/v6buNt2.png'>";
  } 
  
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
    
      for ( var i = 0 ; i < cards.length ; i++ ) {
      document.getElementsByClassName('card')[i].innerHTML = " ";
      }
    
    
  }
}



function isMatch(cardsInPlay) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert ('You found a match!');
  }
  else {alert ('Sorry, try again.');
       }
}




createBoard ();
