document.write(`
    <div id="settings">
      <div id="settingsheader">
        <button onclick="document.getElementById('settings').style.display = 'none';" class="settingsclose"><i class="fas fa-times"></i>
        </button>
      </div>
      <div id="settingsmain">
        <label for="volume">Volume</label>
        <input id="volume" type="range" min="0" max="100" value="50">
        <button class="settingsbtn" onclick="revert();">Clear Changes</button>
        <button class="settingsbtn" onclick="stop();">Stop All Sounds</button>
      </div>
    </div>
`);