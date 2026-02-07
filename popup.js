// Available tracks and videos
const TRACKS = [
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491253/track_hngfzc.mp3', name: 'Ambient Dreams', icon: '🎵' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491229/clouds-passing-by_zojdza.mp3', name: 'Clouds Passing By', icon: '🌙' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491242/glass-window-tears_y4k9lv.mp3', name: 'Glass Window Tears', icon: '🌧️' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491248/petals-in-the-wind_vn1j2k.mp3', name: 'Petals in the Wind', icon: '🌸' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491230/december-embers_w9iqx4.mp3', name: 'December Embers', icon: '❄️' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491226/cozy-evening_ya5aso.mp3', name: 'Cozy Evening', icon: '🎹' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491261/study-session-echoes_aydzzs.mp3', name: 'Study Session Echoes', icon: '🎤' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491227/cafe-corner_cfqynq.mp3', name: 'Café Corner', icon: '😌' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491262/faded-polaroids_mm8d8f.mp3', name: 'Faded Polaroids', icon: '🎶' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491230/dusty-grooves_zewish.mp3', name: 'Dusty Grooves', icon: '💿' },
  // New tracks added
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491228/chill-study-cozy-lofi-beat-442868_clrl1k.mp3', name: 'Chill Study Beat', icon: '📚' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491235/laundromat-lofi-chill-309579_st50sc.mp3', name: 'Laundromat Dreams', icon: '🧺' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491235/endgame-theory-455563_ea1erh.mp3', name: 'Endgame Theory', icon: '♟️' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491240/fading-neon-lights-lofi-beats-281197_x3ufya.mp3', name: 'Fading Neon Lights', icon: '🌃' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491245/lofi-song-backyard-by-lofium-242713_tyauo8.mp3', name: 'Backyard Memories', icon: '🏡' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491246/lofi-study-music-361055_mm24nj.mp3', name: 'Focus Flow', icon: '✏️' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491264/london-lofi-315482_yvudds.mp3', name: 'London Streets', icon: '🚌' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491249/seaside-cafe-lofi-music-361057_mpvk20.mp3', name: 'Seaside Café', icon: '🌊' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770491257/velvet-sky-dreams-lofi-beats-281186_xksokk.mp3', name: 'Velvet Sky Dreams', icon: '✨' },
];

const VIDEOS = [
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486514/young_woman_looking_upward_with_a_longing_expression_amidst_blurry_foliage_1_pjbymm.mp4', name: 'Wistful Moments', icon: '🌿' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486411/Cat_gazing_the_nightsky_with_lucky_star_kifud4.mp4', name: 'Stargazing Whiskers', icon: '🌌' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486422/dawn-vigil_ev1ayh.mp4', name: 'Dawn Vigil', icon: '🌅' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486543/warm-whisker-glow_naca0t.mp4', name: 'Warm Whisker Glow', icon: '🔥' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486571/sunday-afternoon-purr_bku99d.mp4', name: 'Sunday Afternoon Purr', icon: '🛏️' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486582/dozing-in-the-dark_dru3eb.mp4', name: 'Dozing in the Dark', icon: '😴' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486417/hearthside-solace_jnrr8j.mp4', name: 'Hearthside Solace', icon: '🏠' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486569/ticket-to-nowhere_ddylrg.mp4', name: 'Ticket to Nowhere', icon: '🚆' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486560/quiet-company_oxqt64.mp4', name: 'Quiet Company', icon: '🐱' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486514/loyal-afternoon_ouit2y.mp4', name: 'Loyal Afternoon', icon: '🐕' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486564/rain-soaked-steps_igsrtx.mp4', name: 'Rain-Soaked Steps', icon: '☂️' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486518/puddle-party_jjqork.mp4', name: 'Puddle Party', icon: '🌧️' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486428/storm-lullaby_kwy1pp.mp4', name: 'Storm Lullaby', icon: '🌬️' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486571/f615da69-d1cc-4f17-911a-e0fada893c35_xyjqpi.mp4', name: 'Dreamy Escape', icon: '✨' },
  { file: 'https://res.cloudinary.com/dz2cthc1s/video/upload/v1770486410/d2dfa93c-6e45-41e9-b051-d800501a2e04_rawmft.mp4', name: 'Serene Journey', icon: '🌸' }
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
      // Set "Wistful Moments" as default scene (index 12)
      selectVideo(12);
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
    thumbnail.src = video.file;
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
  audioSource.src = track.file;
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
    console.warn(`Invalid video index: ${index}. Defaulting to video 12 (Wistful Moments).`);
    index = 12;
  }

  currentVideo = index;
  const video = VIDEOS[index];

  currentSceneName.textContent = video.name;
  videoSource.src = video.file;
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
