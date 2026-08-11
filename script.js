const fallbackArt = ['album-art.svg', 'album-art-2.svg', 'album-art-3.svg'];

const tracks = [
  {
    title: 'Pukarta Chala Hoon Main',
    artist: 'Mohd. Rafi',
    album: 'Mere Sanam',
    duration: 232,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/43/47/9f/43479f34-f194-be60-a84b-69b2b218db7a/191773210236.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d4/b1/3e/d4b13e13-58d6-181a-8c9e-4cc6cca7839e/mzaf_10665734768446316.plus.aac.p.m4a',
  },
  {
    title: 'Yeh Sham Mastani',
    artist: 'Kishore Kumar',
    album: 'Kati Patang',
    duration: 277,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/98/7e/19/987e1981-1570-2997-fdd7-d68e9d3d9547/191773211578.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5d/74/8f/5d748fb5-93fe-97b3-743f-00fbfdde54c0/mzaf_4002630931340136418.plus.aac.p.m4a',
  },
  {
    title: 'Aap Ki Ankhon Mein Kuch',
    artist: 'Kishore Kumar & Lata Mangeshkar',
    album: 'Ghar',
    duration: 249,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/df/0e/52/df0e52a6-cc06-ff73-3d79-a7cd90db170e/191773224431.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/01/76/2a/01762a10-e40a-73f7-018a-f78088b0b90b/mzaf_10231671545112036858.plus.aac.p.m4a',
  },
  {
    title: 'Lag Ja Gale Se Phir',
    artist: 'Lata Mangeshkar',
    album: 'Woh Kaun Thi',
    duration: 258,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9f/9d/b0/9f9db035-656e-b0c5-d3d1-b933e0fef037/192562250242.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/da/23/a4/da23a41e-2b16-3256-4d84-95f91bc4c6dd/mzaf_866682565809534623.plus.aac.p.m4a',
  },
  {
    title: 'Gulabi Ankhen',
    artist: 'Mohd. Rafi',
    album: 'The Train',
    duration: 197,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b3/96/b2/b396b24a-b75e-6279-9b5e-9e49a8caefe8/13UMGIM47082.rgb.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fb/cd/b3/fbcdb3f6-31b7-ec6c-ce91-924ceaf2b291/mzaf_813256481655197922.plus.aac.p.m4a',
  },
  {
    title: 'Pal Pal Dil Ke Paas',
    artist: 'Kishore Kumar',
    album: 'Blackmail',
    duration: 328,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b1/d5/79/b1d57970-e654-cca7-59b5-a8d018ba5bc0/12UMGIM15594.rgb.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/29/89/d7/2989d7f2-a569-0963-776a-4c3dc24b6203/mzaf_12630850892844619657.plus.aac.p.m4a',
  },
  {
    title: 'Chura Liya Hai Tumne Jo Dil Ko',
    artist: 'Asha Bhosle & Mohd. Rafi',
    album: 'Yaadon Ki Baaraat',
    duration: 288,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/8a/c8/be/8ac8be22-33bf-6dbe-a8ab-ccacfe43f45b/191773203979.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f7/cd/c1/f7cdc13c-1c2c-8f2c-01aa-615c7475e79b/mzaf_3099726714847927153.plus.aac.p.m4a',
  },
  {
    title: 'Rimjhim Gire Sawan',
    artist: 'Kishore Kumar & Lata Mangeshkar',
    album: 'Manzil',
    duration: 216,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/45/9d/7c/459d7c5f-0fd7-f2f0-383e-037f263de760/191773225506.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1b/28/8a/1b288ae1-af88-e95c-3b2a-db2ae9790f27/mzaf_13442548986443197082.plus.aac.p.m4a',
  },
  {
    title: 'Ek Ladki Bheegi Bhagi Si',
    artist: 'Kishore Kumar',
    album: 'Chalti Ka Naam Gaadi',
    duration: 237,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/53/34/0b/53340b89-5bf2-580f-e5ac-0fd6e768dcdc/191773222901.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ae/05/93/ae059390-a1cb-1d0f-7471-2cb7472b0e32/mzaf_5458255105708193032.plus.aac.p.m4a',
  },
  {
    title: 'Mere Sapnon Ki Rani',
    artist: 'Kishore Kumar',
    album: 'Aradhana',
    duration: 301,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/14/b6/6914b6a2-6b5e-7efa-9a77-088273def2a6/191773202507.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/2b/e6/55/2be65573-5b87-4526-65aa-6ccef28a940c/mzaf_13326629798671030495.plus.aac.p.m4a',
  },
  {
    title: 'Roop Tera Mastana',
    artist: 'Kishore Kumar',
    album: 'Aradhana',
    duration: 225,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/14/b6/6914b6a2-6b5e-7efa-9a77-088273def2a6/191773202507.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/12/fa/e2/12fae244-fe8b-2dc9-0470-50c22bd97cd9/mzaf_8178894081213564364.plus.aac.p.m4a',
  },
  {
    title: 'Ajeeb Dastan Hai Yeh',
    artist: 'Lata Mangeshkar',
    album: 'Dil Apna Aur Preet Parai',
    duration: 269,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/96/b1/1d/96b11d37-b9d6-30c4-1feb-338939e05ca5/199066012154.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d2/d9/b1/d2d9b10c-2a0e-ae0b-4115-58dd5db32cd9/mzaf_9269196987423943639.plus.aac.p.m4a',
  },
  {
    title: 'Tere Bina Zindagi Se',
    artist: 'Lata Mangeshkar & Kishore Kumar',
    album: 'Aandhi',
    duration: 354,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/38/d6/e838d6b2-73ea-c36e-4b17-ad21de48c1c6/191773199487.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/22/b0/a1/22b0a12b-e5f6-a0db-237d-b348b2571187/mzaf_8187641348057442453.plus.aac.p.m4a',
  },
  {
    title: 'Dum Maro Dum',
    artist: 'Asha Bhosle',
    album: 'Hare Rama Hare Krishna',
    duration: 150,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a1/7a/dd/a17add91-d2f0-f8e4-7f32-cb3501c97aa3/192562250235.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6b/88/4f/6b884f0d-fdd6-7bd8-d3df-7a4d140a0a6c/mzaf_8629554585100339248.plus.aac.p.m4a',
  },
  {
    title: 'Kahin Door Jab Din Dhal Jaye',
    artist: 'Mukesh',
    album: 'Anand',
    duration: 337,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d8/18/f0/d818f09c-0055-551a-482f-b821399d3008/191773203825.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cc/19/2c/cc192c1c-e0e6-c4ff-1ce0-5156ae144347/mzaf_5753769143471486470.plus.aac.p.m4a',
  },
  {
    title: 'Yeh Raaten Yeh Mausam',
    artist: 'Kishore Kumar & Asha Bhosle',
    album: 'Dilli Ka Thug',
    duration: 201,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/47/43/77/4743779d-4a62-1c3a-1230-269b195c4b2b/191773202255.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/6d/5e/5b/6d5e5b3a-a885-15e4-b3ec-613d26d466a5/mzaf_15620941899233311754.plus.aac.p.m4a',
  },
  {
    title: 'O Mere Dil Ke Chain',
    artist: 'Kishore Kumar',
    album: 'Mere Jeevan Saathi',
    duration: 296,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/31/25/2d/31252d5a-2465-3c9c-b14d-5f92c165799f/196925642002.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/47/49/31/474931d9-3500-e3ce-131d-199b15c2b3a8/mzaf_17582453688276203256.plus.aac.p.m4a',
  },
  {
    title: 'Kora Kagaz Tha Yeh Man Mera',
    artist: 'Lata Mangeshkar & Kishore Kumar',
    album: 'Aradhana',
    duration: 339,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/14/b6/6914b6a2-6b5e-7efa-9a77-088273def2a6/191773202507.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a8/d5/55/a8d55519-e2c1-ff14-4c25-6a5d63e04e2d/mzaf_17285868936363406252.plus.aac.p.m4a',
  },
  {
    title: 'Bheegi Bheegi Raaton Mein',
    artist: 'Lata Mangeshkar & Kishore Kumar',
    album: 'Ajanabee',
    duration: 233,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/ae/67/a2ae6722-4fde-c1c6-ebb9-5db5f0c529f0/191773222642.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/2a/f6/ef/2af6ef90-52a7-4aa7-f148-a72e712fdd96/mzaf_13292521285059357903.plus.aac.p.m4a',
  },
  {
    title: 'Tum Aa Gaye Ho Noor Aa Gaya',
    artist: 'Lata Mangeshkar & Kishore Kumar',
    album: 'Aandhi',
    duration: 252,
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/38/d6/e838d6b2-73ea-c36e-4b17-ad21de48c1c6/191773199487.jpg/600x600bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c9/84/27/c9842719-7dbf-ff28-0eaf-04b9818128e9/mzaf_885360980373775027.plus.aac.p.m4a',
  },
];

