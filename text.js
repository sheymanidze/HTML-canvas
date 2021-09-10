const canvas = document.getElementById('canvas2');

//object that build in in every browser
const ctx = canvas.getContext('2d');
//console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//we use let to reasign value later to empty array

let particlesArray = [];

const numberOfParticales = 300;

class Particle {
  //creating one blank object (constructor method) and assign values and properties based on blueprint iside the constructor
  constructor(x, y) {
    //blueprint
    this.x = x;
    this.y = y;
    this.size = 10;
    this.weight = 2;
    this.directionX = -2;

  }
  update() {
    if (this.y > canvas.height) {
      this.y = 0 - this.size;
      this.weight = 2;
      this.x = Math.random() * canvas.width;
    }
    this.weight += 0.05;
    this.y += this.weight;
    this.x += this.directionX
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

function init() {
  for (let i = 0; i < numberOfParticales; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particlesArray.push(new Particle(x, y));
  }
  // console.log(particlesArray);
}
init();

// const particle1 = new Particle(400, 900);
// const particle2 = new Particle(100, 100);

function animate() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // particle1.update();
  // particle1.draw();
  // particle2.update();
  // particle2.draw();

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}

animate();




