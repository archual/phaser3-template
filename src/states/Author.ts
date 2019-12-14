import Phaser from 'phaser';
import { gameConfig } from '../index';

class Author extends Phaser.Scene {
  constructor() {
    super('Author');
  }

  create() {
    //  Our tiled scrolling background
    const land = this.add.tileSprite(0, 0, 960, 540, 'startScreen');
    land.setScrollFactor(0);

    const playButton = this.add.text(gameConfig.centerX, gameConfig.centerY, 'go');
    playButton.setInteractive();
    playButton.on('keydown', this.playTheGame);
  }

  playTheGame() {
    this.scene.start('Game');
  }
}

export default Author;
