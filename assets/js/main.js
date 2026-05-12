// EETC main.js — modern interactions:
// scroll progress, sakura particles, mouse parallax, 3D tilt, magnetic buttons,
// scroll reveal w/ stagger, animated counters, FAQ accordion, gallery filter,
// glassy header on scroll, floating WhatsApp + sticky CTA injection.

document.addEventListener('DOMContentLoaded', () => {

  // -------- Inject scroll progress bar --------
  const progress = document.createElement('div');
  progress.id = 'scroll-progress';
  document.body.appendChild(progress);

  // -------- Mobile menu --------
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // -------- Active nav link --------
  const path = (location.pathname.split('/').pop() || 'index.html').replace('.html','');
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('data-page') === path) a.classList.add('active');
  });

  // -------- Scroll-driven effects (progress bar + header glass) --------
  const header = document.getElementById('site-header');
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = pct + '%';
    if (header) {
      if (window.scrollY > 12) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  // -------- Reveal on scroll (with auto-stagger inside grids) --------
  // auto-assign a data-stagger to siblings inside grid containers
  document.querySelectorAll('.grid, .bento').forEach(g => {
    let i = 0;
    g.querySelectorAll(':scope > .reveal, :scope > .reveal-left, :scope > .reveal-right, :scope > .reveal-zoom')
      .forEach(el => {
        if (!el.hasAttribute('data-stagger')) el.setAttribute('data-stagger', String((i % 6) + 1));
        i++;
      });
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.10 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom')
    .forEach(el => obs.observe(el));

  // -------- Counter animation --------
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        const dur = 1800;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          const v = (target * eased).toFixed(decimals);
          el.textContent = v + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        counterObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter[data-count]').forEach(el => counterObs.observe(el));

  // -------- FAQ accordion --------
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      const group = item.parentElement;
      group.querySelectorAll('.faq-item.open').forEach(x => x.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // -------- Gallery filter --------
  const filterBtns = document.querySelectorAll('.gallery-filter button');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.gallery-item').forEach(item => {
          const cats = (item.getAttribute('data-cat') || '').split(/\s+/);
          if (cat === 'all' || cats.includes(cat)) item.classList.remove('hidden');
          else item.classList.add('hidden');
        });
      });
    });
  }

  // -------- 3D tilt on .tilt elements --------
  document.querySelectorAll('.tilt').forEach(el => {
    let rect = null;
    const onEnter = () => { rect = el.getBoundingClientRect(); };
    const onMove = (e) => {
      if (!rect) rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -8; // tilt up/down
      const ry = ((x / rect.width)  - 0.5) *  8; // tilt left/right
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => {
      el.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
    };
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
  });

  // -------- Spotlight cursor on .service-card (CSS variables) --------
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  // -------- Magnetic effect on .magnetic buttons --------
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0,0)';
    });
  });

  // -------- Mouse parallax on hero floats --------
  const heroParallaxItems = document.querySelectorAll('[data-parallax]');
  if (heroParallaxItems.length) {
    document.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      heroParallaxItems.forEach(el => {
        const factor = parseFloat(el.getAttribute('data-parallax')) || 10;
        el.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      });
    });
  }

  // -------- Sakura petal particle system (only on .sakura-host containers) --------
  document.querySelectorAll('.sakura-host').forEach(host => {
    const field = document.createElement('div');
    field.className = 'sakura-field';
    host.appendChild(field);
    const PETALS = 18;
    for (let i = 0; i < PETALS; i++) {
      const p = document.createElement('span');
      p.className = 'petal';
      const left = Math.random() * 100;
      const drift = (Math.random() * 200 - 100).toFixed(0);
      const dur = (8 + Math.random() * 10).toFixed(1);
      const delay = (Math.random() * 12).toFixed(1);
      const size = (10 + Math.random() * 8).toFixed(0);
      const op = (0.5 + Math.random() * 0.4).toFixed(2);
      p.style.left = left + '%';
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.opacity = op;
      p.style.setProperty('--drift', drift + 'px');
      p.style.animationDuration = dur + 's';
      p.style.animationDelay = delay + 's';
      field.appendChild(p);
    }
  });

  // -------- Inject floating WhatsApp button + mobile sticky CTA --------
  const phone = '8801409993773';
  const wa = document.createElement('a');
  wa.href = `https://wa.me/${phone}?text=${encodeURIComponent("Hello EETC, I'd like to know more about your Japan services.")}`;
  wa.target = '_blank'; wa.rel = 'noopener';
  wa.className = 'whatsapp-float';
  wa.setAttribute('aria-label', 'Chat on WhatsApp');
  wa.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
  document.body.appendChild(wa);

  const cta = document.createElement('div');
  cta.className = 'sticky-cta';
  cta.innerHTML = `
    <div class="text-sm font-semibold">Free Counseling Available</div>
    <a href="contact.html" class="btn-primary px-4 py-2 text-sm">Apply</a>
  `;
  document.body.appendChild(cta);
});
