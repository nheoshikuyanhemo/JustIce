// ============================
// JUST ICE - Cyber Security Website
// ============================

/* ============================
   BOOT SEQUENCES (Intro/Outro)
   ============================ */
const introBootText = `> INITIALIZING JUSTICE PROTOCOL...
> SCANNING FOR SCAMMERS...
> THREAT LEVEL: HOT
> COUNTERMEASURE: ICE`;

const intro = {
  overlay: document.getElementById('intro-overlay'),
  boot: document.getElementById('intro-boot'),
  bootText: document.getElementById('boot-text'),
  glitch: document.getElementById('intro-glitch'),
  reveal: document.getElementById('intro-reveal'),
  skipBtn: document.getElementById('skip-intro'),
  
  bootTimer: null,
  
  init() {
    this.skipBtn.addEventListener('click', () => this.skip());
    
    const bootSpans = [];
    let cursor = '';
    introBootText.split('\n').forEach((line, lineIdx) => {
      line.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        bootSpans.push({ span, char });
      });
      if (lineIdx < introBootText.split('\n').length - 1) {
        const nl = document.createElement('span');
        nl.textContent = '\n';
        bootSpans.push({ span: nl, char: '\n' });
      }
    });
    
    this.bootText.innerHTML = '';
    bootSpans.forEach(({span}) => this.bootText.appendChild(span));
    
    this.reveal.innerHTML = 'J U S T &nbsp; I C E';
    this.reveal.textContent = 'JUST ICE.';
    const letters = this.reveal.textContent.split('');
    this.reveal.innerHTML = letters.map((l, i) => 
      `<span class="intro-letter" style="display:inline-block;margin:0 0.1em">${l === ' ' ? '&nbsp;' : l}</span>`
    ).join('');
    
    this.startSequence();
  },
  
  startSequence() {
    this.bootTimer = setTimeout(() => this.start(), 800);
  },
  
  start() {
    this.boot.classList.add('show');
    
    let i = 0;
    const typeInterval = setInterval(() => {
      const chars = this.bootText.textContent.slice(0, i).split('');
      this.bootText.textContent = chars.map((c, ci) => {
        const child = this.bootText.childNodes[ci];
        if (child && child.nodeType === 3) {
          return c;
        }
        return child ? child.textContent : c;
      }).join('');
      i++;
      if (i > this.bootText.textContent.length) i = this.bootText.textContent.length;
    }, 30);
    
    setTimeout(() => {
      clearInterval(typeInterval);
      this.boot.classList.add('show');
      this.glitch.classList.add('show');
    }, introBootText.length * 30 + 200);
    
    setTimeout(() => {
      this.glitch.classList.remove('show');
      this.reveal.classList.add('show');
      this.playRevealSounds();
    }, 2200);
    
    setTimeout(() => {
      this.reveal.classList.remove('show');
      this.hide();
    }, 6000);
  },
  
  playRevealSounds() {
    this.reveal.querySelectorAll('.intro-letter').forEach((span, i) => {
      setTimeout(() => {
        span.style.transition = 'all 0.15s ease-out';
        span.style.opacity = '1';
        span.style.transform = 'translateY(0) scale(1)';
        if (span.textContent.trim() === 'I') {
          span.style.color = 'var(--neon-cyan)';
          span.style.textShadow = '0 0 30px var(--neon-cyan)';
        }
      }, i * 150);
    });
  },
  
  hide() {
    this.boot.classList.remove('show');
    this.glitch.classList.remove('show');
    this.reveal.classList.remove('show');
    this.skipBtn.classList.remove('show');
    this.overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  },
  
  skip() {
    clearTimeout(this.bootTimer);
    this.hide();
  }
};

/* ============================
   OUTRO SEQUENCE
   ============================ */
