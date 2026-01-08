// Background Service Worker for persistent audio playback
let isPlaying = false;
let currentTime = 0;
let duration = 0;

// Create offscreen document when needed
async function setupOffscreenDocument() {
  try {
    const existingContexts = await chrome.runtime.getContexts({
      contextTypes: ['OFFSCREEN_DOCUMENT'],
    });

    if (existingContexts.length > 0) {
      return;
    }

    await chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: ['AUDIO_PLAYBACK'],
      justification: 'Play background lo-fi music continuously'
    });
  } catch (error) {
    console.error('Error creating offscreen document:', error);
  }
}

// Handle messages from popup and offscreen document
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Background received:', message.action);

  if (message.action === 'play') {
    (async () => {
      try {
        await setupOffscreenDocument();
        // Small delay to ensure offscreen document is ready
        setTimeout(() => {
          chrome.runtime.sendMessage({ action: 'offscreen-play' }, (response) => {
            if (chrome.runtime.lastError) {
              console.log('Offscreen not ready');
            }
          });
        }, 100);
        isPlaying = true;
        sendResponse({ success: true, isPlaying: true });
      } catch (error) {
        console.error('Play error:', error);
        sendResponse({ success: false, error: error.message });
      }
    })();
    return true; // Keep channel open for async response
  }

  if (message.action === 'pause') {
    chrome.runtime.sendMessage({ action: 'offscreen-pause' }, (response) => {
      if (chrome.runtime.lastError) {
        console.log('Offscreen not ready');
      }
    });
    isPlaying = false;
    sendResponse({ success: true, isPlaying: false });
    return false; // Synchronous response
  }

  if (message.action === 'seek') {
    chrome.runtime.sendMessage({ action: 'offscreen-seek', time: message.time }, (response) => {
      if (chrome.runtime.lastError) {
        console.log('Offscreen not ready');
      }
    });
    currentTime = message.time;
    sendResponse({ success: true });
    return false; // Synchronous response
  }

  if (message.action === 'getState') {
    // Send immediate response with current cached state
    sendResponse({
      isPlaying: isPlaying,
      currentTime: currentTime || 0,
      duration: duration || 0
    });

    // Try to update from offscreen document in background (don't wait)
    chrome.runtime.sendMessage({ action: 'offscreen-getTime' }, (response) => {
      if (!chrome.runtime.lastError && response) {
        currentTime = response.currentTime;
        duration = response.duration;
      }
    });

    return false; // Response already sent
  }

  if (message.action === 'audio-ended') {
    isPlaying = false;
    currentTime = 0;
    // Broadcast to popup
    try {
      chrome.runtime.sendMessage({ action: 'audio-ended' }, (response) => {
        if (chrome.runtime.lastError) {
          console.log('Popup not ready for audio-ended message');
        }
      });
    } catch (error) {
      console.log('Error broadcasting audio-ended:', error);
    }
    return false;
  }

  if (message.action === 'update-time') {
    currentTime = message.currentTime;
    duration = message.duration;
    return false;
  }

  if (message.action === 'track-changed') {
    // Track changed, notify offscreen to load new track
    console.log('Track changed to:', message.file);

    // Send immediate success response
    sendResponse({ success: true });

    // Setup offscreen and load track in background (fire and forget)
    (async () => {
      try {
        await setupOffscreenDocument();
        setTimeout(() => {
          chrome.runtime.sendMessage({ action: 'offscreen-load-track', file: message.file }, (response) => {
            if (chrome.runtime.lastError) {
              console.log('Offscreen not ready for track change');
            }
          });
        }, 100);
      } catch (error) {
        console.error('Error loading track:', error);
      }
    })();

    return false; // Response already sent
  }

  // Default: no response needed
  return false;
});

// Initialize on extension startup
chrome.runtime.onStartup.addListener(() => {
  console.log('Extension started');
});

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});
