window.addEventListener("load", () => {

  try {

    const loading = document.getElementById("loading");
    const target = document.getElementById("loading-text");
    const noise = document.getElementById("noise");

    const text = "Now Loading...";
    const glitchChars = "!@#$%^&*()_+-=<>?/[]{}";
    let index = 0;

    // ===== 初回判定（タブごと）=====
    const isFirstVisit = !sessionStorage.getItem("visited");

    if (isFirstVisit) {
      sessionStorage.setItem("visited", "true");

      // アラート
      window.alert('Welcome to LiminalSpace !');

      // ===== タイピング =====
      function typeEffect() {
        if (!target) return;

        if (index < text.length) {

          if (Math.random() < 0.3 && noise) {
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
          if (noise) {
            noise.classList.add("noise-active");

            setTimeout(() => {
              target.textContent = text;
              noise.classList.remove("noise-active");
            }, 100);
          }
        }
      }

      typeEffect();

      // ===== ローディング終了 =====
      setTimeout(() => {
        if (loading) {
          loading.style.opacity = "0";
          loading.style.transition = "opacity 2s";

          setTimeout(() => {
            loading.style.display = "none";

            showContent();

          }, 2000);
        }
      }, 3500);

    } else {
      if (loading) loading.style.display = "none";
      showContent();
    }

    // ===== 表示処理 =====
    function showContent() {
      const hero = document.querySelector('.hero');
      const concept = document.querySelector('.concept');
      const gallery = document.querySelector('.gallery');

      if (hero) hero.classList.add('show');
      if (concept) concept.classList.add('show');
      if (gallery) gallery.classList.add('show');
    }

    // ===== 横スクロール =====
    const gallery = document.querySelector(".gallery");

    if (gallery && !gallery.classList.contains("looped")) {

      gallery.innerHTML += gallery.innerHTML;
      gallery.classList.add("looped");

      const originalWidth = gallery.scrollWidth / 2;
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

        }, 120);
      });
    }

  } catch (e) {
    console.error("エラー出てる👇", e);
  }

});
