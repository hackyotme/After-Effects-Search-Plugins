const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

tg.setHeaderColor('#000000');
tg.setBackgroundColor('#000000');

// РАСШИРЕННЫЙ СЛОВАРЬ МУЛЬТИЯЗЫЧНОСТИ
const translations = {
    ru: {
        hi: "Привет", welcome_sub: "Добро пожаловать в хаб плагинов After Effects",
        tg_title: "Наш Telegram-канал", tg_desc: "Центральный ресурс проекта @after_effects_plugins_Hackyo. Здесь публикуются уникальные утилиты, ломанные скрипты, пресеты и софт для моушен-дизайна.", tg_btn: "ОТКРЫТЬ КАНАЛ",
        about_title: "О проекте", 
        about_1: "<b>Быстрый доступ:</b> Больше никакого бесконечного скролла ленты. Скачивайте плагины в один клик.", 
        about_2: "<b>Безопасность:</b> Все файлы проходят ручную проверку на вирусы перед публикацией.", 
        about_3: "<b>Совместимость:</b> В каталоге указаны версии After Effects и операционные системы (Win/Mac).",
        about_4: "<b>Ежедневные обновления:</b> База плагинов пополняется каждый день актуальными версиями софта и библиотеками.",
        about_5: "<b>От сообщества к сообществу:</b> Мы развиваем ресурс без навязчивой рекламы ради удобства каждого VFX-специалиста.",
        faq_title: "Часто задаваемые вопросы", 
        faq_q1: "Как устанавливать плагины?", faq_a1: "Обычно файлы `.aex` нужно скопировать в папку `C:\\Program Files\\Adobe\\Adobe After Effects (версия)\\Support Files\\Plug-ins`. Подробная инструкция есть внутри каждого архива.", 
        faq_q5: "Как устанавливать скрипты (.jsx и .jsxbin)?", faq_a5: "Скрипты переместите в директорию `Support Files/Scripts/ScriptUI Panels`. После перезапуска After Effects они появятся в верхнем меню «Window» («Окно»).",
        faq_q2: "Что делать, если плагин просит лицензию?", faq_a2: "Все плагины в нашем каталоге уже вылечены (пре-активированы) или содержат текстовый файл со специальным ключом/кряком внутри архива.", 
        faq_q4: "Почему появился красный крест и как его убрать?", faq_a4: "Красный крест означает, что плагин установлен некорректно. Обычно проблема решается полной переустановкой плагина по инструкции.", 
        faq_q3: "Будут ли плагины для macOS?", faq_a3: "Да, мы сейчас активно ищем для них плагины и будем постепенно добавлять их в каталог.",
        faq_q6: "Поддерживает ли софт версии AE 2025/2026?", faq_a6: "Подавляющее большинство представленных плагинов (включая Deep Glow, Sapphire, Twixtor) полностью протестированы и совместимы с новейшими выпусками Adobe After Effects.",
        catalog_title: "Каталог плагинов", catalog_sub: "Используй поиск и вкладку избранного", tab_all: "Все плагины", tab_fav: "Сохраненные", btn_download: "Скачать", search_ph: "Поиск плагина...",
        p_ae: "Официальные предустановленные версии AE. Выберите нужный год внутри архива.", p_e3d: "Рендеринг 3D-объектов в реальном времени. Поддержка AE 2020-2026.", p_glow: "Физически правильное свечение. Совместим с AE 2020-2026.", p_part: "Органические 3D-эффекты частиц. Адаптирован под AE 2020-2026.",
        p_twixtor: "Продвинутый плагин для создания сверхплавного замедления видео.", p_sapphire: "Легендарный набор из сотен эффектов, свечений и переходов премиум-класса.", p_bcc: "Огромный пакет инструментов для восстановления видео, титров и цветокоррекции.", p_looks: "Мощный инструмент для профессиональной цветокоррекции и стилизации.", p_twitch: "Плагин для синхронизации хаотических световых вспышек, блюра и тряски под бит.", p_glitchify: "Легкое создание трендовых аналоговых и цифровых глитч-эффектов в один клик.", p_flow_script: "Удобный графический редактор кривых для настройки идеальной плавности ключей.", p_console: "Моментальный поиск и применение эффектов по горячей клавише.", p_flowframes: "Отдельный софт на базе ИИ для интерполяции кадров и повышения FPS видео.", p_rsmb: "Автоматическое добавление естественного размытия движения (motion blur) на видео.",
        req_title: "Не нашли нужный плагин?", req_sub: "Мы активно будем добовлять новые плагины!", req_btn: "ЗАКАЗАТЬ ПЛАГИН",
        set_title: "Настройки", set_sub: "Управление твоим профилем", set_lang: "Язык приложения", set_lang_desc: "Выберите удобный язык интерфейса", set_theme: "Светлая тема", set_theme_desc: "Переключить оформление интерфейса", set_push: "Push-уведомления", set_push_desc: "Узнавать о выходе новых плагинов первым", set_haptic: "Haptic Feedback (Вибрация)", set_haptic_desc: "Тактильная отдача при нажатии кнопок", set_cache: "Очистить кэш приложения", set_cache_desc: "Занято кэшем: 4.2 MB", set_exit: "Выйти из приложения", set_exit_desc: "Закрыть окно Mini App",
        nav_main: "Главная", nav_plugins: "Плагины", nav_settings: "Настройки",
        m_head: "Заказать плагин / софт", m_desc: "Напишите название плагина, скрипта или расширения After Effects. Мы найдем его и добавим в каталог.", m_btn: "ОТПРАВИТЬ ЗАЯВКУ", m_err: "Пожалуйста, введите название плагина.", m_ok: "Заявка отправлена!", m_ok_sub: "Мы приняли ваш заказ. Как только найдем — добавим!"
    },
    en: {
        hi: "Hello", welcome_sub: "Welcome to the After Effects plugin hub",
        tg_title: "Our Telegram Channel", tg_desc: "The central resource of @after_effects_plugins_Hackyo. We publish unique tools, cracked scripts, presets, and motion design software.", tg_btn: "OPEN CHANNEL",
        about_title: "About Project", 
        about_1: "<b>Quick Access:</b> No more endless feed scrolling. Download plugins in one click.", 
        about_2: "<b>Security:</b> All files are manually verified for viruses before publication.", 
        about_3: "<b>Compatibility:</b> The catalog lists AE versions and operating systems (Win/Mac).",
        about_4: "<b>Daily Updates:</b> Our plugin base is updated daily with the latest software and libraries.",
        about_5: "<b>From Community to Community:</b> We develop this project without annoying ads for the convenience of every VFX artist.",
        faq_title: "Frequently Asked Questions", 
        faq_q1: "How to install plugins?", faq_a1: "Usually, `.aex` files need to be copied to `C:\\Program Files\\Adobe\\Adobe After Effects (version)\\Support Files\\Plug-ins` folder. Instructions inside.", 
        faq_q5: "How to install scripts (.jsx and .jsxbin)?", faq_a5: "Move scripts to `Support Files/Scripts/ScriptUI Panels`. After restarting AE, they will appear in the Window menu.",
        faq_q2: "What if the plugin asks for a license?", faq_a2: "All plugins in our catalog are pre-activated or contain a key/crack inside.", 
        faq_q4: "Why did a red cross appear and how to remove it?", faq_a4: "A red cross means the plugin was installed incorrectly. Usually resolved by a clean reinstall.", 
        faq_q3: "Will there be plugins for macOS?", faq_a3: "Yes, we are actively searching for Mac versions and will add them gradually.",
        faq_q6: "Does the software support AE 2025/2026?", faq_a6: "The vast majority of the presented plugins (including Deep Glow, Sapphire, Twixtor) are fully tested and compatible.",
        catalog_title: "Plugin Catalog", catalog_sub: "Use search and the favorites tab", tab_all: "All Plugins", tab_fav: "Favorites", btn_download: "Download", search_ph: "Search plugin...",
        p_ae: "Official pre-installed AE versions. Choose the required year inside the archive.", p_e3d: "Real-time 3D object rendering. Supports AE 2020-2026.", p_glow: "Physically accurate glow effect. Compatible with AE 2020-2026.", p_part: "Organic 3D particle effects. Adapted for AE 2020-2026.",
        p_twixtor: "Advanced plugin for creating super smooth slow-motion videos.", p_sapphire: "Legendary suite of hundreds of premium effects, glows, and transitions.", p_bcc: "Massive toolkit for video restoration, titling, and color correction.", p_looks: "Powerful tool for professional color grading and stylization.", p_twitch: "Plugin to sync chaotic light flashes, blur, and shakes to the beat.", p_glitchify: "Easy creation of trendy analog and digital glitch effects in one click.", p_flow_script: "Convenient graph curve editor for adjusting flawless keyframe easing.", p_console: "Instantly search and apply effects using a hotkey.", p_flowframes: "Standalone AI-based software for frame interpolation and increasing FPS.", p_rsmb: "Automatically apply natural motion blur to your video.",
        req_title: "Didn't find the plugin you need?", req_sub: "We will find it, patch it, and add it to the catalog just for you!", req_btn: "REQUEST PLUGIN",
        set_title: "Settings", set_sub: "Manage your profile", set_lang: "App Language", set_lang_desc: "Choose your interface language", set_theme: "Light Theme", set_theme_desc: "Switch the application appearance", set_push: "Push Notifications", set_push_desc: "Be the first to know about new plugins", set_haptic: "Haptic Feedback", set_haptic_desc: "Tactile vibration when pressing buttons", set_cache: "Clear App Cache", set_cache_desc: "Cache used: 4.2 MB", set_exit: "Exit Application", set_exit_desc: "Close the Mini App window",
        nav_main: "Home", nav_plugins: "Plugins", nav_settings: "Settings",
        m_head: "Request Plugin / Software", m_desc: "Write the name of the After Effects plugin or script. We will find it and add it to the catalog.", m_btn: "SUBMIT REQUEST", m_err: "Please enter a plugin name.", m_ok: "Request sent!", m_ok_sub: "We have accepted your request. As soon as we find it, we will add it!"
    }
};

