let container = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`);
let album = albums[2];

container.innerHTML = `
<div class="card mb-3">
<div class="row button">
    <div class="col-4">
        <img src="${album.image}" alt="" class="img-fluid rounded-start">
    </div>
    <div class="col-8">
        <div class="card-body">
            <h1 class="card-title">
            ${album.title}
            </h1>
            <p class="card-text">${album.author}</p>
            <p class="card-text"><small class="text muted">${album.descriprion}</small></p>
          </div>
    </div>
</div>
</div>`

let tracks = album.tracks;
for (let i = 0; i < tracks.length; i++) {
let track = tracks[i];
playlist.innerHTML += `
  <li class="track list-group-item d-flex align-items-center button play-button">
  <img src="${track.image}" height="30px" class="me-3">
    <div>
      ${track.author} — ${track.title}
    </div>
    <div class="time ms-auto">
       ${track.time}
    </div>
    <audio class="audio" src="${track.src}"></audio>
  </li>`;
}

function setupAudio() {
  let trackNodes = document.querySelectorAll(`.track`);
  for (let i = 0; i < trackNodes.length; i++) {
    let node = trackNodes[i];
    let timeNode = node.querySelector(`.time`);
    let audio = node.querySelector(`.audio`);
    let button = node.querySelector(`.play-button`);
    let isPlaying = false;
    node.addEventListener(`click`, function () {
      if (isPlaying) {
        isPlaying = false;
        audio.pause();
      } else {
        isPlaying = true;
        audio.play();
        UpdateProgress(audio, timeNode, isPlaying);
      }
    })
  }
}

function UpdateProgress(audio, timeNode, isPlaying) {
  let time =getTime(audio.currentTime)
  if(time != timeNode.innerHTML) {
    timeNode.innerHTML = time;
  }
  if (isPlaying) {
    requestAnimationFrame(function() {
      UpdateProgress(audio, timeNode, isPlaying);
    });
  }
}
setupAudio()

function getTime(time) {
let currentSeconds = Math.floor(time);
let minutes = Math.floor(currentSeconds / 60);
let seconds = Math.floor(currentSeconds % 60);
if (minutes < 10) {
  minutes = `0` + minutes;
}
if (seconds < 10) {
  seconds = `0` + seconds;
}
return `${minutes}:${seconds}`
}