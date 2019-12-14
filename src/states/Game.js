import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');

    this.score = 0;
  }

  init() {
    this.playerEnergy = 100;
    this.score = 0;
  }

  preload() {
    console.log(this);
  }

  create() {
    console.log(this);
  }

  update() {
    console.log(this);
  }

  render() {
    // this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
  }
}

export default Game;