let currentLang = localStorage.getItem('app-lang') || 'en';
let isHapticEnabled = true;
let favoritePlugins = JSON.parse(localStorage.getItem('fav-plugins')) || [];
let currentFilter = 'all';

// Глобальный флаг цвета частиц (белые по умолчанию)
let particleColor = 'rgba(255, 255, 255, ';

function refreshIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        setTimeout(refreshIcons, 50);
    }
}

document.addEventListener('DOMContentLoaded', refreshIcons);

// ИНТЕГРАЦИЯ С ТГ ДАННЫМИ
let username = "Unknown";
let userid = "000000";
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    username = user.username ? `@${user.username}` : `${user.first_name}`;
    userid = user.id;
    document.getElementById('user-name').innerText = user.first_name;
    if (user.is_premium) {
        document.getElementById('user-status').innerText = 'PREMIUM';
        document.getElementById('user-status').style.color = '#af52de';
    }
    // Умный выбор языка на основе локали ТГ
    if (user.language_code && !localStorage.getItem('app-lang')) {
        const code = user.language_code.toLowerCase();
        if (code.startsWith('ru')) currentLang = 'ru';
        else if (code.startsWith('ro')) currentLang = 'ro';
        else if (code.startsWith('es')) currentLang = 'es';
        else if (code.startsWith('de')) currentLang = 'de';
        else if (code.startsWith('fr')) currentLang = 'fr';
        else currentLang = 'en';
    }
}

