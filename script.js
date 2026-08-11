const fallbackArt = ['album-art.svg', 'album-art-2.svg', 'album-art-3.svg'];

const tracks = [
  {
    title: 'Pukarta Chala Hoon Main',
    artist: 'Mohd. Rafi',
    album: 'Mere Sanam',
    duration: 232,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/43/47/9f/43479f34-f194-be60-a84b-69b2b218db7a/191773210236.jpg/600x600bb.jpg',
    audio: 'music/pukarta-chala-hoon-main.mp3',
  },
  {
    title: 'Yeh Sham Mastani',
    artist: 'Kishore Kumar',
    album: 'Kati Patang',
    duration: 277,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/98/7e/19/987e1981-1570-2997-fdd7-d68e9d3d9547/191773211578.jpg/600x600bb.jpg',
    audio: 'music/yeh-sham-mastani.mp3',
  },
  {
    title: 'Aap Ki Ankhon Mein Kuch',
    artist: 'Kishore Kumar & Lata Mangeshkar',
    album: 'Ghar',
    duration: 249,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/df/0e/52/df0e52a6-cc06-ff73-3d79-a7cd90db170e/191773224431.jpg/600x600bb.jpg',
    audio: 'music/aap-ki-ankhon-mein-kuch.mp3',
  },
  {
    title: 'Lag Ja Gale Se Phir',
    artist: 'Lata Mangeshkar',
    album: 'Woh Kaun Thi',
    duration: 258,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9f/9d/b0/9f9db035-656e-b0c5-d3d1-b933e0fef037/192562250242.jpg/600x600bb.jpg',
    audio: 'music/lag-ja-gale-se-phir.mp3',
  },
  {
    title: 'Gulabi Ankhen',
    artist: 'Mohd. Rafi',
    album: 'The Train',
    duration: 197,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b3/96/b2/b396b24a-b75e-6279-9b5e-9e49a8caefe8/13UMGIM47082.rgb.jpg/600x600bb.jpg',
    audio: 'music/gulabi-ankhen.mp3',
  },
  {
    title: 'Pal Pal Dil Ke Paas',
    artist: 'Kishore Kumar',
    album: 'Blackmail',
    duration: 328,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b1/d5/79/b1d57970-e654-cca7-59b5-a8d018ba5bc0/12UMGIM15594.rgb.jpg/600x600bb.jpg',
    audio: 'music/pal-pal-dil-ke-paas.mp3',
  },
  {
    title: 'Chura Liya Hai Tumne Jo Dil Ko',
    artist: 'Asha Bhosle & Mohd. Rafi',
    album: 'Yaadon Ki Baaraat',
    duration: 288,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/8a/c8/be/8ac8be22-33bf-6dbe-a8ab-ccacfe43f45b/191773203979.jpg/600x600bb.jpg',
    audio: 'music/chura-liya-hai-tumne-jo-dil-ko.mp3',
  },
  {
    title: 'Rimjhim Gire Sawan',
    artist: 'Kishore Kumar & Lata Mangeshkar',
    album: 'Manzil',
    duration: 216,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/45/9d/7c/459d7c5f-0fd7-f2f0-383e-037f263de760/191773225506.jpg/600x600bb.jpg',
    audio: 'music/rimjhim-gire-sawan.mp3',
  },
  {
    title: 'Ek Ladki Bheegi Bhagi Si',
    artist: 'Kishore Kumar',
    album: 'Chalti Ka Naam Gaadi',
    duration: 237,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/53/34/0b/53340b89-5bf2-580f-e5ac-0fd6e768dcdc/191773222901.jpg/600x600bb.jpg',
    audio: 'music/ek-ladki-bheegi-bhagi-si.mp3',
  },
  {
    title: 'Mere Sapnon Ki Rani',
    artist: 'Kishore Kumar',
    album: 'Aradhana',
    duration: 301,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/14/b6/6914b6a2-6b5e-7efa-9a77-088273def2a6/191773202507.jpg/600x600bb.jpg',
    audio: 'music/mere-sapnon-ki-rani.mp3',
  },
  {
    title: 'Roop Tera Mastana',
    artist: 'Kishore Kumar',
    album: 'Aradhana',
    duration: 225,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/14/b6/6914b6a2-6b5e-7efa-9a77-088273def2a6/191773202507.jpg/600x600bb.jpg',
    audio: 'music/roop-tera-mastana.mp3',
  },
  {
    title: 'Ajeeb Dastan Hai Yeh',
    artist: 'Lata Mangeshkar',
    album: 'Dil Apna Aur Preet Parai',
    duration: 269,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/96/b1/1d/96b11d37-b9d6-30c4-1feb-338939e05ca5/199066012154.jpg/600x600bb.jpg',
    audio: 'music/ajeeb-dastan-hai-yeh.mp3',
  },
  {
    title: 'Tere Bina Zindagi Se',
    artist: 'Lata Mangeshkar & Kishore Kumar',
    album: 'Aandhi',
    duration: 354,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/38/d6/e838d6b2-73ea-c36e-4b17-ad21de48c1c6/191773199487.jpg/600x600bb.jpg',
    audio: 'music/tere-bina-zindagi-se.mp3',
  },
  {
    title: 'Dum Maro Dum',
    artist: 'Asha Bhosle',
    album: 'Hare Rama Hare Krishna',
    duration: 150,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a1/7a/dd/a17add91-d2f0-f8e4-7f32-cb3501c97aa3/192562250235.jpg/600x600bb.jpg',
    audio: 'music/dum-maro-dum.mp3',
  },
  {
    title: 'Kahin Door Jab Din Dhal Jaye',
    artist: 'Mukesh',
    album: 'Anand',
    duration: 337,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d8/18/f0/d818f09c-0055-551a-482f-b821399d3008/191773203825.jpg/600x600bb.jpg',
    audio: 'music/kahin-door-jab-din-dhal-jaye.mp3',
  },
  {
    title: 'Yeh Raaten Yeh Mausam',
    artist: 'Kishore Kumar & Asha Bhosle',
    album: 'Dilli Ka Thug',
    duration: 201,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/47/43/77/4743779d-4a62-1c3a-1230-269b195c4b2b/191773202255.jpg/600x600bb.jpg',
    audio: 'music/yeh-raaten-yeh-mausam.mp3',
  },
  {
    title: 'O Mere Dil Ke Chain',
    artist: 'Kishore Kumar',
    album: 'Mere Jeevan Saathi',
    duration: 296,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/31/25/2d/31252d5a-2465-3c9c-b14d-5f92c165799f/196925642002.jpg/600x600bb.jpg',
    audio: 'music/o-mere-dil-ke-chain.mp3',
  },
  {
    title: 'Kora Kagaz Tha Yeh Man Mera',
    artist: 'Lata Mangeshkar & Kishore Kumar',
    album: 'Aradhana',
    duration: 339,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/14/b6/6914b6a2-6b5e-7efa-9a77-088273def2a6/191773202507.jpg/600x600bb.jpg',
    audio: 'music/kora-kagaz-tha-yeh-man-mera.mp3',
  },
  {
    title: 'Bheegi Bheegi Raaton Mein',
    artist: 'Lata Mangeshkar & Kishore Kumar',
    album: 'Ajanabee',
    duration: 233,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/ae/67/a2ae6722-4fde-c1c6-ebb9-5db5f0c529f0/191773222642.jpg/600x600bb.jpg',
    audio: 'music/bheegi-bheegi-raaton-mein.mp3',
  },
  {
    title: 'Tum Aa Gaye Ho Noor Aa Gaya',
    artist: 'Lata Mangeshkar & Kishore Kumar',
    album: 'Aandhi',
    duration: 252,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/38/d6/e838d6b2-73ea-c36e-4b17-ad21de48c1c6/191773199487.jpg/600x600bb.jpg',
    audio: 'music/tum-aa-gaye-ho-noor-aa-gaya.mp3',
  },
];

