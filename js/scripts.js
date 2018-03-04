//business logic
   var iRandomNumber;

   iRandomNumber = Math.ceil(Math.random()*6);
   console.log(iRandomNumber)
   
   function rollDice(){
    var die = document.getElementById("die");
    var iRandomNumber = Math.floor(Math.random()* 6) +1;
    die.innerHTML = iRandomNumber;
 }
 
   




//user interface logic
$(document).ready(function() {
  $("#add-address").click(function() { 

   });
  
  
  
  

});


/*var Player1 = {
  setNumber: function(number) {
    this.number = number;
  },
  addPoints: function(points) {
    this.score += points;
  },
  score: 0
};

var Turn = {
  points: 0,
  setPlayer: function(player) {
    this.player = player;
  },
  roll: function() {
    var Die = Object.create(Die);
    var roll = Die.roll();
    if (roll === 1) {
      this.over = true;
      this.points = 0;
    } else {
      this.points += roll;
    }
    return roll;
  },
  hold: function() {
    this.player.addPoints(this.points);
    this.over = true;
  }
};

var Die = {
  roll: function() {
    return Math.floor(Math.random() * 5 + 1);
  }
};

var Game = {
  createPlayers: function(numberOfPlayers) {
    this.players = [];
    for (var i = numberOfPlayers; i > 0; i--) {
      var player = Object.create(Player);
      player.setNumber(i);
      this.players.push(player);
      this.nextPlayer();
    }
  },
  nextPlayer: function() {
    this.currentPlayer = this.players.pop();
    this.players.unshift(this.currentPlayer);
    return this.currentPlayer;
  },
  over: function() {
    return this.players.some(function(player) {
      return player.score >= 100;
    });
  },
  winner: function() {
    return this.players.reduce(function(highestScorerYet, currentPlayer) {
      if (highestScorerYet.score > currentPlayer.score) {
        return highestScorerYet;
      } else {
        return currentPlayer;
      }
    });
  }
};

$(function() {
  function endTurn() {
    $("#player" + currentPlayer.number + "-score").empty().append(currentPlayer.score);
    currentPlayer = game.nextPlayer();
  }

  function newTurn() {
    $("#turn").hide();
    $("#current-player").empty().append(currentPlayer.number);
    var currentTurn = Object.create(Turn);
    currentTurn.setPlayer(currentPlayer);
    return currentTurn;
  }

  var game = Object.create(Game);
  game.createPlayers(2);
  var currentPlayer = game.currentPlayer;
  var currentTurn = newTurn();
  
  $("button#rollDice").click(function() {
    var currentRoll = currentTurn.roll();
    $("#current-roll").empty().append(currentRoll);
    $("#current-turn-score").empty().append(currentTurn.points);
    $("#turn").show();
    if (currentTurn.over) {
      alert("You rolled a 1. Your turn is over!")
      endTurn();
      currentTurn = newTurn();
    }
  });

  $("button#hold").click(function() {
    currentTurn.hold();
    endTurn();
    alert("You scored " + currentTurn.points + " points this turn.");
    if (game.over()) {
      alert("Player " + game.winner().number + " wins!")
    } else {
      currentTurn = newTurn();
    }
  });
});*/  


/* var iRandomNumber;



 //business logic
 function die() {
  iRandomNumber = Math.ceil(Math.random()*6);
 }


 // user interface logic
 $(document).ready(function() {

   $("form#new-contact").submit(function(event) {
     event.preventDefault();


     var inputtedFirstName = $("input#new-first-name").val();
     var inputtedLastName = $("input#new-last-name").val();

     var newContact = new Contact(inputtedFirstName, inputtedLastName);
     $(".new-address").each(function() {
       var inputtedStreet = $(this).find("input.new-street").val();
       var inputtedCity = $(this).find("input.new-city").val();
       var inputtedCounty = $(this).find("input.new-county").val();
       var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
       newContact.addresses.push(newAddress);
     });
     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
     $(".contact").last().click(function() {});
     $("#show-contact").show();
     $("#show-contact h2").text(newContact.firstName);
     $(".first-name").text(newContact.firstName);
     $(".last-name").text(newContact.lastName);
     $("ul#addresses").text("");
     newContact.addresses.forEach(function(address) {
       $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
     });

     $("input#new-first-name").val("");
     $("input#new-last-name").val("");
     $("input.new-street").val("");
     $("input.new-city").val("");
     $("input.new-county").val("");
   });
 });
*/