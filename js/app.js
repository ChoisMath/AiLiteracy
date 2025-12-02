// app.js - Main application logic for AI Literacy SPA

import translations from './translations.js';
import { router } from './router.js';

class App {
  constructor() {
    this.currentLang = 'ko'; // Default language
    this.translations = translations;
    this.init();
  }

  init() {
    // Load saved language preference or use default
    const savedLang = localStorage.getItem('currentLang') || 'ko';
    this.changeLanguage(savedLang, false);

    // Initialize sidebar toggle
    this.initSidebarToggle();

    // Initialize language buttons
    this.initLanguageButtons();

    console.log('AI Literacy Education App initialized');
  }

  initSidebarToggle() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (!hamburgerBtn || !sidebar || !overlay) return;

    // Toggle sidebar on hamburger click
    hamburgerBtn.addEventListener('click', () => {
      const isHidden = sidebar.classList.contains('hidden-mobile');

      if (isHidden) {
        sidebar.classList.remove('hidden-mobile');
        overlay.classList.remove('hidden');
      } else {
        sidebar.classList.add('hidden-mobile');
        overlay.classList.add('hidden');
      }
    });

    // Close sidebar when overlay is clicked
    overlay.addEventListener('click', () => {
      sidebar.classList.add('hidden-mobile');
      overlay.classList.add('hidden');
    });

    // Close sidebar on window resize if desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        overlay.classList.add('hidden');
      }
    });
  }

  initLanguageButtons() {
    const buttons = {
      'ko': document.getElementById('lang-ko'),
      'en': document.getElementById('lang-en'),
      'zh': document.getElementById('lang-zh')
    };

    Object.entries(buttons).forEach(([lang, button]) => {
      if (button) {
        button.addEventListener('click', () => this.changeLanguage(lang));
      }
    });
  }

  changeLanguage(lang, savePreference = true) {
    if (!this.translations[lang]) {
      console.error(`Language ${lang} not found`);
      return;
    }

    this.currentLang = lang;

    // Save language preference
    if (savePreference) {
      localStorage.setItem('currentLang', lang);
    }

    // Update all text elements
    this.updateAllTranslations();

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update button styles
    this.updateLanguageButtons();
  }

  updateAllTranslations() {
    const lang = this.currentLang;
    const trans = this.translations[lang];

    // Update all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      let value = null;

      // Check common keys first
      if (trans.common && trans.common[key]) {
        value = trans.common[key];
      } else {
        // Check current module keys
        const currentModule = this.getCurrentModule();
        if (currentModule && trans[currentModule] && trans[currentModule][key]) {
          value = trans[currentModule][key];
        } else {
          // Check all modules for navigation keys
          for (const moduleKey of Object.keys(trans)) {
            if (moduleKey.startsWith('module') && trans[moduleKey][key]) {
              value = trans[moduleKey][key];
              break;
            }
          }
        }
      }

      if (value) {
        // Handle both innerHTML and textContent
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.value = value;
        } else {
          element.innerHTML = value;
        }
      }
    });
  }

  getCurrentModule() {
    // Get current route from hash
    const hash = window.location.hash.slice(1) || 'home';
    if (hash.startsWith('module')) {
      return hash;
    }
    return null;
  }

  updateLanguageButtons() {
    const buttons = document.querySelectorAll('.lang-btn');

    buttons.forEach(btn => {
      const btnLang = btn.id.replace('lang-', '');

      if (btnLang === this.currentLang) {
        btn.classList.remove('bg-gray-200', 'text-gray-700');
        btn.classList.add('bg-indigo-600', 'text-white');
      } else {
        btn.classList.remove('bg-indigo-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
      }
    });
  }

  // Public method to get current language
  getCurrentLanguage() {
    return this.currentLang;
  }

  // Public method to get translation
  getTranslation(key, module = null) {
    const lang = this.currentLang;
    const trans = this.translations[lang];

    // Check common keys
    if (trans.common && trans.common[key]) {
      return trans.common[key];
    }

    // Check specific module
    if (module && trans[module] && trans[module][key]) {
      return trans[module][key];
    }

    // Check current module
    const currentModule = this.getCurrentModule();
    if (currentModule && trans[currentModule] && trans[currentModule][key]) {
      return trans[currentModule][key];
    }

    return key; // Return key if translation not found
  }
}

// Create global app instance
const app = new App();

// Export app for use in other modules
export default app;

// Make app globally accessible for debugging
window.app = app;

// Listen for route changes to update translations
window.addEventListener('hashchange', () => {
  // Small delay to ensure content is loaded
  setTimeout(() => {
    app.updateAllTranslations();
  }, 100);
});