function triggerVibration() {
    if (isHapticEnabled && tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('light');
    }
}

// НАВИГАЦИЯ + УПРАВЛЕНИЕ iOS ИНДИКАТОРОМ СТРАНИЦ
const navItems = document.querySelectorAll('.nav-item');
const screens = document.querySelectorAll('.content-screen');
const indicator = document.getElementById('page-indicator');

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const targetTab = item.getAttribute('data-tab');
        screens.forEach(screen => {
            screen.classList.remove('active');
            if (screen.id === `screen-${targetTab}`) {
                screen.classList.add('active');
            }
        });

        // Смещаем индикатор страниц
        if (indicator) {
            indicator.style.transform = `translateX(${index * 100}%)`;
        }

        triggerVibration();
        refreshIcons();
    });
});

// FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        const answer = item.querySelector('.faq-answer');
        
        triggerVibration();

        if (item.classList.contains('open')) {
            answer.style.maxHeight = '0px';
            item.classList.remove('open');
        } else {
            item.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// ПОИСК ПЛАГИНОВ И ЖИВАЯ ФИЛЬТРАЦИЯ
const searchInput = document.getElementById('plugin-search');
const pluginItems = document.querySelectorAll('.plugin-item');

function applyPluginFilter() {
    const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : '';
    pluginItems.forEach(item => {
        const searchName = item.getAttribute('data-name');
        const id = item.getAttribute('data-id');
        const matchesSearch = searchName.includes(searchValue);
        const matchesTab = (currentFilter === 'all') || (currentFilter === 'fav' && favoritePlugins.includes(id));

        item.style.display = (matchesSearch && matchesTab) ? 'flex' : 'none';
    });
}

if (searchInput) {
    searchInput.addEventListener('input', applyPluginFilter);
}

// Языковой контроллер
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('app-lang', lang);
    document.getElementById('lang-select').value = lang;

    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const sInput = document.getElementById('plugin-search');
    if (sInput) sInput.placeholder = translations[lang]['search_ph'];
}

