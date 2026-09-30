const strings = {
  en: {
    skipContent: 'Skip to content', portfolio: 'PERSONAL PORTFOLIO', profileImage: 'PROFILE IMAGE / 001', system: 'SYSTEM ONLINE', interface: 'INTERFACE', mainMenu: 'MAIN MENU', navHome: 'HOME', navProjects: 'PROJECTS', navExperience: 'EXPERIENCE', navSkills: 'SKILLS', navContact: 'CONTACT', radarLabel: 'OPEN TO REMOTE WORK', homeStatus: 'AVAILABLE FOR FREELANCE', heroEyebrow: 'WELCOME TO MY PORTFOLIO', heroRole: 'GAME DEVELOPER', heroDescription: 'I build interactive experiences and practical software. My work spans game development, web projects, and real-world café operations.', viewProjects: 'VIEW PROJECTS', getInTouch: 'GET IN TOUCH', currentFocus: 'CURRENT FOCUS', focusValue: 'GAME DEVELOPMENT & SOFTWARE', basedIn: 'BASED IN', locationValue: 'EAST JAVA, INDONESIA', nextStep: 'NEXT STEP', exploreWork: 'EXPLORE THE WORK ↗', projectCount: '03 SELECTED PROJECTS', projectEyebrow: 'SELECTED WORK', projectsTitle: 'PROJECTS<span class="title-period">.</span>', projectsIntro: 'Games and software projects, with links to the published work or source.', gameDevelopment: 'GAME DEVELOPMENT', webDevelopment: 'WEB DEVELOPMENT', gameProject: 'GAME PROJECT', restoDescription: 'A cooperative restaurant game for 1–4 players. I worked on the project as a game developer and programmer. The Steam page lists it as coming soon.', joyDescription: 'A public landing page repository for JoyCafe. It represents my work building a web presence for a café business.', soliDescription: 'A public Unity project repository from my game development work. Source and project files are available on GitHub.', steamPage: 'STEAM PAGE', viewRepository: 'VIEW REPOSITORY', experienceStatus: 'WORK & EDUCATION', experienceEyebrow: 'MY BACKGROUND', experienceTitle: 'EXPERIENCE<span class="title-period">.</span>', experienceIntro: 'A path through game development, software, and hands-on operations.', dateCafe: 'MAR 2026 — PRESENT', operations: 'OPERATIONS', cafeRole: 'General Manager', cafePlace: 'Kota Batu, East Java', dateDakoFreelance: 'DEC 2024 — JAN 2026', freelanceRole: 'Game Developer · Freelance', remote: 'Remote', dateLocale: 'DEC 2025 — APR 2026', hospitality: 'HOSPITALITY', baristaRole: 'Barista', malang: 'Malang, East Java', dateDakoIntern: 'DEC 2023 — DEC 2024', internRole: 'Game Developer · Internship', education: 'EDUCATION', softwareEngineering: 'SOFTWARE ENGINEERING', skillsStatus: 'TOOLS & STRENGTHS', skillsEyebrow: 'WHAT I WORK WITH', skillsTitle: 'SKILLS<span class="title-period">.</span>', skillsIntro: 'The areas that connect my game, software, and operational work.', skillGame: 'GAME DEVELOPMENT', skillGameText: 'Unity, game design, gameplay programming, interactive systems.', skillSoftware: 'SOFTWARE & WEB', skillSoftwareText: 'Web interfaces, React projects, practical digital tools.', skillCollaboration: 'COLLABORATION', skillCollaborationText: 'Communication, project work, cross-functional problem solving.', skillOperations: 'OPERATIONS', skillOperationsText: 'Café management and firsthand experience with real business workflows.', skillsNote: 'For code samples and project history, explore the public repositories on GitHub.', contactStatus: 'OPEN CHANNEL', contactEyebrow: "LET'S CONNECT", contactTitle: 'CONTACT<span class="title-period">.</span>', contactIntro: "I'm showcasing my work and open to remote projects and freelance opportunities.", haveProject: 'HAVE A PROJECT IN MIND?', contactLead: "LET'S BUILD SOMETHING GOOD.", footerStatus: 'PORTFOLIO STATUS: ONLINE', footerHint: 'USE THE MENU TO EXPLORE', bootText: 'INITIALIZING PORTFOLIO', skipIntro: 'SKIP INTRO ↗'
  },
  id: {
    skipContent: 'Langsung ke konten', portfolio: 'PORTOFOLIO PRIBADI', profileImage: 'GAMBAR PROFIL / 001', system: 'SISTEM AKTIF', interface: 'BAHASA', mainMenu: 'MENU UTAMA', navHome: 'BERANDA', navProjects: 'PROYEK', navExperience: 'PENGALAMAN', navSkills: 'KEAHLIAN', navContact: 'KONTAK', radarLabel: 'TERBUKA UNTUK KERJA REMOTE', homeStatus: 'TERBUKA UNTUK FREELANCE', heroEyebrow: 'SELAMAT DATANG DI PORTOFOLIO SAYA', heroRole: 'GAME DEVELOPER', heroDescription: 'Saya membuat pengalaman interaktif dan perangkat lunak yang berguna. Pekerjaan saya mencakup pengembangan game, proyek web, dan operasional kafe.', viewProjects: 'LIHAT PROYEK', getInTouch: 'HUBUNGI SAYA', currentFocus: 'FOKUS SAAT INI', focusValue: 'GAME & PERANGKAT LUNAK', basedIn: 'BERDOMISILI DI', locationValue: 'JAWA TIMUR, INDONESIA', nextStep: 'LANGKAH BERIKUTNYA', exploreWork: 'JELAJAHI KARYA ↗', projectCount: '03 PROYEK PILIHAN', projectEyebrow: 'KARYA PILIHAN', projectsTitle: 'PROYEK<span class="title-period">.</span>', projectsIntro: 'Game dan proyek perangkat lunak, dengan tautan ke karya yang dipublikasikan atau kode sumber.', gameDevelopment: 'PENGEMBANGAN GAME', webDevelopment: 'PENGEMBANGAN WEB', gameProject: 'PROYEK GAME', restoDescription: 'Game restoran kooperatif untuk 1–4 pemain. Saya terlibat sebagai game developer dan programmer. Halaman Steam mencantumkannya sebagai segera hadir.', joyDescription: 'Repositori publik landing page JoyCafe. Proyek ini menunjukkan pekerjaan saya membangun kehadiran web untuk bisnis kafe.', soliDescription: 'Repositori proyek Unity publik dari pekerjaan pengembangan game saya. Kode dan berkas proyek tersedia di GitHub.', steamPage: 'HALAMAN STEAM', viewRepository: 'LIHAT REPOSITORI', experienceStatus: 'KERJA & PENDIDIKAN', experienceEyebrow: 'LATAR BELAKANG SAYA', experienceTitle: 'PENGALAMAN<span class="title-period">.</span>', experienceIntro: 'Perjalanan saya dalam pengembangan game, perangkat lunak, dan operasional langsung.', dateCafe: 'MAR 2026 — SEKARANG', operations: 'OPERASIONAL', cafeRole: 'General Manager', cafePlace: 'Kota Batu, Jawa Timur', dateDakoFreelance: 'DES 2024 — JAN 2026', freelanceRole: 'Game Developer · Freelance', remote: 'Remote', dateLocale: 'DES 2025 — APR 2026', hospitality: 'HOSPITALITAS', baristaRole: 'Barista', malang: 'Malang, Jawa Timur', dateDakoIntern: 'DES 2023 — DES 2024', internRole: 'Game Developer · Magang', education: 'PENDIDIKAN', softwareEngineering: 'REKAYASA PERANGKAT LUNAK', skillsStatus: 'ALAT & KEKUATAN', skillsEyebrow: 'BIDANG YANG SAYA KERJAKAN', skillsTitle: 'KEAHLIAN<span class="title-period">.</span>', skillsIntro: 'Bidang yang menghubungkan pekerjaan game, perangkat lunak, dan operasional saya.', skillGame: 'PENGEMBANGAN GAME', skillGameText: 'Unity, desain game, pemrograman gameplay, sistem interaktif.', skillSoftware: 'PERANGKAT LUNAK & WEB', skillSoftwareText: 'Antarmuka web, proyek React, alat digital yang praktis.', skillCollaboration: 'KOLABORASI', skillCollaborationText: 'Komunikasi, kerja proyek, pemecahan masalah lintas fungsi.', skillOperations: 'OPERASIONAL', skillOperationsText: 'Manajemen kafe dan pengalaman langsung dengan alur kerja bisnis.', skillsNote: 'Untuk contoh kode dan riwayat proyek, jelajahi repositori publik saya di GitHub.', contactStatus: 'KANAL TERBUKA', contactEyebrow: 'MARI TERHUBUNG', contactTitle: 'KONTAK<span class="title-period">.</span>', contactIntro: 'Saya sedang menampilkan karya saya dan terbuka untuk proyek remote serta pekerjaan freelance.', haveProject: 'PUNYA IDE PROYEK?', contactLead: 'MARI BUAT SESUATU YANG BAGUS.', footerStatus: 'STATUS PORTOFOLIO: AKTIF', footerHint: 'GUNAKAN MENU UNTUK MENJELAJAHI', bootText: 'MEMUAT PORTOFOLIO', skipIntro: 'LEWATI INTRO ↗'
  }
};

