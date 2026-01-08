// Available tracks and videos
const TRACKS = [
  { file: 'track.mp3', name: 'Ambient Dreams', icon: '🎵' },
  { file: 'clouds-passing-by.mp3', name: 'Clouds Passing By', icon: '🌙' },
  { file: 'glass-window-tears.mp3', name: 'Glass Window Tears', icon: '🌧️' },
  { file: 'petals-in-the-wind.mp3', name: 'Petals in the Wind', icon: '🌸' },
  { file: 'december-embers.mp3', name: 'December Embers', icon: '❄️' },
  { file: 'cozy-evening.mp3', name: 'Cozy Evening', icon: '🎹' },
  { file: 'study-session-echoes.mp3', name: 'Study Session Echoes', icon: '🎤' },
  { file: 'cafe-corner.mp3', name: 'Café Corner', icon: '😌' },
  { file: 'faded-polaroids.mp3', name: 'Faded Polaroids', icon: '🎶' },
  { file: 'dusty-grooves.mp3', name: 'Dusty Grooves', icon: '💿' },
  // New tracks added
  { file: 'cat-cafe-lofi-309576.mp3', name: 'Cat Café Lounge', icon: '🐱' },
  { file: 'chill-study-cozy-lofi-beat-442868.mp3', name: 'Chill Study Beat', icon: '📚' },
  { file: 'laundromat-lofi-chill-309579.mp3', name: 'Laundromat Dreams', icon: '🧺' },
  { file: 'endgame-theory-455563.mp3', name: 'Endgame Theory', icon: '♟️' },
  { file: 'fading-neon-lights-lofi-beats-281197.mp3', name: 'Fading Neon Lights', icon: '🌃' },
  { file: 'lofi-song-backyard-by-lofium-242713.mp3', name: 'Backyard Memories', icon: '🏡' },
  { file: 'lofi-study-music-361055.mp3', name: 'Focus Flow', icon: '✏️' },
  { file: 'london-lofi-315482.mp3', name: 'London Streets', icon: '🚌' },
  { file: 'seaside-cafe-lofi-music-361057.mp3', name: 'Seaside Café', icon: '🌊' },
  { file: 'velvet-sky-dreams-lofi-beats-281186.mp3', name: 'Velvet Sky Dreams', icon: '✨' },
  { file: 'lofi-background-music-326931.mp3', name: 'Background Hum', icon: '🎧' }
];

const VIDEOS = [
  { file: 'stargazing-whiskers.mp4', name: 'Stargazing Whiskers', icon: '🌌' },
  { file: 'dawn-vigil.mp4', name: 'Dawn Vigil', icon: '🌅' },
  { file: 'warm-whisker-glow.mp4', name: 'Warm Whisker Glow', icon: '🔥' },
  { file: 'sunday-afternoon-purr.mp4', name: 'Sunday Afternoon Purr', icon: '🛏️' },
  { file: 'dozing-in-the-dark.mp4', name: 'Dozing in the Dark', icon: '😴' },
  { file: 'hearthside-solace.mp4', name: 'Hearthside Solace', icon: '🏠' },
  { file: 'ticket-to-nowhere.mp4', name: 'Ticket to Nowhere', icon: '🚆' },
  { file: 'city-light-watcher.mp4', name: 'City Light Watcher', icon: '🏙️' },
  { file: 'quiet-company.mp4', name: 'Quiet Company', icon: '🐱' },
  { file: 'bedroom-serenade.mp4', name: 'Bedroom Serenade', icon: '🎸' },
  { file: 'loyal-afternoon.mp4', name: 'Loyal Afternoon', icon: '🐕' },
  { file: 'unfinished-deadlines.mp4', name: 'Unfinished Deadlines', icon: '💻' },
  { file: 'rain-soaked-steps.mp4', name: 'Rain-Soaked Steps', icon: '☂️' },
  { file: 'tomorrows-plans.mp4', name: 'Tomorrow\'s Plans', icon: '📝' },
  { file: 'puddle-party.mp4', name: 'Puddle Party', icon: '🌧️' },
  { file: 'storm-lullaby.mp4', name: 'Storm Lullaby', icon: '🌬️' },
  // New videos added
  { file: 'againanother cat.mp4', name: 'Paws & Daydreams', icon: '🐾' },
  { file: 'girlwithcat-cloudsaboveherheadatbalcony.mp4', name: 'Cloud Gazing Companion', icon: '☁️' },
  { file: 'girlwithcat.mp4', name: 'Feline Reverie', icon: '😺' },
  { file: 'treehouse-withlightshanging.mp4', name: 'Treehouse Twilight', icon: '🏡' },
  { file: 'young woman looking upward with a longing expression amidst blurry foliage.mp4', name: 'Wistful Moments', icon: '🌿' },
  { file: 'Cat, train, retro free.mp4', name: 'Retro Rails Companion', icon: '🚃' }
];

