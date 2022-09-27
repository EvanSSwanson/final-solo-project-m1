class Game {
  constructor(mode) {
    this.p1 = new Player();
    this.p2 = new Player('Computer', '🎭');
    this.rounds = 0
    this.classics = ['rock', 'paper', 'scissors']
    this.elementals = ['fire', 'water', 'grass', 'ice', 'stone']
  }

    assignName(name) {
      this.p1.name = name;
    }

    assignEmoji(emoji) {
      this.p1.icon = emoji;
    }

    makeRandomIndex(array) {
      return Math.floor(Math.random() * array.length)
    }

    declareWeapons(weapon) {
      this.p1.weapon = weapon;
      if (weapon === 'rock' || weapon === 'paper' || weapon === 'scissors') {
        var randomNum = this.makeRandomIndex(this.classics)
        this.p2.weapon = this.classics[randomNum];
      } else {
        var randomNum = this.makeRandomIndex(this.elementals)
        this.p2.weapon = this.elementals[randomNum];
      }
    }

    checkDraw() {
      if (this.p1.weapon === this.p2.weapon) {
        this.p1.recentWinner = false;
        this.p2.recentWinner = false;
        return true
      } else {
        return false
      }
    }

    checkWin() {
      var winner;
      if (this.p1.weapon === 'rock' && this.p2.weapon === 'scissors' ||
          this.p1.weapon === 'paper' && this.p2.weapon === 'rock' ||
          this.p1.weapon === 'scissors' && this.p2.weapon === 'paper' ||
          this.p1.weapon === 'fire' && (this.p2.weapon === 'grass' || this.p2.weapon === 'ice') ||
          this.p1.weapon === 'water' && (this.p2.weapon === 'fire' || this.p2.weapon === 'stone') ||
          this.p1.weapon === 'grass' && (this.p2.weapon === 'water' || this.p2.weapon === 'stone') ||
          this.p1.weapon === 'ice' && (this.p2.weapon === 'water' || this.p2.weapon === 'grass') ||
          this.p1.weapon === 'stone' && (this.p2.weapon === 'fire' || this.p2.weapon === 'ice')) {
            winner = this.p1.name;
            this.p1.recentWinner = true;
            this.p2.recentWinner = false;
            this.p1.wins += 1;
      } else {
        winner = this.p2.name;
        this.p1.recentWinner = false;
        this.p2.recentWinner = true;
        this.p2.wins += 1;
      }
      return winner;
    }

    playRound() {
      this.rounds += 1
      if (!this.checkDraw()) {
        game.checkWin()
      }
    }

    resetWins() {
      this.p1.wins = 0;
      this.p2.wins = 0;
    }

  }
