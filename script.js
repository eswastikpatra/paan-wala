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
let shuffleBag = [];
let shufflePosition = 0;
let transitionTimer;
let transitionId = 0;

// Apple Music preview URLs are short previews. This version makes them feel
// like a continuous tapri radio station: shuffled, no repeats until the bag
// is exhausted, with a short random 24–30 second listening window and a
// gentle crossfade between previews.
const MIN_SNIPPET = 24;
const MAX_SNIPPET = 30;
const CROSSFADE_SECONDS = 1.25;

const audioA = new Audio();
const audioB = new Audio();
const players = [audioA, audioB];
players.forEach((audio) => {
  audio.preload = 'auto';
  audio.volume = 0;
});

let activeSlot = 0;
let snippetLength = MAX_SNIPPET;
let snippetEnd = MAX_SNIPPET;

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
          <small class="track-time" id="time">0:00 / 0:30</small>
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

function activeAudio() {
  return players[activeSlot];
}

function inactiveAudio() {
  return players[activeSlot === 0 ? 1 : 0];
}

function activeDuration() {
  const audio = activeAudio();
  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    return Math.min(snippetEnd, audio.duration);
  }
  return snippetLength;
}

function syncElapsed() {
  const audio = activeAudio();
  elapsed = Number.isFinite(audio.currentTime) ? audio.currentTime : elapsed;
}

function resetShuffleBag() {
  shuffleBag = Array.from({ length: tracks.length }, (_, i) => i);
  for (let i = shuffleBag.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleBag[i], shuffleBag[j]] = [shuffleBag[j], shuffleBag[i]];
  }
  shufflePosition = 0;

  // Avoid starting with the same track as the old player state.
  if (shuffleBag.length > 1 && shuffleBag[0] === current) {
    [shuffleBag[0], shuffleBag[1]] = [shuffleBag[1], shuffleBag[0]];
  }
}

function nextShuffledIndex() {
  if (!shuffleBag.length || shufflePosition >= shuffleBag.length) {
    resetShuffleBag();
  }
  return shuffleBag[shufflePosition++];
}

function randomSnippetLength() {
  return MIN_SNIPPET + Math.random() * (MAX_SNIPPET - MIN_SNIPPET);
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
  $('progress').style.width = `${Math.min(100, Math.max(0, percent))}%`;
  $('time').textContent = `${formatTime(elapsed)} / ${formatTime(duration)}`;
  $('trackProgress').setAttribute('aria-valuemax', String(Math.floor(duration)));
  $('trackProgress').setAttribute('aria-valuenow', String(Math.floor(elapsed)));
}

function stopVisualTimer() {
  clearInterval(visualTimer);
  visualTimer = undefined;
}

function clearTransition() {
  clearTimeout(transitionTimer);
  transitionTimer = undefined;
  transitionId += 1;
}

function startVisualTimer() {
  stopVisualTimer();
  visualTimer = setInterval(() => {
    const audio = activeAudio();
    syncElapsed();

    if (playing && Number.isFinite(audio.currentTime) && audio.currentTime >= snippetEnd - 0.08) {
      goToNext(true);
      return;
    }

    if (playing && Number.isFinite(audio.duration) && audio.duration - audio.currentTime <= CROSSFADE_SECONDS + 0.08) {
      startNextTransition();
      return;
    }

    render();
  }, 120);
}

function prepareAudio(audio, track) {
  audio.pause();
  audio.currentTime = 0;
  audio.src = track.preview;
  audio.volume = 0;
  audio.load();
}

function loadTrack(index, shouldRender = true) {
  current = index;
  clearTransition();
  const audio = activeAudio();
  audio.pause();
  audio.currentTime = 0;
  audio.src = tracks[current].preview;
  audio.volume = playing ? 1 : 0;
  audio.load();

  snippetLength = randomSnippetLength();
  snippetEnd = snippetLength;
  elapsed = 0;

  if (shouldRender) render();
}

function ensureNextPrepared() {
  const nextIndex = shuffleBag[shufflePosition] ?? null;
  if (nextIndex === null) return null;
  const nextAudio = inactiveAudio();
  prepareAudio(nextAudio, tracks[nextIndex]);
  return nextIndex;
}

async function fadeToNext(nextIndex, token) {
  if (token !== transitionId || !playing) return;

  const from = activeAudio();
  const to = inactiveAudio();
  const nextTrack = tracks[nextIndex];

  try {
    if (to.src !== nextTrack.preview) {
      prepareAudio(to, nextTrack);
    }

    if (to.readyState < 2) {
      await new Promise((resolve, reject) => {
        const onReady = () => { cleanup(); resolve(); };
        const onError = () => { cleanup(); reject(new Error('preview failed')); };
        const cleanup = () => {
          to.removeEventListener('canplay', onReady);
          to.removeEventListener('error', onError);
        };
        to.addEventListener('canplay', onReady, { once: true });
        to.addEventListener('error', onError, { once: true });
      });
    }

    if (token !== transitionId || !playing) return;

    const nextDuration = Number.isFinite(to.duration) ? to.duration : 30;
    snippetLength = Math.min(randomSnippetLength(), nextDuration);
    snippetEnd = snippetLength;
    to.currentTime = 0;
    to.volume = 0;
    await to.play();

    const start = performance.now();
    const fadeMs = CROSSFADE_SECONDS * 1000;

    const fade = (now) => {
      if (token !== transitionId || !playing) return;
      const ratio = Math.min(1, (now - start) / fadeMs);
      from.volume = Math.max(0, 1 - ratio);
      to.volume = Math.min(1, ratio);

      if (ratio < 1) {
        requestAnimationFrame(fade);
      } else {
        from.pause();
        from.currentTime = 0;
        activeSlot = activeSlot === 0 ? 1 : 0;
        current = nextIndex;
        elapsed = 0;
        render();
        startVisualTimer();
        ensureNextPrepared();
      }
    };

    requestAnimationFrame(fade);
  } catch (error) {
    console.warn('Preview transition failed:', error);
    if (token !== transitionId || !playing) return;
    to.pause();
    to.volume = 0;
    goToNext(true);
  }
}

