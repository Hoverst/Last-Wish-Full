const panel = document.querySelector('.panel');
const toggleBtn = document.querySelector('.toggle-btn');


toggleBtn.addEventListener('click', () => {
  panel.classList.toggle('open');
  toggleBtn.classList.toggle('open');
});

const ad = document.querySelector( '.song' );
const playing = document.querySelector( '.fa-play' );
const pauses = document.querySelector( '.fa-pause' );
const forw = document.querySelector( '.fa forward-step' );
const ttl = document.querySelector( '.title' );
const art_img = document.querySelector( '#artist' );
const art_name = document.querySelector( '#name' );
const playSong = document.querySelector( '#playsong' );

const artist_name = [ 'Christopher Larkin' , 'Christopher Larkin' , 'Christopher Larkin'];
const artist_title = [ 'Enter Hallownest', 'Pure <br/> Vessel', 'Hollow Knight']; 

playSong.addEventListener( 'click', effect )

function effect() {

   if(ad.duration == ad.currentTime) {
      x += 1;
   }
   if ((!playing.classList.contains( 'none' ))) {
         ad.play();

   }
   else{
      ad.pause();
   }

   playing.classList.toggle( 'none' );
   pauses.classList.toggle( 'none' );
   art_img.classList.toggle( 'round' );
   dur();
}

function removeEffect() {
   ad.pause();
   ad.currentTime = 0.01;
   playing.classList.remove( 'none' );
   pauses.classList.add( 'none' );
   art_img.classList.remove( 'round' );
}

let x = 0;

function backward() {
   x -= 1;
   if (x < 0) {
      x = artist_name.length - 1;
   }
   removeEffect();
   songs(x);
}

function forward() {
   x += 1;
   if (x >= artist_name.length) {
      x = 0;
   }
   removeEffect();
   songs(x);
}
 
function songs(x){
   console.log(x);
   art_name.innerHTML = artist_name [x];
   ttl.innerHTML = artist_title [x];
   art_img.src = ` ../img/ar${x}.jpg`;
   ad.src = ` ../music/s${x}.mp3`;

}




songs(0);

const lines = document.querySelector( '.lineChild' );
const progress = document.querySelector( '.line' );
const strt = document.querySelector( '#start' );
const end = document.querySelector( '#end' );

function dur () {
   var dura = ad.duration;
   var secdu = Math.floor(dura % 60);
   var mindu = Math.floor(dura / 60);
   if (secdu < 10) {
      secdu = `0${secdu}`;
   }

}

function prog () {
   var curtime = ad.currentTime;
   var mincur  = Math.floor(curtime / 60);
   var seccur = Math.floor(curtime % 60);

   if (seccur < 10) {
      seccur = `0${seccur}`;

   }



}

function line() {
   var widthbar = (ad.currentTime / ad.duration) * 100;
   lines.style.width = `${widthbar}%`;
}


const audio = document.getElementById("audioPlayer");
const square = document.getElementById("visual-1");
const square2 = document.getElementById("visual-2");
const square3 = document.getElementById("visual-3");
const square4 = document.getElementById("visual-4");
const square5 = document.getElementById("visual-5");
const square6 = document.getElementById("visual-6");
const square7 = document.getElementById("visual-7");
const square8 = document.getElementById("visual-8");


const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const source = audioContext.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(audioContext.destination);
analyser.fftSize = 256;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);



function animate() {
   analyser.getByteFrequencyData(dataArray);
   

   let volume = dataArray.reduce((a, b) => a + b) / bufferLength;
   

   let size = Math.max(1, volume * 1); 

   let scale = size/90;

   if( x == 2) {
      scale = size/30;
}

if( x == 1) {
   scale = size/60;
}


    if (scale < 1) {

      let a = 2;

          square.style.transform = `translateY(50%) scale(${scale})`;
          square2.style.transform = `translateX(50%) rotate(90deg) scale(${scale})`;
          square3.style.transform = `translateY(50%) rotate(180deg) scale(${scale})`;
          square4.style.transform = `translateY(50%) rotate(-90deg) scale(${scale})`;

          square5.style.transform = `translateY(50%) rotate(-45deg) scale(${scale})`;
          square6.style.transform = `translateY(50%) rotate(45deg) scale(${scale})`;
          square7.style.transform = `translateY(50%) rotate(-225deg) scale(${scale})`;
          square8.style.transform = `translateY(50%) rotate(225deg) scale(${scale})`;

          square.style.zIndex = a;
          square2.style.zIndex = a;
          square3.style.zIndex = a;
          square4.style.zIndex = a;
          square5.style.zIndex = a;
          square6.style.zIndex = a;
          square7.style.zIndex = a;
          square8.style.zIndex = a;
}
else{

   let a = 2;

   square.style.transform = `translateY(50%) scale(${scale})`;
   square2.style.transform = `translateX(50%) rotate(90deg) scale(${scale})`;
   square3.style.transform = `translateY(50%) rotate(180deg) scale(${scale})`;
   square4.style.transform = `translateY(50%) rotate(-90deg) scale(${scale})`;
   
   square5.style.transform = `translateY(50%) rotate(-45deg)  scale(${scale})`;
   square6.style.transform = `translateY(50%) rotate(45deg) scale(${scale})`;
   square7.style.transform = `translateY(50%) rotate(-225deg) scale(${scale})`;
   square8.style.transform = `translateY(50%) rotate(225deg) scale(${scale})`;

   square.style.zIndex = a;
   square2.style.zIndex = a;
   square3.style.zIndex = a;
   square4.style.zIndex = a;
   square5.style.zIndex = a;
   square6.style.zIndex = a;
   square7.style.zIndex = a;
   square8.style.zIndex = a;
}





   requestAnimationFrame(animate);
}

audio.onplay = () => {
    audioContext.resume().then(() => animate());
};


document.querySelector('.toggle-btn').addEventListener('click', function() {
   const arrowPanel = document.querySelector('.arrow-panel');
   if (arrowPanel) {
     arrowPanel.classList.add('arrow-none');
     this.disabled = true; 
   }
 });

 document.querySelector('.toggle-btn').addEventListener('click', function() {
   const arrowPanel = document.querySelector('.name');
   if (arrowPanel) {
     arrowPanel.classList.add('name-move');
     this.disabled = true; 
   }
 });


 document.querySelector('.toggle-btn').addEventListener('click', function() {
   const arrowPanel = document.querySelector('.main-line');
   if (arrowPanel) {
     arrowPanel.classList.add('line-move');
     this.disabled = true; 
   }
 });


document.querySelector('.toggle-btn').addEventListener('click', function () {
   const arrowPanel = document.querySelector('.wrapper');
   const button = this;
 
   if (arrowPanel) {
     button.disabled = true;
 
     setTimeout(() => {
       arrowPanel.classList.add('wrapper-unlock');
     }, 3000); 
   }
 });

 let toggle = false;

document.getElementById("toggleBtn").addEventListener("click", () => {
  toggle = !toggle; 
  const newHref = toggle ? "https://google.com" : "https://openai.com";
  
  document.querySelectorAll(".link").forEach(link => {
    link.href = newHref; 
  });
});