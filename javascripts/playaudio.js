document.addEventListener('DOMContentLoaded', function () {
  const audios = document.querySelectorAll('.aud');
  const images = document.querySelectorAll('.audioImages');

  const imageSources = ['../../media/audioImage/audioBlue.png', '../../media/audioImage/audioWhite.png'];

  audios.forEach((audio, index) => {
    const image = images[index];
    let imageIndex = 0;
    let intervalId = null;

    function startImageAnimation() {
      intervalId = setInterval(() => {
        imageIndex = (imageIndex + 1) % imageSources.length;
        image.src = imageSources[imageIndex];
      }, 500);
    }

    function stopImageAnimation() {
      clearInterval(intervalId);
      intervalId = null;
      image.src = imageSources[0];
      imageIndex = 0;
    }

    audio.addEventListener('play', startImageAnimation);
    audio.addEventListener('pause', stopImageAnimation);
    audio.addEventListener('ended', stopImageAnimation);

    image.addEventListener('click', () => {
      audios.forEach((otherAudio, otherIndex) => {
        if (otherAudio !== audio) {
          otherAudio.pause();
          otherAudio.currentTime = 0;
          images[otherIndex].src = imageSources[0];
        }
      });

      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  });
});