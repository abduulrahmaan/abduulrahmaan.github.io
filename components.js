// ============================================
// PUREPULSE — Shared Components
// Edit nav and footer here — updates all pages
// ============================================

// --- SEO META TAGS ---
const seoData = {
  'index.html': {
    title: 'PurePulse — Marketing & PR Agency in Karachi, Pakistan',
    description: 'PurePulse is a Karachi-based marketing and PR agency helping ambitious brands win attention, shape reputation, and grow revenue through performance marketing and modern public relations.',
    keywords: 'marketing agency karachi, PR agency pakistan, performance marketing pakistan, digital PR karachi, brand strategy pakistan',
  },
  'about.html': {
    title: 'About Us — PurePulse Marketing & PR Agency',
    description: 'Meet the team behind PurePulse — Pakistan\'s boldest marketing and PR agency. Built to make brands impossible to ignore.',
    keywords: 'about purepulse, marketing team karachi, PR agency team pakistan',
  },
  'services.html': {
    title: 'Services — PurePulse Marketing & PR Agency',
    description: 'Full-funnel marketing and PR services including Public Relations, Performance Marketing, Social & Creators, Digital PR, Brand & Content, and Reputation Management.',
    keywords: 'PR services pakistan, performance marketing services, social media agency karachi, digital PR services, brand strategy agency',
  },
  'contact.html': {
    title: 'Contact Us — PurePulse Marketing & PR Agency',
    description: 'Get in touch with PurePulse. Based in Karachi, Pakistan. Email us or WhatsApp +92 300 123 3661.',
    keywords: 'contact purepulse, marketing agency contact karachi, hire PR agency pakistan',
  },
};

function renderSEO(activePage) {
  const seo = seoData[activePage] || seoData['index.html'];
  document.title = seo.title;

  const setMeta = (name, content, prop = 'name') => {
    let tag = document.querySelector(`meta[${prop}="${name}"]`);
    if (!tag) { tag = document.createElement('meta'); tag.setAttribute(prop, name); document.head.appendChild(tag); }
    tag.setAttribute('content', content);
  };

  setMeta('description', seo.description);
  setMeta('keywords', seo.keywords);
  setMeta('author', 'PurePulse');
  setMeta('robots', 'index, follow');
  setMeta('og:title', seo.title, 'property');
  setMeta('og:description', seo.description, 'property');
  setMeta('og:type', 'website', 'property');
  setMeta('og:site_name', 'PurePulse', 'property');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', seo.title);
  setMeta('twitter:description', seo.description);
}

