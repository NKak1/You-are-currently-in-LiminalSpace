window.addEventListener("load", () => {

  const text = "Now Loading...";
  const target = document.getElementById("loading-text");
  const noise = document.getElementById("noise");
  const loading = document.getElementById("loading");

  const glitchChars = "!@#$%^&*()_+-=<>?/[]{}";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {

      if (Math.random() < 0.3) {

        // ノイズON
        noise.classList.add("noise-active");

        // 画面歪み
        target.classList.add("glitch");

        // バグ文字
        target.textContent += glitchChars[Math.floor(Math.random() * glitchChars.length)];

        setTimeout(() => {
          target.textContent = target.textContent.slice(0, -1) + text[index];

          noise.classList.remove("noise-active");
          target.classList.remove("glitch");

        }, 80);

      } else {
        target.textContent += text[index];
      }

      index++;
      setTimeout(typeEffect, 120);

    } else {
      // 正常化
      noise.classList.add("noise-active");

      setTimeout(() => {
        target.textContent = text;
        noise.classList.remove("noise-active");
      }, 100);
    }
  }

  // タイピング
  typeEffect();

  // ローディング終了
  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.transition = "opacity 2s";

    setTimeout(() => {
      loading.style.display = "none";

      document.querySelector('.hero').classList.add('show');
    document.querySelector('.concept').classList.add('show');
    document.querySelector('.gallery').classList.add('show');

    }, 2000);

  }, 3500);

  const gallery = document.querySelector('.gallery');

  console.log(gallery.children.length);
  
gallery.innerHTML += gallery.innerHTML;

setTimeout(() => {
gallery.scrollLeft = gallery.scrollWidth / 2;
},0);

let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
  isDown = false;
});

gallery.addEventListener('mouseup', () => {
  isDown = false;
});

gallery.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 1.5;
  gallery.scrollLeft = scrollLeft - walk;
});

gallery.addEventListener('scroll', () => {
  const half = gallery.scrollWidth / 2;

  if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 10) {
    gallery.scrollLeft -= half;
  }

  if (gallery.scrollLeft <= 0) {
    gallery.scrollLeft += half;
  }
});

});