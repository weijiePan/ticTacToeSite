import {createGameManger, playGame} from "./game.js";
let form = document.querySelector("form");
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click",function(e){
    e.preventDefault();
    //(player1Name, player1IconUrl, player2Name, player2IconUrl)
    let gM = createGameManger(form["userName1"]["value"],form["iconUrl1"]["value"],form["userName2"]["value"],form["iconUrl2"]["value"]);
    playGame(gM);
})

