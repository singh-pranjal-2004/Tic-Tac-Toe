let boxes = document.querySelectorAll(".box");
let ann = document.querySelector(".ann");
let reset = document.querySelector(".reset");

let turnX = true;
let count = 0;

const pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      box.style.color = "#001514";
      turnX = false;
      box.disabled = true;
    } else {
      box.innerText = "O";
      box.style.color = "#e952de";
      turnX = true;
      box.disabled = true;
    }
    count++;
    let winner = check();
    if (winner) {
      for (let b of boxes) {
        b.disabled = true;
      }
    }

    if (count === 9 && !winner) {
      draw();
    }
  });
});

const check = () => {
  for (let pat of pattern) {
    let p1 = boxes[pat[0]].innerText;
    let p2 = boxes[pat[1]].innerText;
    let p3 = boxes[pat[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        announce(p1);
        return true;
      }
    }
  }
};

const draw = () => {
  ann.innerHTML = "Draw, No one wins!";
  ann.classList.remove("hide");
};

const announce = (p1) => {
  ann.innerHTML = `Winner is ${p1}`;
  ann.classList.remove("hide");
};

reset.addEventListener("click", () => {
  location.reload(true);
});
