import { Earth, Planet, Position } from "./src/solar-system.js";
import { RenderPlanet } from "./renderPlanet.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerPosition = new Position(canvas.width / 2, canvas.width / 2);

const sun = new Planet(centerPosition, 0, 50, new RenderPlanet(30, "black"));
const earth = new Earth(sun.position);

const planets = [
  sun,
  earth,
  new Planet(centerPosition, 0.1, 10, new RenderPlanet(40, "yellow")),
  new Planet(centerPosition, 0.4, 20, new RenderPlanet(25, "red")),
];

document.onclick = () => {
  earth.renderPlanet = new RenderPlanet(10, "blue");
};

let planet;
console.log("Planets");
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
