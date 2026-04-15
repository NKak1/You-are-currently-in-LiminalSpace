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

        noise.classList.add("noise-active");
        target.classList.add("glitch");

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

      noise.classList.add("noise-active");

      setTimeout(() => {
        target.textContent = text;
        noise.classList.remove("noise-active");
      }, 100);
    }
  }

  // タイピング開始
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

  // 複製
  if (!gallery.classList.contains("cloned")) {
    gallery.innerHTML += gallery.innerHTML;
    gallery.classList.add("cloned");
  }

  const originalWidth = gallery.scrollWidth / 2;

  let timeout;

  gallery.addEventListener("scroll", () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {

      // 右端
      if (gallery.scrollLeft >= originalWidth) {
        gallery.scrollLeft -= originalWidth;
      }

      // 左端
      if (gallery.scrollLeft <= 0) {
        gallery.scrollLeft += originalWidth;
      }

    }, 180); 
  });

});