let current = 0;
let playing = false;
let elapsed = 0;
let visualTimer;
let statusCount = 36;
let clockTimer;
const audio = new Audio();
audio.preload = 'metadata';

// Play a random 60-second section from each full-length song.
const CLIP_LENGTH = 60;
let clipStart = 0;
let clipEnd = 60;

const statusText = 'online';

document.querySelector('#app').innerHTML = `
  <main class="hero" aria-label="Paan Wala nostalgia microsite">
    <div class="hero-grain" aria-hidden="true"></div>
    <header class="topbar">
      <span class="clock" id="clock">8:17 pm</span>
      <span class="online" aria-live="polite"><b></b><strong id="statusCount">36</strong> <span id="statusText">online</span></span>
      <nav aria-label="Music links"><a href="#player">Spotify ↗</a><a href="#player">YouTube Music ↗</a></nav>
    </header>
    <section class="hero-copy">
      <p class="kicker">gali no. 7 · har roz, shaam ke baad</p>
      <h1><span>पान</span><em>वाला</em></h1>
    </section>
    <div class="side-note">fresh leaf<br><span>since 1987</span></div>
    <section class="player" id="player" aria-label="Paan Wala playlist">
      <div class="album" id="albumDisc"><img id="albumArt" src="" alt="" /></div>
      <div class="track-info">
        <strong id="title"></strong>
        <small id="artist"></small>
        <div class="progress-row">
          <div class="track-progress" id="trackProgress" role="slider" aria-label="Track progress" aria-valuemin="0" aria-valuenow="0" tabindex="0"><span id="progress"></span></div>
          <small class="track-time" id="time">0:00 / 0:00</small>
        </div>
      </div>
      <div class="controls">
        <button id="prev" type="button" aria-label="Previous track">◀◀</button>
        <button class="play" id="play" type="button" aria-label="Play track">▶</button>
        <button id="next" type="button" aria-label="Next track">▶▶</button>
      </div>
    </section>
  </main>`;

