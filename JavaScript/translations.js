document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        en: {
            t_logo_text: "PF Lufthansa Virtual",
            t_routes: "Routes",
            t_staff: "Staff",
            t_login: "Login(Out of order)",
            t_partteam: "Be Part of the Team",
            t_event: "Event Team",
            t_design: "Design Team",
            t_marketing: "Marketing Team",
            t_dev: "Development Team",
            join: "JOIN NOW",
            t_infos: "↓ More Information ↓",
            t_info_head: "About Us",
            t_info_pf_1: "PF Lufthansa Virtual connects aviation enthusiasts worldwide, offering a realistic flying experience and a vibrant community.",
            t_info_pf_2: "From beginners to seasoned pilots, we provide opportunities for skill development, teamwork, and exciting adventures.",
            t_routes_head: "Routes",
            t_routes_pf_1: "Our network includes a variety of short, medium, and long-haul routes across Project Flight, with a range of aircraft and airlines to choose from. We've designed the routes to be as realistic and enjoyable as possible.",
            t_routes_pf_2: "Feel free to explore any route at your convenience, as long as you select an approved aircraft and a Lufthansa group airline. For more information on our routes...",
            t_routes_pf_click: "Click here",
            t_private_server: "Private Server",
            t_private_server_info: "Experience our exclusive server designed for members only.",
            t_server_details: "Our private server currently supports up to 20 players, but plans are already underway to expand its capacity in the future. Discover all the details you need to join and be part of this exclusive experience.",
            t_server_id: "Server-ID: 2yiVc8MUVZ",
            t_server_pass: "Password: Lufthansa",
            t_staff_team: "Staff Team",
            t_staff_info: "Meet our dedicated and skilled staff members who ensure smooth operations.",
            t_staff_apply: "Interested in joining our staff? Apply now to be a part of our team.",
            t_faq: "Frequently Asked Questions",
            t_faq_pilot: "How to become a pilot?",
            t_faq_pilot_info: "Join our pilot team by following the steps outlined in our guide.",
            t_faq_start: "Getting Started",
            t_faq_start_info: "Learn the basics and get started with our community today.",
            t_contacts: "Contact Us",
            t_ceo: "CEO",
            t_ceo_contact: "Reach out to our CEO for any leadership-related queries",
            t_ceo_contact_name: "Discord:  bananensammler_",
            t_ceo_contact_discord: "Or Here",
            t_coo: "COO",
            t_coo_contact: "Get in touch with our COO for operational concerns.",
            t_coo_contact_name: "Discord:  itstim0904",
            t_coo_contact_discord: "Or Here",
            t_doo: "DOO",
            t_doo_contact: "Contact our DOO for information on daily operations.",
            t_doo_contact_name: "Discord:  theotittler",
            t_doo_contact_discord: "Or Here",
            t_trusted: "Trusted by leading aviation communities.",
            
            t_route_head: "Routes",
            t_route_route_head: "Routes and Flight plans",
            t_route_route_long: "Long-haul",
            t_route_route_middle: "Mid-haul",
            t_route_route_short: "Short-haul",
            t_route_group_header: "Lufthansa group",
            t_route_group_info: "You can only fly with airlines of the Lufthansa group, because we are Lufthansa Virtual and we want to make the your flight experience as realistic as possible in our virtual airline. For this reason we bet you to only fly with airlines of the Lufthansa group.",
            t_route_group_list: "To Lufthansa group belongs:",
            t_route_points_header: "Aeropoints",
            t_route_points_info: "For each of your flight, in which you you flew one of the given routes with one of the given aircrafts and one of the airline from the Lufthansa group and logged in ",
            t_route_points_info2: "ON THIS WEBSITE",
            t_route_points_info3: " you get Aeropints. You will also get them, if you win in an event. You can also see yours and others logged flights and how many points were given ",
            t_route_points_info4: "ON THIS WEBSITE",
            t_route_points_how: "How much points you get depends on the route you fly and whether you used the given flight plan. This is how the points are being calculated:",
            t_route_points_how2: "- Long-haul: 75 + 15 with flightplan",
            t_route_points_how3: "- Mid-haul: 50 + 15 with flightplan",
            t_route_points_how4: "- Short-haul: 25 + 15 with flightplan",
            t_route_points_roles: "Depending on how much Aeropints you have, you will get other roles on our discord server. This are the roles and how much points you need for them:",
            
            t_staff_design_head: "🎨 Design Team",
            t_staff_design_info: "Want to assist our team by creating images and materials for advertisements, as well as handling other important tasks on the server?",
            t_staff_design_apply: "Apply for it",
            t_staff_development_head: "⚒️ Development Team",
            t_staff_development_info: "Want to see our server evolve over time and be a part of bringing ideas to life? Join Now",
            t_staff_development_info2: "No coding required!",
            t_staff_development_apply: "Apply for it",
            t_staff_marketing_head: "🥂 Marketing Team",
            t_staff_marketing_info: "Want to be part of the team, create advertisements for us, and communicate with partners?",
            t_staff_marketing_info2: "Help us grow our community!",
            t_staff_marketing_apply: "Apply for it",
            t_staff_event_head: "🏝️ Event Team",
            t_staff_event_info: "Want to be part of the team, create and manage events?",
            t_staff_event_apply: "Apply for it",
        },
        de: {
            t_logo_text: "PF Lufthansa Virtuell",
            t_routes: "Routen",
            t_staff: "Team",
            t_login: "Anmelden(Außer Betrieb)",
            t_partteam: "Sei Teil unseres Teams",
            t_event: "Event-Team",
            t_design: "Design-Team",
            t_marketing: "Marketing-Team",
            t_dev: "Entwicklungsteam",
            join: "JETZT BEITRETEN",
            t_infos: "↓ Mehr Informationen ↓",
            t_info_head: "Über uns",
            t_info_pf_1: "Wir bieten ein realistisches und ansprechendes Erlebnis für Luftfahrt-Enthusiasten. Schließen Sie sich uns an, um spannende Möglichkeiten zu erkunden.",
            t_info_pf_2: "Seien Sie Teil einer lebendigen Community und fliegen Sie mit unserem Team, um den Himmel zu erkunden.",
            t_routes_head: "Routen",
            t_routes_pf_1: "Unser Streckennetz umfasst eine Vielzahl an Kurz-, Mittel- und Langstreckenflügen in Project Flight, die mit unterschiedlichen Flugzeugen und Airlines geflogen werden können. Wir haben die Routen so gestaltet, dass sie sowohl realistisch als auch unterhaltsam sind.",
            t_routes_pf_2: "Du kannst jede Route nach Belieben fliegen, solange du ein zugelassenes Flugzeug und eine Airline der Lufthansa-Gruppe wählst. Weitere Informationen zu unseren Routen...",
            t_routes_pf_click: "Siehst du hier",
            t_private_server: "Privater Server",
            t_private_server_info: "Erleben Sie unseren exklusiven Server, der nur für Mitglieder konzipiert ist.",
            t_server_details: "Unser privater Server unterstützt derzeit bis zu 20 Spieler, aber es sind bereits Pläne in Arbeit, um die Kapazität in Zukunft zu erweitern. Entdecke alle Details, die du benötigst, um Teil dieses exklusiven Erlebnisses zu werden.",
            t_server_id: "Server-ID: 2yiVc8MUVZ",
            t_server_pass: "Password: Lufthansa",
            t_staff_team: "Personalteam",
            t_staff_info: "Lernen Sie unsere engagierten und kompetenten Mitarbeiter kennen, die einen reibungslosen Betrieb gewährleisten.",
            t_staff_apply: "Möchten Sie unserem Team beitreten? Bewerben Sie sich jetzt und werden Sie Teil unseres Teams.",
            t_faq: "Häufig gestellte Fragen",
            t_faq_pilot: "Wie werde ich Pilot?",
            t_faq_pilot_info: "Treten Sie unserem Pilotenteam bei, indem Sie die Schritte in unserem Leitfaden befolgen.",
            t_faq_start: "Erste Schritte",
            t_faq_start_info: "Erfahren Sie die Grundlagen und starten Sie noch heute mit unserer Community.",
            t_contacts: "Kontaktieren Sie uns",
            t_ceo: "Geschäftsführer",
            t_ceo_contact: "Wenden Sie sich an unseren Geschäftsführer für Fragen.",
            t_ceo_contact_name: "Discord:  bananensammler_",
            t_ceo_contact_discord: "Oder Hier",
            t_coo: "COO",
            t_coo_contact: "Wenden Sie sich an unseren COO für betriebliche Anliegen.",
            t_coo_contact_name: "Discord:  itstim0904",
            t_coo_contact_discord: "Oder Hier",
            t_doo: "DOO",
            t_doo_contact: "Kontaktieren Sie unseren DOO für Informationen zum Tagesgeschäft.",
            t_doo_contact_name: "Discord:  theotittler",
            t_doo_contact_discord: "Oder Hier",
            t_trusted: "Vertraut von führenden Luftfahrt-Communities.",
            
            t_route_head: "Routen",
            t_route_route_head: "Routen und Flugpläne",
            t_route_route_long: "Langstrecke",
            t_route_route_middle: "Mittelstrecke",
            t_route_route_short: "Kurzstrecke",
            t_route_group_header: "Lufthansa Group",
            t_route_group_info: "Man darf nur mit Airlines von der Lufthansa Group fliegen, weil wir Lufthansa Virtual sind und das Flugerlebnis möglichst realistisch in unserer virtuelen Airline gestalten möchten. Aus diesem Grund bitten wir dich nur Airlines von der Lufthansa Group zu fliegen.",
            t_route_group_list: "Zur Lufthansa Group gehören:",
            t_route_points_header: "Aeropoints",
            t_route_points_info: "Für jeden deine Flug, welches du mit einer der vorgegebenen Route, einem der vorgegeben Flugzeuge und einer der Airlines der Lufthansa Group fliegst und es ",
            t_route_points_info2: "AUF DIESER WEBSITE",
            t_route_points_info3: " einträgst bekommst du Aeropints. Man bekommt sie auch wenn man in einem Event gewonnen hat. Du kannst auch alle von dir und auch anderen eingetragene Flüge und wie viele Punkte dafür gegeben waren sehen, ",
            t_route_points_info4: "AUF DIESER WEBSITE",
            t_route_points_how: "Wie viele Punkte du bekommst hängt davon ab welche Route du geflogen bist und ob du den vorgegebenen Flugplan benutzt hast. So werden die Punkte berechnet:",
            t_route_points_how2: "- Langstrecke: 75 + 15 mit Flugplan",
            t_route_points_how3: "- Mittelstrecke: 50 + 15 mit Flugplan",
            t_route_points_how4: "- Kurzstrecke: 25 + 15 mit Flugplan",
            t_route_points_roles: "Abhängig davon wie viele Aeropoints du hast, bekommst du auch andere Rollen auf unserem Discord Server. Das sind die Rollen und wie viele Punkte man dafür braucht:",
            
            t_staff_design_head: "🎨 Design Team",
            t_staff_design_info: "Du willst unserem Team dabei helfen Bilder zu erstellen für Werbung, wie ander wichtige Sachen auf dem Server handhaben?",
            t_staff_design_apply: "Bewerben Sie sich dafür",
            t_staff_development_head: "⚒️ Development Team",
            t_staff_development_info: "Du willst sehen wie unser Server sich über Zeit entwickelt und willst ein Teil davon sein Ideen ins Leben zu bringen? Mach jetzt mit",
            t_staff_development_info2: "Du musst nicht coden können!",
            t_staff_development_apply: "Bewerben Sie sich dafür",
            t_staff_marketing_head: "🥂 Marketing Team",
            t_staff_marketing_info: "Du willst ein Teil des Teams sein, Werbungen für uns erstellen, und mit den Partnern kommunizieren?",
            t_staff_marketing_info2: "Hilf unserer Gemeinschaft zu wachsen!",
            t_staff_marketing_apply: "Bewerben Sie sich dafür",
            t_staff_event_head: "🏝️ Event Team",
            t_staff_event_info: "Du willst Teil des Teams zu sein und Events zu erstellen so wie zu handeln?",
            t_staff_event_apply: "Bewerben Sie sich dafür",
        },
    };

    function setLanguage(lang) {
        var langen = document.getElementById('lang-en');
        var langde = document.getElementById('lang-de');
        var dropdown = document.querySelector('.dropdown-content');
        if(lang == 'en') {
            langen.classList.add('bold');
            langde.classList.remove('bold');
            document.getElementById('langsel').textContent = "🌐 EN ";
            
            if (dropdown) dropdown.id = 'dropdown-content-en';
            
        }else if(lang == 'de') {
            langde.classList.add('bold');
            langen.classList.remove('bold');
            document.getElementById('langsel').textContent = "🌐 DE ";

            if (dropdown) dropdown.id = 'dropdown-content-de';
        }
        saveLanguage(lang);
        
        const elements = document.querySelectorAll("[id^='t_'], #join");
        elements.forEach((el) => {
            const key = el.id;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
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
        if(!open) {
            document.getElementById('arrow').textContent = "►";
        } else {
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
            if (window.matchMedia("(max-width: 600px)").matches) {
                document.querySelector('.lang-select').style.transform = "translateX(-8%)";
            } else {
                document.querySelector('.lang-select').style.transform = "translateX(0%)";
            }
        } else {
            document.querySelector('.lang-select').style.transform = "translateX(-100%)";
        }

        document.querySelector('.lang-select').style.transition = "transform 0.1s ease";
    });
});