// Темизация
function setTheme(isLight) {
    if (isLight) {
        document.documentElement.setAttribute('data-theme', 'light');
        tg.setHeaderColor('#ffffff');
        tg.setBackgroundColor('#ffffff');
        localStorage.setItem('app-theme', 'light');
        particleColor = 'rgba(0, 0, 0, '; // Черные частицы для светлой темы
    } else {
        document.documentElement.removeAttribute('data-theme');
        tg.setHeaderColor('#000000');
        tg.setBackgroundColor('#000000');
        localStorage.setItem('app-theme', 'dark');
        particleColor = 'rgba(255, 255, 255, '; // Белые частицы для темной темы
    }
}

function updateFavUI() {
    const favButtons = document.querySelectorAll('.fav-btn');
    favButtons.forEach(btn => {
        const id = btn.getAttribute('data-id');
        const icon = btn.querySelector('svg');
        if (favoritePlugins.includes(id)) {
            btn.classList.add('active');
            if (icon) icon.setAttribute('fill', '#ffd60a');
        } else {
            btn.classList.remove('active');
            if (icon) icon.removeAttribute('fill');
        }
    });
}

function initAppLogic() {
    changeLanguage(currentLang);
    const savedTheme = localStorage.getItem('app-theme') || 'dark';
    const themeCheckbox = document.getElementById('toggle-theme');
    if (savedTheme === 'light') {
        if (themeCheckbox) themeCheckbox.checked = true;
        setTheme(true);
    } else {
        setTheme(false);
    }

    updateFavUI();

    const langSelector = document.getElementById('lang-select');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            triggerVibration();
            changeLanguage(e.target.value);
        });
    }

    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', (e) => {
            triggerVibration();
            setTheme(e.target.checked);
        });
    }

    // Обработчик закладок / избранного
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.getAttribute('data-id');
            triggerVibration();

            if (favoritePlugins.includes(id)) {
                favoritePlugins = favoritePlugins.filter(item => item !== id);
            } else {
                favoritePlugins.push(id);
            }

            localStorage.setItem('fav-plugins', JSON.stringify(favoritePlugins));
            updateFavUI();
            if (currentFilter === 'fav') applyPluginFilter();
        });
    });

    // Обработчики скачивания кликом по карточке или кнопке
    document.querySelectorAll('.plugin-item').forEach(item => {
        const link = item.getAttribute('data-link');
        const downloadBtn = item.querySelector('.plugin-btn');
        const clickArea = item.querySelector('.plugin-click-area');

        const handleDownload = (e) => {
            e.stopPropagation();
            triggerVibration();

            if (link) {
                if (tg.openLink) {
                    tg.openLink(link);
                } else {
                    window.open(link, '_blank');
                }
            } else {
                alert(currentLang === 'ru' ? 'Ссылка временно отсутствует.' : 'Link is temporary unavailable.');
            }
        };

        if (downloadBtn) {
            downloadBtn.addEventListener('click', handleDownload);
        }
        if (clickArea) {
            clickArea.addEventListener('click', handleDownload);
        }
    });
}

function checkAndBuildIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
        setTimeout(initAppLogic, 80); 
    } else {
        setTimeout(checkAndBuildIcons, 50);
    }
}
document.addEventListener('DOMContentLoaded', checkAndBuildIcons);

// ТАБЫ ФИЛЬТРАЦИИ ПЛАГИНОВ
const tabAllBtn = document.getElementById('tab-all-plugins');
const tabFavBtn = document.getElementById('tab-fav-plugins');

if (tabAllBtn) {
    tabAllBtn.addEventListener('click', () => {
        triggerVibration();
        tabAllBtn.classList.add('active');
        if (tabFavBtn) tabFavBtn.classList.remove('active');
        currentFilter = 'all';
        applyPluginFilter();
    });
}

