const cells = document.querySelectorAll(".cell");
let player = true;

function startGame(){
    cells.forEach(cell=>{
        cell.addEventListener("click",executeGame,{once:true});
    })
}

function executeGame(){
   this.innerText = player?"X":"O";
   player = !player;
}

startGame();