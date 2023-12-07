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
          showMainContent(); // 当进度条完成时显示主内容区域
      } else {
          width++;
          progress.style.width = width + '%';
          percentage.innerHTML = width + '%';
      }
  }

  let musicToggle = document.getElementById('musicToggle');
  let musicIcon = document.getElementById('musicIcon');
  let loadingSection = document.getElementById('loading-section');
  let mainSection = document.getElementById('main-section');

  let music = new Audio('Resources/music.mp3'); // 替换为你的音乐文件路径
  
  // 默认开始播放音乐
  let musicPlaying = true;
  music.play();
  
  // 切换音乐播放和暂停的函数
  musicToggle.onclick = function() {
      musicPlaying = !musicPlaying;
      if (musicPlaying) {
          music.play();
          musicIcon.src = "images/music-icon.png"; // 播放时的图标
          console.log('Music playing...');
      } else {
          music.pause();
          musicIcon.src = "images/music-close.png"; // 暂停时的图标
          console.log('Music paused...');
      }
  };

  function showMainContent() {
    loadingSection.style.display = 'none';
    mainSection.classList.remove('hidden'); // 使用classList来控制显示
    setUpSwipeListener(); // 设置滑动监听器
  }
  
  // 设置向下滑动的监听器
  function setUpSwipeListener() {
    let touchstartY = 0;
    let touchendY = 0;
  
    document.addEventListener('touchstart', e => {
      touchstartY = e.changedTouches[0].screenY;
    }, false);
  
    document.addEventListener('touchend', e => {
      touchendY = e.changedTouches[0].screenY;
      handleSwipeGesture();
    }, false);
  
    function handleSwipeGesture() {
      if (touchendY < touchstartY) {
        console.log('Swiped up');
        // 这里添加逻辑来处理滑动后的动作，比如加载下一个界面
      }
    }
  }
};

