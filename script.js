const fallbackArt = ['album-art.svg', 'album-art-2.svg', 'album-art-3.svg'];

// YouTube video IDs. These are embedded YouTube videos; no MP3 files are needed.
const tracks = [
  { title:'Pukarta Chala Hoon Main', artist:'Mohd. Rafi', album:'Mere Sanam', duration:232, youtubeId:'gLKBwutnPwA', art:'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/43/47/9f/43479f34-f194-be60-a84b-69b2b218db7a/191773210236.jpg/600x600bb.jpg' },
  { title:'Yeh Sham Mastani', artist:'Kishore Kumar', album:'Kati Patang', duration:277, youtubeId:'lbfWsIpXsCA', art:'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/98/7e/19/987e1981-1570-2997-fdd7-d68e9d3d9547/191773211578.jpg/600x600bb.jpg' },
  { title:'Aap Ki Ankhon Mein Kuch', artist:'Kishore Kumar & Lata Mangeshkar', album:'Ghar', duration:249, youtubeId:'m67Rt6hC6Z0', art:'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/df/0e/52/df0e52a6-cc06-ff73-3d79-a7cd90db170e/191773224431.jpg/600x600bb.jpg' },
  { title:'Lag Ja Gale Se Phir', artist:'Lata Mangeshkar', album:'Woh Kaun Thi', duration:258, youtubeId:'fj4MnkljFXc', art:'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9f/9d/b0/9f9db035-656e-b0c5-d3d1-b933e0fef037/192562250242.jpg/600x600bb.jpg' },
  { title:'Gulabi Ankhen', artist:'Mohd. Rafi', album:'The Train', duration:197, youtubeId:'6Z3DO-OFIjQ', art:'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b3/96/b2/b396b24a-b75e-6279-9b5e-9e49a8caefe8/13UMGIM47082.rgb.jpg/600x600bb.jpg' },
  { title:'Pal Pal Dil Ke Paas', artist:'Kishore Kumar', album:'Blackmail', duration:328, youtubeId:'iyW4uJY2Jck', art:'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b1/d5/79/b1d57970-e654-cca7-59b5-a8d018ba5bc0/12UMGIM15594.rgb.jpg/600x600bb.jpg' },
  { title:'Chura Liya Hai Tumne Jo Dil Ko', artist:'Asha Bhosle & Mohd. Rafi', album:'Yaadon Ki Baaraat', duration:288, youtubeId:'WF0HJv-9S_4', art:'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/8a/c8/be/8ac8be22-33bf-6dbe-a8ab-ccacfe43f45b/191773203979.jpg/600x600bb.jpg' },
  { title:'Rimjhim Gire Sawan', artist:'Kishore Kumar & Lata Mangeshkar', album:'Manzil', duration:216, youtubeId:'JQoSSJDZxOo', art:'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/45/9d/7c/459d7c5f-0fd7-f2f0-383e-037f263de760/191773225506.jpg/600x600bb.jpg' },
  { title:'Ek Ladki Bheegi Bhagi Si', artist:'Kishore Kumar', album:'Chalti Ka Naam Gaadi', duration:237, youtubeId:'cu-UwiKB4KM', art:'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/53/34/0b/53340b89-5bf2-580f-e5ac-0fd6e768dcdc/191773222901.jpg/600x600bb.jpg' },
  { title:'Mere Sapnon Ki Rani', artist:'Kishore Kumar', album:'Aradhana', duration:301, youtubeId:'Nw7lcCNSYy8', art:'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/14/b6/6914b6a2-6b5e-7efa-9a77-088273def2a6/191773202507.jpg/600x600bb.jpg' },
  { title:'Roop Tera Mastana', artist:'Kishore Kumar', album:'Aradhana', duration:225, youtubeId:'dyEdcOhxJNQ', art:'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/14/b6/6914b6a2-6b5e-7efa-9a77-088273def2a6/191773202507.jpg/600x600bb.jpg' },
  { title:'Ajeeb Dastan Hai Yeh', artist:'Lata Mangeshkar', album:'Dil Apna Aur Preet Parai', duration:269, youtubeId:'AU-hut9lGQ4', art:'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/96/b1/1d/96b11d37-b9d6-30c4-1feb-338939e05ca5/199066012154.jpg/600x600bb.jpg' },
  { title:'Tere Bina Zindagi Se', artist:'Lata Mangeshkar & Kishore Kumar', album:'Aandhi', duration:354, youtubeId:'EiUDYzqdz2U', art:'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/38/d6/e838d6b2-73ea-c36e-4b17-ad21de48c1c6/191773199487.jpg/600x600bb.jpg' },
  { title:'Dum Maro Dum', artist:'Asha Bhosle', album:'Hare Rama Hare Krishna', duration:150, youtubeId:'kOrRYDJ4AuY', art:'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a1/7a/dd/a17add91-d2f0-f8e4-7f32-cb3501c97aa3/192562250235.jpg/600x600bb.jpg' },
  { title:'Kahin Door Jab Din Dhal Jaye', artist:'Mukesh', album:'Anand', duration:337, youtubeId:'BMSC--pmpb0', art:'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d8/18/f0/d818f09c-0055-551a-482f-b821399d3008/191773203825.jpg/600x600bb.jpg' },
  { title:'Yeh Raaten Yeh Mausam', artist:'Kishore Kumar & Asha Bhosle', album:'Dilli Ka Thug', duration:201, youtubeId:'jTZOZSVJ3gQ', art:'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/47/43/77/4743779d-4a62-1c3a-1230-269b195c4b2b/191773202255.jpg/600x600bb.jpg' },
  { title:'O Mere Dil Ke Chain', artist:'Kishore Kumar', album:'Mere Jeevan Saathi', duration:296, youtubeId:'-Px0efU00uQ', art:'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/31/25/2d/31252d5a-2465-3c9c-b14d-5f92c165799f/196925642002.jpg/600x600bb.jpg' },
  { title:'Kora Kagaz Tha Yeh Man Mera', artist:'Lata Mangeshkar & Kishore Kumar', album:'Aradhana', duration:339, youtubeId:'51VP8RJgfEA', art:'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/14/b6/6914b6a2-6b5e-7efa-9a77-088273def2a6/191773202507.jpg/600x600bb.jpg' },
  { title:'Bheegi Bheegi Raaton Mein', artist:'Lata Mangeshkar & Kishore Kumar', album:'Ajanabee', duration:233, youtubeId:'hd9HRLgNJzc', art:'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/ae/67/a2ae6722-4fde-c1c6-ebb9-5db5f0c529f0/191773222642.jpg/600x600bb.jpg' },
  { title:'Tum Aa Gaye Ho Noor Aa Gaya', artist:'Lata Mangeshkar & Kishore Kumar', album:'Aandhi', duration:252, youtubeId:'lw6S8-d4JJU', art:'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/38/d6/e838d6b2-73ea-c36e-4b17-ad21de48c1c6/191773199487.jpg/600x600bb.jpg' },
];

