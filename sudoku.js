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
var selectedNum;
var selectedTile;
var disableSelect;

window.onload = function () {
  //Run start game function when button is clicked
  id("start-btn").addEventListener("click", startGame);
  // Add event lisener to each number in number container
  for (let i = 0; i < id("number-container").children.length; i++) {
    id("number-container").children[i].addEventListener("click", function () {
      // if selecting is not disabled
      if (!disableSelect) {
        // if number is alreasy sselected
        if (this.classList.contains("selected")) {
          // Then remove selection
          this.classList.remove("selected");
          selectedNum = null;
        } else {
          // Deleselect all other numebr
          for (let i = 0; i < 9; i++) {
            id("number-container").children[i].classList.remove("selected");
          }
          // Select it and update selectNum Variable
          this.classList.add("selected");
          selectedNum = this;
          updateMove();
        }
      }
    });
  }
};
function startGame() {
  //Chose board dificulty
  let board;
  if (id("diff-1").checked) board = easy[0];
  else if (id("diff-2").checked) board = medium[0];
  else board = hard[0];
  // Set lives to 3 and enable selecting numbers and tiles
  lives = 3;
  disableSelect = false;
  id("lives").textContent = "Lives Remaining: 3";
  // Create boaard based on difficulty
  generateBoard(board);
  // Start the timer
  startTimer();
  // sets theme based on input
  if (id("theme-1").checked) {
    qs("body").classList.remove("dark");
  } else {
    qs("body").classList.add("dark");
  }
  // Show number container
  id("number-container").classList.remove("hidden");
}

function startTimer() {
  // Sets time remaining based on input
  if (id("time-1").checked) timeRemaining = 180;
  else if (id("time-2").checked) timeRemaining = 300;
  else timeRemaining = 600;
  // set timer for first second
  id("timer").textContent = timeConversion(timeRemaining);
  //sets timer to update every second
  timer = setInterval(function () {
    timeRemaining--;
    //If no time remaining end the game
    if (timeRemaining === 0) endGame();
    id("timer").textContent = timeConversion(timeRemaining);
  }, 1000);
}
// Converts seconds into string of MM:SS format
function timeConversion(time) {
  let minutes = Math.floor(time / 60);
  if (minutes < 10) minutes = "0" + minutes;
  let seconds = time % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
}

function generateBoard(board) {
  // clear previous board
  clearPrevious();
  // let used to incremente tile ids
  let idCount = 0;
  // create 81 tiles
  for (let i = 0; i < 81; i++) {
    let tile = document.createElement("p");
    // if the tile is not to be black
    if (board.charAt(i) != "-") {
      // Set tile text to correct number
      tile.textContent = board.charAt(i);
    } else {
      // Add click event listner to tile
      tile.addEventListener("click", function () {
        // if selecting is not disabled
        if (!disableSelect) {
          // if the tile is selected
          if (tile.classList.contains("selected")) {
            // Then remove selected
            tile.classList.remove("selected");
            selectedTile = null;
          } else {
            // Deselect all other tiles
            for (let i = 0; i < 81; i++) {
              qsa(".tile")[i].classList.remove("selected");
            }
            // Add selection and update variable
            tile.classList.add("selected");
            selectedTile = tile;
            updateMove();
          }
        }
      });
    }
    // Assign tile id
    tile.id = idCount;
    // Increment for next tile
    idCount++;
    // Add tile class to all tiles
    tile.classList.add("tile");
    if ((tile.id > 17 && tile.id < 27) || (tile.id > 44) & (tile.id < 54)) {
      tile.classList.add("bottomBorder");
    }
    if ((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6) {
      tile.classList.add("rightBorder");
    }
    // add tile to board
    id("board").appendChild(tile);
  }
}
function updateMove() {
  // If a tile and a number is selcted
  if (selectedTile && selectedNum) {
    //Set the tile to the correct numeber
    selectedTile.textContent = selectedNum.textContent;
    // if the number matches the corresponding nuber  in the solution key
    if (checkCorrect(selectedTile)) {
      // deselect the tiles
      selectedTile.classList.remove("selected");
      selectedNum.classList.remove("selected");
      //Clear the selected variables
      selectedTile = null;
      selectedNum = null;
      // Check if board is completed
      if (checkDone(selectedTile)) {
        endGame();
      }

      // If the number does not match the solution key
    } else {
      //Desable selecting new number for one second
      disableSelect = true;
      // Make the numer turn red
      selectedTile.classList.add("incorrect");
      // Run in one second
      setTimeout(function () {
        // substract lives by one
        lives--;
        // if no lives left end the game
        if (lives === 0) {
          endGame();
        } else {
          // if lives is not equal to zero
          // Update lives text
          id("lives").textContent = "Lives Remaining:" + lives;
          // Renable selected numbers and tiles
          disableSelect = false;
        }
        // restore tile color and remove selected from both
        selectedTile.classList.remove("incorrect");
        selectedTile.classList.remove("selected");
        selectedNum.classList.remove("selected");
        // Clear tiles the tiles text and clear selected variables
        selectedTile.textContect = "";
        selectedTile = null;
        selectedNum = null;
      }, 1000);
    }
  }
}
function checkDOne() {
  let tiles = qsa(".tile");
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].textContent === "") return false;
  }
  return true;
}
function endGame() {
  //disable moves and stop the timer
  disableSelect = true;
  clearTimeout(timer);
  //display win or loss mesagge
  if (lives === 0 || timeRemaining === 0) {
    id("lives").textContent = "You lost!";
  } else {
    id("lives").textContent = "You Won!";
  }
}
function checkCorrect(tile) {
  //Set solurion based on dificulty selection
  let solution;
  if (id("diff-1").checked) solution = easy[1];
  else if (id("diff-2").checked) solution = medium[1];
  else solution = hard[1];
  // if tiles number is equal to solution's number
  if (solution.charAt(tile.id) === tile.textContent) return true;
  else return false;
}

function clearPrevious() {
  // Accses all of the tiles
  let tiles = qsa(".tile");
  // remove each of the tiles
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].remove();
  }
  // if there is a timer clear it
  if (timer) clearTimeout(timer);
  // deselect any numbers
  for (let i = 0; i < id("number-container").children.length; i++) {
    id("number-container").children[i].classList.remove("selected");
  }
  //Clear selected variables
  selectedTile = null;
  selectedNum = null;
}
// helepe functions
function id(id) {
  return document.getElementById(id);
}
function qs(selector) {
  return document.querySelector(selector);
}
function qsa(selector) {
  return document.querySelectorAll(selector);
}
