let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Btn");
let newGameBtn = document.querySelector("#new-btn");
let h1Ele = document.querySelector("h1");
let msgContainer = document.querySelector(".msg-container");
let hideEle = document.querySelector(".hide");
let msgEle = document.querySelector(".msg");

let turnO = true;

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

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.textContent = "O";
      turnO = false;
    } else {
      box.textContent = "X";
      box.style.color ="blue"
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  document.querySelector("body").style.backgroundColor = "rgb(8, 160, 122)";
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const ShowWinner = (winner) => {
  h1Ele.innerText = "Your winner";
  document.querySelector("body").style.backgroundColor = "red";
  msgContainer.classList.remove("hide");
  disableBoxes();
  if (winner === "O") {
    msgEle.textContent = "player 'O'";
  } else {
    msgEle.textContent = "player X";
  }
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(pattern[0],pattern[1],pattern[2])
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
    // console.log(boxes[pattern[0]].textContent,boxes[pattern[1]].textContent,boxes[pattern[2]].textContent)
    let pos1val = boxes[pattern[0]].textContent;
    let pos2val = boxes[pattern[1]].textContent;
    let pos3val = boxes[pattern[2]].textContent;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        ShowWinner(pos1val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
