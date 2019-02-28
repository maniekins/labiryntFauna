export default class Tile {
  constructor(borders = {}) {
    this.borders = borders

    const wallChance= 15
    // hmm to powoduje podwojne sciany :/ a chyba nie to chce :P
    // to powinno byc tam gdzie start szukam :D to tylko obiekt tutaj jest ej:D
    if (!this.borders.Top) {
      this.borders.Top = (Math.random() * 100) < wallChance
    }
    if (!this.borders.Bottom) {
      this.borders.Bottom = (Math.random() * 100) < wallChance
    }
    if (!this.borders.Right) {
      this.borders.Right = (Math.random() * 100) < wallChance
    }
    if (!this.borders.Left) {
      this.borders.Left = (Math.random() * 100) < wallChance
    }
  }
}