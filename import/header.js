document.write(`
<header>
  <nav>
    <a href="/">Home</a>
    <a href="newest.html">Newest Sounds</a>
    <a href="oldest.html">Oldest Sounds</a>
    <a href="other.html">Other Links</a>
    <a href="https://discord.gg/zhsmmNNtJT" target="_blank"><i class="fab fa-discord"></i></a>
    <a href="https://github.com/CybriaTech/CybriaSoundboard" target="_blank"><i class="fab fa-github"></i></a>
    <a href="widgetbot.html" target="_blank"><i class="fas fa-comment"></i></a>
    <a onclick="document.getElementById('settings').style.display = 'flex';"><i class="fas fa-cog"></i></a>
  </nav>
  <div id="right">
        <form id="form-top" action="q.html" method="get">
      <input type="text" name="q" class="search-bar-top" placeholder="Search For Sounds">
      <button class="search-enter-top"><i class="fas fa-search"></i></button>
      </form>
  </div>
</header>
`);
