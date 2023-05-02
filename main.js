const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
class Planet {
  x;
  y;
  pX;
  pY;
  atmosphere;
  radius;
  constructor(x, y, size, atmosphere, radius = 50) {
    this.pX = x;
    this.pY = y;
    this.atmosphere = atmosphere;
    this.radius = radius;
    this.size = size;
  }

  move() {
    planet.x = planet.radius * Math.sin(alpha) + planet.pX;
    planet.y = planet.radius * Math.cos(alpha) + planet.pY;
    alpha += (SPEED_MULT * Math.PI) / 180;
  }
  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.atmosphere;
    ctx.arc(this.x, this.y, this.size, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

let x = 0,
  y = 0;

const R = 150;
let alpha = 0;
let SPEED_MULT = 0.1;

const planets = [
  new Planet(300, 300, 10, "red", 300),
  new Planet(300, 300, 20, "blue", 260),
  new Planet(300, 300, 30, "red", 200),
  new Planet(300, 300, 40, "green", 130),
];
let planet;
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const planetIndex in planets) {
    planet = planets[planetIndex];
    planet.move();
    planet.render(ctx);
  }
  ctx.fill();
  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
