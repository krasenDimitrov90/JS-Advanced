const gameStart = document.querySelector('.game-start');
const gameScore = document.querySelector('.game-score');
const gamePoints = gameScore.querySelector('.points');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
gameStart.addEventListener('click', onGameStart);
// global key listeners
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
let keys = {};
let player = {
    x: 150,
    y: 100,
    width: 0,
    height: 0,
    lastTimeFiredFireball: 0
};
let game = {
    speed: 2,
    movingMultiplier: 4,
    fireBallMultiplier: 5,
    fireInterval: 1000,
    cloudSpawnInterval: 3000
};
let scene = {
    score: 0,
    lastCloudSpawn: 0
}
function onGameStart(e) {
    e.currentTarget.classList.add('hide');
    //render wizard
    const wizard = document.createElement('div');
    wizard.classList.add('wizard');
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';
    player.width = wizard.offsetWidth;
    player.height = wizard.offsetHeight;
    gameArea.appendChild(wizard);
    // game infinite loop
    window.requestAnimationFrame(gameAction)
}
// game loop action 
function gameAction(timestamp) {
    const wizard = document.querySelector('.wizard');
    // increment score
    scene.score++;
    // gravity aplly
    let isInAir = (player.y + player.height) <= (gameArea.offsetHeight - wizard.offsetHeight);
    if (isInAir) {
        player.y += game.speed;
    }
    //Register user input
    if (keys.ArrowUp && player.y > 0) {
        player.y -= game.speed * game.movingMultiplier;
    }
    if (keys.ArrowDown && player.y + player.height < (gameArea.offsetHeight - wizard.offsetHeight)) {
        player.y += game.speed * game.movingMultiplier;
    }
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= game.speed * game.movingMultiplier;
    }
    if (keys.ArrowRight && player.x + player.width < (gameArea.offsetWidth - wizard.offsetWidth)) {
        player.x += game.speed * game.movingMultiplier;
    }
    //Add clouds

    if (timestamp - scene.lastCloudSpawn > game.cloudSpawnInterval + 20000 * Math.random()) {
        let cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.x = gameArea.offsetWidth - 200;
        cloud.style.left = cloud.x + 'px';
        cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
        gameArea.appendChild(cloud);
        scene.lastCloudSpawn = timestamp;
    }

    // Modify clouds position 
    let clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        cloud.x -= game.speed;
        cloud.style.left = cloud.x + 'px';
        if (cloud.offsetWidth + cloud.x <= 0) {
            cloud.parentElement.remove(cloud);
        }
    })

    //Modify fireball position 
    let fireBalls = document.querySelectorAll('.fire-ball');
    fireBalls.forEach(ball => {
        ball.x += game.speed * game.fireBallMultiplier;
        ball.style.left = ball.x + 'px';

        if (ball.x + ball.offsetWidth > gameArea.offsetWidth) {
            ball.parentElement.removeChild(ball);
        }
    })
    if (keys.Space && timestamp - player.lastTimeFiredFireball > game.fireInterval) {
        wizard.classList.add('wizard-fire');
        addFireBall(player);
        player.lastTimeFiredFireball = timestamp
    } else {
        wizard.classList.remove('wizard-fire');
    }
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';
    gamePoints.textContent = scene.score;
    window.requestAnimationFrame(gameAction)
}
// key handlers
function onKeyDown(e) {
    keys[e.code] = true;
}
function onKeyUp(e) {
    keys[e.code] = false;
}
function addFireBall() {
    let fireBall = document.createElement('div');
    fireBall.classList.add('fire-ball');
    fireBall.style.top = (player.y + player.height / 3 - 5) + 'px';
    fireBall.x = player.x + player.width;
    fireBall.style.left = fireBall.x + 'px';

    gameArea.appendChild(fireBall);
}