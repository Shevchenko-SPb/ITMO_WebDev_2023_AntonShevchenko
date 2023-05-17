const appendBlock = (block) => document.getElementById("app").appendChild(block);

const generateColor = () => {
  const isNotEmpty = Math.random() > 0.5;
  if (isNotEmpty) {
    return "black";
  }
  return null;
};
const createBlock = (x, y, size, color) => {
  const result = document.createElement("div");
  if (color) {
    result.style.backgroundColor = color;
  }
  result.style.width = result.style.height = `${size}px`;
  result.style.position = "absolute";
  result.style.left = `${x}px`;
  result.style.top = `${y}px`;
  return result;
};

const BLOCK_SIZE = 10;
const DIMENTION = 5;

let columns = DIMENTION;
let monsters = 5;
let rows = 10;
let xPos = 10;
let yPos = 50;
let xPosMonster = xPos;

function renderMonster() {
  yPos = 50;
  while (rows-- > 0) {
    xPos = xPosMonster;
    let line = [];
    columns = DIMENTION;
    while (columns-- > 0) {
      const color = generateColor();
      const block = createBlock(xPos, yPos, BLOCK_SIZE, color);
      line.push(color);
      xPos += BLOCK_SIZE;
      appendBlock(block);
    }
    line.reverse().forEach((color) => {
      const block = createBlock(xPos, yPos, BLOCK_SIZE, color);
      appendBlock(block);
      xPos += BLOCK_SIZE;
    });
    yPos += BLOCK_SIZE;
  }
}

while (monsters-- > 0) {
  console.log("monsters -> ", monsters);
  xPosMonster += 140;
  rows = 10;
  renderMonster();
}
