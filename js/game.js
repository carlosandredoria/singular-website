// ==========================================
// SINGULAR RUNNER — Easter Egg Mini Game
// Click the glitch title or press SPACE to play
// ==========================================

// roundRect polyfill
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
        if (typeof r === 'number') r = {tl: r, tr: r, br: r, bl: r};
        this.beginPath();
        this.moveTo(x + r.tl, y);
        this.lineTo(x + w - r.tr, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r.tr);
        this.lineTo(x + w, y + h - r.br);
        this.quadraticCurveTo(x + w, y + h, x + w - r.br, y + h);
        this.lineTo(x + r.bl, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r.bl);
        this.lineTo(x, y + r.tl);
        this.quadraticCurveTo(x, y, x + r.tl, y);
        this.closePath();
    };
}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const overlay = document.getElementById('gameOverlay');

let gameState = 'idle';
let score = 0;
let speed = 5;
let animFrame = 0;
let obstacles = [];
let groundY = 0;
let particles = [];
let distance = 0;
const GOAL_DISTANCE = 5000;

canvas.width = 800;
canvas.height = 400;
overlay.style.display = 'none';

const player = {
    x: 80, y: 0, vy: 0, width: 30, height: 50,
    grounded: true, jumpPower: -14, gravity: 0.7, legPhase: 0
};

const game = {
    buildings: [], groundTiles: [], clouds: [],
    backgroundBuildings: [], hermitage: null, hermitageX: GOAL_DISTANCE + 200
};

function initGame() {
    gameState = 'playing';
    score = 0; speed = 5; distance = 0;
    obstacles = []; particles = []; animFrame = 0;
    const hint = document.getElementById('startHint');
    if (hint) hint.style.display = 'none';
    player.y = groundY - player.height;
    player.vy = 0; player.grounded = true; player.legPhase = 0;
    game.groundTiles = [];
    for (let i = 0; i < 30; i++)
        game.groundTiles.push({ x: i * 80, type: Math.random() > 0.3 ? 'concrete' : 'pattern' });
    game.backgroundBuildings = [];
    for (let i = 0; i < 20; i++)
        game.backgroundBuildings.push({
            x: i * 150 + Math.random() * 50,
            width: 60 + Math.random() * 80, height: 80 + Math.random() * 150,
            color: ['#0a0a15','#12121f','#0f0f1a','#15152a'][Math.floor(Math.random()*4)],
            windows: Math.floor(Math.random()*8)+3
        });
    game.buildings = [];
    for (let i = 0; i < 15; i++)
        game.buildings.push({
            x: i * 200 + Math.random() * 80,
            width: 80 + Math.random()*100, height: 100 + Math.random()*180,
            color: ['#1a1a2e','#12121a','#1e1e32','#0f0f1e'][Math.floor(Math.random()*4)],
            neonColor: ['#00f0ff','#ff00ff','#f0ff00','#00ff88'][Math.floor(Math.random()*4)],
            neonSide: Math.random()>0.5?'left':'right',
            hasSign: Math.random()>0.6,
            signText: ['BAR','NET','HOTEL','24H','CYBER','DATA'][Math.floor(Math.random()*6)]
        });
    game.hermitage = { x: game.hermitageX, width: 120, height: 90 };
    game.clouds = [];
    for (let i = 0; i < 8; i++)
        game.clouds.push({ x: Math.random()*canvas.width*2, y: 30+Math.random()*60, width: 40+Math.random()*60, speed: 0.2+Math.random()*0.3 });
    groundY = canvas.height - 60;
    player.y = groundY - player.height;
    overlay.style.display = 'none';
    canvas.style.display = 'block';
    requestAnimationFrame(gameLoop);
}

function jump() {
    if (gameState === 'idle') { initGame(); return; }
    if (gameState === 'playing' && player.grounded) {
        player.vy = player.jumpPower;
        player.grounded = false;
        spawnJumpParticles();
    }
    if (gameState === 'won' || gameState === 'lost') initGame();
}

