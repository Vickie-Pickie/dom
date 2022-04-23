function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

class GameField {
  draw() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.wrapper.appendChild(cell);
    }
    const app = document.getElementById('app');
    app.appendChild(this.wrapper);
  }

  run() {
    setInterval(() => {
      const randomCell = randomInteger(0, 15);
      const previous = this.wrapper.getElementsByClassName('active');
      if (previous.length > 0) {
        previous[0].classList.remove('active');
      }

      this.wrapper.children[randomCell].classList.add('active');
    }, 1000);
  }
}

export default GameField;
