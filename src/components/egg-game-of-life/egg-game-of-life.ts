import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/*eslint-disable */
import style from './egg-game-of-life.css?inline' assert { type: 'css' };
/*eslint-enable */

@customElement('egg-game-of-life')
export class EggGameOfLife extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  @property()
  rows: number;

  @property()
  cols: number;

  @property()
  playing: boolean;

  grid: Array<Array<number>>;
  nextGrid: Array<Array<number>>;

  timer!: NodeJS.Timeout;

  reproductionTime: number;

  constructor() {
    super();

    this.rows = 38;
    this.cols = 100;

    this.grid = new Array<Array<number>>(this.rows);
    this.nextGrid = new Array<Array<number>>(this.rows);

    this.reproductionTime = 100;

    this.playing = false;
  }

  public firstUpdated(): void {
    this.initialize();
  }

  render() {
    return html`
      <div class="container">
        <div id="gridContainer"></div>

        <div class="controls">
          <button id="start"><span>Start</span></button>
          <button id="clear"><span>Clear</span></button>
          <button id="random"><span>Random</span></button>
        </div>
      </div>
    `;
  }

  private initialize() {
    this.createTable();
    this.initializeGrids();
    this.resetGrids();
    // setupControlButtons();
    this.randomHandler();
    this.play();
  }

  // Lay out the board
  private createTable() {
    const gridContainer = this.shadowRoot?.querySelector('#gridContainer');
    if (!gridContainer) {
      throw new Error('Problem: No div for the drid table!');
    }
    const table = document.createElement('table');

    for (let i = 0; i < this.rows; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < this.cols; j++) {
        //
        const cell = document.createElement('td');
        cell.setAttribute('id', `cell${i}_${j}`);
        cell.setAttribute('class', 'dead');

        // cell.onclick = cellClickHandler;  // ***********************************

        tr.appendChild(cell);
      }
      table.appendChild(tr);
    }
    gridContainer?.appendChild(table);
  }

  private initializeGrids() {
    for (let i = 0; i < this.rows; i++) {
      this.grid[i] = new Array(this.cols);
      this.nextGrid[i] = new Array(this.cols);
    }
  }

  private resetGrids() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j] = 0;
        this.nextGrid[i][j] = 0;
      }
    }
  }

  private randomHandler() {
    if (this.playing) return;
    this.clearHandler();
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const isLive = Math.round(Math.random());
        if (isLive == 1) {
          const cell = this.shadowRoot?.querySelector(`#cell${i}_${j}`);
          cell?.setAttribute('class', 'live');
          this.grid[i][j] = 1;
        }
      }
    }
  }

  // clear the grid
  private clearHandler() {
    console.log('Clear the game: stop playing, clear the grid');

    this.playing = false;
    // const startButton = document.getElementById('start');
    // startButton.innerHTML = "Start";    ************************************************
    clearTimeout(this.timer);

    const cellsList = this.shadowRoot?.querySelectorAll('live');
    // convert to array first, otherwise, you're working on a live node list
    // and the update doesn't work!
    cellsList?.forEach((v) => {
      (v as HTMLElement).setAttribute('class', 'dead');
    });

    this.resetGrids();
  }

  private play() {
    this.playing = true;
    this.computeNextGen();

    if (this.playing) {
      this.timer = setTimeout(() => this.play(), this.reproductionTime);
    }
  }

  private computeNextGen() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.applyRules(i, j);
      }
    }

    // copy NextGrid to grid, and reset nextGrid
    this.copyAndResetGrid();
    // copy all 1 values to "live" in the table
    this.updateView();
  }

  // RULES
  // Any live cell with fewer than two live neighbours dies, as if caused by under-population.
  // Any live cell with two or three live neighbours lives on to the next generation.
  // Any live cell with more than three live neighbours dies, as if by overcrowding.
  // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

  private applyRules(row: number, col: number) {
    const numNeighbors = this.countNeighbors(row, col);
    if (this.grid[row][col] == 1) {
      if (numNeighbors < 2) {
        this.nextGrid[row][col] = 0;
      } else if (numNeighbors == 2 || numNeighbors == 3) {
        this.nextGrid[row][col] = 1;
      } else if (numNeighbors > 3) {
        this.nextGrid[row][col] = 0;
      }
    } else if (this.grid[row][col] == 0) {
      if (numNeighbors == 3) {
        this.nextGrid[row][col] = 1;
      }
    }
  }

  private countNeighbors(row: number, col: number) {
    let count = 0;
    if (row - 1 >= 0) {
      if (this.grid[row - 1][col] == 1) count++;
    }
    if (row - 1 >= 0 && col - 1 >= 0) {
      if (this.grid[row - 1][col - 1] == 1) count++;
    }
    if (row - 1 >= 0 && col + 1 < this.cols) {
      if (this.grid[row - 1][col + 1] == 1) count++;
    }
    if (col - 1 >= 0) {
      if (this.grid[row][col - 1] == 1) count++;
    }
    if (col + 1 < this.cols) {
      if (this.grid[row][col + 1] == 1) count++;
    }
    if (row + 1 < this.rows) {
      if (this.grid[row + 1][col] == 1) count++;
    }
    if (row + 1 < this.rows && col - 1 >= 0) {
      if (this.grid[row + 1][col - 1] == 1) count++;
    }
    if (row + 1 < this.rows && col + 1 < this.cols) {
      if (this.grid[row + 1][col + 1] == 1) count++;
    }
    return count;
  }

  private copyAndResetGrid() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j] = this.nextGrid[i][j];
        this.nextGrid[i][j] = 0;
      }
    }
  }

  private updateView() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const cell = this.shadowRoot?.querySelector(`#cell${i}_${j}`);
        if (this.grid[i][j] == 0) {
          cell?.setAttribute('class', 'dead');
        } else {
          cell?.setAttribute('class', 'live');
        }
      }
    }
  }
}