const outro = {
  overlay: document.getElementById('outro-overlay'),
  frost: document.querySelector('.outro-frost'),
  text: document.getElementById('outro-text'),
  sub: document.getElementById('outro-sub'),
  active: false,
  
  async trigger() {
    if (this.active) return;
    this.active = true;
    
    this.overlay.classList.add('active');
    this.frost.style.animation = 'none';
    this.frost.offsetHeight; // trigger reflow
    this.frost.style.animation = 'frost 2s ease-out forwards';
    this.text.classList.add('outro-melt');
    
    await new Promise(r => setTimeout(r, 2000));
    this.text.classList.remove('outro-melt');
    this.text.textContent = 'SYSTEM SECURED.';
    this.text.style.animation = 'none';
    this.text.offsetHeight;
    this.text.style.animation = 'glitch 3s infinite';
    this.sub.classList.add('show');
    this.sub.textContent = 'JUSTICE SERVED COLD.\nSEE YOU IN THE ICE AGE.';
    
    await new Promise(r => setTimeout(r, 4000));
    
    const messages = ['SYSTEM SECURED.', 'JUSTICE SERVED COLD.', 'SEE YOU IN THE ICE AGE.'];
    let msgIdx = 0;
    const pulseDot = document.createElement('div');
    pulseDot.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background: var(--neon-cyan);
      border-radius: 50%;
      box-shadow: 0 0 30px var(--neon-cyan);
      animation: pulseGlow 1.5s ease-in-out infinite;
      z-index: 100000;
    `;
    document.body.appendChild(pulseDot);
    
    await new Promise(r => setTimeout(r, 3000));
    pulseDot.style.opacity = '0';
    pulseDot.style.transition = 'opacity 2s ease-out';
    await new Promise(r => setTimeout(r, 2000));
    
    this.overlay.classList.remove('active');
    this.frost.style.animation = 'none';
    this.sub.classList.remove('show');
    this.active = false;
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && intro.overlay.classList.contains('active')) {
    intro.skip();
  }
});

window.addEventListener('load', () => {
  intro.init();
  document.body.style.overflow = 'hidden';
  intro.skipBtn.classList.add('show');
});

/* ============================
   MATRIX RAIN (Cyber Security)
   ============================ */
(function() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const chars = '01⚖🔨❄ｱｲｳｴｵｶｷｸｹｺ'.split('');
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(Math.floor(columns)).fill(1);
  
  const threatColumns = new Set();
  setInterval(() => {
    threatColumns.clear();
    if (Math.random() > 0.3) {
      const col = Math.floor(Math.random() * columns);
      threatColumns.add(col);
      setTimeout(() => threatColumns.delete(col), 600);
    }
  }, 4000);
  
  let lastThreatTime = 0;
  
  const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
    ctx.textBaseline = 'top';
    
    const now = Date.now();
    if (now - lastThreatTime > 20000) {
      lastThreatTime = now;
      const col = Math.floor(Math.random() * columns);
      threatColumns.add(col);
      setTimeout(() => threatColumns.delete(col), 600);
    }
    
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      
      if (threatColumns.has(i)) {
        ctx.fillStyle = 'rgba(255, 0, 60, 0.35)';
        ctx.shadowColor = '#FF003C';
        ctx.shadowBlur = 4;
      } else {
        ctx.fillStyle = Math.random() > 0.9 ? 'rgba(160, 231, 229, 0.4)' : 'rgba(0, 240, 255, 0.35)';
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = 2;
      }
      
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };
  
  const interval = setInterval(draw, 60);
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
})();

/* ============================
   FROST CURSOR
   ============================ */
(function() {
  const container = document.getElementById('frost-container');
  if (!container) return;
  
  let lastX = -1, lastY = -1;
  
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - (container.dataset.lastMove || 0) < 50) return;
    container.dataset.lastMove = now;
    
    const x = e.clientX, y = e.clientY;
    if (Math.abs(x - lastX) < 10 && Math.abs(y - lastY) < 10) return;
    lastX = x;
    lastY = y;
    
    const dot = document.createElement('div');
    dot.className = 'frost-cursor';
    dot.style.left = (x - 6) + 'px';
    dot.style.top = (y - 6) + 'px';
    dot.style.background = Math.random() > 0.7 ? 'var(--neon-cyan)' : 'var(--neon-blue)';
    container.appendChild(dot);
    
    setTimeout(() => dot.remove(), 1000);
  });
})();

/* ============================
   CLICK RIPPLE
   ============================ */
document.addEventListener('click', function(e) {
  if (e.target.closest('button, .nav-link, .meme-card')) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = e.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    e.target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
});

/* ============================
   ENTER FREEZE BUTTON
   ============================ */
const enterBtn = document.querySelector('.enter-freeze-btn');
enterBtn?.addEventListener('click', function(e) {
  e.preventDefault();
  
  const target = document.querySelector('#about');
  if (!target) return;
  
  this.classList.add('flash');
  
  setTimeout(() => {
    this.classList.remove('flash');
    const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }, 200);
});

/* ============================
   OUTRO ON SCROLL (footer reach)
   ============================ */
(function() {
  let ticking = false;
  
  function checkFooter() {
    const footer = document.querySelector('.footer');
    if (!footer) {
      ticking = false;
      return;
    }
    const rect = footer.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.75 && !outro.active) {
      outro.trigger();
    }
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(checkFooter);
      ticking = true;
    }
  }, { passive: true });
})();

/* ============================
   SCROLL REVEAL (decrypt effect)
   ============================ */
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-block--visible');
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.section, .feature-card, .meme-card, .ca-box, .why-column').forEach(el => {
    observer.observe(el);
  });
})();

/* ============================
   MENU TOGGLE (MOBILE)
   ============================ */

// Burger button menu toggle
const burgerBtn = document.getElementById('burgerBtn');
if (burgerBtn) {
  burgerBtn.addEventListener('click', () => {
    const header = document.querySelector('.header');
    if (header) {
      header.classList.toggle('menu-open');
    }
  });
}

/* Optional: Close menu when nav-link clicked */
if (burgerBtn) {
  const headerNavLinks = document.querySelectorAll('.header-nav a');
  headerNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      const header = document.querySelector('.header');
      if (header && header.classList.contains('menu-open')) {
        header.classList.remove('menu-open');
      }
    });
  });
}

/* Optional: Close menu on scroll */
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header && header.classList.contains('menu-open')) {
    header.classList.remove('menu-open');
  }
});


/* ============================
   SCROLL BLUR OVERLAY (MOBILE)
   ============================ */
(function() {
  let scrollTimeout;
  const overlay = document.getElementById('scroll-blur-overlay');
  if (!overlay) return;

  const checkScroll = () => {
    if (window.innerWidth <= 768) {
      // Check if we're near the bottom of the page
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      // If within 200px of bottom, show blur
      if (scrollPosition >= pageHeight - 200) {
        overlay.classList.add('active');
      } else {
        overlay.classList.remove('active');
      }
    } else {
      // Hide on desktop
      overlay.classList.remove('active');
    }
  };

  // Throttle scroll events for performance
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkScroll, 100);
  });

  // Also check on resize and load
  window.addEventListener('resize', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkScroll, 100);
  });

  window.addEventListener('load', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkScroll, 100);
  });
})();