Object.assign(strings.en, { homeCode: '// 01 — PROFILE', projectsCode: '// 02 — WORK', experienceCode: '// 03 — BACKGROUND', skillsCode: '// 04 — CAPABILITIES', contactCode: '// 05 — CONNECT' });
Object.assign(strings.id, { homeCode: '// 01 — PROFIL', projectsCode: '// 02 — KARYA', experienceCode: '// 03 — LATAR BELAKANG', skillsCode: '// 04 — KEMAMPUAN', contactCode: '// 05 — HUBUNGI' });
strings.en.restoDescription = 'A cooperative restaurant game for 1–4 players. I worked on the project as a game developer and programmer. Visit Steam for its current availability.';
strings.id.restoDescription = 'Game restoran kooperatif untuk 1–4 pemain. Saya terlibat sebagai game developer dan programmer. Lihat Steam untuk status ketersediaannya.';

const validSections = new Set(['home', 'projects', 'experience', 'skills', 'contact']);
const views = [...document.querySelectorAll('[data-view]')];
const links = [...document.querySelectorAll('[data-section]')];
const langToggle = document.getElementById('lang-toggle');
const boot = document.getElementById('boot');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let language = localStorage.getItem('portfolio-language') === 'id' ? 'id' : 'en';

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = strings[language][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  langToggle.querySelector('.lang-current').textContent = language.toUpperCase();
  langToggle.querySelector('.lang-other').textContent = language === 'en' ? 'ID' : 'EN';
  langToggle.setAttribute('aria-label', language === 'en' ? 'Switch to Indonesian' : 'Ganti ke bahasa Inggris');
  document.title = language === 'en' ? 'Varabi Mawardi | Game Developer' : 'Varabi Mawardi | Pengembang Game';
}