document.addEventListener('keydown', e => { if (e.code === 'Space') { e.preventDefault(); jump(); }});
canvas.addEventListener('click', jump);
canvas.addEventListener('touchstart', e => { e.preventDefault(); jump(); });
document.querySelector('.glitch').addEventListener('click', () => { if (gameState === 'idle') initGame(); });

function gameLoop() {
    if (gameState !== 'playing') return;
    animFrame++; distance += speed; score = Math.floor(distance/10);
    speed = 5 + Math.floor(distance/800)*0.5; if (speed > 14) speed = 14;
    if (animFrame % Math.max(40, 80 - Math.floor(distance/300)) === 0) spawnObstacle();
    player.vy += player.gravity; player.y += player.vy; player.legPhase += 0.3;
    if (player.y >= groundY - player.height) { player.y = groundY - player.height; player.vy = 0; player.grounded = true; }
    obstacles.forEach(obs => { obs.x -= speed; if (obs.animPhase !== undefined) obs.animPhase += 0.1; });
    obstacles = obstacles.filter(obs => obs.x > -100);
    particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += 0.2; p.life--; });
    particles = particles.filter(p => p.life > 0);
    game.buildings.forEach(b => { b.x -= speed*0.5; if (b.x+b.width < 0) { b.x = canvas.width+Math.random()*100; b.neonColor = ['#00f0ff','#ff00ff','#f0ff00','#00ff88'][Math.floor(Math.random()*4)]; }});
    game.backgroundBuildings.forEach(b => { b.x -= speed*0.2; if (b.x+b.width < 0) b.x = canvas.width+Math.random()*100; });
    game.clouds.forEach(c => { c.x -= speed*c.speed; if (c.x+c.width < 0) { c.x = canvas.width+Math.random()*200; c.y = 30+Math.random()*60; }});
    game.groundTiles.forEach(gt => { gt.x -= speed; if (gt.x < -80) { gt.x = Math.max(...game.groundTiles.map(t=>t.x))+80; gt.type = Math.random()>0.3?'concrete':'pattern'; }});
    obstacles.forEach(obs => { if (checkCollision(player, obs)) { gameState = 'lost'; showGameOver(); }});
    if (player.grounded && animFrame%5===0) spawnRunParticle();
    if (distance >= GOAL_DISTANCE) { gameState = 'won'; showWin(); return; }
    draw();
    requestAnimationFrame(gameLoop);
}

function spawnObstacle() {
    const types = ['drone','person','water','barrier'];
    const type = types[Math.floor(Math.random()*types.length)];
    let obs = { x: canvas.width+50, type, animPhase: 0 };
    switch(type) {
        case 'drone': obs.y = 80+Math.random()*100; obs.width=45; obs.height=25; obs.hoverOffset=Math.random()*Math.PI*2; break;
        case 'person': obs.y = groundY-45; obs.width=20; obs.height=45; break;
        case 'water': obs.y = groundY-8; obs.width=60+Math.random()*40; obs.height=8; break;
        case 'barrier': obs.y = groundY-30; obs.width=25; obs.height=30; break;
    }
    obstacles.push(obs);
}

function checkCollision(p, obs) {
    return p.x+5 < obs.x+obs.width && p.x+p.width-10 > obs.x && p.y+5 < obs.y+obs.height && p.y+p.height-5 > obs.y;
}

function spawnJumpParticles() { for (let i=0;i<8;i++) particles.push({x:player.x+player.width/2,y:player.y+player.height,vx:(Math.random()-0.5)*4,vy:Math.random()*-3,life:20+Math.random()*10,color:'#00f0ff',size:2+Math.random()*3}); }
function spawnRunParticle() { particles.push({x:player.x+5,y:player.y+player.height-2,vx:-2-Math.random()*2,vy:-0.5-Math.random(),life:15,color:'#00f0ff',size:2}); }
function spawnWinParticle() { const c=['#00f0ff','#ff00ff','#f0ff00','#00ff88','#ff6b00']; for(let i=0;i<50;i++) particles.push({x:player.x+player.width/2+(Math.random()-0.5)*100,y:player.y+(Math.random()-0.5)*100,vx:(Math.random()-0.5)*8,vy:(Math.random()-0.5)*8,life:40+Math.random()*30,color:c[Math.floor(Math.random()*c.length)],size:3+Math.random()*5}); }

