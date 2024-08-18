let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector(".rst-btn");
let newgame=document.querySelector(".new-game");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msg-container");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hidden");
    disableBoxes();
}
const disableBoxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}
const resetGame=()=>{
     turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hidden");

}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        console.log("Box was clicked")
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
        box.innerText="X";
        turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
   
})
const checkWinner = ()=>{
    let isDraw=true;
for(let pattern of winPatterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1);
            showWinner(pos1);
            isDraw=false;
            break;
        }
    }
}
    f (isDraw) {
        // Check if all boxes are filled
        let allFilled = true;
        for (let box of boxes) {
            if (box.innerText === "") {
                allFilled = false;
                break;
            }
        }

        if (allFilled) {
            console.log("Draw");
            showWinner("Draw");  
        }
    }
}
newgame.addEventListener("click",resetGame);
rstbtn.addEventListener("click",resetGame);
