import { RenderPlanet } from "../renderPlanet.js";

class Planet {
  x;
  y;
  center;
  atmosphere;
  radius;
  speed;

  renderPlanet;
  constructor(center, speed = 0.1, radius = 50, renderPlanet) {
    this.center = center;
    this.radius = radius;
    this.speed = speed;
    this.alpha = 0;
    this.x = 0;
    this.y = 0;
    this.isMoving = speed !== 0;
    this.position = new Position(center.x, center.y);
    this.renderPlanet = renderPlanet;
  }

  move() {
    if (this.isMoving) {
      this.position.x = this.radius * Math.sin(this.alpha) + this.center.x;
      this.position.y = this.radius * Math.cos(this.alpha) + this.center.y;
      this.alpha += (this.speed * Math.PI) / 180;
    }
  }

  render(ctx) {
    if (this.renderPlanet) {
      this.renderPlanet.render(ctx, this.position);
    } else {
      // ctx.beginPath();
      // ctx.fillStyle = this.atmosphere;
      // ctx.arc(this.position.x, this.position.y, this.size, 50, 0, Math.PI * 2);
      // ctx.fill();
      // ctx.closePath();
    }
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

class Earth extends Planet {
  moon;
  constructor(center) {
    super(center, 1.2, 100, new RenderPlanet(20, "black"));
    this.moon = new Planet(this.position, 2, 30, new RenderPlanet(10, "red"));
  }
  move() {
    super.move();
    this.moon.move();
  }

  render(ctx) {
    super.render(ctx);
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(this.position.x + 5, this.position.y, 25, 50, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    this.moon.render(ctx);
  }
}
export { Planet, Position, Earth };
