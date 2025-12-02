// router.js - Client-side routing for AI Literacy SPA

class Router {
  constructor() {
    this.routes = {
      'home': () => this.loadHomePage(),
      'module01': () => this.loadModule('01'),
      'module02': () => this.loadModule('02'),
      'module03': () => this.loadModule('03'),
      'module04': () => this.loadModule('04'),
      'module05': () => this.loadModule('05'),
      'module06': () => this.loadModule('06'),
      'module07': () => this.loadModule('07')
    };

    this.currentRoute = null;
    this.init();
  }

  init() {
    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());

    // Handle initial route
    this.handleRoute();
  }

  handleRoute() {
    // Get hash without the #
    const hash = window.location.hash.slice(1) || 'home';

    // Find matching route
    if (this.routes[hash]) {
      this.currentRoute = hash;
      this.routes[hash]();
      this.updateActiveLink(hash);
    } else {
      // Default to home if route not found
      window.location.hash = '#home';
    }
  }

  updateActiveLink(route) {
    // Remove active class from all links
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to current link
    const activeLink = document.querySelector(`[data-module="${route}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }

    // Close mobile sidebar after navigation
    if (window.innerWidth < 768) {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      if (sidebar && overlay) {
        sidebar.classList.add('hidden-mobile');
        overlay.classList.add('hidden');
      }
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async loadHomePage() {
    const content = document.getElementById('app-content');
    if (!content) return;

    content.innerHTML = `
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <span class="block text-indigo-600">AI 윤리 및 문해력 교육</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8" data-lang-key="home_subtitle">
          인공지능 시대를 살아가는 데 필요한 핵심 지식과 윤리적 사고를 배웁니다
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <!-- Module Cards -->
        <a href="#module01" class="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 class="ml-4 text-xl font-bold" data-lang-key="module01_nav">핵심 이해</h3>
          </div>
          <p class="text-gray-600" data-lang-key="module01_card_desc">AI의 기본 개념과 용어를 이해합니다</p>
        </a>

        <a href="#module02" class="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 class="ml-4 text-xl font-bold" data-lang-key="module02_nav">운영 기술</h3>
          </div>
          <p class="text-gray-600" data-lang-key="module02_card_desc">효과적인 프롬프트 작성법을 배웁니다</p>
        </a>

        <a href="#module03" class="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 class="ml-4 text-xl font-bold" data-lang-key="module03_nav">신중한 평가</h3>
          </div>
          <p class="text-gray-600" data-lang-key="module03_card_desc">AI 출력의 한계를 인식합니다</p>
        </a>

        <a href="#module04" class="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
              04
            </div>
            <h3 class="ml-4 text-xl font-bold" data-lang-key="module04_nav">실용적 통합</h3>
          </div>
          <p class="text-gray-600" data-lang-key="module04_card_desc">AI를 일상 업무에 효과적으로 활용합니다</p>
        </a>

        <a href="#module05" class="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg">
              05
            </div>
            <h3 class="ml-4 text-xl font-bold" data-lang-key="module05_nav">인식과 안전</h3>
          </div>
          <p class="text-gray-600" data-lang-key="module05_card_desc">AI 사용 시 안전과 윤리를 지킵니다</p>
        </a>

        <a href="#module06" class="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
              06
            </div>
            <h3 class="ml-4 text-xl font-bold" data-lang-key="module06_nav">시너지와 성장</h3>
          </div>
          <p class="text-gray-600" data-lang-key="module06_card_desc">AI와의 협업으로 성장합니다</p>
        </a>

        <a href="#module07" class="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
              07
            </div>
            <h3 class="ml-4 text-xl font-bold" data-lang-key="module07_nav">사회적 영향</h3>
          </div>
          <p class="text-gray-600" data-lang-key="module07_card_desc">AI가 사회에 미치는 영향을 이해합니다</p>
        </a>
      </div>

      <div class="bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 class="text-2xl font-bold mb-4" data-lang-key="home_cta_title">시작하기</h2>
        <p class="text-gray-700 mb-6" data-lang-key="home_cta_desc">
          좌측 메뉴에서 모듈을 선택하거나 Module 01부터 순서대로 학습하세요
        </p>
        <a href="#module01" class="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition">
          <span data-lang-key="home_cta_button">Module 01 시작하기</span> →
        </a>
      </div>
    `;
  }

  async loadModule(moduleNum) {
    const content = document.getElementById('app-content');
    if (!content) return;

    try {
      // Dynamically import the module content
      const module = await import(`../content/module${moduleNum}.js`);
      const moduleContent = module.getContent();

      // Wrap content in a container
      content.innerHTML = `<div class="max-w-5xl mx-auto">${moduleContent}</div>`;

      // Re-initialize accordion after content loads
      this.initializeAccordions();

    } catch (error) {
      console.error(`Error loading module ${moduleNum}:`, error);
      content.innerHTML = `
        <div class="text-center py-20">
          <h2 class="text-2xl font-bold text-red-600 mb-4">로딩 오류</h2>
          <p class="text-gray-600">모듈을 불러오는 중 오류가 발생했습니다.</p>
          <button onclick="location.reload()" class="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg">
            다시 시도
          </button>
        </div>
      `;
    }
  }

  initializeAccordions() {
    // Initialize accordion functionality
    document.querySelectorAll('.accordion-button').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-accordion-target');
        const targetBody = document.querySelector(targetId);
        if (!targetBody) return;

        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        targetBody.classList.toggle('hidden');
        button.setAttribute('aria-expanded', !isExpanded);
      });
    });
  }
}

// Export router instance
export const router = new Router();
export default router;