const $ = (id) => document.getElementById(id);

function renderStallStatus() {
  $('statusCount').textContent = statusCount;
  $('statusText').textContent = statusText;
}

function tickStallCounter() {
  const step = Math.random() > 0.45 ? 1 : 2;
  const direction = statusCount <= 30 ? 1 : statusCount >= 40 ? -1 : Math.random() > 0.48 ? 1 : -1;
  statusCount += step * direction;
  renderStallStatus();
}

function renderClock() {
  const time = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date());

  $('clock').textContent = time.toLowerCase();
}

function formatTime(seconds) {
  const whole = Math.max(0, Math.floor(seconds || 0));
  const minutes = Math.floor(whole / 60);
  const secs = String(whole % 60).padStart(2, '0');
  return `${minutes}:${secs}`;
}

function activeDuration() {
  return Math.min(CLIP_LENGTH, Math.max(0, clipEnd - clipStart));
}

function syncElapsed() {
  elapsed = Number.isFinite(audio.currentTime)
    ? Math.max(0, audio.currentTime - clipStart)
    : elapsed;
}

function chooseRandomClip() {
  const duration = audio.duration;
  if (!Number.isFinite(duration) || duration <= 0) {
    clipStart = 0;
    clipEnd = CLIP_LENGTH;
    return;
  }
  if (duration <= CLIP_LENGTH) {
    clipStart = 0;
    clipEnd = duration;
    return;
  }
  clipStart = Math.random() * (duration - CLIP_LENGTH);
  clipEnd = clipStart + CLIP_LENGTH;
  elapsed = 0;
}

function render() {
  const track = tracks[current];
  const duration = activeDuration();
  const percent = duration > 0 ? (elapsed / duration) * 100 : 0;

  $('title').textContent = track.title;
  $('artist').textContent = `${track.artist} · ${track.album}`;
  if ($('albumArt').dataset.trackIndex !== String(current)) {
    $('albumArt').onerror = () => {
      $('albumArt').onerror = null;
      $('albumArt').src = fallbackArt[current % fallbackArt.length];
    };
    $('albumArt').src = track.art;
    $('albumArt').alt = `${track.title} album artwork`;
    $('albumArt').dataset.trackIndex = String(current);
  }
  $('albumDisc').classList.toggle('is-spinning', playing);
  $('play').textContent = playing ? 'Ⅱ' : '▶';
  $('play').setAttribute('aria-label', playing ? 'Pause track' : 'Play track');
  $('progress').style.width = `${Math.min(100, percent)}%`;
  $('time').textContent = `${formatTime(elapsed)} / ${formatTime(duration)}`;
  $('trackProgress').setAttribute('aria-valuemax', String(Math.floor(duration)));
  $('trackProgress').setAttribute('aria-valuenow', String(Math.floor(elapsed)));
}

