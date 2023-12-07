window.onload = function() {
  let progress = document.getElementById('progress');
  let percentage = document.getElementById('percentage');
  let width = 0; // Starting width
  let totalAnimationTime = 1660; // Total time for the animation in milliseconds
  let intervalTime = totalAnimationTime / 100; // Time for each increment step
  let interval = setInterval(frame, intervalTime);

  function frame() {
      if (width >= 100) {
          clearInterval(interval);
      } else {
          width++;
          progress.style.width = width + '%';
          percentage.innerHTML = width + '%';
      }
  }

  let musicToggle = document.getElementById('musicToggle');
  let musicPlaying = false;
  // Placeholder function for music toggling
  musicToggle.onclick = function() {
      musicPlaying = !musicPlaying;
      if (musicPlaying) {
          // Logic to play music
          console.log('Music playing...');
      } else {
          // Logic to pause music
          console.log('Music paused...');
      }
  };
};

