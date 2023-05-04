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
  speed;
  constructor(x, y, speed, size, atmosphere, radius = 50) {
    this.pX = x;
    this.pY = y;
    this.atmosphere = atmosphere;
    this.radius = radius;
    this.size = size;
    this.speed = speed;
    this.alpha = 0;
  }

  move() {
    planet.x = planet.radius * Math.sin(this.alpha) + planet.pX;
    planet.y = planet.radius * Math.cos(this.alpha) + planet.pY;
    this.alpha += (this.speed * Math.PI) / 180;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.atmosphere;
    ctx.arc(this.x, this.y, this.size, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

class Position {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const planets = [
  new Planet(300, 300, 0.1, 10, "red", 300),
  new Planet(300, 300, 0.2, 20, "blue", 260),
  new Planet(300, 300, 0.3, 30, "pink", 200),
  new Planet(300, 300, 0.4, 40, "green", 130),
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
