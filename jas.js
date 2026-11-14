document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    const image = document.getElementById('bulb_img');
    const audio = document.getElementById('audio');
    const lighthum = document.getElementById('light_hum');
    const body = document.body;

    const setBulbState = (isOn) => {
        body.classList.toggle('on', isOn);
        image.src = isOn ? 'photos/on.jpeg' : 'photos/off.jpeg';
        image.classList.toggle('bulb_on', isOn);
        image.classList.toggle('bulb_off', !isOn);
    };

    const toggleLight = () => {
        const isOn = body.classList.contains('on');
        const nextState = !isOn;

        setBulbState(nextState);

        if (nextState) {
            audio.currentTime = 0;
            audio.play();
            lighthum.currentTime = 0;
            lighthum.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
            lighthum.pause();
            lighthum.currentTime = 0;
        }
    };

    btn.addEventListener('click', toggleLight);
    btn.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleLight();
        }
    });

    setBulbState(false);
});