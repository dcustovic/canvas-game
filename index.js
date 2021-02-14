const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    
    drawPlayer() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    drawProjecile() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.drawProjecile();
        this.x =  this.x + this.velocity.x;
        this.y =  this.y + this.velocity.y;
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;


// creating a player
const domo = new Player(x, y, 30, 'black');


const meci = [];


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    domo.drawPlayer();
    meci.forEach(metak => {
        metak.update();
    })
}


// creating a projectile when we click
// note that the x and y coordinate might need changing
window.addEventListener('click', (event) => {
    const angle = Math.atan2(
        event.clientY - canvas.height / 2,
        event.clientX - canvas.width / 2
    );
    
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }

    meci.push(new Projectile(
        x,
        y,
        5,
        'red',
        velocity
    ))
});

animate();