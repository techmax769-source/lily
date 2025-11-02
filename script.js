// 💙 Continuous header typing animation
const topText = "To ma gal 💕";
const topContainer = document.getElementById("topTyping");
const topCursor = document.createElement("span");
topCursor.className = "top-cursor";
topContainer.appendChild(topCursor);

let i = 0;
let typingForward = true;

function loopHeader() {
  if (typingForward) {
    if (i < topText.length) {
      topContainer.textContent = topText.substring(0, i + 1);
      topContainer.appendChild(topCursor);
      i++;
      setTimeout(loopHeader, 150);
    } else {
      typingForward = false;
      setTimeout(loopHeader, 1000);
    }
  } else {
    if (i > 0) {
      topContainer.textContent = topText.substring(0, i - 1);
      topContainer.appendChild(topCursor);
      i--;
      setTimeout(loopHeader, 100);
    } else {
      typingForward = true;
      setTimeout(loopHeader, 1000);
    }
  }
}
loopHeader();

// 💙 Main message typing
const message=`When I see you, something inside me just changes. When I see thee, I want to hold you so tight🫂.I assure you that things will never change and my lov will remain the same. It has been forever this way since I heard your name,,🥺 You have some magical spell that takes me to another world.I long that, lying in thine arms beneath the moon’s soft glow, we gaze upon the stars above. The passion, the feeling—all pure and everlasting🤭🙈`;

const container=document.getElementById('typing');
const letterCursor=document.createElement('span');
letterCursor.className='cursor';
container.appendChild(letterCursor);

const chars=Array.from(message);
const totalDuration=60000;
const avg=totalDuration/chars.length;
const typingAudio=document.getElementById('typingAudio');
typingAudio.volume=0.07;

let idx=0;
function typeNext(){
  if(idx>=chars.length){letterCursor.style.opacity='0';return;}
  const ch=chars[idx++];
  if(ch==='\\n') container.insertBefore(document.createElement('br'),letterCursor);
  else container.insertBefore(document.createTextNode(ch),letterCursor);
  if(ch.trim().length>0){typingAudio.currentTime=0;typingAudio.play().catch(()=>{});}
  container.parentElement.scrollTop=container.parentElement.scrollHeight;
  setTimeout(typeNext,avg);
}
window.addEventListener('load',()=>setTimeout(typeNext,500));

// ❤️ Music button controls
const musicBtn=document.getElementById('musicBtn');
const loveAudio=document.getElementById('loveAudio');
const playIcon=document.getElementById('playIcon');
const pauseIcon=document.getElementById('pauseIcon');
const maxVolume = 0.8; 
loveAudio.volume=maxVolume; 

// **Functions for crossfade auto-replay**
const fadeDuration = 3000; // 3 seconds for fade in/out
const fadeStep = 0.05; // Volume change step

function startFadeIn() {
  // Reset the currentLine tracker and remove 'active' class from all lines for loop
  currentLine = -1; 
  lines.forEach(l => l.classList.remove('active'));

  // Reset volume to 0 before starting to play
  loveAudio.volume = 0;
  loveAudio.currentTime = 0; // Rewind to start
  loveAudio.play().then(() => {
    let fadeInterval = setInterval(() => {
      if (loveAudio.volume < maxVolume - fadeStep) {
        loveAudio.volume = Math.min(maxVolume, loveAudio.volume + fadeStep);
      } else {
        loveAudio.volume = maxVolume;
        clearInterval(fadeInterval);
      }
    }, fadeDuration * (fadeStep / maxVolume) * 0.5); 
  }).catch(e => console.error("Autoplay failed on fade in:", e));
}

function fadeOutAndRestart() {
  let fadeInterval = setInterval(() => {
    if (loveAudio.volume > fadeStep) {
      loveAudio.volume = Math.max(0, loveAudio.volume - fadeStep);
    } else {
      clearInterval(fadeInterval);
      // Volume is now 0, restart the song with a fade in
      startFadeIn(); 
    }
  }, fadeDuration * (fadeStep / maxVolume) * 0.5); 
}

musicBtn.addEventListener('click',()=>{
  if(loveAudio.paused){
    // Start with a fade-in when the user clicks play
    startFadeIn(); 
  } else {
    // Standard pause/stop
    loveAudio.pause();
    loveAudio.volume = maxVolume; // Reset volume for next play
  }
});

// **Event Listener for Auto-Replay (starts the crossfade loop)**
loveAudio.addEventListener('ended', () => {
    // When the song ends, start the fade-out and restart process
    fadeOutAndRestart();
});

loveAudio.addEventListener('play',()=>{
  musicBtn.classList.add('playing');
  playIcon.style.display='none';
  pauseIcon.style.display='block';
});
loveAudio.addEventListener('pause',()=>{
  musicBtn.classList.remove('playing');
  playIcon.style.display='block';
  pauseIcon.style.display='none';
});

// 💞 Karaoke-style Lyrics Sync with crossfade
const lyricsContainer = document.getElementById('lyrics');
lyricsContainer.innerHTML = `
  <span class="line">When it comes to you oh baby I'm addicted.🤭</span>
  <span class="line">You are like a drug no Rehab can fix it...💊</span>
  <span class="line">I think you're perfect baby even with your flaws</span>
  <span class="line">You ask me what I like any you ooh I love it all.🌹</span>
  <span class="line">When it comes to you oh baby I'm addicted</span>
  <span class="line">You're like a drug no Rehab can fix it</span>
  <span class="line">I think you're perfect baby even with your flaws.</span>
  <span class="line">You ask me what I like about you oh I love it all,,</span>
  <span class="line">You're all i ever neeed</span>
  <span class="line">Baby you're amazing😍</span>
  <span class="line">
You're ma angel come and save me,🫂</span>
<span class="line">Yeeeaaah...😎</span>
`;
const lines = lyricsContainer.querySelectorAll('.line');
const lyricTimings = [0, 3, 6, 10, 14, 18, 21, 25, 28, 34, 37, 40]; // synced to your lyrics
let currentLine = -1;

loveAudio.addEventListener('play', () => {
  lyricsContainer.classList.add('active');
});
loveAudio.addEventListener('pause', () => {
  lyricsContainer.classList.remove('active');
});
loveAudio.addEventListener('timeupdate', () => {
  const time = loveAudio.currentTime;
  for (let i = 0; i < lyricTimings.length; i++) {
    if (time >= lyricTimings[i] && (i === lyricTimings.length - 1 || time < lyricTimings[i + 1])) {
      if (currentLine !== i) {
        lines.forEach((l, index) => {
          if (index === i) l.classList.add('active');
          else l.classList.remove('active');
        });
        currentLine = i;
      }
      break;
    }
  }
});
