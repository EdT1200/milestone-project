const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = innerHeight
//const gravity = 0.5
class P1 {
    constructor() {
        this.position = {
            x: 30,
            y: 30
        }
        this.velocity = {
            x: 0,
            y: 0
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
        this.position.y += this.moveP1 
        this.create()
    }

}
const p1 = new P1()
p1.create()

class Platform {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.width = 300
        this.height = 30
    }
    make() {
        c.fillStyle = "green"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }   
}
const platforms = [ new Platform(0, 200), new Platform(800, 200), new Platform(2000, 200), ]
//platform.make()
class Lava {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.width = 200
        this.height = 200
    }
    make() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const lavas = [ new Lava(0, 500), new Lava(200, 500), new Lava(400, 500), new Lava(600, 500), new Lava(700, 500), new Lava(800, 500), new Lava(900,500),
new Lava(1000,500), new Lava(1100,500), new Lava(1200,500), new Lava(1300,500), new Lava(1400,500), new Lava(1500,500), new Lava(1600,500), new Lava(1700,500), 
new Lava(1800,500), new Lava(1900,500), new Lava (2000,500), new Lava(2100,500), new Lava(2200,500), new Lava(2300,500), new Lava(2400,500), new Lava(2500,500), ]



let direction = null;
let x = 100;
let y = 250;

function moveP1(){
    if(direction === 'left' ){
        p1.velocity.x = p1.velocity.x - 2
    }
    if(direction === 'up'&& p1.block){
        let count = 0
        let interval = setInterval(()=>{
            count += 1
            if (count > 10){
                clearInterval(interval)
            }

            p1.velocity.y = p1.velocity.x - 3
        },1)
    }
    if(direction === 'right' && p1.position.x < 200){
        p1.velocity.x = p1.velocity.x + 2
    }
    else { p1.velocity.x = 0
        if (direction.right.keydown){
            platform.position.x -= 2
        }

    }
    if(direction === 'down'){
       p1.velocity.y = p1.velocity.y + 2
    }
    p1.position.x = p1.position.x + p1.velocity.x
    p1.position.y = p1.position.y + p1.velocity.y

    if(p1.velocity.x != 0){
        if(p1.velocity.x < 0){
            p1.velocity.x = p1.velocity.x + 1
        }
        else {
            p1.velocity.x = p1.velocity.x - 1 
        }
    }
    console.log(p1.block)
    if (p1.block == false ) { 
        p1.velocity.y += 0.06

    } else {
        p1.velocity.y  = 0
    }

    
        // if(p1.velocity.y != 0){
        //    if(p1.velocity.y < 0){
        //        p1.velocity.y = p1.velocity.y + 1
        //    }
        //    else {
        //        p1.velocity.y = p1.velocity.y - 1
        //    }
        // }
    
    //c.clearRect(0,0, canvas.width, canvas.height)
    //p1.create()
    
} 
setInterval (moveP1, 200)

function animate(){
    //console.log(x, y, p1.position)
    requestAnimationFrame(animate);
    moveP1()
    c.clearRect(0,0, canvas.width, canvas.height)
    p1.create()
   // .find will check EACH platform 
    // until one "passes the test" in the if statement
    const foundPlatform = platforms.find(platform => {
        if(
            p1.position.y + p1.height >= platform.position.y 
            && p1.position.x + p1.width >= platform.position.x 
            && p1.position.x <= platform.position.x + platform.width
        ){
           return true 
        }
        })

    // if one platform is found to be blocking above,
    // we set p1.block to true
    if (foundPlatform) {
        p1.block = true
    } else {
        p1.block = false
    }
    
    
   //if(keydown.ArrowRight&& p1.position.x > 200 )  

    platforms.forEach(platform => platform.make())
    lavas.forEach(lava => lava.make())
    
    
    //function boxCollision(p1, platforms) {
        //if (p1.y + p1.height )
    //}
    
}
document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft"){
        direction = "left"
    }
    if(e.key === "ArrowUp"){
        direction = "up"
    }
    if(e.key === "ArrowRight"){
        direction = "right"
    }
    if(e.key === "ArrowDown"){
        direction = "down"
    }
})

document.addEventListener("keydown", function(e){
    if(e.repeat) return;
    if(e.key === "ArrowLeft"){
        direction = "left"
    }
    if(e.key === "ArrowUp"){
        direction = "up"
    }
    if(e.key === "ArrowRight"){
        direction = "right"
    }
    if(e.key === "ArrowDown"){
        direction = "down"
    }
})
document.addEventListener("keyup", function(e){
    if(e.repeat) return;
    if(e.key === "ArrowLeft"){
        direction = null
    }
    if(e.key === "ArrowUp"){
        direction = null
    }
    if(e.key === "ArrowRight"){
        direction = null
    }
    if(e.key === "ArrowDown"){
        direction = null
    }
})
animate()


//function setInterval() {
    //if(direction === "left"){
    //}
    //if(direction === "up") {
    //}
    //if(direction === "right") {      
    //}
    //if(direction === "down") {
        
    //}
//}

//moveP1()


//console.log(p1)