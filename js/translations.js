// Objeto con las traducciones
export const translations = {
    es: {
        // Head
        "head-title-index": "Bloodborne Wiki - La Pesadilla del Cazador",
        "head-title-armas": "Bloodborne Wiki - Armas Trucadas",
        "head-title-mainbosses": "Bloodborne Wiki - Jefes Principales",
        "head-title-optbosses": "Bloodborne Wiki - Jefes Opcionales",

        // Header
        "wiki-title": "Bloodborne Wiki",
        "wiki-subtitle": "Guía completa de la pesadilla de Yharnam",
        "search-placeholder": "Buscar en la wiki...",

        // Botones
        "login": "Iniciar Sesión",
        "signin": "Registrarse",

        // Categorías
        "lore-title": "Historia y Lore",
        "weapons-title": "Armas y Equipo",
        "bosses-title": "Jefes y Enemigos",
        "locations-title": "Localizaciones",
        "mechanics-title": "Mecánicas",
        "builds-title": "Builds y Guías",

        // Historia y Lore
        "lore-item-1": "La historia de Yharnam",
        "lore-item-2": "Los Grandes Antiguos",
        "lore-item-3": "La Iglesia de la Sanación",
        "lore-item-4": "La Escuela de Mensis",

        // Armas y Equipo
        "weapons-item-1": "Armas Trucadas",
        "weapons-item-2": "Armas de fuego",
        "weapons-item-3": "Herramientas de cazador",
        "weapons-item-4": "Vestuario y armaduras",

        // Jefes y Enemigos
        "bosses-item-1": "Bestias de Yharnam",
        "bosses-item-2": "Jefes principales",
        "bosses-item-3": "Jefes opcionales",
        "bosses-item-4": "Grandes Antiguos",

        // Localizaciones
        "locations-item-1": "Yharnam Central",
        "locations-item-2": "Vieja Yharnam",
        "locations-item-3": "Catedral del Distrito",
        "locations-item-4": "Pesadilla del Cazador",

        // Mecánicas
        "mechanics-item-1": "Sistema de combate",
        "mechanics-item-2": "Sangre de eco",
        "mechanics-item-3": "Insight y Locura",
        "mechanics-item-4": "Cálices y Mazmorras",

        // Builds y Guías
        "builds-item-1": "Builds populares",
        "builds-item-2": "Guía para principiantes",
        "builds-item-3": "Secretos y trucos",
        "builds-item-4": "Guía de platino",

        // Noticias
        "news-title": "Últimas Actualizaciones",
        "news-item-1": "Nueva guía: Cómo derrotar a Ludwig",
        "news-item-2": "Descubierto nuevo secreto en la Pesadilla de Mensis",
        "news-item-3": "Actualización: Mapa interactivo de Yharnam",

        // Footer
        "footer-about": "Sobre nosotros",
        "footer-contact": "Contacto",
        "footer-privacy": "Política de privacidad",
        "footer-contribute": "Contribuir",
        "footer-copyright": "© 2025 Bloodborne Wiki - Creado por cazadores, para cazadores"
    },
    en: {
        // Head
        "head-title-index": "Bloodborne Wiki - Hunter's Nightmare",
        "head-title-armas": "Bloodborne Wiki - Trick Weapons",
        "head-title-mainbosses": "Bloodborne Wiki - Main Bosses",
        "head-title-optbosses": "Bloodborne Wiki - Optional Bosses",

        // Header
        "wiki-title": "Bloodborne Wiki",
        "wiki-subtitle": "Complete guide to the Hunter's Nightmare",
        "search-placeholder": "Search the wiki...",

        // Botones
        "login": "Log in",
        "signin": "Sign in",

        // Categories
        "lore-title": "Story & Lore",
        "weapons-title": "Weapons & Gear",
        "bosses-title": "Bosses & Enemies",
        "locations-title": "Locations",
        "mechanics-title": "Mechanics",
        "builds-title": "Builds & Guides",

        // Story & Lore
        "lore-item-1": "The History of Yharnam",
        "lore-item-2": "The Great Ones",
        "lore-item-3": "The Healing Church",
        "lore-item-4": "The School of Mensis",

        // Weapons & Equipment
        "weapons-item-1": "Trick Weapons",
        "weapons-item-2": "Firearms",
        "weapons-item-3": "Hunter Tools",
        "weapons-item-4": "Attire & Armor",

        // Bosses & Enemies
        "bosses-item-1": "Beasts of Yharnam",
        "bosses-item-2": "Main Bosses",
        "bosses-item-3": "Optional Bosses",
        "bosses-item-4": "Great Ones",

        // Locations
        "locations-item-1": "Central Yharnam",
        "locations-item-2": "Old Yharnam",
        "locations-item-3": "Cathedral Ward",
        "locations-item-4": "Hunter's Nightmare",

        // Mechanics
        "mechanics-item-1": "Combat System",
        "mechanics-item-2": "Blood Echoes",
        "mechanics-item-3": "Insight & Madness",
        "mechanics-item-4": "Chalices & Dungeons",

        // Builds & Guides
        "builds-item-1": "Popular Builds",
        "builds-item-2": "Beginner's Guide",
        "builds-item-3": "Secrets & Tips",
        "builds-item-4": "Platinum Guide",

        // News
        "news-title": "Latest Updates",
        "news-item-1": "New Guide: How to defeat Ludwig",
        "news-item-2": "New secret discovered in Nightmare of Mensis",
        "news-item-3": "Update: Interactive Yharnam Map",

        // Footer
        "footer-about": "About Us",
        "footer-contact": "Contact",
        "footer-privacy": "Privacy Policy",
        "footer-contribute": "Contribute",
        "footer-copyright": "© 2025 Bloodborne Wiki - Created by hunters, for hunters"
    }
};

// Función para cambiar el idioma
export function changeLanguage(language) {
    // Actualizar textos traducibles
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Actualizar placeholder del buscador
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.placeholder = translations[language]['search-placeholder'];
    }

    // Actualizar el selector de idioma
    const selectedFlag = document.getElementById('selectedFlag');
    const selectedLanguage = document.getElementById('selectedLanguage');
    
    if (selectedFlag && selectedLanguage) {
        selectedFlag.src = `./resources/flags/${language}.png`;
        selectedFlag.alt = language === 'es' ? 'Español' : 'English';
        selectedLanguage.textContent = language === 'es' ? 'Español' : 'English';
    }

    // Cerrar el dropdown después de seleccionar
    const languageDropdown = document.getElementById('languageDropdown');
    if (languageDropdown) {
        languageDropdown.classList.remove('show');
    }

    // Actualizar el atributo lang del HTML
    document.documentElement.lang = language;
}

// Función para inicializar los event listeners
export function initializeLanguageSelector() {
    document.querySelectorAll('.language-option').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const language = this.getAttribute('data-language');
            changeLanguage(language);
        });
    });
}
