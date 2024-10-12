document.write(`
    <div id="settings">
      <div id="settingsheader">
        <button onclick="document.getElementById('settings').style.display = 'none';" class="settingsclose"><i class="fas fa-times"></i>
        </button>
      </div>
      <div id="settingsmain">
        <label for="volume">Volume</label>
        <input id="volume" type="range" min="0" max="100" value="50">
        <button class="settingsbtn" onclick="revert()">Clear Changes</button>
        <button class="settingsbtn" onclick="stop()">Stop All Sounds</button>
      </div>
    </div>
`);

const audiocontext = new (window.AudioContext || window.webkitAudioContext)();
const gainnode = audiocontext.createGain();
gainnode.gain.value = 1;

function setnode() {
  var soundplayers = document.querySelectorAll('audio.sound');
  
  soundplayers.forEach(function(audio) {
    if (!audio.audioSource) {
      let source = audiocontext.createMediaElementSource(audio);
      source.connect(gainnode).connect(audiocontext.destination);
      audio.audioSource = source;
    }
  });
}

function stop() {
var soundplayer = document.querySelectorAll('audio.sound');
  soundplayer.forEach(function(audio) {
      audio.pause();
      audio.currentTime = 0;
    });
  }

function setvolume() {
  var volumerange = document.getElementById('volume');
  
  var volval = volumerange.value / 100;
  gainnode.gain.value = volval;
  });
}

window.addEventListener('DOMContentLoaded', setnode);

document.getElementById('volume').addEventListener('input', setvolume);

function revert() {
  document.getElementById('volume').value = 50;
  setvolume();
}
