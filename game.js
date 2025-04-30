function createPlayer(name, iconUrl){
    let _name = name;
    let _iconUrl = iconUrl;
   let _score = 0;
   function getIconUrl(){
    return _iconUrl;
   }
   function getName(){
    return _name;
   }
   function getScore(){
    return _score;
   }
   function setScore(nScore){
    _score = nScore;
   }
   return {getIconUrl, getName, getScore, getScore};
}
function createCell(gm){
    let cell = document.createElement("td");
    let icon = document.createElement("img");
    icon.style.width = "128px";
    icon.style.height = "128px"; 
    icon.setAttribute("src", "./asset/blank128x128.png");
    icon.addEventListener("click", function (){
        if(icon.getAttribute("src") == "./asset/blank128x128.png"){
            gm.changeCurrPlayer(); 
            icon.setAttribute("src", gm.getCurrPlayerUrl());//choosing how to pick where the new source is from?
            alert(gm.checkGameCondition());
        }
    });
    cell.appendChild(icon);
    return{cell};
}
function createGameManger(player1Name, player1IconUrl , player2Name, player2IconUrl){
    //initiate game objects
    let player1 = createPlayer(player1Name,player1IconUrl);
    let player2 = createPlayer(player2Name, player2IconUrl);
    let currPlayer = player1;
    let board = [];//contains 3 tr node, with 3 td node inside each tr
    let gm = {checkGameCondition, changeCurrPlayer, getCurrPlayerUrl, getBoard};
    //initiate board
    for(let r = 0; r <= 2; r++){
        let row = document.createElement("tr");
        board.push(row);
        for(let d = 0; d <= 2; d++){
            let data = createCell(gm);
            data.cell.style.border = "solid, black, 2px";
            data.cell.style.width = "128px";
            data.cell.style.height = "128px"; 
            data.cell.style.objectFit = "fill";
            data.cell.style.display = "inline-block";   
            row.appendChild(data.cell);
        }
    }

    function checkGameCondition(){
        //checks win
            //row check
            for(let r = 0; r < 3; r++){
                const currTr = board[r].childNodes;
                const firstTdUrl = currTr[0].querySelector("img").getAttribute("src");
                let fullMatch = true;
                for(let c = 1; c < 3 & fullMatch == true; c++){
                    if(firstTdUrl == "./asset/blank128x128.png" || firstTdUrl != currTr[c].querySelector("img").getAttribute("src")){
                        fullMatch = false;

                    }
                }
                if(fullMatch == true){
                    return true;
                }
            }
            for(let c = 0; c <3; c++){
                const firstRowUrl = board[0].childNodes[c].querySelector("img").getAttribute("src");
                let fullMatch = true;
                for(let r = 1; r < 3 && fullMatch == true; r++){
                    if(firstRowUrl == "./asset/blank128x128.png" || firstRowUrl != board[r].childNodes[c].querySelector("img").getAttribute("src")){
                        fullMatch = false;
                    }
                }
                if(fullMatch == true){
                    return true;
                }
                    
                
            }
            //diagonal check
            if((accessBoardUrl(0,0) === accessBoardUrl(1,1) && accessBoardUrl(1,1) === accessBoardUrl(2,2)) || (accessBoardUrl(0,2) === accessBoardUrl(1,1) && accessBoardUrl(1,1) === accessBoardUrl(2,0))){
                return true;
            }
    }
    function accessBoardUrl(r,c){
        return board[r].childNodes[c].querySelector("img").getAttribute("src");
    }
    function changeCurrPlayer(){
        if(currPlayer === player1){
            currPlayer = player2;
        }else{
            currPlayer = player1;
        }
    }
    function getCurrPlayerUrl(){
        return currPlayer.getIconUrl();
    }
    function getBoard(){
        return(board);
    }
   
    return(gm);
}    






/*
function checkWin(){
    

    
        
    
}
    */

export {createGameManger};