function showSection(section, focus = false) {
  const target = validSections.has(section) ? section : 'home';
  views.forEach((view) => { view.hidden = view.dataset.view !== target; });
  links.forEach((link) => {
    const active = link.dataset.section === target;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.querySelector('.main-panel').scrollTop = 0;
  if (focus) document.getElementById('main').focus({ preventScroll: true });
}

function syncRoute() {
  showSection(location.hash.slice(1));
}

function closeBoot() {
  boot.classList.add('boot-hidden');
  boot.setAttribute('aria-hidden', 'true');
  sessionStorage.setItem('portfolio-intro-seen', '1');
  window.setTimeout(() => { boot.hidden = true; }, 450);
}

langToggle.addEventListener('click', () => {
  language = language === 'en' ? 'id' : 'en';
  localStorage.setItem('portfolio-language', language);
  applyLanguage();
  updateClock();
});
document.getElementById('skip-boot').addEventListener('click', closeBoot);
window.addEventListener('hashchange', syncRoute);
links.forEach((link) => link.addEventListener('click', () => {
  if (location.hash.slice(1) === link.dataset.section) showSection(link.dataset.section, true);
}));

function updateClock() {
  document.getElementById('clock').textContent = new Intl.DateTimeFormat(language === 'en' ? 'en-GB' : 'id-ID', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()) + ' WIB';
}

applyLanguage();
syncRoute();
updateClock();
window.setInterval(updateClock, 30000);
if (reducedMotion || sessionStorage.getItem('portfolio-intro-seen')) closeBoot();
else window.setTimeout(closeBoot, 1450);