function draw() {
    const skyGrad = ctx.createLinearGradient(0,0,0,canvas.height);
    skyGrad.addColorStop(0,'#050508'); skyGrad.addColorStop(0.5,'#0a0a15'); skyGrad.addColorStop(1,'#0f0f1e');
    ctx.fillStyle = skyGrad; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.globalAlpha=0.15; game.clouds.forEach(c=>{ ctx.fillStyle='#8888aa'; ctx.beginPath(); ctx.ellipse(c.x,c.y,c.width/2,15,0,0,Math.PI*2); ctx.fill(); }); ctx.globalAlpha=1;
    game.backgroundBuildings.forEach(b=>{ ctx.fillStyle=b.color; ctx.fillRect(b.x,groundY-b.height,b.width,b.height); ctx.fillStyle='rgba(255,200,100,0.3)'; for(let i=0;i<b.windows;i++) if(Math.random()>0.3) ctx.fillRect(b.x+8+i*15,groundY-b.height+15,8,10); });
    game.buildings.forEach(b=>{
        ctx.fillStyle=b.color; ctx.fillRect(b.x,groundY-b.height,b.width,b.height);
        ctx.fillStyle=b.neonColor; ctx.shadowColor=b.neonColor; ctx.shadowBlur=15;
        if(b.neonSide==='left') ctx.fillRect(b.x,groundY-b.height+10,4,b.height-20); else ctx.fillRect(b.x+b.width-4,groundY-b.height+10,4,b.height-20);
        ctx.shadowBlur=0;
        if(b.hasSign){ ctx.fillStyle='rgba(0,0,0,0.7)'; ctx.fillRect(b.x+b.width/2-25,groundY-b.height+30,50,20); ctx.fillStyle=b.neonColor; ctx.shadowColor=b.neonColor; ctx.shadowBlur=8; ctx.font='bold 10px Orbitron,monospace'; ctx.textAlign='center'; ctx.fillText(b.signText,b.x+b.width/2,groundY-b.height+44); ctx.shadowBlur=0; }
    });
    game.groundTiles.forEach(gt=>{ ctx.fillStyle='#1a1a2e'; ctx.fillRect(gt.x,groundY,gt.width,canvas.height-groundY); if(gt.type==='pattern'){ ctx.strokeStyle='#252540'; ctx.lineWidth=1; for(let i=0;i<4;i++){ ctx.beginPath(); ctx.moveTo(gt.x+i*20,groundY); ctx.lineTo(gt.x+i*20-20,canvas.height); ctx.stroke(); }}});
    ctx.strokeStyle='#00f0ff'; ctx.shadowColor='#00f0ff'; ctx.shadowBlur=10; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(0,groundY); ctx.lineTo(canvas.width,groundY); ctx.stroke(); ctx.shadowBlur=0;
    obstacles.forEach(drawObstacle);
    particles.forEach(p=>{ ctx.globalAlpha=p.life/40; ctx.fillStyle=p.color; ctx.shadowColor=p.color; ctx.shadowBlur=5; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0; }); ctx.globalAlpha=1;
    drawPlayer();
    if(distance>GOAL_DISTANCE-600) drawHermitage();
    const progress=Math.min(distance/GOAL_DISTANCE,1); const barX=canvas.width-215,barY=20;
    ctx.fillStyle='#1a1a2e'; ctx.fillRect(barX,barY,200,8);
    const grad=ctx.createLinearGradient(barX,0,barX+200,0); grad.addColorStop(0,'#00f0ff'); grad.addColorStop(1,'#f0ff00');
    ctx.fillStyle=grad; ctx.shadowColor='#00f0ff'; ctx.shadowBlur=8; ctx.fillRect(barX,barY,200*progress,8); ctx.shadowBlur=0;
    ctx.fillStyle='#888'; ctx.font='10px Orbitron,monospace'; ctx.textAlign='right'; ctx.fillText('TO HERMITAGE',barX+200,barY-5);
    ctx.fillStyle='#00f0ff'; ctx.shadowColor='#00f0ff'; ctx.shadowBlur=10; ctx.font='bold 16px Orbitron,monospace'; ctx.textAlign='left'; ctx.fillText(score+'m',15,30); ctx.shadowBlur=0;
    ctx.fillStyle='rgba(0,0,0,0.1)'; for(let y=0;y<canvas.height;y+=4) ctx.fillRect(0,y,canvas.width,2);
}

