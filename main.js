
const appendBlock = (block) => document.getElementById("app").appendChild(block);

const createBlock = (x, y, size, color) => {
  const result = document.createElement("div");
  if(color) {
    result.style.backgroundColor = color;
  }else{
    const isEmpty = Math.random() > 0.5;
    if(isEmpty) {
      result.style.backgroundColor = "black";
    }
  }
  result.style.background = "black";
  result.style.width = "50px";
  result.style.height = "50px";
  result.style.position = "absolute";
  result.style.left =
  return result;
}

const BLOCK_SIZE = 50;

let columns = 6;
let xPos = 0;
let yPos = 0;

const line = [];


while(columns-- > 0) {
  const block = createBlock(xPos, yPos, BLOCK_SIZE);
  line.push(block);
  xPos += BLOCK_SIZE;
  appendBlock(block);
}

line.reverse().forEach((block) => {
  xPos += BLOCK_SIZE;

})