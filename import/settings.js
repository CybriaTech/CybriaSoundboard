document.write(`
    <div id="settings">
      <div id="settingsheader">
        <button onclick="document.getElementById('settings').style.display = 'none';" class="settingsclose"><i class="fas fa-times"></i>
        </button>
      </div>
      <div id="settingsmain">
        <label for="volume" style="display: none;">Volume</label>
        <input id="volume" type="range" min="0" max="100" value="50" style="display: none;">
        <button class="settingsbtn" style="display: none;">Clear Changes (WIP)</button>
        <button class="settingsbtn" onclick="stop()">Stop All Sounds (Alt+S)</button>
      </div>
    </div>
`);

function stop() {
var soundplayer = document.querySelectorAll('audio.sound');
  soundplayer.forEach(function(audio) {
      audio.pause();
      audio.currentTime = 0;
    });
  }

document.addEventListener('keydown', function (event) {
if (event.altKey && (event.key === 's' || event.key === 'S')) {
    event.preventDefault();
    stop();
   }
});
