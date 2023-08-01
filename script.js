//your JS code here. If required.
// console.log("Hii on line 2");

const gameBoard = `
    <h1>Tic Tac Toe</h1>
    <div class="message" id="message"></div>
    <div id="board">
        <div class="row">
            <div class="box" id="1"></div>
            <div class="box" id="2"></div>
            <div class="box" id="3"></div>
        </div>
        <div class="row">
            <div class="box" id="4"></div>
            <div class="box" id="5"></div>
            <div class="box" id="6"></div>
        </div>
        <div class="row">
            <div class="box" id="7"></div>
            <div class="box" id="8"></div>
            <div class="box" id="9"></div>
        </div>
    </div>
    <div id="resetDiv">
    <button type="reset" id="reset">Reset</button>
    <button type="button" id="home">Home</button>
    </div>`;


const startButton = document.getElementById("submit");


const container = document.getElementsByClassName("container")[0];
const players = document.getElementsByClassName("players")[0];

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

let currentPlayer = player1;
let winner = false;

let displayBoard = () => {
    if(player1.value && player2.value) {
        const board = document.createElement("div");
        board.id = "tic-tac-toe-container";
        board.innerHTML = gameBoard;
        board.style.display = "block";
        container.appendChild(board);
        startButton.addEventListener("click", hidePlayers());
        playGame();

    }else {
        alert("please enter players name");
        return;
    }
    
}


startButton.addEventListener("click", displayBoard);

function hidePlayers() {
    players.style.display = "none";
}

function showMessage(playerName) {
    let message = document.getElementsByClassName("message")[0];
    message.innerText = `${playerName.value}, you're up`;
}

function announceWinner(playerName) {
    // let message = document.getElementsByClassName("message")[0];
    // message.innerText = `${playerName.value}, congratulations you won!`;
    console.log(playerName.value);
    message.innerText = `${playerName.value}, congratulations you won!`;
}



function playGame() {
    //make 9 variables by taking each box by their id
    let one = document.getElementById("1");
    let two = document.getElementById("2");
    let three = document.getElementById("3");
    let four = document.getElementById("4");
    let five = document.getElementById("5");
    let six = document.getElementById("6");
    let seven = document.getElementById("7");
    let eight = document.getElementById("8");
    let nine = document.getElementById("9");
    // let message = document.getElementsByClassName("message")[0];

    showMessage(player1);

    one.addEventListener("click", playerTurn);
    two.addEventListener("click", playerTurn);
    three.addEventListener("click", playerTurn);
    four.addEventListener("click", playerTurn);
    five.addEventListener("click", playerTurn);
    six.addEventListener("click", playerTurn);
    seven.addEventListener("click", playerTurn);
    eight.addEventListener("click", playerTurn);
    nine.addEventListener("click", playerTurn);


    function playerTurn(event) {
        if (event.target.innerText === '') {
            if(currentPlayer === player1) {
                event.target.innerText = 'X';
                
                showMessage(player2);
                
                currentPlayer = player2;
                check();
                tieCheck()
            }else {
                event.target.innerText = 'O';
                
                showMessage(player1);
                
                currentPlayer = player1;
                check();
                tieCheck()
            }
        }
    }

    

    //check all conditions for wins
    function check() {
        if (one.innerText === 'X' && two.innerText === 'X' && three.innerText === 'X' ||
        four.innerText === 'X' && five.innerText === 'X' && six.innerText === 'X' ||
        seven.innerText === 'X' && eight.innerText === 'X' && nine.innerText === 'X') { //rows check for player 1
            winner = true;
            announceWinner(player1);
            // setTimeout(() => {
            //     clearBoxes(player1);                        
            // }, 1000);
        }else if (one.innerText === 'X' && four.innerText === 'X' && seven.innerText === 'X' ||
                two.innerText === 'X' && five.innerText === 'X' && eight.innerText === 'X' ||
                three.innerText === 'X' && six.innerText === 'X' && nine.innerText === 'X') { //columns check for player 1
                    winner = true;
                    announceWinner(player1);
                    // setTimeout(() => {
                    //     clearBoxes(player1);                        
                    // }, 1000);
        } else if (one.innerText === 'X' && five.innerText === 'X' && nine.innerText === 'X' ||
                three.innerText === 'X' && five.innerText === 'X' && seven.innerText === 'X') { //diagonals check for player 1
                    winner = true;
                    announceWinner(player1);
                    // setTimeout(() => {
                    //     clearBoxes(player1);                        
                    // }, 1000);
        } else if (one.innerText === 'O' && two.innerText === 'O' && three.innerText === 'O' ||
                four.innerText === 'O' && five.innerText === 'O' && six.innerText === 'O' ||
                seven.innerText === 'O' && eight.innerText === 'O' && nine.innerText === 'O') { //rows check for player 2
                    winner = true;
                    announceWinner(player2);
                    // setTimeout(() => {
                    //     clearBoxes(player2);                        
                    // }, 1000);
        } else if (one.innerText === 'O' && four.innerText === 'O' && seven.innerText === 'O' ||
                two.innerText === 'O' && five.innerText === 'O' && eight.innerText === 'O' ||
                three.innerText === 'O' && six.innerText === 'O' && nine.innerText === 'O') { //columns check for player 2
                    winner = true;
                    announceWinner(player2);
                    // setTimeout(() => {
                    //     clearBoxes(player2);                        
                    // }, 1000);
        } else if (one.innerText === 'O' && five.innerText === 'O' && nine.innerText === 'O' ||
                three.innerText === 'O' && five.innerText === 'O' && seven.innerText === 'O') { //diagonals check for player 2
                    winner = true;
                    announceWinner(player2);
                    // setTimeout(() => {
                    //     clearBoxes(player2);                        
                    // }, 1000);      
        }


        // if (one.innerText === 'X' && two.innerText === 'X' && three.innerText === 'X') {
        //     one.style.backgroundColor = "purple";
        //     two.style.backgroundColor = "purple";
        //     three.style.backgroundColor = "purple";
        //     // announceWinner(player1);
        //     alert(`${player1.value} is winner`)
        //     setTimeout(clearBoxes(player1), 3000);
        // }
    }

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", clearBoxes);

    let home = document.getElementById("home");
    home.addEventListener("click", homePage);
}

let clearBoxes = () => {
    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
    }
    message.innerText = `${player1.value}, you're up`;
    winner = false;
    // debugger;
}

function tieCheck() {
    let count = 0;
    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i].innerText !== '') {
            count++;
        }
    }

    if(count === 9 && !winner) {
        message.innerText = `it's a Tie, press Reset To start new game`;
    }
}

function homePage() {
    location.reload(); //reloaded the webpage
}