// DOM elements
const playerView = document.getElementById('playerView');
const selectionView = document.getElementById('selectionView');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const backgroundVideo = document.getElementById('backgroundVideo');
const videoSource = document.getElementById('videoSource');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const totalTimeDisplay = document.getElementById('totalTime');
const currentTrackName = document.getElementById('currentTrackName');
const currentSceneName = document.getElementById('currentSceneName');
const menuBtn = document.getElementById('menuBtn');
const backBtn = document.getElementById('backBtn');
const showTracksBtn = document.getElementById('showTracksBtn');
const showVideosBtn = document.getElementById('showVideosBtn');
const tracksContainer = document.getElementById('tracksContainer');
const videosContainer = document.getElementById('videosContainer');
const tracksList = document.getElementById('tracksList');
const videosList = document.getElementById('videosList');
const loopBtn = document.getElementById('loopBtn');
const marqueeTrack = document.getElementById('marqueeTrack');
const marqueeScene = document.getElementById('marqueeScene');
const marqueeTrack2 = document.getElementById('marqueeTrack2');
const marqueeScene2 = document.getElementById('marqueeScene2');

// State
let isPlaying = false;
let currentTrack = null;
let currentVideo = null;
let updateInterval = null;
let isLooping = false;


// Update marquee text
function updateMarquee() {
  const trackName = currentTrack !== null ? TRACKS[currentTrack].name : 'select a track to start';
  const sceneName = currentVideo !== null ? VIDEOS[currentVideo].name : 'choose your vibe';

  // Update both instances for seamless loop
  if (marqueeTrack) marqueeTrack.textContent = trackName;
  if (marqueeScene) marqueeScene.textContent = sceneName;
  if (marqueeTrack2) marqueeTrack2.textContent = trackName;
  if (marqueeScene2) marqueeScene2.textContent = sceneName;
}

// Initialize
function init() {
  populateTracks();
  populateVideos();

  // Load saved selections or set defaults
  chrome.storage.local.get(['currentTrack', 'currentVideo', 'isLooping'], (result) => {
    if (result.currentTrack !== undefined) {
      selectTrack(result.currentTrack, false);
    } else {
      // Set "Ambient Dreams" as default track (index 0) - selected but not playing
      selectTrack(0, false);
    }
    if (result.currentVideo !== undefined) {
      selectVideo(result.currentVideo);
    } else {
      // Set "Wistful Moments" as default scene (index 20)
      selectVideo(20);
    }
    // Load loop state
    if (result.isLooping !== undefined) {
      isLooping = result.isLooping;
      loopBtn.classList.toggle('active', isLooping);
    }
  });

  // Get state from background
  setTimeout(() => {
    chrome.runtime.sendMessage({ action: 'getState' }, (response) => {
      if (chrome.runtime.lastError) {
        console.log('Background not ready');
        return;
      }
      if (response) {
        isPlaying = response.isPlaying;
        playPauseBtn.querySelector('.btn-icon').textContent = isPlaying ? '⏸' : '▶';
        if (response.duration) {
          totalTimeDisplay.textContent = formatTime(response.duration);
          progressBar.max = response.duration;
        }
        if (isPlaying) {
          startUpdateLoop();
        }
        updatePlayButtons();
      }
    });
  }, 100);
}

