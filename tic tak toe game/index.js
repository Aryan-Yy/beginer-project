let boxes = document.querySelectorAll(".box");
let paraa = document.querySelector(".para");
let msg = document.querySelector(".new");
let newgame = document.querySelector(".new-game");
let reset = document.querySelector(".reset");

let player0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "") {
      // prevent overwriting
      if (player0 === true) {
        box.innerHTML = "O";
        player0 = false;
      } else {
        box.innerHTML = "X";
        player0 = true;
      }
    }
    checkWiner();
  });
});
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const showwinner = (winner) => {
 paraa.innerText=`congrutulation , Winner is ${winner}`;
 msg.classList.remove("hide");
 disablebox();
 console.log(paraa);
};
const checkWiner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log(`${pos1} is the Winner!`);
        showwinner(pos1);
      }
    }
  }
};

const disablebox= ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}
const enablebox= ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText="";
  }
}
const resetgame =() =>{
  player0 = true;
    enablebox();
    msg.classList.add("hide");
}
reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);