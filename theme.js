
/* NowListening — integração com o núcleo oficial */
let hideAnimationTimer = null;
window.__npTheme = {
  displayDuration: 5000,
  animOutDuration: 350,
  
    onShow: function () {
    const widget = document.getElementById('np-container');

    if (!widget) return;

    if (hideAnimationTimer !== null) {
    clearTimeout(hideAnimationTimer);
    hideAnimationTimer = null;
    }

    widget.classList.remove('np-hidden', 'np-hiding');
    widget.classList.add('np-showing');
   },

    onHide: function () {
      const widget = document.getElementById('np-container');

      if (!widget) return;

      if (hideAnimationTimer !== null) {
        clearTimeout(hideAnimationTimer);
      }

      widget.classList.remove('np-showing');
      widget.classList.add('np-hiding');

      hideAnimationTimer = setTimeout(function () {
        widget.classList.remove('np-hiding');
        widget.classList.add('np-hidden');
        hideAnimationTimer = null;
      }, 280);
    },

  onUpdate: function (payload) {
    const widget = document.getElementById('np-container');
    const separator = document.getElementById('np-sep');
    const album = document.getElementById('np-album');

    if (widget) {
      widget.dataset.playing = payload.isPlaying ? 'true' : 'false';
    }

    if (separator) {
      separator.style.display = payload.artist ? 'inline' : 'none';
    }

    if (album) {
      album.style.display = 'none';
    }
  }
};
