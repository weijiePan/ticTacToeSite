import {createGameManger} from "./game.js";
let form = document.querySelector("form");
let submitButton = document.getElementById("submit");
let gm;

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    //(player1Name, player1IconUrl, player2Name, player2IconUrl)
    gm = createGameManger(form["userName1"]["value"],form["iconUrl1"]["value"],form["userName2"]["value"],form["iconUrl2"]["value"]);
    //clears screen and setup tic-tac-toe display
    let board = gm.getBoard();
    form.remove();
    let table = document.createElement("table");
    for(let r = 0; r < 3; r++){
        table.appendChild(board[r]);
    }
    document.querySelector("body").appendChild(table);
})


