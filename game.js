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
    icon.setAttribute("src", "./asset/blank128x128.png");
    icon.addEventListener("click", function (){
        if(icon.getAttribute("src") == "./asset/blank128x128.png"){
            gm.changeCurrPlayer(); 
            icon.setAttribute("src", gm.currPlayer.iconUrl);//choosing how to pick where the new source is from?
        }
    });
    cell.appendChild(icon);
    return{cell};
}
function createGameManger(player1Name, player1IconUrl, player2Name, player2IconUrl){
    //initiate game objects
    let player1 = createPlayer(player1Name,player1IconUrl);
    let player2 = createPlayer(player2Name, player2IconUrl);
    let currPlayer = player1;
    let board = [];
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
        //checks loss
        //checks ties
        //awards point appropriately
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
    
    //row check
    for(let r = 0; r < 3; r++){
        const initialNum = values[r][0];
        let fullMatch = true;
        for(let c = 0; c < 3; c++){
            if(initialNum !== values[r][c] || values[r][c] === 0){
                fullMatch = false;
            }//it does not work because if the first line is unfilled, then all the values would be 0 and equal to each other,
            //causing function to return 0 as initialNum
            
        }
        if(fullMatch === true){
            return(initialNum);
        }
            
        
    }
    //column check
    
    for(let c = 0; c <3; c++){
        const initialNum = values[0][c];
        let fullMatch = true;
        for(let r = 0; r < 3; r++){
            if(initialNum !== values[r][c] || values[r][c] === 0){
                fullMatch = false;
                break;
            }
        }
        if(fullMatch){
            return(initialNum);
        }
            
        
    }
    //diagonal check
    if((values[0][0] === values[1][1] && values[1][1] === values[2][2]) || (values[0][2] === values[1][1] && values[1][1] === values[2][0])){
        return values[1][1];
    }
    
        
    
}
    */

export {createGameManger};