function startNextTransition() {
  if (!playing || transitionTimer) return;

  const token = ++transitionId;
  const remaining = Math.max(0, snippetEnd - activeAudio().currentTime);
  const delay = Math.max(0, (remaining - CROSSFADE_SECONDS) * 1000);

  const nextIndex = shuffleBag[shufflePosition] ?? null;
  if (nextIndex === null) {
    goToNext(true);
    return;
  }

  ensureNextPrepared();

  transitionTimer = setTimeout(() => {
    transitionTimer = undefined;
    shufflePosition += 1;
    fadeToNext(nextIndex, token);
  }, delay);
}

async function playCurrent() {
  const audio = activeAudio();
  playing = true;
  audio.volume = 1;

  if (!Number.isFinite(audio.duration) || audio.readyState < 2) {
    try {
      await new Promise((resolve, reject) => {
        const onReady = () => { cleanup(); resolve(); };
        const onError = () => { cleanup(); reject(new Error('preview failed')); };
        const cleanup = () => {
          audio.removeEventListener('canplay', onReady);
          audio.removeEventListener('error', onError);
        };
        audio.addEventListener('canplay', onReady, { once: true });
        audio.addEventListener('error', onError, { once: true });
      });
    } catch {
      playing = false;
      stopVisualTimer();
      render();
      return;
    }
  }

  snippetLength = Math.min(randomSnippetLength(), Number.isFinite(audio.duration) ? audio.duration : MAX_SNIPPET);
  snippetEnd = snippetLength;
  audio.currentTime = 0;

  try {
    await audio.play();
    playing = true;
    startVisualTimer();
    ensureNextPrepared();
    startNextTransition();
  } catch (error) {
    console.warn('Playback requires a user gesture or failed:', error);
    playing = false;
    stopVisualTimer();
  }
  render();
}

function pauseCurrent() {
  playing = false;
  clearTransition();
  players.forEach((audio) => {
    audio.pause();
    audio.volume = 0;
  });
  stopVisualTimer();
  syncElapsed();
  render();
}

function toggle() {
  if (playing) pauseCurrent();
  else playCurrent();
}

function goToNext(keepPlaying = playing) {
  clearTransition();
  const nextIndex = nextShuffledIndex();
  const old = activeAudio();
  const next = inactiveAudio();
  old.pause();
  old.volume = 0;
  next.pause();
  next.volume = 0;
  activeSlot = activeSlot === 0 ? 1 : 0;
  current = nextIndex;
  snippetLength = randomSnippetLength();
  snippetEnd = snippetLength;
  elapsed = 0;

  const audio = activeAudio();
  prepareAudio(audio, tracks[current]);

  if (keepPlaying) {
    playCurrent();
  } else {
    render();
  }
}

function goToPrevious() {
  clearTransition();
  const previous = (current - 1 + tracks.length) % tracks.length;
  playing = false;
  players.forEach((audio) => {
    audio.pause();
    audio.volume = 0;
  });
  activeSlot = 0;
  loadTrack(previous, false);
  render();
}

function seekTo(percent) {
  const duration = activeDuration();
  const nextTime = duration * Math.max(0, Math.min(1, percent));
  const audio = activeAudio();
  if (Number.isFinite(audio.duration)) {
    audio.currentTime = Math.min(nextTime, audio.duration);
  }
  elapsed = nextTime;
  render();
}

function seekFromPointer(event) {
  const rect = $('trackProgress').getBoundingClientRect();
  if (!rect.width) return;
  seekTo((event.clientX - rect.left) / rect.width);
}

$('play').addEventListener('click', toggle);
$('prev').addEventListener('click', goToPrevious);
$('next').addEventListener('click', () => goToNext(playing));
$('trackProgress').addEventListener('click', seekFromPointer);
$('trackProgress').addEventListener('keydown', (event) => {
  const audio = activeAudio();
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    audio.currentTime = Math.max(0, audio.currentTime - 5);
    syncElapsed();
    render();
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    audio.currentTime = Math.min(snippetEnd, audio.currentTime + 5);
    syncElapsed();
    render();
  }
});

players.forEach((audio) => {
  audio.addEventListener('timeupdate', () => {
    if (audio !== activeAudio()) return;
    syncElapsed();
    if (playing && audio.currentTime >= snippetEnd - 0.08) {
      goToNext(true);
      return;
    }
    render();
  });

  audio.addEventListener('ended', () => {
    if (audio === activeAudio() && playing) goToNext(true);
  });

  audio.addEventListener('error', () => {
    if (audio === activeAudio()) {
      console.warn('This Apple Music preview is unavailable:', tracks[current]?.title);
      if (playing) goToNext(true);
    }
  });
});

resetShuffleBag();
current = shuffleBag[shufflePosition++];
loadTrack(current, false);
render();
renderStallStatus();
renderClock();
setInterval(tickStallCounter, 1000);
clockTimer = setInterval(renderClock, 1000);
