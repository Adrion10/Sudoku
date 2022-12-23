let numSelected = null;
let tileSelected = null;

let errors = 0;

var board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];
let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784569",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];
window.onload = function () {
  setGame();
};
function setGame() {
  for (let i = 1; i <= 9; i++) {
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }
  for (let j = 0; j < 9; j++) {
    for (let b = 0; b < 9; b++) {
      let tile = document.createElement("div");
      tile.id = j.toString() + "-" + b.toString();
      if (board[j][b] != "-") {
        tile.innerText = board[j][b];
        tile.classList.add("tile-start");
      }
      if (j == 2 || j == 5) {
        tile.classList.add("horizontal-line");
      }
      if (b == 2 || b == 5) {
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}
function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}
function selectTile() {
  if (numSelected) {
    if (this.innerText != "") {
      return;
    }
    this.innerText = numSelected.id;
    let coords = this.id.split(".");
    let j = parseInt(coords[0]);
    let b = parseInt(coords[1]);
  }
}
