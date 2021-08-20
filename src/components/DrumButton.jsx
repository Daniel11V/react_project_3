const DrumButton = ({id, letter, keyCode, src, onClick, power}) => {
    function playAudio() {
        if (power) {
            const sound = document.getElementById(letter);
            sound.currentTime = 0;
            sound.play();
            onClick();
        }
    }

    document.addEventListener('keyup', (e) => {if (keyCode === e.keyCode) playAudio() });

    return (
    <div id={id} className="drum-pad" onClick={playAudio}>
        {letter}
        <audio src={src} id={letter} className="clip"></audio>
    </div>
    );
};

export default DrumButton; 