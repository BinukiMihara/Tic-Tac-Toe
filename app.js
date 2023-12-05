const cells = document.querySelectorAll(".cell");
const popUp = document.querySelector(".popup");
const result  = document.getElementById("winner");
const newgame = document.getElementById("NewGame");
const pTurn = document.querySelector(".turn");

let player = true;
let counter = 0 ;

newgame.addEventListener("click",StartAgain);

function startGame(){
    cells.forEach(cell=>{
        cell.addEventListener("click",executeGame,{once:true});      //when clicking on the cell execute the executeGame function and one cell can click once
    })
}

function executeGame(){
   this.innerText = player?"X":"O";
   player = !player;       //change the turn of the player
   counter++;

   let value1 = cells[0].innerText;
   let value2 = cells[1].innerText;
   let value3 = cells[2].innerText;
   let value4 = cells[3].innerText;
   let value5 = cells[4].innerText;
   let value6 = cells[5].innerText;
   let value7 = cells[6].innerText;
   let value8 = cells[7].innerText;
   let value9 = cells[8].innerText;

   if((value1!=""&&value1==value2&&value2==value3)||
      (value4!=""&&value4==value5&&value5==value6)||
      (value7!=""&&value7==value8&&value8==value9)||
      (value1!=""&&value1==value4&&value4==value7)||
      (value2!=""&&value2==value5&&value5==value8)||
      (value3!=""&&value3==value6&&value6==value9)||
      (value1!=""&&value1==value5&&value5==value9)||
      (value3!=""&&value3==value5&&value5==value7)
   )
   {
    popUp.style.display = "flex";
    result.innerText = player?"O is the Winner!":"X is the Winner!";
    return; 
 
   }

   if(counter==9){            //condition to tie the game
    popUp.style.display = "flex";
    result.innerText = "Match is Draw" ;
    return ;
   }

   //dynamically change the player turn
   if(player){
    pTurn.innerText = "Player X Turn";
   }else{
    pTurn.innerText = "Player O Turn";
   }

}

function StartAgain(){           //start a new game by clicking on Play Again button
    popUp.style.display = "none";
    cells.forEach(cell=>{
        cell.innerText = "";

    })
    startGame(); 
    player = true;
    counter = 0 ;

    pTurn.innerText = "Player X Turn";  //set X as first player

}

startGame();   //call the function to start the game