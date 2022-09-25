class Game {
  constructor(mode) {
    this.p1 = new Player('Evan', '🗿');
    this.p2 = new Player('Computer', '🎭');
    this.mode = mode;
    this.rounds = 0
    this.classics = ['rock', 'paper', 'scissors']
    this.elementals = ['fire', 'water', 'grass', 'ice', 'stone']
  }

    makeRandomIndex(array) {
      return Math.floor(Math.random() * array.length)
    }

    classicDeclare(weapon) {
      var randomClassic = this.makeRandomIndex(this.classics)
      this.p1.weapon = weapon;
      this.p2.weapon = this.classics[randomClassic];
      this.mode = 'Classic'
    }

    elementalDeclare(weapon) {
      var randomElemental = this.makeRandomIndex(this.elementals)
      this.p1.weapon = weapon;
      this.p2.weapon = this.elementals[randomElemental];
      this.mode = 'Elemental'
    }

  checkDraw() {
    if (this.p1.weapon === this.p2.weapon) {
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
          this.p1.wins += 1;
    } else {
      winner = this.p2.name;
      this.p2.wins += 1;
    }
    return winner;
  }

  playRound() {
    this.rounds += 1
    if (!game.checkDraw()) {
      game.checkWin()
    }
  }

  resetWins() {
    this.p1.wins = 0;
    this.p2.wins = 0;
  }

}
