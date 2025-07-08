// script.js

function playSong(path, title) {
  const audio = document.getElementById('audioPlayer');
  const nowPlaying = document.getElementById('nowPlaying');

  if (!audio) {
    console.error("Audio player not found!");
    return;
  }

  audio.src = path;
  audio.play()
    .then(() => {
      nowPlaying.innerText = `Now Playing: ${title}`;
    })
    .catch(err => {
      console.error("Failed to play audio:", err);
      nowPlaying.innerText = `Error: Unable to play ${title}`;
    });
}