// Populate tracks
function populateTracks() {
  tracksList.innerHTML = '';
  TRACKS.forEach((track, index) => {
    const item = document.createElement('div');
    item.className = 'selection-item';
    item.innerHTML = `
      <div class="item-thumbnail">${track.icon}</div>
      <div class="item-info">
        <div class="item-name">${track.name}</div>
      </div>
      <div class="item-play-btn">▶</div>
    `;
    item.addEventListener('click', () => selectTrack(index, true));
    tracksList.appendChild(item);
  });
}

// Populate videos
function populateVideos() {
  videosList.innerHTML = '';
  VIDEOS.forEach((video, index) => {
    const item = document.createElement('div');
    item.className = 'selection-item';

    // Create video thumbnail
    const thumbnail = document.createElement('video');
    thumbnail.className = 'video-thumbnail';
    thumbnail.src = `assets/${video.file}`;
    thumbnail.preload = 'metadata';
    thumbnail.muted = true;

    // Create item content wrapper
    const itemInfo = document.createElement('div');
    itemInfo.className = 'item-info';
    itemInfo.innerHTML = `
      <div class="item-name">${video.name}</div>
      <div class="item-duration">Background Scene</div>
    `;

    // Create play button
    const playBtn = document.createElement('div');
    playBtn.className = 'item-play-btn';
    playBtn.textContent = '▶';

    // Assemble item
    item.appendChild(thumbnail);
    item.appendChild(itemInfo);
    item.appendChild(playBtn);

    item.addEventListener('click', () => selectVideo(index));
    videosList.appendChild(item);
  });
}

// Select track
function selectTrack(index, playImmediately = false) {
  // Safety check: ensure index is valid
  if (index < 0 || index >= TRACKS.length) {
    console.warn(`Invalid track index: ${index}. Defaulting to track 0.`);
    index = 0;
  }

  currentTrack = index;
  const track = TRACKS[index];

  currentTrackName.textContent = track.name;
  audioSource.src = `assets/${track.file}`;
  audioPlayer.load();

  document.querySelectorAll('#tracksList .selection-item').forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });

  chrome.storage.local.set({ currentTrack: index });
  chrome.runtime.sendMessage({ action: 'track-changed', file: track.file }, (response) => {
    if (chrome.runtime.lastError) {
      console.log('Background not ready:', chrome.runtime.lastError);
    }
  });

  updatePlayButtons();

  if (playImmediately) {
    setTimeout(() => {
      if (!isPlaying) {
        playPauseBtn.click();
      }
      // Don't auto-redirect - let user stay on selection page
    }, 300);
  }

  audioPlayer.addEventListener('loadedmetadata', () => {
    totalTimeDisplay.textContent = formatTime(audioPlayer.duration);
    progressBar.max = audioPlayer.duration;
  }, { once: true });

  // Update marquee
  updateMarquee();
}

// Select video
function selectVideo(index) {
  // Safety check: ensure index is valid
  if (index < 0 || index >= VIDEOS.length) {
    console.warn(`Invalid video index: ${index}. Defaulting to video 20 (Wistful Moments).`);
    index = 20;
  }

  currentVideo = index;
  const video = VIDEOS[index];

  currentSceneName.textContent = video.name;
  videoSource.src = `assets/${video.file}`;
  backgroundVideo.load();

  document.querySelectorAll('#videosList .selection-item').forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });

  chrome.storage.local.set({ currentVideo: index });
  updatePlayButtons();
  // Don't auto-redirect - let user stay on selection page

  // Update marquee
  updateMarquee();
}

// Update play buttons in selection view
function updatePlayButtons() {
  // Update track play buttons
  document.querySelectorAll('#tracksList .selection-item').forEach((item, i) => {
    const playBtn = item.querySelector('.item-play-btn');
    if (playBtn) {
      if (i === currentTrack && isPlaying) {
        playBtn.textContent = '⏸';
      } else {
        playBtn.textContent = '▶';
      }
    }
  });

  // Update video play buttons - show pause for selected video when playing
  document.querySelectorAll('#videosList .selection-item').forEach((item, i) => {
    const playBtn = item.querySelector('.item-play-btn');
    if (playBtn) {
      if (i === currentVideo && isPlaying) {
        playBtn.textContent = '⏸';
      } else {
        playBtn.textContent = '▶';
      }
    }
  });
}

// Switch views
function switchToPlayerView() {
  playerView.classList.add('active');
  selectionView.classList.remove('active');
}

