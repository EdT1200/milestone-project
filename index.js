const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = innerHeight
class P1 {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }

        this.width = 30
        this.height = 30
    }
    create(){
        //console.log("hello")
        c.fillStyle = "blue"
        c.fillRect(this.position.x, this.position.y, this.width, this.height,)
    }
    update() {
        this.position.y += this.velocity.y
        this.create()
    }

}
const p1 = new P1()
p1.create()

let direction = null;
let x = 100;
let y = 250;

function moveP1(){ 
    if(direction === 'left'){
        x = x - 1
    }
    if(direction === 'up'){
        y = y + 1
    }
    if(direction === 'right'){
        x = x + 1
    }
    if(direction === 'down'){
        y = y - 1
    }
    p1.position.x = x 
    p1.position.y = y 
    p1.create()
}
setInterval (moveP1, 1)
//moveP1()


console.log(p1)