function drawPlayer() {
    const px=player.x,py=player.y,legAnim=Math.sin(player.legPhase)*(player.grounded?1:0);
    ctx.save(); ctx.shadowColor='#00f0ff'; ctx.shadowBlur=15;
    ctx.strokeStyle='#00f0ff'; ctx.lineWidth=3;
    ctx.beginPath(); ctx.moveTo(px+10,py+30); ctx.lineTo(px+10+legAnim*8,py+50); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(px+20,py+30); ctx.lineTo(px+20-legAnim*8,py+50); ctx.stroke();
    ctx.fillStyle='#0a0a15'; ctx.strokeStyle='#00f0ff'; ctx.lineWidth=2; ctx.beginPath(); ctx.roundRect(px+5,py+10,20,25,3); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(px+15,py+8,8,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(px+20,py+15); ctx.lineTo(px+28+(player.grounded?0:-5),py+25); ctx.stroke();
    ctx.fillStyle='#ff00ff'; ctx.shadowColor='#ff00ff'; ctx.shadowBlur=10; ctx.beginPath(); ctx.arc(px+15,py+35,4,0,Math.PI*2); ctx.fill();
    ctx.restore();
}

function drawObstacle(obs) {
    ctx.save();
    switch(obs.type) {
        case 'drone': {
            const hover=Math.sin(animFrame*0.1+(obs.hoverOffset||0))*5;
            ctx.fillStyle='#333'; ctx.strokeStyle='#ff4444'; ctx.lineWidth=2;
            ctx.beginPath(); ctx.ellipse(obs.x+obs.width/2,obs.y+obs.height/2+hover,obs.width/2,obs.height/3,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
            ctx.fillStyle='#ff0000'; ctx.shadowColor='#ff0000'; ctx.shadowBlur=10; ctx.beginPath(); ctx.arc(obs.x+obs.width/2,obs.y+obs.height/2+hover,5,0,Math.PI*2); ctx.fill();
            ctx.strokeStyle='#888'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(obs.x+5,obs.y+hover); ctx.lineTo(obs.x+15,obs.y+hover); ctx.moveTo(obs.x+obs.width-5,obs.y+hover); ctx.lineTo(obs.x+obs.width-15,obs.y+hover); ctx.stroke();
            break;
        }
        case 'person': {
            const bob=Math.sin(animFrame*0.15)*2;
            ctx.fillStyle='#2a2a40'; ctx.strokeStyle='#666'; ctx.lineWidth=2; ctx.beginPath(); ctx.roundRect(obs.x+3,obs.y+15+bob,14,20,2); ctx.fill(); ctx.stroke();
            ctx.beginPath(); ctx.arc(obs.x+10,obs.y+10+bob,7,0,Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.moveTo(obs.x+6,obs.y+35+bob); ctx.lineTo(obs.x+4,obs.y+obs.height); ctx.moveTo(obs.x+14,obs.y+35+bob); ctx.lineTo(obs.x+16,obs.y+obs.height); ctx.stroke();
            break;
        }
        case 'water': {
            ctx.fillStyle='rgba(0,150,255,0.5)'; ctx.shadowColor='#00f0ff'; ctx.shadowBlur=8; ctx.fillRect(obs.x,obs.y,obs.width,obs.height);
            ctx.strokeStyle='rgba(0,200,255,0.7)'; ctx.lineWidth=1; for(let i=0;i<3;i++){ ctx.beginPath(); ctx.moveTo(obs.x+5,obs.y+2+i*2); ctx.lineTo(obs.x+obs.width-5,obs.y+2+i*2); ctx.stroke(); }
            break;
        }
        case 'barrier': {
            ctx.fillStyle='#ff6600'; ctx.shadowColor='#ff6600'; ctx.shadowBlur=10; ctx.fillRect(obs.x,obs.y,obs.width,obs.height);
            ctx.fillStyle='#000'; ctx.font='bold 8px monospace'; ctx.textAlign='center'; ctx.fillText('!',obs.x+obs.width/2,obs.y+20);
            break;
        }
    }
    ctx.restore();
}

function drawHermitage() {
    const h=game.hermitage, visibleX=h.x-distance+200;
    if(visibleX>canvas.width+50) return;
    const hover=Math.sin(animFrame*0.05)*2;
    ctx.save();
    ctx.shadowColor='#f0ff00'; ctx.shadowBlur=30+hover*3;
    ctx.fillStyle='#2a2010'; ctx.fillRect(visibleX-10,groundY-h.height-30+hover,h.width+20,35);
    ctx.fillStyle='#f0ff00'; ctx.shadowBlur=15+hover*2; ctx.font='bold 14px Orbitron,monospace'; ctx.textAlign='center'; ctx.fillText('HERMITAGE',visibleX+h.width/2,groundY-h.height-10+hover);
    ctx.fillStyle='#1a1510'; ctx.shadowBlur=20; ctx.fillRect(visibleX,groundY-h.height+hover,h.width,h.height);
    ctx.fillStyle='#ffaa44'; ctx.shadowColor='#ffaa44'; ctx.shadowBlur=20; ctx.fillRect(visibleX+h.width/2-12,groundY-40+hover,24,40);
    ctx.fillStyle='rgba(255,200,100,0.6)'; ctx.shadowColor='#ffcc66'; ctx.shadowBlur=10; ctx.fillRect(visibleX+15,groundY-h.height+15+hover,20,15); ctx.fillRect(visibleX+h.width-35,groundY-h.height+15+hover,20,15);
    ctx.restore();
}

function showWin() {
    spawnWinParticle();
    canvas.style.display='none';
    overlay.innerHTML=`<div class="game-end-screen win"><div class="end-title" style="color:#f0ff00;text-shadow:0 0 30px #f0ff00;">YOU MADE IT</div><div class="end-sub">The Hermitage is just ahead. Coffee's on Mia.</div><div class="end-score">${score} meters run</div><div class="end-hint">Press SPACE or TAP to run again</div></div>`;
    overlay.style.display='flex';
    let winFrames=0; const winAnim=setInterval(()=>{ if(winFrames<60){drawWinParticles();winFrames++;}else{clearInterval(winAnim);} },30);
}

function showGameOver() {
    canvas.style.display='none';
    overlay.innerHTML=`<div class="game-end-screen lose"><div class="end-title" style="color:#ff4444;text-shadow:0 0 30px #ff4444;">WIPED</div><div class="end-sub">Genesis Corp caught up. The data run is over.</div><div class="end-score">${score} meters run</div><div class="end-hint">Press SPACE or TAP to try again</div></div>`;
    overlay.style.display='flex';
}

function drawWinParticles() {
    const c=document.createElement('canvas'); c.width=canvas.width; c.height=canvas.height; c.style.position='fixed'; c.style.top='0'; c.style.left='0'; c.style.zIndex='99999'; document.body.appendChild(c);
    const lc=c.getContext('2d');
    particles.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.vy+=0.1; p.life--; lc.globalAlpha=Math.max(0,p.life/40); lc.fillStyle=p.color; lc.shadowColor=p.color; lc.shadowBlur=10; lc.beginPath(); lc.arc(p.x,p.y,p.size,0,Math.PI*2); lc.fill(); });
    lc.globalAlpha=1;
    if(particles.every(p=>p.life<=0)) document.body.removeChild(c);
}