function switchToSelectionView() {
  selectionView.classList.add('active');
  playerView.classList.remove('active');
}

// Event listeners
menuBtn.addEventListener('click', switchToSelectionView);
backBtn.addEventListener('click', switchToPlayerView);

showTracksBtn.addEventListener('click', () => {
  showTracksBtn.classList.add('active');
  showVideosBtn.classList.remove('active');
  tracksContainer.classList.add('active');
  videosContainer.classList.remove('active');
});

showVideosBtn.addEventListener('click', () => {
  showVideosBtn.classList.add('active');
  showTracksBtn.classList.remove('active');
  videosContainer.classList.add('active');
  tracksContainer.classList.remove('active');
});

// Play/Pause
playPauseBtn.addEventListener('click', () => {
  if (currentTrack === null) {
    // Do nothing if no track is selected
    return;
  }

  if (isPlaying) {
    chrome.runtime.sendMessage({ action: 'pause' }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('Error:', chrome.runtime.lastError);
        return;
      }
      if (response && response.success) {
        playPauseBtn.querySelector('.btn-icon').textContent = '▶';
        isPlaying = false;
        stopUpdateLoop();
        updatePlayButtons();
      }
    });
  } else {
    chrome.runtime.sendMessage({ action: 'play' }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('Error:', chrome.runtime.lastError);
        return;
      }
      if (response && response.success) {
        playPauseBtn.querySelector('.btn-icon').textContent = '⏸';
        isPlaying = true;
        startUpdateLoop();
        updatePlayButtons();
      }
    });
  }
});

// Update loop
function startUpdateLoop() {
  if (updateInterval) return;
  updateInterval = setInterval(() => {
    chrome.runtime.sendMessage({ action: 'getState' }, (response) => {
      if (chrome.runtime.lastError) {
        stopUpdateLoop();
        return;
      }
      if (response && response.isPlaying) {
        updateUI(response.currentTime, response.duration);
      }
    });
  }, 500);
}

function stopUpdateLoop() {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
}

function updateUI(currentTime, duration) {
  if (!isNaN(duration) && duration > 0) {
    progressBar.value = currentTime;
    progressBar.max = duration;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.setProperty('--progress', `${progressPercent}%`);
    currentTimeDisplay.textContent = formatTime(currentTime);
    totalTimeDisplay.textContent = formatTime(duration);
  }
}

// Progress seeking
progressBar.addEventListener('input', (e) => {
  const seekTime = parseFloat(e.target.value);
  chrome.runtime.sendMessage({ action: 'seek', time: seekTime }, (response) => {
    if (chrome.runtime.lastError) return;
    if (response && response.success) {
      const duration = progressBar.max;
      const progressPercent = (seekTime / duration) * 100;
      progressBar.style.setProperty('--progress', `${progressPercent}%`);
      currentTimeDisplay.textContent = formatTime(seekTime);
    }
  });
});

// Listen for audio ended
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'audio-ended') {
    if (isLooping && currentTrack !== null) {
      // Loop current track
      chrome.runtime.sendMessage({ action: 'play' }, (response) => {
        if (response && response.success) {
          playPauseBtn.querySelector('.btn-icon').textContent = '⏸';
          isPlaying = true;
          startUpdateLoop();
          updatePlayButtons();
        }
      });
    } else if (currentTrack !== null) {
      // Autoplay next track
      const nextTrackIndex = (currentTrack + 1) % TRACKS.length;
      selectTrack(nextTrackIndex, true);
    } else {
      // No track selected, just stop
      playPauseBtn.querySelector('.btn-icon').textContent = '▶';
      isPlaying = false;
      stopUpdateLoop();
      progressBar.value = 0;
      progressBar.style.setProperty('--progress', '0%');
      currentTimeDisplay.textContent = '00:00';
    }
  }
});

// Loop button toggle
loopBtn.addEventListener('click', () => {
  isLooping = !isLooping;
  loopBtn.classList.toggle('active', isLooping);
  chrome.storage.local.set({ isLooping: isLooping });
});

// Helper
function formatTime(seconds) {
  if (isNaN(seconds) || seconds === 0) return '00:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Initialize
progressBar.style.setProperty('--progress', '0%');
init();
