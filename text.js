const canvas = document.getElementById('canvas2');

//object that build in in every browser
const ctx = canvas.getContext('2d');
//console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//we use let to reasign value later to empty array

let particlesArray = [];

class Particle {
  //creating one blank object (constructor method) and assign values and properties based on blueprint iside the constructor
  constructor(x, y) {
    //blueprint
    this.x = x;
    this.y = y;
    this.size = 10;
    this.weight = 2;
    this.directionX = 1;

  }
  update() {
    this.weight += 0.01;
    this.y += this.weight;
  }

  draw() {
    ctx.fillStyle = 'red';
    //start of drawing a circle
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

const particle1 = new Particle(100, 10);

function animate() {
  particle1.update();
  particle1.draw();
  requestAnimationFrame(animate);
}

animate();