function stopVisualTimer() {
  clearInterval(visualTimer);
  visualTimer = undefined;
}

function startVisualTimer() {
  stopVisualTimer();
  visualTimer = setInterval(() => {
    syncElapsed();
    render();
  }, 250);
}

function loadTrack() {
  const track = tracks[current];
  audio.pause();
  audio.src = track.audio;
  audio.currentTime = 0;
  audio.load();
  clipStart = 0;
  clipEnd = CLIP_LENGTH;
  elapsed = 0;
}

async function playCurrent() {
  if (audio.readyState < 1 || !Number.isFinite(audio.duration)) {
    try {
      await new Promise((resolve, reject) => {
        const onLoaded = () => { cleanup(); resolve(); };
        const onError = () => { cleanup(); reject(new Error('Audio failed to load')); };
        const cleanup = () => {
          audio.removeEventListener('loadedmetadata', onLoaded);
          audio.removeEventListener('error', onError);
        };
        audio.addEventListener('loadedmetadata', onLoaded, { once: true });
        audio.addEventListener('error', onError, { once: true });
      });
    } catch (error) {
      console.error('Could not load audio:', tracks[current].audio, error);
      playing = false;
      stopVisualTimer();
      render();
      return;
    }
  }

  chooseRandomClip();
  try { audio.currentTime = clipStart; } catch {}
  elapsed = 0;
  playing = true;
  startVisualTimer();

  try {
    await audio.play();
  } catch (error) {
    console.error('Playback failed:', error);
    playing = false;
    stopVisualTimer();
  }

  syncElapsed();
  render();
}

function pauseCurrent() {
  playing = false;
  audio.pause();
  stopVisualTimer();
  syncElapsed();
  render();
}

function toggle() {
  if (playing) pauseCurrent();
  else playCurrent();
}

function step(direction, shouldKeepPlaying = playing) {
  current = (current + direction + tracks.length) % tracks.length;
  loadTrack();
  if (shouldKeepPlaying) playCurrent();
  else render();
}

function randomNext() {
  if (tracks.length <= 1) return;
  let next;
  do {
    next = Math.floor(Math.random() * tracks.length);
  } while (next === current);
  current = next;
  loadTrack();
  playCurrent();
}

function seekTo(percent) {
  const duration = activeDuration();
  const safePercent = Math.max(0, Math.min(1, percent));
  const nextElapsed = duration * safePercent;
  audio.currentTime = clipStart + nextElapsed;
  elapsed = nextElapsed;
  render();
}

function seekFromPointer(event) {
  const rect = $('trackProgress').getBoundingClientRect();
  seekTo((event.clientX - rect.left) / rect.width);
}

$('play').addEventListener('click', toggle);
$('prev').addEventListener('click', () => step(-1));
$('next').addEventListener('click', randomNext);
$('trackProgress').addEventListener('click', seekFromPointer);
$('trackProgress').addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    audio.currentTime = Math.max(0, audio.currentTime - 5);
    syncElapsed();
    render();
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    audio.currentTime = Math.min(activeDuration(), audio.currentTime + 5);
    syncElapsed();
    render();
  }
});
audio.addEventListener('loadedmetadata', () => {
  if (!playing) chooseRandomClip();
  render();
});
audio.addEventListener('timeupdate', () => {
  syncElapsed();
  if (playing && Number.isFinite(audio.currentTime) && audio.currentTime >= clipEnd - 0.05) {
    randomNext();
    return;
  }
  render();
});
audio.addEventListener('ended', () => {
  if (playing) randomNext();
});
audio.addEventListener('error', () => {
  console.error('Audio file could not be loaded:', tracks[current].audio);
  playing = false;
  stopVisualTimer();
  render();
});
audio.addEventListener('pause', () => {
  if (playing && audio.ended) return;
  if (!audio.ended) {
    playing = false;
    stopVisualTimer();
    render();
  }
});

loadTrack();
render();
renderStallStatus();
renderClock();
setInterval(tickStallCounter, 1000);
clockTimer = setInterval(renderClock, 1000);
