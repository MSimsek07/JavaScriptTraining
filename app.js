let playerState = 'sit';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (e) {
    playerState = e.target.value;
});
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);
const CANVAS_WIDTH = canvas.width =600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const sprite_with = 575;
const sprite_height = 523;


let gameFrame = 0;
//to slow down the animation speed 
const staggersFrames = 5 ;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        loc : [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * sprite_with;
        let positionY = index * sprite_height;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor( gameFrame / staggersFrames) % spriteAnimations[playerState].loc.length;
    let frameX = sprite_with * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    // Math.floor brings us the minimum value. 0.4 => 0 or 1 => 1 ie.
    //ctx.fillRect(100, 50, 100, 100);
    //ctx.drawImage(image, source_x, source_y, source_width, source_height, destination_x, destination_y, destination_width, destination_height);
    ctx.drawImage(playerImage, frameX, frameY , sprite_with, sprite_height, 0, 0, sprite_with, sprite_height );
    
gameFrame ++;
    requestAnimationFrame(animate);
};
animate();
