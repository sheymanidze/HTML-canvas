const canvas = document.getElementById('canvas1');

//shortcut, built-in api object, containing all 2d drawing methods for effects
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfParticales = 50;
let particlesArray = []; // will contain coordinates and size for each of 200 particle objects

const pumpkin = new Image();
pumpkin.src = 'pumpkin.png';

// const pumpkin2 = new Image();
// pumpkin2.src = 'pumpkin2.png'

const pumpkins = new Image();
pumpkins.src = 'pumpkins.png';


class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 70 + 10;
    this.speed = Math.random() * 2 + 0.5;
    this.angle = Math.random() * 360; //rotation

    //ternanry operator
    this.spin = Math.random() < 0.5 ? -1 : 1; // if math.random is less than 0.5 return -1 else return +1

    //sprite sheet control
    this.frameX = Math.floor(Math.random() * 3);//math floor for whole number(will return 0,1, or 2)
    this.frameY = Math.floor(Math.random() * 3);
    this.spriteSize = 900 / 3;

  }
  draw() {

    //black rectangle
    //ctx.fillRect(this.x, this.y, this.size, this.size)
    //draw method-pass it as argument and draw img on the canvas (using 5 arguments method)

    //save and restore methods
    ctx.save(); //remembers canvas settings

    //translate with current particales coordinates
    ctx.translate(this.x, this.y);

    //sping adds random rotation left right after refreshing
    ctx.rotate(this.angle * Math.PI / 360 * this.spin);

    //for testing purposes in order to better see whats going on
    // ctx.fillStyle = 'red';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    //replace this.x, and this.y to 0,0, in order not to repeat and make particales rotate while falling down
    // ctx.drawImage(pumpkin, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);

    // ctx.drawImage(pumpkin2, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);




    //long draw method (9 arguments, s=source, d=destination)
    // ctx.drawImage(pumpkins, sx, sy, sw, sh, dx, dy, dw, dh);

    ctx.drawImage(pumpkins, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);



    ctx.restore();//reset canvas settings when we last time called save
  }
  //update method
  update() {

    //increase by 1 in every animation loop
    // this.angle++;

    this.angle += 2;

    //resetting after falls off screen
    //-this.size added so the particles won't reset to0 early (before even reaching the bottom of the page)
    if (this.y - this.size > canvas.height) {
      //make it slide in
      this.y = 0 - this.size;
      this.x = Math.random() * canvas.width;
      this.size = Math.random() * 70 + 10;
      this.speed = Math.random() * 2 + 0.5;
    }
    this.y += this.speed;
  }

}

// const particle1 = new Particle();
//running for loop and fill particles array with many randomized particle objects
function init() {
  for (let i = 0; i < numberOfParticales; i++) {
    particlesArray.push(new Particle());
  }
}

init();

function animate() {
  //clear entire canvas area to see current animation frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // particle1.update();
  // particle1.draw();

  //for loop will run through entire paarticles array and for each particle in object in the array it will call their associated draw and updtae methods...also, recalculate their positions
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
  }


  requestAnimationFrame(animate);
}
animate();

