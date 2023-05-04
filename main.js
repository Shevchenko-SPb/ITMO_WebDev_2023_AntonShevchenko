const appendBlock = (block) => document.getElementById("app").appendChild(block);

let blocksRaw = [];
blocksRaw.forEach((element) => console.log(element));
const createBlock = (x, y, size = 50) => {
  const result = document.createElement("div");
  const isEmpty = Math.random() > 0.5;
  if (isEmpty) {
  } else {
    result.style.backgroundColor = "black";
  }
  result.style.width = result.style.height = `${size}px`;
  result.style.position = "absolute";
  result.style.left = `${x}px`;
  result.style.top = `${y}px`;
  blocksRaw.push(result);
  return result;
};

const BLOCK_SIZE = 50;
let columns = 5;
let xPos = 100;
let yPos = 100;

while (columns-- > 0) {
  const block = createBlock(xPos, yPos, BLOCK_SIZE);
  xPos = xPos + BLOCK_SIZE;
  console.log("blocksRaw elements ->", block);
  blocksRaw.push(block);
  appendBlock(block);
}
console.log("blocksRaw ->", blocksRaw);
