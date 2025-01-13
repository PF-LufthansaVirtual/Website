document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        en: {
            join: "JOIN NOW",
            t_routes: "Routes",
            t_staff: "Staff",
            t_login: "Log in with Discord (Pre Alpha, Not Working)",
            partteam: "Be Part of the Team",
            t_event: "Event Team",
            t_design: "Design Team",
            t_marketing: "Marketing Team",
            t_dev: "Development Team",
            t_infos: "↓ More infos ↓",
        },
        de: {
            join: "JETZT BEITRETEN",
            t_routes: "Routen",
            t_staff: "Mitarbeiter",
            t_login: "Mit Discord anmelden (Pre Alpha, Nicht funktionstüchtig)",
            partteam: "Sei Teil unseres Teams",
            t_event: "Event Team",
            t_design: "Design Team",
            t_marketing: "Marketing Team",
            t_dev: "Development Team",
            t_infos: "↓ Mehr Infos ↓",
        }
    };

    function setLanguage(language) {
        var langen = document.getElementById('lang-en');
        var langde = document.getElementById('lang-de');
        if(language == 'en') {
            langen.classList.add('bold');
            langde.classList.remove('bold');
        }else if(language == 'de') {
            langde.classList.add('bold');
            langen.classList.remove('bold');
        }
        saveLanguage(language);
        const texts = translations[language];
        //document.getElementById('').textContent = texts.;
        document.getElementById('join').textContent = texts.join;
        document.getElementById('t_routes').textContent = texts.t_routes;
        document.getElementById('t_staff').textContent = texts.t_staff;
        document.getElementById('t_login').textContent = texts.t_login;
        document.getElementById('partteam').textContent = texts.partteam;
        document.getElementById('t_event').textContent = texts.t_event;
        document.getElementById('t_design').textContent = texts.t_design;
        document.getElementById('t_marketing').textContent = texts.t_marketing;
        document.getElementById('t_dev').textContent = texts.t_dev;
        document.getElementById('t_infos').textContent = texts.t_infos;
    
    }
    
    function saveLanguage(language) {
        localStorage.setItem("lang", language);
    }

    function loadLanguage() {
        var language = localStorage.getItem("lang");
        if (language == null) {
            setLanguage("en");
        }else {
            setLanguage(language);
        }
    }
    
    loadLanguage();

    document.getElementById('lang-en').addEventListener('click', function() {
        setLanguage('en');
    });
    document.getElementById('lang-de').addEventListener('click', function() {
        setLanguage('de');
    });

    function updateArrow() {
            if(!open) {
                document.getElementById('arrow').textContent = "►";
            } else {
                document.getElementById('arrow').textContent = "◄";
            }
        }

    var open = false;
    updateArrow();

    document.querySelector('.language-select').addEventListener('click', function() {
        open = !open;
        updateArrow();

        if(open) {
            if (window.matchMedia("(max-width: 600px)").matches) {
                document.querySelector('.lang-select').style.transform = "translateX(-8%)";
            } else {
                document.querySelector('.lang-select').style.transform = "translateX(0)";
            }
        } else {
            document.querySelector('.lang-select').style.transform = "translateX(-100%)";
        }

        document.querySelector('.lang-select').style.transition = "transform 0.1s ease";
    });
});