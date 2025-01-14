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
            t_info_head: "PF Lufthansa Virtual",
            t_info_pf_1: "PF Lufthansa Virtual is a vibrant and dynamic virtual airline with the mission of bringing aviation enthusiasts from around the world together. Our goal is to provide a realistic and enjoyable flying experience while fostering a strong sense of community and teamwork.",
            t_info_pf_2: "We simulate real-world operations and routes, offering a variety of opportunities for pilots, from new enthusiasts to experienced professionals. Whether you're flying for fun or looking to develop your skills, PF Lufthansa Virtual provides a platform for personal growth, community engagement, and exciting flying adventures.",
            t_routes_head: "Our routes",
            t_routes_pf_1: "We have many different short-haul, mid-haul and long-haul routes from and to nearly all the airport in Project Flight, which you can fly with various planes and airlines. We tried to do the routes and their flightplans as realistic and fun to fly as possible.",
            t_routes_pf_2: "You can fly any route you want whenever you want, as long you fly one of the allowed for this route plane and use an airline from the Lufthansa group. If you want to find more about our routes ",
            t_routes_pf_click: " CLICK HERE ",
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
            t_info_head: "PF Lufthansa Virtual",
            t_info_pf_1: "PF Lufthansa Virtual ist eine vibrante und dynamische Virtuele Fluggesellschaft mit der Mission Luftfahrtliebhaber von der ganzen Welt zusammenzubringen. Unser Ziel ist es ein realistisches und angenehmes Flugerlebnis zu bieten, während ein starkes Sinn von Community und Teamwork gefördet wird.",
            t_info_pf_2: "Wir simulieren echte Flüge und Routen, bieten eine Vielfalt an Gelegenheiten für Piloten, von neuen Enthusiasten bis zu erfahrenen Professionelen. Egal ob du für Spaß fliegst or deine fähigkeiten entwickeln willst, PF Lufthansa Virtual bietet eine Platform für persönlichen Wachsatum, Community Engagement and spannende Flugabenteur.",
            t_routes_head: "Lufthansa Routen",
            t_routes_pf_1: "Wir haben viele verschiedene Kurz-, Mittel- und Langstrecke Routen von und zu fast allen Flughäfen in Project Flight, welche du mit verschiedenen Flugzeugen und Fluggesellschaften fliegen kannst. Wir haben versucht die Routen und ihre Flugpläne so realistisch und interessant wie möglich zu machen.",
            t_routes_pf_2: "Du kannst jede beliebige Route fliegen wann du willst, so lang du eins der auf der Route erlaubten Flugzeuge und einer Airline der Lufthansa Group benutzt. Wenn du mehr über die Routen herausfinden möchtest ",
            t_routes_pf_click: " KLICK HIER ",
        }
    };

    function setLanguage(language) {
        var langen = document.getElementById('lang-en');
        var langde = document.getElementById('lang-de');
        if(language == 'en') {
            langen.classList.add('bold');
            langde.classList.remove('bold');
            document.getElementById('langsel').textContent = "🌐 EN ";
        }else if(language == 'de') {
            langde.classList.add('bold');
            langen.classList.remove('bold');
            document.getElementById('langsel').textContent = "🌐 DE ";
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
        document.getElementById('t_info_head').textContent = texts.t_info_head;
        document.getElementById('t_info_pf_1').textContent = texts.t_info_pf_1;
        document.getElementById('t_info_pf_2').textContent = texts.t_info_pf_2;
        document.getElementById('t_routes_head').textContent = texts.t_routes_head;
        document.getElementById('t_routes_pf_1').textContent = texts.t_routes_pf_1;
        document.getElementById('t_routes_pf_2').textContent = texts.t_routes_pf_2;
        document.getElementById('t_routes_pf_click').textContent = texts.t_routes_pf_click;

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

    function updateArrow() {
        var arrow = document.getElementById('arrow');
        if(!open && arrow) {
            document.getElementById('arrow').textContent = "►";
        } else if (arrow){
            document.getElementById('arrow').textContent = "◄";
        }
    }

    
    loadLanguage();

    document.getElementById('lang-en').addEventListener('click', function() {
        setLanguage('en');
    });
    document.getElementById('lang-de').addEventListener('click', function() {
        setLanguage('de');
    });

    var open = false;
    updateArrow();

    document.querySelector('.language-select').addEventListener('click', function() {
        open = !open;
        updateArrow();

        if(open) {
            /*if (window.matchMedia("(max-width: 600px)").matches) {
                document.querySelector('.lang-select').style.transform = "translateX(-1.2%)";
            } else {
                document.querySelector('.lang-select').style.transform = "translateX(-1.2%)";
            }*/
            document.querySelector('.lang-select').style.transform = "translateX(-1.2%)";
        } else {
            document.querySelector('.lang-select').style.transform = "translateX(-100%)";
        }

        document.querySelector('.lang-select').style.transition = "transform 0.1s ease";
    });
});