import {createGameManger} from "./game.js";
let form = document.querySelector("form");
let submitButton = document.getElementById("submit");
let gm;

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    const user1Url = form["iconUrl1"]["value"] != ""?form["iconUrl1"]["value"]:"./asset/blank128x128.png";
    const user2Url = form["iconUrl2"]["value"] != ""?form["iconUrl2"]["value"]:"./asset/blank128x128.png";
    //(player1Name, player1IconUrl, player2Name, player2IconUrl)
    gm = createGameManger(form["userName1"]["value"], user1Url, form["userName2"]["value"], user2Url);
    //clears screen and setup tic-tac-toe display
    let board = gm.getBoard();
    form.remove();
    let table = document.createElement("table");
    for(let r = 0; r < 3; r++){
        table.appendChild(board[r]);
    }
    document.querySelector("body").appendChild(table);
    table.style.margin = "auto";
    table.style.translate = "0 50% 0";
    //learn how to use translate
})


