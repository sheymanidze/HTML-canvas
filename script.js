const canvas = document.getElementById('canvas1');

//shortcut, built-in api object, containing all 2d drawing methods for effects
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfParticales = 200;
let particlesArray = []; // will contain coordinates and size for each of 200 particle objects

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 100 + 50;
    this.speed = Math.random() * 3 + 1;
    this.angle = Math.random() * 360; //rotation

    //ternanry operator
    this.spin = Math.random() < 0.5 ? -1 : 1; // if math.random is less than 0.5 return -1 else return +1

  }
  draw() {
    ctx.fillRect(this.x, this.y, this.size, this.size)

    //update method
    update(){
      this.y += this.speed
    }
  }
}

const particle1 = new Particle();

function animate() {
  particle1.update();
  particle1.draw();
  requestAnimationFrame(animate);
}

animate();

