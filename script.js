const canvas = document.getElementById('canvas1');

//shortcut, built-in api object, containing all 2d drawing methods for effects
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfParticales = 200;
let particlesArray = []; // will contain coordinates and size for each of 200 particle objects

const pumpkin = new Image();
pumpkin.src = 'pumpkin.png';


class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 20 + 50;
    this.speed = Math.random() * 5 + 1;
    this.angle = Math.random() * 360; //rotation

    //ternanry operator
    this.spin = Math.random() < 0.5 ? -1 : 1; // if math.random is less than 0.5 return -1 else return +1

  }
  draw() {

    //black rectangle
    //ctx.fillRect(this.x, this.y, this.size, this.size)
    //draw method-pass it as argument and draw img on the canvas (using 5 arguments method)

    //save and restore methods
    ctx.save(); //remembers canvas settings
    ctx.translate(2, 2);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pumpkin, this.x, this.y, this.size, this.size);
    ctx.restore();//reset canvas settings when we last time called save
  }
  //update method
  update() {

    //resetting after falls off screen
    if (this.y > canvas.height) {
      //make it slide in
      this.y = 0 - this.size;
      this.x = Math.random() * canvas.width;
      this.size = Math.random() * 20 + 50;
      this.speed = Math.random() * 5 + 1;
    }
    this.y += this.speed;
  }

}

const particle1 = new Particle();

function animate() {
  //clear entire canvas area to see current animation frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particle1.update();
  particle1.draw();
  requestAnimationFrame(animate);
}
animate();

