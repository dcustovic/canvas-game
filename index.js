const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    
    drawPlayer() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 4, Math.PI * 2, false);
        ctx.fill();
    }
    
}

const domo = new Player(100, 100, 30, 'red');
domo.drawPlayer();