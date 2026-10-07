/* Dùng chung cho mọi slide: co giãn sân khấu, nạp ảnh, chạy lại hiệu ứng, điều hướng */
(function () {
  const stage = document.getElementById('stage');

  function fit() {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.setProperty('--s', s);
  }
  window.addEventListener('resize', fit);
  fit();

  // Thử lần lượt các ảnh trong danh sách; ảnh nào có thì dùng, không có thì giữ hình vẽ dự phòng
  function tryLoad(list, ok) {
    const srcs = (list || '').split(',').map(s => s.trim()).filter(Boolean);
    (function next(i) {
      if (i >= srcs.length) return;
      const img = new Image();
      img.onload = () => ok(srcs[i]);
      img.onerror = () => next(i + 1);
      img.src = srcs[i];
    })(0);
  }

  const photo = document.querySelector('.bg .photo');
  if (photo) tryLoad(document.body.dataset.image, src => { photo.src = src; document.body.classList.add('has-photo'); });

  document.querySelectorAll('.frame[data-photo]').forEach(fr => {
    tryLoad(fr.dataset.photo, src => {
      const img = document.createElement('img');
      img.className = 'ph'; img.alt = fr.dataset.alt || ''; img.src = src;
      fr.prepend(img); fr.classList.add('loaded');
    });
  });

  // Bụi vàng
  document.querySelectorAll('.dust').forEach(d => {
    for (let i = 0; i < 26; i++) {
      const p = document.createElement('i');
      p.style.left = (40 + Math.random() * 60) + '%';
      p.style.top = (35 + Math.random() * 65) + '%';
      p.style.animationDelay = (Math.random() * 9) + 's';
      p.style.animationDuration = (7 + Math.random() * 6) + 's';
      d.appendChild(p);
    }
  });

  // Đếm số chạy lên
  function counters() {
    document.querySelectorAll('.num[data-v]').forEach(el => {
      const end = parseFloat(el.dataset.v);
      const dec = parseInt(el.dataset.dec || '0', 10);
      const delay = parseFloat(el.dataset.delay || '0') * 1000;
      const dur = 1600;
      el.textContent = (0).toFixed(dec).replace('.', ',');
      setTimeout(() => {
        const t0 = performance.now();
        (function tick(t) {
          const k = Math.min(1, (t - t0) / dur);
          const v = end * (1 - Math.pow(1 - k, 3));
          el.textContent = v.toFixed(dec).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
          if (k < 1) requestAnimationFrame(tick);
        })(t0);
      }, delay);
    });
  }

  function run() {
    document.body.classList.remove('run');
    void document.body.offsetWidth;
    document.body.classList.add('run');
    counters();
  }

  window.addEventListener('message', e => { if (e.data && e.data.action === 'play') run(); });

  // Điều hướng: gửi lên trang chính (khi nằm trong index.html)
  const inDeck = window.parent !== window;
  function send(action) { if (inDeck) window.parent.postMessage({ action }, '*'); }
  document.addEventListener('click', () => send('next'));
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); send('next'); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); send('prev'); }
    else if (e.key === 'f' || e.key === 'F') send('fs');
    else if (e.key === 'r' || e.key === 'R') run();
  });

  run();
})();
