// src/utils/scrollEffects.js
// FINAL HARDENED VERSION — guaranteed not to break React

(function () {
  const safe = (fn) => { try { fn(); } catch (e) { /* fail silently */ } };
  const qs = (s) => { try { return document.querySelector(s) || null; } catch { return null; } };
  const qsa = (s) => { try { return Array.from(document.querySelectorAll(s)); } catch { return []; } };

  /* ----------------------------------------------------------
     1. SCROLL REVEAL
  ---------------------------------------------------------- */
  function initScrollReveal() {
    safe(() => {
      const items = qsa(".reveal-on-scroll, .fade-in, .fade-up, .fade-left, .fade-right, .scale-up, .rotate-fade, .drift-fade");
      if (!items.length) return;

      if (!("IntersectionObserver" in window)) {
        items.forEach((el) => safe(() => el.classList.add("active")));
        return;
      }

      const obs = new IntersectionObserver(
        (entries) => {
          safe(() => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                safe(() => entry.target.classList.add("active"));
                obs.unobserve(entry.target);
              }
            });
          });
        },
        { threshold: 0.1 }
      );

      items.forEach((el) => safe(() => obs.observe(el)));
    });
  }

  /* ----------------------------------------------------------
     2. STAGGER ANIMATION
  ---------------------------------------------------------- */
  function initStagger() {
    safe(() => {
      const groups = qsa(".stagger");
      groups.forEach((group) => {
        const obs = new IntersectionObserver(
          (entries) => {
            safe(() => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  [...group.children].forEach((child, i) => {
                    safe(() => {
                      child.style.animationDelay = `${i * 0.12}s`;
                      child.classList.add("active");
                    });
                  });
                  obs.unobserve(group);
                }
              });
            });
          },
          { threshold: 0.2 }
        );

        safe(() => obs.observe(group));
      });
    });
  }

  /* ----------------------------------------------------------
     3. HERO PARALLAX + LENS BLUR
  ---------------------------------------------------------- */
  function initHeroParallax() {
    safe(() => {
      const hero = qs(".hero-wrapper");
      const content = qs(".hero-content");
      const lens = qs(".lens-blur");

      if (!hero || !content) return;

      window.addEventListener("scroll", () => {
        safe(() => {
          const rect = hero.getBoundingClientRect();
          const progress = rect.top / window.innerHeight;

          content.style.transform = `translateY(${progress * 30}px)`;

          if (lens) {
            const blur = Math.max(0, progress * -15);
            const opacity = Math.min(1, Math.max(0, progress * -1));
            lens.style.backdropFilter = `blur(${blur}px)`;
            lens.style.opacity = opacity;
          }
        });
      });
    });
  }

  /* ----------------------------------------------------------
     4. CURSOR GLOW
  ---------------------------------------------------------- */
  function initCursorGlow() {
    safe(() => {
      if (window.innerWidth < 800) return;

      const glow = document.createElement("div");
      glow.id = "cursor-glow";
      document.body.appendChild(glow);

      let mx = -1000, my = -1000;
      let x = mx, y = my;

      window.addEventListener("mousemove", (e) => {
        safe(() => {
          mx = e.clientX;
          my = e.clientY;
        });
      });

      const animate = () => {
        safe(() => {
          x += (mx - x) * 0.12;
          y += (my - y) * 0.12;
          glow.style.transform = `translate(${x - 45}px, ${y - 45}px)`;
        });
        requestAnimationFrame(animate);
      };

      animate();
    });
  }

  /* ----------------------------------------------------------
     5. PAGE LOADER
  ---------------------------------------------------------- */
  function initLoader() {
    safe(() => {
      const loader = qs("#page-loader");
      if (!loader) return;

      const hide = () => {
        safe(() => {
          loader.classList.add("page-loader--hide");
          setTimeout(() => safe(() => loader.remove()), 700);
        });
      };

      if (document.readyState === "complete") {
        setTimeout(hide, 400);
      } else {
        window.addEventListener("load", () => setTimeout(hide, 400));
      }

      setTimeout(hide, 2000); // safety fallback
    });
  }

  /* ----------------------------------------------------------
     6. INITIALIZE EVERYTHING SAFELY
  ---------------------------------------------------------- */
  function initAll() {
    safe(initScrollReveal);
    safe(initStagger);
    safe(initHeroParallax);
    safe(initCursorGlow);
    safe(initLoader);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => safe(initAll));
  } else {
    safe(initAll);
  }
})();
