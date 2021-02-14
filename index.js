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
        this.x =  this.x + this.velocity.x;
        this.y =  this.y + this.velocity.y;
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;


// creating a player
const domo = new Player(x, y, 30, 'black');
domo.drawPlayer();

//creating a projectile
// note that the x and y coordinate might need changing
const metak = new Projectile(
    x,
    y,
    5,
    'lime',
    {x: 3, y: 3}
);



function animate() {
    requestAnimationFrame(animate);
    metak.drawProjecile();
    metak.update();
}



window.addEventListener('click', (event) => {
    
});

animate();