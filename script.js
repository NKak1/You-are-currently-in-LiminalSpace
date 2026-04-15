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

const gallery = document.querySelector(".gallery");

if (!gallery.classList.contains("cloned")) {
  gallery.innerHTML += gallery.innerHTML;
  gallery.classList.add("cloned");
}

const originalWidth = gallery.scrollWidth / 2;

gallery.addEventListener("scroll", () => {

  if (gallery.scrollLeft >= originalWidth - 10) {
    gallery.scrollLeft -= originalWidth;
  }

  if (gallery.scrollLeft <= 10) {
    gallery.scrollLeft += originalWidth;
  }

});

let scrollSpeed = 0.5;
let isInteracting = false;

// マウス操作
gallery.addEventListener("mousedown", () => isInteracting = true);
gallery.addEventListener("mouseup", () => isInteracting = false);
gallery.addEventListener("mouseleave", () => isInteracting = false);

// スマホ操作
gallery.addEventListener("touchstart", () => isInteracting = true);
gallery.addEventListener("touchend", () => isInteracting = false);

// 複製
if (!gallery.classList.contains("cloned")) {
  gallery.innerHTML += gallery.innerHTML;
  gallery.classList.add("cloned");
}

let timeout;

gallery.addEventListener("scroll", () => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {

    if (gallery.scrollLeft >= originalWidth) {
      gallery.scrollLeft -= originalWidth;
    }

    if (gallery.scrollLeft <= 0) {
      gallery.scrollLeft += originalWidth;
    }

  }, 180); 
});

});