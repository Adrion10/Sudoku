// var numSelected = null;
// var tileSelected = null;

// var errors = 0;

// var board = [
//   "--74916-5",
//   "2---6-3-9",
//   "-----7-1-",
//   "-586----4",
//   "--3----9-",
//   "--62--187",
//   "9-4-7---2",
//   "67-83----",
//   "81--45---",
// ];
// var solution = [
//   "387491625",
//   "241568379",
//   "569327418",
//   "758619234",
//   "123784569",
//   "496253187",
//   "934176852",
//   "675832941",
//   "812945763",
// ];
// window.onload = function () {
//   setGame();
// };
// function setGame() {
//   for (let i = 1; i <= 9; i++) {
//     let number = document.createElement("div");
//     number.id = i;
//     number.innerText = i;
//     number.addEventListener("click", selectNumber);
//     number.classList.add("number");
//     document.getElementById("digits").appendChild(number);
//   }
//   for (let j = 0; j < 9; j++) {
//     for (let b = 0; b < 9; b++) {
//       let tile = document.createElement("div");
//       tile.id = j.toString() + "-" + b.toString();
//       if (board[j][b] != "-") {
//         tile.innerText = board[j][b];
//         tile.classList.add("tile-start");
//       }
//       if (j == 2 || j == 5) {
//         tile.classList.add("horizontal-line");
//       }
//       if (b == 2 || b == 5) {
//         tile.classList.add("vertical-line");
//       }
//       tile.addEventListener("click", selectTile);
//       tile.classList.add("tile");
//       document.getElementById("board").append(tile);
//     }
//   }
// }
// function selectNumber() {
//   if (numSelected != null) {
//     numSelected.classList.remove("number-selected");
//   }
//   numSelected = this;
//   numSelected.classList.add("number-selected");
// }
// function selectTile() {
//   if (numSelected) {
//     if (this.innerText != "") {
//       return;
//     }

//     let coords = this.id.split("-");
//     let j = parseInt(coords[0]);
//     let b = parseInt(coords[1]);

//     if (solution[j][b] == numSelected.id) {
//       this.innerText = numSelected.id;
//     } else {
//       errors += 1;
//       document.getElementById("errors").innerText = errors;
//     }
//   }
// }

// Sudoku2

const easy = [
  "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
  "685329174971485326234761859362574981549618732718293465823946517197852643456137298",
];
const medium = [
  "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
  "619472583243985617587316924158247369926531478734698152891754236365829741472163895",
];
const hard = [
  "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
  "712583694639714258845269173521436987367928415498175326184697532253841769976352841",
];
// Create variable
var timer;
var timeRemaining;
var lives;
var selectNum;
var selectTiles;
var disableSelect;

window.onload = function () {
  //Run start game function when button is clicked
  id("start-btn").addEventListner("click", startGame);
};
function sartGame() {
  //Chose board dificulty
  let board;
  if (id("diff-1").checked) board = easy[0];
  else if (id("diff-2").checked) board = medium[0];
  else board = hard[0];
  // Set lives to 3 and enable selecting numbers and tiles
  lives = 3;
  disableSelect = false;
  id("lives").textContent = "Lives Remaining 3";
  // Create boaard based on difficulty
  generateBoard(board);
}

function generateBoard(board) {
  // clear previous board
}
function id(id) {
  return document.getElementById(id);
}