// --- NAVIGATION ---
function renderNav(activePage) {
  const pages = [
    { label: 'Home',     href: 'index.html' },
    { label: 'About',    href: 'about.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'Contact',  href: 'contact.html' },
  ];

  const links = pages.map(p => `
    <a href="${p.href}" ${activePage === p.href ? 'class="active"' : ''}>${p.label}</a>
  `).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <div class="mobile-menu" id="mobileMenu">
      ${pages.map(p => `<a href="${p.href}" onclick="closeMenu()">${p.label}</a>`).join('')}
      <a href="contact.html" class="mobile-cta" onclick="closeMenu()">Get Started</a>
    </div>
    <nav>
      <a href="index.html" class="nav-logo"><img src="logo.png" alt="PurePulse" style="height:38px;width:auto;display:block;"/></a>
      <div class="nav-links">
        ${links}
        <a href="contact.html" class="nav-cta">Get Started</a>
      </div>
      <button class="hamburger" id="hamburger" onclick="toggleMenu()">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;
}

// --- FOOTER ---
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-top">
        <div>
          <a href="index.html" class="footer-logo"><img src="logo.png" alt="PurePulse" style="height:52px;width:auto;display:block;"/></a>
          <p class="footer-tagline">Marketing & PR that moves at the speed of pulse.</p>
          <p class="footer-tagline" style="margin-top:6px;">Karachi, Pakistan</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>Pages</h4>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <a href="services.html">Public Relations</a>
            <a href="services.html">Performance Marketing</a>
            <a href="services.html">Social & Creators</a>
            <a href="services.html">Digital PR</a>
            <a href="services.html">Brand & Content</a>
            <a href="services.html">Reputation</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:thepursepulse&#64;gmail.com">thepursepulse&#64;gmail.com</a>
            <a href="tel:+923001233661">+92 300 123 3661</a>
            <a href="https://wa.me/923001233661" target="_blank">WhatsApp Us</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 PurePulse. All rights reserved.</span>
        <span>Pakistan's boldest marketing & PR agency.</span>
      </div>
    </footer>
  `;
}

// --- WHATSAPP FLOATING BUTTON ---
function renderWhatsApp() {
  const style = document.createElement('style');
  style.textContent = `
    .whatsapp-float {
      position: fixed; bottom: 28px; right: 28px;
      z-index: 999;
      display: flex; align-items: center; gap: 10px;
      background: #25D366; color: #fff;
      padding: 12px 20px 12px 14px;
      border-radius: 50px;
      text-decoration: none;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.8rem; font-weight: 500;
      letter-spacing: 0.04em;
      box-shadow: 0 4px 20px rgba(37,211,102,0.4);
      transition: transform 0.2s, box-shadow 0.2s;
      animation: waBounce 2s ease-in-out infinite;
    }
    .whatsapp-float:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 28px rgba(37,211,102,0.5);
      animation: none;
    }
    .whatsapp-float svg { width: 22px; height: 22px; flex-shrink: 0; }
    @keyframes waBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    @media (max-width: 600px) {
      .whatsapp-float span { display: none; }
      .whatsapp-float { padding: 14px; border-radius: 50%; bottom: 20px; right: 20px; }
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement('a');
  btn.href = 'https://wa.me/923001233661?text=Hi%20PurePulse%2C%20I%27d%20like%20to%20discuss%20a%20project.';
  btn.target = '_blank';
  btn.className = 'whatsapp-float';
  btn.setAttribute('aria-label', 'Chat on WhatsApp');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span>Chat with us</span>
  `;
  document.body.appendChild(btn);
}

// --- BACK TO TOP BUTTON ---
function renderBackToTop() {
  const style = document.createElement('style');
  style.textContent = `
    .back-to-top {
      position: fixed; bottom: 28px; left: 28px;
      z-index: 999;
      width: 44px; height: 44px;
      background: #1a1a1a;
      border: 1px solid #2e2e2e;
      color: #e8ff47;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
      opacity: 0; pointer-events: none;
      transition: opacity 0.3s, transform 0.3s, border-color 0.3s;
      font-size: 1.1rem;
    }
    .back-to-top.visible { opacity: 1; pointer-events: all; }
    .back-to-top:hover { border-color: #e8ff47; transform: translateY(-3px); }
    @media (max-width: 600px) {
      .back-to-top { bottom: 20px; left: 20px; width: 40px; height: 40px; }
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '↑';
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
}

// --- MOBILE MENU FUNCTIONS ---
function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// --- SCROLL REVEAL ---
function initScrollReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function renderNav(activePage) {
  const pages = [
    { label: 'Home',     href: 'index.html' },
    { label: 'About',    href: 'about.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'Contact',  href: 'contact.html' },
  ];

  const links = pages.map(p => `
    <a href="${p.href}" ${activePage === p.href ? 'class="active"' : ''}>${p.label}</a>
  `).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <div class="mobile-menu" id="mobileMenu">
      ${pages.map(p => `<a href="${p.href}" onclick="closeMenu()">${p.label}</a>`).join('')}
      <a href="contact.html" class="mobile-cta" onclick="closeMenu()">Get Started</a>
    </div>
    <nav>
      <a href="index.html" class="nav-logo"><img src="logo.png" alt="PurePulse" style="height:38px;width:auto;display:block;"/></a>
      <div class="nav-links">
        ${links}
        <a href="contact.html" class="nav-cta">Get Started</a>
      </div>
      <button class="hamburger" id="hamburger" onclick="toggleMenu()">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;
}

// --- FOOTER ---
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-top">
        <div>
          <a href="index.html" class="footer-logo"><img src="logo.png" alt="PurePulse" style="height:52px;width:auto;display:block;"/></a>
          <p class="footer-tagline">Marketing & PR that moves at the speed of pulse.</p>
          <p class="footer-tagline" style="margin-top:6px;">Karachi, Pakistan</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>Pages</h4>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <a href="services.html">Public Relations</a>
            <a href="services.html">Performance Marketing</a>
            <a href="services.html">Social & Creators</a>
            <a href="services.html">Digital PR</a>
            <a href="services.html">Brand & Content</a>
            <a href="services.html">Reputation</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:thepursepulse&#64;gmail.com">thepursepulse&#64;gmail.com</a>
            <a href="tel:+923001233661">+92 300 123 3661</a>
            <a href="https://wa.me/923001233661" target="_blank">WhatsApp Us</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 PurePulse. All rights reserved.</span>
        <span>Pakistan's boldest marketing & PR agency.</span>
      </div>
    </footer>
  `;
}

// --- MOBILE MENU FUNCTIONS ---
function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// --- SCROLL REVEAL ---
function initScrollReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
