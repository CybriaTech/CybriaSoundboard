function rng() {
    return Math.floor(Math.random() * 10000);
}

function genbtn(sound) {
    const audioid = rng();
    const soundcomponent = document.createElement('div');
    soundcomponent.classList.add('sound');

    const soundbtn = document.createElement('div');
    soundbtn.classList.add('soundbtn');
    soundbtn.setAttribute('onclick', `document.getElementById('${audioid}').play();`);

    const title = document.createElement('p');
    title.classList.add('soundtitle');
    title.textContent = sound.title;

    const release = document.createElement('p');
    release.classList.add('release');
    release.textContent = sound.released;

    const audio = document.createElement('audio');
    audio.classList.add('sound');
    audio.setAttribute('id', audioid);
    audio.setAttribute('controls');
    audio.setAttribute('src', sound.src);
    audio.setAttribute('preload', 'auto');

    soundcomponent.appendChild(soundbtn);
    soundcomponent.appendChild(title);
    soundcomponent.appendChild(release);
    soundcomponent.appendChild(audio);

    return soundcomponent;
}

fetch('/sounds.json')
    .then(response => response.json())
    .then(sounds => {
        const soundparent = document.getElementById('sounds');
        sounds.sort((a, b) => a.title.localeCompare(b.title));
        
        sounds.forEach(sound => {
            const soundbutton = genbtn(sound);
            soundparent.appendChild(soundbutton);
        });
    })
    .catch(error => console.error('Err:', error));
