const container = (xPosMonsters) => {
  const result = document.createElement("div");
  result.style.left = `${xPosMonsters}px`;
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

  const BLOCK_SIZE = 50;
  const DIMENTION = 5;

  let columns = DIMENTION;
  let rows = columns * 2;
  let xPos = 100;
  let yPos = 100;

  while (rows-- > 0) {
    let line = [];
    xPos = 100;
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
};


let monsters = 4;
while (monsters-- > 0) {
  let monsterBlocks = [];
  let xPosMonsters = 100;
  xPosMonsters += xPosMonsters;
  monsterBlocks.push(container(xPosMonsters));

}
