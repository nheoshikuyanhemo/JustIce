/* JUST ICE - Internationalization Dictionary */
window.I18N = {
  en: {
    "nav.about": "WHAT IS",
    "nav.why": "WHY ICE",
    "nav.cool": "THE COOL SIDE",
    "nav.ca": "CONTRACT",
    "nav.twitter": "X / TWITTER",
    "nav.telegram": "TELEGRAM",
    "nav.buy": "BUY $JUSTICE",
    "feature.cold": "Calm. Unbothered.",
    "feature.fair": "No favorites. No exceptions.",
    "feature.sharp": "Shattering the scammers.",
    "ca.warning": "Always verify the CA. Scammers are hot garbage. We are ice."
  }
};

function applyLang(lang) {
  const dict = window.I18N[lang] || window.I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      if (el.hasAttribute('data-type')) {
        el.setAttribute('data-type', dict[key]);
      } else {
        el.textContent = dict[key];
      }
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem('justice_lang', lang);
}

function initI18n() {
  const saved = localStorage.getItem('justice_lang') || 'en';
  applyLang(saved);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}