const CLIP_LENGTH = 60;
let current = 0;
let playing = false;
let elapsed = 0;
let clipStart = 0;
let clipEnd = 60;
let visualTimer;
let statusCount = 36;
let clockTimer;
let ytPlayer = null;
let ytReady = false;
let userWantsPlay = false;

const statusText = 'online';

// Load the official YouTube IFrame Player API.
window.onYouTubeIframeAPIReady = () => {
  ytPlayer = new YT.Player('youtube-player', {
    width: '200',
    height: '200',
    videoId: tracks[current].youtubeId,
    playerVars: {
      playsinline: 1,
      rel: 0,
      origin: window.location.origin,
    },
    events: {
      onReady: () => {
        ytReady = true;
        render();
        if (userWantsPlay) playCurrent();
      },
      onStateChange: onYouTubeStateChange,
      onError: onYouTubeError,
      onAutoplayBlocked: () => {
        playing = false;
        stopVisualTimer();
        render();
      },
    },
  });
};

const apiTag = document.createElement('script');
apiTag.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(apiTag);

document.querySelector('#app').innerHTML = `
  <main class="hero" aria-label="Paan Wala nostalgia microsite">
    <div class="hero-grain" aria-hidden="true"></div>
    <header class="topbar">
      <span class="clock" id="clock">8:17 pm</span>
      <span class="online" aria-live="polite"><b></b><strong id="statusCount">36</strong> <span id="statusText">online</span></span>
      <nav aria-label="Music links">
        <a href="#player">YouTube ↗</a>
        <a href="#player">YouTube Music ↗</a>
      </nav>
    </header>

    <section class="hero-copy">
      <p class="kicker">gali no. 7 · har roz, shaam ke baad</p>
      <h1><span>पान</span><em>वाला</em></h1>
    </section>

    <div class="side-note">fresh leaf<br><span>since 1987</span></div>

    <!-- Official YouTube player. It remains visible because YouTube's embed rules require an actual player viewport. -->
    <div class="youtube-player-wrap" aria-label="YouTube music player">
      <div id="youtube-player"></div>
    </div>

    <section class="player" id="player" aria-label="Paan Wala playlist">
      <div class="album" id="albumDisc"><img id="albumArt" src="" alt="" /></div>
      <div class="track-info">
        <strong id="title"></strong>
        <small id="artist"></small>
        <div class="progress-row">
          <div class="track-progress" id="trackProgress" role="slider" aria-label="Clip progress" aria-valuemin="0" aria-valuemax="60" aria-valuenow="0" tabindex="0"><span id="progress"></span></div>
          <small class="track-time" id="time">0:00 / 1:00</small>
        </div>
      </div>
      <div class="controls">
        <button id="prev" type="button" aria-label="Previous track">◀◀</button>
        <button class="play" id="play" type="button" aria-label="Play track">▶</button>
        <button id="next" type="button" aria-label="Next random track">▶▶</button>
      </div>
    </section>
  </main>
`;

const $ = (id) => document.getElementById(id);

function renderStallStatus() {
  $('statusCount').textContent = statusCount;
  $('statusText').textContent = statusText;
}

