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
    
    draw() {
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

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.draw();
        this.x =  this.x + this.velocity.x;
        this.y =  this.y + this.velocity.y;
    }
}

class Neprijatelj {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.draw();
        this.x =  this.x + this.velocity.x;
        this.y =  this.y + this.velocity.y;
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;


// creating a player
const domo = new Player(x, y, 30, 'black');


const metci = [];
const neprijatelji = [];


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    domo.draw();
    metci.forEach(m => {
        m.update();
    });
    neprijatelji.forEach(n => {
        n.update();
    })
}

function spawnNeprijatelj() {
    setInterval(() => { 
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 30;
        const color = 'red';
        
        const angle = Math.atan2(
        canvas.height / 2 - y,
        canvas.width / 2 - x
    );
    
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }

        neprijatelji.push(new Neprijatelj(x, y, radius, color, velocity))
    }, 1000)
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

    metci.push(new Projectile(
        x,
        y,
        5,
        'black',
        velocity
    ))
});

animate();
spawnNeprijatelj();