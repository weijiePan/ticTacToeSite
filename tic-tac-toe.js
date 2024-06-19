//setting up input table data variable
const td1 = document.querySelector("#td1");
const td2 = document.querySelector("#td2");
const td3 = document.querySelector("#td3");
const td4 = document.querySelector("#td4");
const td5 = document.querySelector("#td5");
const td6 = document.querySelector("#td6");
const td7 = document.querySelector("#td7");
const td8 = document.querySelector("#td8");
const td9 = document.querySelector("#td9");
//storing table value for behind-display logic
//0 = no value, 1 = "x", 2 = "o"
values = [[0,0,0],[0,0,0],[0,0,0]];
//setting up game trackers
let turn = 1;

//checking 
td1.onclick = function(){
    changeValue(0, td1);
};
td2.onclick = function(){
    changeValue(1, td2);
};
td3.onclick = function(){
    changeValue(2, td3);
};
td4.onclick = function(){
    changeValue(3, td4);
};
td5.onclick = function(){
    changeValue(4, td5);
};
td6.onclick = function(){
    changeValue(5, td6);
};
td7.onclick = function(){
    changeValue(6, td7);
};
td8.onclick = function(){
    changeValue(7, td8);
};
td9.onclick = function(){
    changeValue(8, td9);
};

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
    turn++;
    if(checkWin() == 1){
        setTimeout(function(){alert("player 1 has won")},0);
        
    }else if(checkWin == 2){
        setTimeout(function(){alert("player 2 has won")},0);
        
    }
    
}

function checkWin(){
    
    //row check
    for(let r = 0; r <3; r++){
        const initialNum = values[r][0];
        let fullMatch = true;
        for(let c = 0; c < 3; c++){
            if(initialNum !== values[r][c]){
                fullMatch = false;
                break;
            }
        }
        if(fullMatch){
            return(initialNum);
        }
            
        
    }
    //column check
    for(let c = 0; c <3; c++){
        const initialNum = values[0][c];
        let fullMatch = true;
        for(let r = 0; r < 3; r++){
            if(initialNum !== values[r][c]){
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