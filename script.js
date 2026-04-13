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
      // 最後は正常化
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
    }, 2000);

  }, 3500);

});