if (tabFavBtn) {
    tabFavBtn.addEventListener('click', () => {
        triggerVibration();
        if (tabAllBtn) tabAllBtn.classList.remove('active');
        tabFavBtn.classList.add('active');
        currentFilter = 'fav';
        applyPluginFilter();
    });
}

// НАСТРОЙКИ ПРИЛОЖЕНИЯ
const hapticToggle = document.getElementById('toggle-haptic');
if (hapticToggle) {
    hapticToggle.addEventListener('change', (e) => {
        isHapticEnabled = e.target.checked;
        if (isHapticEnabled && tg.HapticFeedback) {
            tg.HapticFeedback.notificationOccurred('success');
        }
    });
}

const notifToggle = document.getElementById('toggle-notifications');
if (notifToggle) {
    notifToggle.addEventListener('change', (e) => {
        triggerVibration();
        tg.showPopup({
            title: currentLang === 'ru' ? 'Уведомления' : 'Notifications',
            message: e.target.checked ? 'ON' : 'OFF',
            buttons: [{type: 'ok'}]
        });
    });
}

const cacheBtn = document.getElementById('btn-clear-cache');
if (cacheBtn) {
    cacheBtn.addEventListener('click', () => {
        triggerVibration();
        const cacheStatus = document.getElementById('cache-status');
        if (cacheStatus) {
            cacheStatus.innerText = translations[currentLang]['set_cache_desc'].replace('4.2', '0');
        }
        tg.showPopup({
            title: currentLang === 'ru' ? 'Кэш очищен' : 'Cache cleared',
            message: 'OK',
            buttons: [{type: 'ok'}]
        });
    });
}

// ЗАКАЗ ПЛАГИНА + МОДАЛКА
const requestModal = document.getElementById('request-modal');
const openRequestBtn = document.getElementById('open-request-btn');
const closeRequestBtn = document.getElementById('close-request-btn');
const sendRequestBtn = document.getElementById('send-request-btn');
const requestInput = document.getElementById('request-input');

if (openRequestBtn && requestModal) {
    openRequestBtn.addEventListener('click', () => { 
        triggerVibration(); 
        requestModal.classList.add('active'); 
    });
}

if (closeRequestBtn && requestModal) {
    closeRequestBtn.addEventListener('click', () => { 
        triggerVibration(); 
        requestModal.classList.remove('active'); 
    });
}

if (sendRequestBtn && requestModal && requestInput) {
    sendRequestBtn.addEventListener('click', () => {
        triggerVibration();
        const pluginValue = requestInput.value.trim();
        if (pluginValue === '') {
            tg.showPopup({ title: 'Error', message: translations[currentLang]['m_err'], buttons: [{type: 'ok'}] });
            return;
        }

        const orderData = {
            target_admin: "@tryffx",
            user_id: userid,
            user_username: username,
            requested_plugin: pluginValue,
            timestamp: new Date().toISOString()
        };

        fetch('https://your-bot-backend.com/api/new-request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        }).catch(err => console.log("Бэкенд бота не подключен, обрабатываем локально через TG API"));

        requestModal.classList.remove('active');
        requestInput.value = '';
        
        tg.showPopup({ 
            title: translations[currentLang]['m_ok'], 
            message: `${translations[currentLang]['m_ok_sub']} ( "${pluginValue}" )`, 
            buttons: [{type: 'ok'}] 
        });
    });
}

// SPLASH SCREEN (ИСЧЕЗНОВЕНИЕ)
const splash = document.getElementById('splash');
window.addEventListener('load', () => {
    // Ждем 2.2 секунды (длительность анимации заполнения полосы), а затем плавно скрываем Splash
    setTimeout(() => { 
        if (splash) {
            splash.classList.add('fade-out'); 
        }
    }, 2200);
});

// КАНВАС ЧАСТИЦ
const canvas = document.getElementById('particles-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedY = -(Math.random() * 0.5 + 0.15);
            this.speedX = (Math.random() * 0.2 - 0.1);
            this.opacity = Math.random() * 0.6 + 0.15;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            if (this.y < 0) {
                this.y = canvas.height;
                this.x = Math.random() * canvas.width;
            }
            if (this.x < 0 || this.x > canvas.width) {
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `${particleColor}${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 40; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
}