function tickStallCounter() {
  const step = Math.random() > 0.45 ? 1 : 2;
  const direction = statusCount <= 30 ? 1 : statusCount >= 40 ? -1 : (Math.random() > 0.48 ? 1 : -1);
  statusCount += step * direction;
  renderStallStatus();
}

function renderClock() {
  const time = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true,
  }).format(new Date());
  $('clock').textContent = time.toLowerCase();
}

function formatTime(seconds) {
  const whole = Math.max(0, Math.floor(seconds || 0));
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}

function getVideoDuration() {
  const d = ytPlayer && typeof ytPlayer.getDuration === 'function' ? ytPlayer.getDuration() : tracks[current].duration;
  return Number.isFinite(d) && d > 0 ? d : tracks[current].duration;
}

function chooseRandomClip() {
  const duration = getVideoDuration();
  if (duration <= CLIP_LENGTH) {
    clipStart = 0;
    clipEnd = duration;
    return;
  }
  clipStart = Math.floor(Math.random() * (duration - CLIP_LENGTH));
  clipEnd = clipStart + CLIP_LENGTH;
  elapsed = 0;
}

function render() {
  const track = tracks[current];
  const duration = Math.max(0, clipEnd - clipStart);
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
  $('trackProgress').setAttribute('aria-valuenow', String(Math.floor(elapsed)));
}

function stopVisualTimer() {
  clearInterval(visualTimer);
  visualTimer = undefined;
}

function startVisualTimer() {
  stopVisualTimer();
  visualTimer = setInterval(() => {
    if (!ytPlayer || typeof ytPlayer.getCurrentTime !== 'function') return;
    const now = ytPlayer.getCurrentTime();
    elapsed = Math.max(0, now - clipStart);
    if (now >= clipEnd - 0.15) {
      playNextRandom();
      return;
    }
    render();
  }, 250);
}

function loadTrack() {
  playing = false;
  elapsed = 0;
  stopVisualTimer();
  const track = tracks[current];

  if (ytReady && ytPlayer) {
    ytPlayer.cueVideoById({ videoId: track.youtubeId });
  }
  clipStart = 0;
  clipEnd = CLIP_LENGTH;
  render();
}

function playCurrent() {
  userWantsPlay = true;
  if (!ytReady || !ytPlayer) return;

  chooseRandomClip();
  playing = true;
  render();

  // The API supports start/end seconds for a video load. This makes the player
  // automatically stop at the end of the selected 60-second window.
  ytPlayer.loadVideoById({
    videoId: tracks[current].youtubeId,
    startSeconds: clipStart,
    endSeconds: clipEnd,
  });

  startVisualTimer();
}

function pauseCurrent() {
  userWantsPlay = false;
  playing = false;
  if (ytReady && ytPlayer) ytPlayer.pauseVideo();
  stopVisualTimer();
  render();
}

function toggle() {
  if (playing) pauseCurrent();
  else playCurrent();
}

function getRandomTrackIndex() {
  if (tracks.length <= 1) return 0;
  let next;
  do { next = Math.floor(Math.random() * tracks.length); } while (next === current);
  return next;
}

function playNextRandom() {
  if (!ytReady || !ytPlayer) return;
  current = getRandomTrackIndex();
  playCurrent();
}

function stepPrevious() {
  if (!ytReady || !ytPlayer) return;
  current = (current - 1 + tracks.length) % tracks.length;
  userWantsPlay = true;
  playCurrent();
}

function seekTo(percent) {
  if (!ytReady || !ytPlayer) return;
  const duration = Math.max(0, clipEnd - clipStart);
  const safe = Math.max(0, Math.min(1, percent));
  const target = clipStart + duration * safe;
  ytPlayer.seekTo(target, true);
  elapsed = target - clipStart;
  render();
}

function seekFromPointer(event) {
  const rect = $('trackProgress').getBoundingClientRect();
  if (!rect.width) return;
  seekTo((event.clientX - rect.left) / rect.width);
}

function onYouTubeStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    playing = true;
    startVisualTimer();
    render();
  } else if (event.data === YT.PlayerState.PAUSED) {
    if (playing) {
      playing = false;
      stopVisualTimer();
      render();
    }
  } else if (event.data === YT.PlayerState.ENDED) {
    if (userWantsPlay) playNextRandom();
  }
}

function onYouTubeError(event) {
  console.warn('YouTube video could not be embedded:', tracks[current].title, event.data);
  playing = false;
  stopVisualTimer();
  render();
}

$('play').addEventListener('click', toggle);
$('prev').addEventListener('click', stepPrevious);
$('next').addEventListener('click', playNextRandom);
$('trackProgress').addEventListener('click', seekFromPointer);

$('trackProgress').addEventListener('keydown', (event) => {
  if (!ytReady || !ytPlayer) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    const delta = event.key === 'ArrowLeft' ? -5 : 5;
    const next = Math.max(clipStart, Math.min(clipEnd, ytPlayer.getCurrentTime() + delta));
    ytPlayer.seekTo(next, true);
    elapsed = next - clipStart;
    render();
  }
});

loadTrack();
render();
renderStallStatus();
renderClock();
setInterval(tickStallCounter, 1000);
clockTimer = setInterval(renderClock, 1000);
