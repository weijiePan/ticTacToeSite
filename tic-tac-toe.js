let board = [];
function createCell(){
    let cell = document.createElement("td");
    let icon = document.createElement("img");
    icon.setAttribute("src", "./asset/blank128x128.png");
    icon.addEventListener("click", function (newSource){
        icon.setAttribute("src", newSource);//choosing how to pick where the new source is from?
    });
    
    function checkIcon(){
        return icon.getAttribute("src");
    }
    return{checkIcon, changeIcon};
}
//initates board
for(let i = 0; i < 9; i ++){
    board.append(createCell);
}

//setting up game trackers
let turn = 1;



function changeValue(order, td){
    const choiceText = td.querySelector(".choice");
    //turns table data to "o"
    if(turn % 2 == 0){
        choiceText.innerText = "o";
        values[Math.floor(order / 3)][order % 3] = 2;
        
    }else{
    //turns table data to "x"
        choiceText.innerText = "x";
        values[Math.floor(order / 3)][order % 3] = 1;
        
        
    }
    td.onclick = "";
    console.log(values);
    console.log(turn);
    turn++;
    if(checkWin() == 1){
        setTimeout(function(){alert("player 1 has won")},2);
        
    }else if(checkWin() == 2){
        setTimeout(function(){alert("player 2 has won")},2);
        
    } 
    
}

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