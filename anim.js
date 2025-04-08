const lyricsData = [
  { text: "Buenas noches", time: 4 },
  { text: "Feliz 21 de Marzo.", time: 10 }
];

const audio = document.getElementById("backgroundAudio");
const lyrics = document.getElementById("lyrics");
const playBtn = document.getElementById("playButton");

function updateLyrics() {
  const time = Math.floor(audio.currentTime);
  const currentLine = lyricsData.find(line => time >= line.time && time < line.time + 6);

  if (currentLine) {
    const fadeInDuration = 0.1;
    const opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1200);

function playAudio() {
  audio.volume = 0.2;
  audio.play()
    .then(() => {
      playBtn.style.display = 'none';
    })
    .catch(error => console.error('Error al reproducir el audio:', error));
}

playBtn.addEventListener('click', playAudio, { once: true });

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  document.getElementById('starContainer').appendChild(star);
  setTimeout(() => star.remove(), 2000);
}

setInterval(createStar, 250);
