// Offscreen document for audio playback
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

console.log('Offscreen document loaded');

// Listen for messages from background/popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Offscreen received message:', message);
  
  if (message.action === 'offscreen-play') {
    audioPlayer.play()
      .then(() => {
        console.log('Audio playing');
        sendResponse({ success: true });
      })
      .catch(err => {
        console.error('Play error:', err);
        sendResponse({ success: false, error: err.message });
      });
    return true;
  } 
  
  if (message.action === 'offscreen-pause') {
    audioPlayer.pause();
    console.log('Audio paused');
    sendResponse({ success: true });
  } 
  
  if (message.action === 'offscreen-seek') {
    audioPlayer.currentTime = message.time;
    console.log('Seeked to:', message.time);
    sendResponse({ success: true });
  } 
  
  if (message.action === 'offscreen-getTime') {
    sendResponse({
      currentTime: audioPlayer.currentTime,
      duration: audioPlayer.duration || 0
    });
  }
  
  if (message.action === 'offscreen-load-track') {
    console.log('Loading track:', message.file);
    const wasPlaying = !audioPlayer.paused;
    audioSource.src = `assets/${message.file}`;
    audioPlayer.load();
    
    if (wasPlaying) {
      audioPlayer.play().catch(err => console.error('Auto-play error:', err));
    }
    
    sendResponse({ success: true });
  }
  
  return true;
});

// Update background with current time periodically
setInterval(() => {
  if (!audioPlayer.paused && !isNaN(audioPlayer.duration)) {
    chrome.runtime.sendMessage({
      action: 'update-time',
      currentTime: audioPlayer.currentTime,
      duration: audioPlayer.duration
    });
  }
}, 500);

// Notify when audio ends
audioPlayer.addEventListener('ended', () => {
  console.log('Audio ended');
  chrome.runtime.sendMessage({ action: 'audio-ended' });
});

// Log when metadata is loaded
audioPlayer.addEventListener('loadedmetadata', () => {
  console.log('Audio metadata loaded, duration:', audioPlayer.duration);
});