let current = 0;
let playing = false;
let elapsed = 0;
let visualTimer;
let statusCount = 36;
let clockTimer;
let lastTickAt = 0;
const audio = new Audio();

const statusText = 'online';
const radioPlayDuration = 90;

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
  return radioPlayDuration;
}

function syncElapsed() {
  elapsed = Math.min(activeDuration(), elapsed);
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
  lastTickAt = Date.now();
  visualTimer = setInterval(() => {
    const now = Date.now();
    elapsed = Math.min(activeDuration(), elapsed + (now - lastTickAt) / 1000);
    lastTickAt = now;
    if (elapsed >= activeDuration()) {
      step(1, true, true);
      return;
    }
    render();
  }, 250);
}

function loadTrack() {
  const track = tracks[current];
  audio.pause();
  audio.src = track.preview;
  audio.currentTime = 0;
  audio.load();
  elapsed = 0;
}

async function playCurrent() {
  playing = true;
  startVisualTimer();
  try {
    await audio.play();
  } catch {
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

function randomTrackIndex() {
  if (tracks.length < 2) return current;
  let next = current;
  while (next === current) {
    next = Math.floor(Math.random() * tracks.length);
  }
  return next;
}

function step(direction, shouldKeepPlaying = playing, shouldRandomize = false) {
  current = shouldRandomize ? randomTrackIndex() : (current + direction + tracks.length) % tracks.length;
  loadTrack();
  if (shouldKeepPlaying) playCurrent();
  else render();
}

function seekTo(percent) {
  const duration = activeDuration();
  const nextTime = duration * Math.max(0, Math.min(1, percent));
  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    audio.currentTime = nextTime % audio.duration;
  }
  elapsed = nextTime;
  render();
}

function seekFromPointer(event) {
  const rect = $('trackProgress').getBoundingClientRect();
  seekTo((event.clientX - rect.left) / rect.width);
}

$('play').addEventListener('click', toggle);
$('prev').addEventListener('click', () => step(-1));
$('next').addEventListener('click', () => step(1));
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
  syncElapsed();
  render();
});
audio.addEventListener('timeupdate', () => {
  render();
});
audio.addEventListener('ended', () => {
  if (!playing) return;
  if (elapsed < activeDuration()) {
    audio.currentTime = 0;
    audio.play();
    return;
  }
  step(1, true, true);
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
