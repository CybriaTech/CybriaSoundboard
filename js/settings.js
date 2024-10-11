function stop() {
  const sound = document.querySelectorAll('.sound');

  sound.forEach(function(audio) {
      audio.pause();
      audio.currentTime = 0;
    });
  }
