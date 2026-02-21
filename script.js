/* ============================================================
   GRAŻYNA KRZEMIŃSKA — PAINTER PORTFOLIO
   script.js  —  All interactivity
============================================================ */

(function () {
  'use strict';

  /* ============================================================
     PAINTINGS DATA ARRAY
     Single source of truth for all portfolio content.
     To add a real image: add  image: 'images/portfolio/filename.jpg'
     to the relevant entry — no other changes needed.
  ============================================================ */
  const PAINTINGS = [
    // ── THE WOVEN FOREST ──────────────────────────────────────
    {
      id: 'wf-01',
      title: 'The Canopy Speaks',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '80 × 100 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest',
      description: 'Dappled light filters through an ancient forest canopy, the leaves rendered with the patient precision of a medieval illuminator.',
      placeholderColor: '#1B4D3E',
      aspectRatio: '3/4',
    },
    {
      id: 'wf-02',
      title: 'Roots in Amber',
      year: '2024',
      medium: 'Oil on Linen',
      dimensions: '60 × 80 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest',
      description: 'The exposed roots of an ancient oak, their forms almost figural — like hands grasping the earth, refusing to let go.',
      placeholderColor: '#2A5C46',
      aspectRatio: '4/3',
    },
    {
      id: 'wf-03',
      title: 'Fern Cathedral',
      year: '2023',
      medium: 'Oil on Canvas',
      dimensions: '100 × 130 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest',
      description: 'A large-scale work: a forest interior rendered as a Gothic nave, the ferns forming pointed arches of impossible green.',
      placeholderColor: '#163D30',
      aspectRatio: '3/4',
    },
    {
      id: 'wf-04',
      title: 'Evening Moss',
      year: '2023',
      medium: 'Oil on Board',
      dimensions: '40 × 50 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest',
      description: 'A close study of forest floor moss at dusk — the colours shifting from blue-green to a deep, almost audible silence.',
      placeholderColor: '#1E5240',
      aspectRatio: '4/5',
    },
    {
      id: 'wf-05',
      title: 'The Tangle',
      year: '2022',
      medium: 'Oil on Canvas',
      dimensions: '90 × 90 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest',
      description: 'A square composition of interlocking branches, painted from below — the sky almost entirely consumed by the forest.',
      placeholderColor: '#255040',
      aspectRatio: '1/1',
    },
    {
      id: 'wf-06',
      title: 'Birch in Late Light',
      year: '2022',
      medium: 'Oil on Canvas',
      dimensions: '70 × 100 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest',
      description: 'Three silver birches catch the last light of a winter afternoon, their white bark luminous against a violet sky.',
      placeholderColor: '#304840',
      aspectRatio: '7/10',
    },

    // ── VIGIL ─────────────────────────────────────────────────
    {
      id: 'vi-01',
      title: 'The Wait',
      year: '2022',
      medium: 'Oil on Canvas',
      dimensions: '70 × 90 cm',
      collection: 'vigil',
      collectionLabel: 'Vigil',
      description: 'A figure at a window, seen from behind. The world outside is a smear of grey light. The quality of attention is everything.',
      placeholderColor: '#4A1020',
      aspectRatio: '7/9',
    },
    {
      id: 'vi-02',
      title: 'Interior with Table',
      year: '2021',
      medium: 'Oil on Linen',
      dimensions: '50 × 65 cm',
      collection: 'vigil',
      collectionLabel: 'Vigil',
      description: 'An empty table. A single cup. The chair pushed slightly back. Someone has just left, or is about to return.',
      placeholderColor: '#3D0E1C',
      aspectRatio: '10/13',
    },
    {
      id: 'vi-03',
      title: 'Candlelight Study',
      year: '2021',
      medium: 'Oil on Board',
      dimensions: '30 × 40 cm',
      collection: 'vigil',
      collectionLabel: 'Vigil',
      description: 'A small, intimate study — a single candle, its flame rendered with extraordinary care, the surrounding dark absolute.',
      placeholderColor: '#5C1A2A',
      aspectRatio: '3/4',
    },
    {
      id: 'vi-04',
      title: 'Reading',
      year: '2020',
      medium: 'Oil on Canvas',
      dimensions: '60 × 75 cm',
      collection: 'vigil',
      collectionLabel: 'Vigil',
      description: 'A woman reads by the light of a lamp. The painting is entirely about the quality of absorption — how completely a book can take a person away.',
      placeholderColor: '#481228',
      aspectRatio: '4/5',
    },

    // ── REMNANTS ──────────────────────────────────────────────
    {
      id: 're-01',
      title: 'The Blue Dress',
      year: '2019',
      medium: 'Oil on Canvas',
      dimensions: '80 × 110 cm',
      collection: 'remnants',
      collectionLabel: 'Remnants',
      description: 'A dress draped over a chair — ultramarine silk, impossibly luminous, the chair itself almost irrelevant. Who wore it? Where have they gone?',
      placeholderColor: '#3A2010',
      aspectRatio: '8/11',
    },
    {
      id: 're-02',
      title: 'Cut Flowers',
      year: '2019',
      medium: 'Oil on Linen',
      dimensions: '50 × 60 cm',
      collection: 'remnants',
      collectionLabel: 'Remnants',
      description: 'Peonies at the exact moment before they begin to fall apart — held in their last fullness, the petals already curling at the edges.',
      placeholderColor: '#4A2A18',
      aspectRatio: '5/6',
    },
    {
      id: 're-03',
      title: 'The Glass',
      year: '2018',
      medium: 'Oil on Board',
      dimensions: '25 × 35 cm',
      collection: 'remnants',
      collectionLabel: 'Remnants',
      description: 'A half-empty wine glass on a white cloth. A small painting of monumental quiet.',
      placeholderColor: '#3C1C0E',
      aspectRatio: '5/7',
    },
    {
      id: 're-04',
      title: 'Autumn Table',
      year: '2017',
      medium: 'Oil on Canvas',
      dimensions: '70 × 70 cm',
      collection: 'remnants',
      collectionLabel: 'Remnants',
      description: 'A square still life: fallen leaves, a letter, a key. Objects that hold their meanings like stones hold warmth.',
      placeholderColor: '#502C10',
      aspectRatio: '1/1',
    },

    // ── STUDIES ───────────────────────────────────────────────
    {
      id: 'st-01',
      title: 'Figure Study I',
      year: '2024',
      medium: 'Oil on Paper',
      dimensions: '30 × 42 cm',
      collection: 'studies',
      collectionLabel: 'Studies',
      description: 'A quick oil study — the figure caught in a moment of unconscious grace, the brushwork rapid and alive.',
      placeholderColor: '#1A2D5A',
      aspectRatio: '5/7',
    },
    {
      id: 'st-02',
      title: 'Colour Study: Crimson',
      year: '2023',
      medium: 'Oil on Board',
      dimensions: '20 × 20 cm',
      collection: 'studies',
      collectionLabel: 'Studies',
      description: 'An exploration of crimson in all its registers — from blood to ember to the particular red of a rose seen in deep shadow.',
      placeholderColor: '#6B1A2A',
      aspectRatio: '1/1',
    },
    {
      id: 'st-03',
      title: 'Portrait of M.',
      year: '2023',
      medium: 'Oil on Canvas',
      dimensions: '40 × 50 cm',
      collection: 'studies',
      collectionLabel: 'Studies',
      description: 'A studio portrait, painted in a single session. The sitter asked not to be posed. The result is a painting about looking.',
      placeholderColor: '#2C3A6A',
      aspectRatio: '4/5',
    },
    {
      id: 'st-04',
      title: 'Sky Study',
      year: '2022',
      medium: 'Oil on Board',
      dimensions: '30 × 20 cm',
      collection: 'studies',
      collectionLabel: 'Studies',
      description: 'Painted outdoors, in under an hour. A cloud formation of unusual complexity — the kind of sky that makes you stop walking.',
      placeholderColor: '#3D5080',
      aspectRatio: '3/2',
    },
    {
      id: 'st-05',
      title: 'Hand Study',
      year: '2022',
      medium: 'Oil on Paper',
      dimensions: '25 × 30 cm',
      collection: 'studies',
      collectionLabel: 'Studies',
      description: 'A detailed study of an aged hand. The Pre-Raphaelites would have understood: every line in a hand is a story.',
      placeholderColor: '#243358',
      aspectRatio: '5/6',
    },
  ];

  /* ============================================================
     1. UTILITY
  ============================================================ */
  function getNavHeight() {
    const header = document.getElementById('site-header');
    return header ? header.getBoundingClientRect().height : 74;
  }

  /* ============================================================
     2. NAVIGATION
  ============================================================ */
  function initNavigation() {
    const header  = document.getElementById('site-header');
    const toggle  = document.querySelector('.navbar__toggle');
    const menu    = document.getElementById('navbar-menu');
    const navLinks = document.querySelectorAll('.navbar__link');
    const SCROLL_THRESHOLD = 80;

    // ── Sticky header on scroll ──
    function onHeaderScroll() {
      header.classList.toggle('site-header--scrolled', window.scrollY > SCROLL_THRESHOLD);
    }
    window.addEventListener('scroll', onHeaderScroll, { passive: true });
    onHeaderScroll(); // run once on load

    // ── Smooth scroll on nav link click ──
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - getNavHeight();
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        if (menu.classList.contains('is-open')) closeMenu();
      });
    });

    // ── Active section via IntersectionObserver ──
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('navbar__link--active', link.dataset.section === id);
          });
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });

    sections.forEach(s => sectionObserver.observe(s));

    // ── Mobile hamburger ──
    if (toggle) {
      toggle.addEventListener('click', () => {
        menu.classList.contains('is-open') ? closeMenu() : openMenu();
      });
    }

    function openMenu() {
      menu.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    // Close on outside click
    document.addEventListener('click', e => {
      if (
        menu.classList.contains('is-open') &&
        !menu.contains(e.target) &&
        toggle && !toggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
    });

    // Smooth scroll for footer nav links too
    document.querySelectorAll('.site-footer__nav a').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - getNavHeight(),
          behavior: 'smooth'
        });
      });
    });
  }

  /* ============================================================
     3. SCROLL ANIMATIONS
  ============================================================ */
  function initScrollAnimations() {
    const revealEls = document.querySelectorAll('.reveal-element');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px 0px 0px', threshold: 0 });

    revealEls.forEach(el => observer.observe(el));
  }

  // Call after any dynamic content is added
  function observeNewRevealElements() {
    const revealEls = document.querySelectorAll('.reveal-element:not(.is-visible)');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px 0px 0px', threshold: 0 });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ============================================================
     4. PARALLAX
  ============================================================ */
  function initParallax() {
    const layer = document.querySelector('.hero__parallax-layer');
    if (!layer) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          layer.style.transform = `translateY(${window.scrollY * 0.3}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }

    const hero = document.querySelector('.hero');
    if (!hero) return;

    const heroObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        window.addEventListener('scroll', onScroll, { passive: true });
      } else {
        window.removeEventListener('scroll', onScroll);
      }
    });
    heroObserver.observe(hero);
  }

  /* ============================================================
     5. PORTFOLIO
  ============================================================ */
  function initPortfolio() {
    const grid          = document.getElementById('portfolio-grid');
    const filterBtns    = document.querySelectorAll('.filter-btn');
    const lightbox      = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev  = document.getElementById('lightbox-prev');
    const lightboxNext  = document.getElementById('lightbox-next');
    const imgArea       = document.getElementById('lightbox-image-area');
    const lbTitle       = document.getElementById('lightbox-title');
    const lbMeta        = document.getElementById('lightbox-meta');
    const lbDesc        = document.getElementById('lightbox-desc');

    if (!grid || !lightbox) return;

    let currentFilter      = 'all';
    let filteredPaintings  = [...PAINTINGS];
    let currentLightboxIdx = -1;

    // ── Build a single portfolio item DOM node ──
    function createItem(painting, idx) {
      const article = document.createElement('article');
      article.className = 'portfolio-item reveal-element';
      article.setAttribute('role', 'listitem');
      article.setAttribute('tabindex', '0');
      article.setAttribute('aria-label', `${painting.title}, ${painting.year}. Press Enter to view.`);
      article.dataset.collection = painting.collection;
      article.dataset.idx = idx;

      const imageHTML = painting.image
        ? `<img src="${painting.image}"
               alt="${painting.title} — ${painting.medium}, ${painting.dimensions}, ${painting.year}"
               loading="lazy">`
        : `<div class="portfolio-item__placeholder"
               style="background-color:${painting.placeholderColor}; aspect-ratio:${painting.aspectRatio};"
               aria-hidden="true"></div>`;

      article.innerHTML = `
        <div class="portfolio-item__image-wrap">
          ${imageHTML}
          <div class="portfolio-item__hover-overlay">
            <div class="portfolio-item__hover-content">
              <span class="portfolio-item__hover-icon" aria-hidden="true">+</span>
              <p class="portfolio-item__hover-title">${painting.title}</p>
              <p class="portfolio-item__hover-meta">${painting.year} · ${painting.medium}</p>
            </div>
          </div>
        </div>
        <div class="portfolio-item__info">
          <h3 class="portfolio-item__title">${painting.title}</h3>
          <p class="portfolio-item__meta">${painting.year} · ${painting.collectionLabel}</p>
        </div>
      `;

      article.addEventListener('click', () => openLightbox(idx));
      article.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(idx); }
      });

      return article;
    }

    // ── Render grid from a paintings array ──
    function renderGrid(paintings) {
      grid.innerHTML = '';
      filteredPaintings = paintings;
      paintings.forEach((painting, idx) => {
        grid.appendChild(createItem(painting, idx));
      });
      // Stagger-reveal all items immediately (no IntersectionObserver —
      // opacity:0 on columns items creates blank gaps in the layout)
      const newItems = grid.querySelectorAll('.portfolio-item');
      newItems.forEach((item, i) => {
        setTimeout(() => item.classList.add('is-visible'), i * 45);
      });
    }

    // ── Filter ──
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if (filter === currentFilter) return;
        currentFilter = filter;

        filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
        btn.classList.add('filter-btn--active');

        // Animate out existing items
        const items = grid.querySelectorAll('.portfolio-item');
        items.forEach(item => item.classList.add('is-filtering-out'));

        setTimeout(() => {
          const result = filter === 'all'
            ? [...PAINTINGS]
            : PAINTINGS.filter(p => p.collection === filter);
          renderGrid(result); // renderGrid handles staggered reveal internally
        }, 290);
      });
    });

    // ── Lightbox: open ──
    function openLightbox(idx) {
      currentLightboxIdx = idx;
      populateLightbox(idx);
      lightbox.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => lightbox.classList.add('is-open'));
      lightboxClose.focus();
    }

    // ── Lightbox: close ──
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.addEventListener('transitionend', () => {
        lightbox.setAttribute('hidden', '');
        document.body.style.overflow = '';
      }, { once: true });
    }

    // ── Lightbox: populate content ──
    function populateLightbox(idx) {
      const p = filteredPaintings[idx];
      if (!p) return;

      if (p.image) {
        imgArea.innerHTML = `<img src="${p.image}"
          alt="${p.title} — ${p.medium}"
          style="max-width:100%; max-height:60vh; object-fit:contain; display:block;">`;
      } else {
        imgArea.innerHTML = '';
        imgArea.style.backgroundColor = p.placeholderColor;
        imgArea.style.aspectRatio = p.aspectRatio;
        imgArea.style.width = '100%';
        imgArea.style.maxHeight = '60vh';
      }

      lbTitle.textContent = p.title;
      lbMeta.textContent  = `${p.year} · ${p.medium} · ${p.dimensions}`;
      lbDesc.textContent  = p.description;

      lightboxPrev.disabled = (idx === 0);
      lightboxNext.disabled = (idx === filteredPaintings.length - 1);
    }

    // ── Lightbox: navigate ──
    function navigateLightbox(dir) {
      const newIdx = currentLightboxIdx + dir;
      if (newIdx < 0 || newIdx >= filteredPaintings.length) return;
      currentLightboxIdx = newIdx;
      populateLightbox(newIdx);
    }

    // Controls
    lightboxClose.addEventListener('click', closeLightbox);
    document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));

    // Keyboard
    document.addEventListener('keydown', e => {
      if (lightbox.hasAttribute('hidden')) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   navigateLightbox(-1);
      if (e.key === 'ArrowRight')  navigateLightbox(1);
    });

    // Touch/swipe on mobile
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 48) navigateLightbox(diff > 0 ? 1 : -1);
    });

    // ── Initial render ──
    renderGrid(PAINTINGS);
  }

  /* ============================================================
     6. COLLECTIONS  — "View Series" links trigger portfolio filter
  ============================================================ */
  function initCollections() {
    document.querySelectorAll('[data-filter-target]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.dataset.filterTarget;
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${target}"]`);
        if (filterBtn) filterBtn.click();

        // Scroll to portfolio after a brief delay (let filter trigger first)
        setTimeout(() => {
          const portfolio = document.getElementById('portfolio');
          if (portfolio) {
            window.scrollTo({
              top: portfolio.getBoundingClientRect().top + window.scrollY - getNavHeight(),
              behavior: 'smooth'
            });
          }
        }, 50);
      });
    });
  }

  /* ============================================================
     7. CONTACT FORM
  ============================================================ */
  function initContactForm() {
    const form      = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    if (!form) return;

    const rules = {
      name:    { required: true, minLength: 2,  message: 'Please enter your name (at least 2 characters).' },
      email:   { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' },
      message: { required: true, minLength: 10, message: 'Please write a message (at least 10 characters).' },
    };

    function validateField(name) {
      const field = form.elements[name];
      if (!field) return true;
      const rule  = rules[name];
      if (!rule)  return true;
      const val   = field.value.trim();
      const errEl = field.parentElement.querySelector('.form-error');
      let msg = '';

      if (rule.required && !val)                              msg = `${cap(name)} is required.`;
      else if (rule.minLength && val.length < rule.minLength) msg = rule.message;
      else if (rule.pattern && !rule.pattern.test(val))       msg = rule.message;

      field.classList.toggle('has-error', !!msg);
      field.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (errEl) errEl.textContent = msg;
      return !msg;
    }

    // Real-time validation on blur
    Object.keys(rules).forEach(name => {
      const field = form.elements[name];
      if (!field) return;
      field.addEventListener('blur', () => validateField(name));
      field.addEventListener('input', () => {
        if (field.classList.contains('has-error')) validateField(name);
      });
    });

    // Submit
    form.addEventListener('submit', e => {
      e.preventDefault();
      const valid = Object.keys(rules).map(validateField).every(Boolean);
      if (!valid) return;

      const btn = form.querySelector('[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending…';

      setTimeout(() => {
        form.reset();
        btn.disabled = false;
        btn.textContent = 'Send Message';
        showStatus('success', '✓ Thank you — your message has been sent. Grażyna will be in touch soon.');
      }, 1400);
    });

    function showStatus(type, msg) {
      statusDiv.removeAttribute('hidden');
      statusDiv.className = `form-status form-status--${type}`;
      statusDiv.textContent = msg;
      setTimeout(() => statusDiv.setAttribute('hidden', ''), 9000);
    }

    function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  }

  /* ============================================================
     8. FOOTER YEAR
  ============================================================ */
  function initFooterYear() {
    const el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ============================================================
     INIT
  ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initParallax();
    initPortfolio();
    initCollections();
    initContactForm();
    initFooterYear();
  });

})();
