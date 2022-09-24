class Game {
  constructor(mode) {
    this.p1 = new Player();
    this.p2 = new Player();
    this.mode = mode;
    this.round = []
    if (this.mode === 'Classic') {
      this.weapons = 3
    } else if (this.mode === 'Elemental') {
      this.weapons = 5
    }
  }
}
