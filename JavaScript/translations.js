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
            t_faq_pilot_info: "You do not have to apply! You can simply start flying and log your flights on the server.",
            t_faq_start: "Getting Started",
            t_faq_start_info: "Watch the Youtube video on our Youtube channel Lufthansa Virtual",
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
            t_logo_text: "PF Lufthansa Virtual",
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
            t_faq_pilot_info: "Eine Anmeldung ist nicht notwendig! Du kannst einfach losfliegen und deine Flüge auf dem Server eintragen.",
            t_faq_start: "Erste Schritte",
            t_faq_start_info: "Schaue das Youtube Video auf unserem Kanal Lufthansa Virual",
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
        fr: {
            t_logo_text: "PF Lufthansa Virtual",
            t_routes: "Itinéraires",
            t_staff: "Équipe",
            t_login: "Connexion (Hors service)",
            t_partteam: "Faites partie de l'équipe",
            t_event: "Équipe d'événements",
            t_design: "Équipe de design",
            t_marketing: "Équipe marketing",
            t_dev: "Équipe de développement",
            join: "REJOIGNEZ MAINTENANT",
            t_infos: "↓ Plus d'informations ↓",
            t_info_head: "À propos de nous",
            t_info_pf_1: "PF Lufthansa Virtual connecte les passionnés d'aviation du monde entier, offrant une expérience de vol réaliste et une communauté dynamique.",
            t_info_pf_2: "Des débutants aux pilotes expérimentés, nous offrons des opportunités de développement des compétences, de travail d'équipe et d'aventures passionnantes.",
            t_routes_head: "Itinéraires",
            t_routes_pf_1: "Notre réseau comprend une variété de vols courts, moyens et long-courriers à travers Project Flight, avec un large choix d'avions et de compagnies aériennes. Nous avons conçu les itinéraires pour qu'ils soient aussi réalistes et agréables que possible.",
            t_routes_pf_2: "N'hésitez pas à explorer n'importe quel itinéraire à votre convenance, tant que vous sélectionnez un avion approuvé et une compagnie du groupe Lufthansa. Pour plus d'informations sur nos itinéraires...",
            t_routes_pf_click: "Cliquez ici",
            t_private_server: "Serveur privé",
            t_private_server_info: "Découvrez notre serveur exclusif réservé aux membres.",
            t_server_details: "Notre serveur privé prend actuellement en charge jusqu'à 20 joueurs, mais des plans sont déjà en cours pour augmenter sa capacité à l'avenir. Découvrez tous les détails nécessaires pour rejoindre et faire partie de cette expérience exclusive.",
            t_server_id: "ID du serveur : 2yiVc8MUVZ",
            t_server_pass: "Mot de passe : Lufthansa",
            t_staff_team: "Équipe de personnel",
            t_staff_info: "Rencontrez nos membres du personnel dédiés et compétents qui garantissent des opérations fluides.",
            t_staff_apply: "Intéressé à rejoindre notre personnel ? Postulez maintenant pour faire partie de notre équipe.",
            t_faq: "Questions fréquentes",
            t_faq_pilot: "Comment devenir pilote ?",
            t_faq_pilot_info: "Vous n'avez pas besoin de postuler ! Vous pouvez simplement commencer à voler et enregistrer vos vols sur le serveur.",
            t_faq_start: "Commencer",
            t_faq_start_info: "Regardez la vidéo sur notre chaîne Youtube Lufthansa Virtual",
            t_contacts: "Contactez-nous",
            t_ceo: "PDG",
            t_ceo_contact: "Contactez notre PDG pour toute question liée au leadership",
            t_ceo_contact_name: "Discord : bananensammler_",
            t_ceo_contact_discord: "Ou ici",
            t_coo: "COO",
            t_coo_contact: "Contactez notre COO pour des préoccupations opérationnelles.",
            t_coo_contact_name: "Discord : itstim0904",
            t_coo_contact_discord: "Ou ici",
            t_doo: "DOO",
            t_doo_contact: "Contactez notre DOO pour des informations sur les opérations quotidiennes.",
            t_doo_contact_name: "Discord : theotittler",
            t_doo_contact_discord: "Ou ici",
            t_trusted: "Approuvé par les principales communautés d'aviation.",

            t_route_head: "Itinéraires",
            t_route_route_head: "Itinéraires et plans de vol",
            t_route_route_long: "Long-courrier",
            t_route_route_middle: "Moyen-courrier",
            t_route_route_short: "Court-courrier",
            t_route_group_header: "Groupe Lufthansa",
            t_route_group_info: "Vous ne pouvez voler qu'avec des compagnies du groupe Lufthansa, car nous sommes Lufthansa Virtual et nous voulons que votre expérience de vol soit aussi réaliste que possible dans notre compagnie aérienne virtuelle. Pour cette raison, nous vous demandons de voler uniquement avec des compagnies du groupe Lufthansa.",
            t_route_group_list: "Le groupe Lufthansa comprend :",
            t_route_points_header: "Aéropoints",
            t_route_points_info: "Pour chacun de vos vols, dans lequel vous avez suivi l'un des itinéraires donnés avec l'un des avions autorisés et une compagnie du groupe Lufthansa, et l'avez enregistré ",
            t_route_points_info2: "SUR CE SITE",
            t_route_points_info3: " vous gagnez des Aéropoints. Vous les obtenez également si vous gagnez un événement. Vous pouvez également voir vos vols enregistrés et ceux des autres, ainsi que le nombre de points attribués ",
            t_route_points_info4: "SUR CE SITE",
            t_route_points_how: "Le nombre de points que vous obtenez dépend de l'itinéraire que vous suivez et si vous avez utilisé le plan de vol donné. Voici comment les points sont calculés :",
            t_route_points_how2: "- Long-courrier : 75 + 15 avec plan de vol",
            t_route_points_how3: "- Moyen-courrier : 50 + 15 avec plan de vol",
            t_route_points_how4: "- Court-courrier : 25 + 15 avec plan de vol",
            t_route_points_roles: "En fonction du nombre d'Aéropoints que vous avez, vous obtiendrez différents rôles sur notre serveur Discord. Voici les rôles et le nombre de points nécessaires :",

            t_staff_design_head: "🎨 Équipe de design",
            t_staff_design_info: "Vous souhaitez aider notre équipe en créant des images et des matériaux pour les publicités, ainsi qu'en gérant d'autres tâches importantes sur le serveur ?",
            t_staff_design_apply: "Postulez",
            t_staff_development_head: "⚒️ Équipe de développement",
            t_staff_development_info: "Vous souhaitez voir notre serveur évoluer avec le temps et participer à donner vie aux idées ? Rejoignez maintenant",
            t_staff_development_info2: "Aucune compétence en codage requise !",
            t_staff_development_apply: "Postulez",
            t_staff_marketing_head: "🥂 Équipe marketing",
            t_staff_marketing_info: "Vous voulez faire partie de l'équipe, créer des publicités pour nous et communiquer avec nos partenaires ?",
            t_staff_marketing_info2: "Aidez-nous à faire grandir notre communauté !",
            t_staff_marketing_apply: "Postulez",
            t_staff_event_head: "🏝️ Équipe d'événements",
            t_staff_event_info: "Vous souhaitez faire partie de l'équipe, créer et gérer des événements ?",
            t_staff_event_apply: "Postulez",
        },
        es: {
            t_logo_text: "PF Lufthansa Virtual",
            t_routes: "Rutas",
            t_staff: "Personal",
            t_login: "Iniciar sesión (Fuera de servicio)",
            t_partteam: "Sé parte del equipo",
            t_event: "Equipo de eventos",
            t_design: "Equipo de diseño",
            t_marketing: "Equipo de marketing",
            t_dev: "Equipo de desarrollo",
            join: "ÚNETE AHORA",
            t_infos: "↓ Más información ↓",
            t_info_head: "Sobre nosotros",
            t_info_pf_1: "PF Lufthansa Virtual conecta a entusiastas de la aviación en todo el mundo, ofreciendo una experiencia de vuelo realista y una comunidad vibrante.",
            t_info_pf_2: "Desde principiantes hasta pilotos experimentados, brindamos oportunidades para desarrollar habilidades, trabajo en equipo y emocionantes aventuras.",
            t_routes_head: "Rutas",
            t_routes_pf_1: "Nuestra red incluye una variedad de rutas de corta, media y larga distancia en Project Flight, con una gama de aviones y aerolíneas para elegir. Hemos diseñado las rutas para que sean lo más realistas y disfrutables posible.",
            t_routes_pf_2: "Siéntete libre de explorar cualquier ruta a tu conveniencia, siempre que selecciones un avión aprobado y una aerolínea del grupo Lufthansa. Para más información sobre nuestras rutas...",
            t_routes_pf_click: "Haz clic aquí",
            t_private_server: "Servidor privado",
            t_private_server_info: "Experimenta nuestro servidor exclusivo diseñado solo para miembros.",
            t_server_details: "Nuestro servidor privado actualmente admite hasta 20 jugadores, pero ya estamos planeando expandir su capacidad en el futuro. Descubre todos los detalles que necesitas para unirte y ser parte de esta experiencia exclusiva.",
            t_server_id: "ID del servidor: 2yiVc8MUVZ",
            t_server_pass: "Contraseña: Lufthansa",
            t_staff_team: "Equipo de personal",
            t_staff_info: "Conoce a nuestros dedicados y capacitados miembros del personal que garantizan operaciones sin problemas.",
            t_staff_apply: "¿Interesado en unirte al personal? Solicita ahora para ser parte de nuestro equipo.",
            t_faq: "Preguntas frecuentes",
            t_faq_pilot: "¿Cómo convertirse en piloto?",
            t_faq_pilot_info: "¡No necesitas postularte! Puedes comenzar a volar y registrar tus vuelos en el servidor.",
            t_faq_start: "Cómo empezar",
            t_faq_start_info: "Mira el video en nuestro canal de Youtube Lufthansa Virtual",
            t_contacts: "Contáctanos",
            t_ceo: "CEO",
            t_ceo_contact: "Comunícate con nuestro CEO para consultas relacionadas con liderazgo",
            t_ceo_contact_name: "Discord:  bananensammler_",
            t_ceo_contact_discord: "O aquí",
            t_coo: "COO",
            t_coo_contact: "Ponte en contacto con nuestro COO para preocupaciones operativas.",
            t_coo_contact_name: "Discord:  itstim0904",
            t_coo_contact_discord: "O aquí",
            t_doo: "DOO",
            t_doo_contact: "Contacta a nuestro DOO para información sobre operaciones diarias.",
            t_doo_contact_name: "Discord:  theotittler",
            t_doo_contact_discord: "O aquí",
            t_trusted: "Confiado por las principales comunidades de aviación.",

            t_route_head: "Rutas",
            t_route_route_head: "Rutas y planes de vuelo",
            t_route_route_long: "Larga distancia",
            t_route_route_middle: "Media distancia",
            t_route_route_short: "Corta distancia",
            t_route_group_header: "Grupo Lufthansa",
            t_route_group_info: "Solo puedes volar con aerolíneas del grupo Lufthansa, porque somos Lufthansa Virtual y queremos que tu experiencia de vuelo sea lo más realista posible en nuestra aerolínea virtual. Por esta razón, te pedimos que vueles únicamente con aerolíneas del grupo Lufthansa.",
            t_route_group_list: "El grupo Lufthansa incluye:",
            t_route_points_header: "Aeropuntos",
            t_route_points_info: "Por cada uno de tus vuelos, en el que volaste una de las rutas dadas con uno de los aviones permitidos y una de las aerolíneas del grupo Lufthansa, y lo registraste ",
            t_route_points_info2: "EN ESTE SITIO WEB",
            t_route_points_info3: " obtendrás Aeropuntos. También los obtendrás si ganas en un evento. También puedes ver tus vuelos registrados y los de otros, y cuántos puntos se otorgaron ",
            t_route_points_info4: "EN ESTE SITIO WEB",
            t_route_points_how: "La cantidad de puntos que obtienes depende de la ruta que vueles y de si utilizaste el plan de vuelo dado. Así es como se calculan los puntos:",
            t_route_points_how2: "- Larga distancia: 75 + 15 con plan de vuelo",
            t_route_points_how3: "- Media distancia: 50 + 15 con plan de vuelo",
            t_route_points_how4: "- Corta distancia: 25 + 15 con plan de vuelo",
            t_route_points_roles: "Dependiendo de la cantidad de Aeropuntos que tengas, obtendrás diferentes roles en nuestro servidor de Discord. Estos son los roles y los puntos necesarios para ellos:",

            t_staff_design_head: "🎨 Equipo de diseño",
            t_staff_design_info: "¿Quieres ayudar a nuestro equipo creando imágenes y materiales para anuncios, así como manejar otras tareas importantes en el servidor?",
            t_staff_design_apply: "Solicítalo",
            t_staff_development_head: "⚒️ Equipo de desarrollo",
            t_staff_development_info: "¿Quieres ver evolucionar nuestro servidor con el tiempo y ser parte de dar vida a ideas? Únete ahora",
            t_staff_development_info2: "¡No se necesita codificación!",
            t_staff_development_apply: "Solicítalo",
            t_staff_marketing_head: "🥂 Equipo de marketing",
            t_staff_marketing_info: "¿Quieres ser parte del equipo, crear anuncios para nosotros y comunicarte con socios?",
            t_staff_marketing_info2: "¡Ayúdanos a hacer crecer nuestra comunidad!",
            t_staff_marketing_apply: "Solicítalo",
            t_staff_event_head: "🏝️ Equipo de eventos",
            t_staff_event_info: "¿Quieres ser parte del equipo, crear y gestionar eventos?",
            t_staff_event_apply: "Solicítalo",
        },
        ru: {
            t_logo_text: "PF Lufthansa Virtual",
            t_routes: "Маршруты",
            t_staff: "Персонал",
            t_login: "Вход (Не работает)",
            t_partteam: "Зай часть команды",
            t_event: "Команда мероприятий",
            t_design: "Дизайнерская команда",
            t_marketing: "Маркетинговая команда",
            t_dev: "Команда разработчиков",
            join: "ПРИСОЕДИНИТЬСЯ СЕЙЧАС",
            t_infos: "↓ Дополнительная информация ↓",
            t_info_head: "О нас",
            t_info_pf_1: "PF Lufthansa Virtual соединяет авиационных энтузиастов со всего мира, предлагая реалистичный опыт полетов и активное сообщество.",
            t_info_pf_2: "От новичков до опытных пилотов — мы предоставляем возможности для развития навыков, работы в команде и захватывающих приключений.",
            t_routes_head: "Маршруты",
            t_routes_pf_1: "Наша сеть включает в себя различные короткие, средние и дальние маршруты в рамках Project Flight с выбором самолетов и авиалиний. Мы создали маршруты максимально реалистичными и приятными.",
            t_routes_pf_2: "Вы можете исследовать любой маршрут в удобное для вас время, при условии выбора утвержденного самолета и авиалинии группы Lufthansa. Для получения дополнительной информации о маршрутах...",
            t_routes_pf_click: "Нажмите здесь",
            t_private_server: "Приватный сервер",
            t_private_server_info: "Испытайте наш эксклюзивный сервер, доступный только для членов.",
            t_server_details: "Наш приватный сервер в настоящее время поддерживает до 20 игроков, но уже запланировано его расширение в будущем. Узнайте все детали для участия и присоединитесь к этому уникальному опыту.",
            t_server_id: "ID сервера: 2yiVc8MUVZ",
            t_server_pass: "Пароль: Lufthansa",
            t_staff_team: "Команда сотрудников",
            t_staff_info: "Познакомьтесь с нашей преданной и опытной командой, которая обеспечивает бесперебойную работу.",
            t_staff_apply: "Хотите присоединиться к нашей команде? Подайте заявку прямо сейчас.",
            t_faq: "Часто задаваемые вопросы",
            t_faq_pilot: "Как стать пилотом?",
            t_faq_pilot_info: "Вам не нужно подавать заявку! Просто начните летать и записывать свои полеты на сервере.",
            t_faq_start: "Начало работы",
            t_faq_start_info: "Посмотрите видео на нашем YouTube-канале Lufthansa Virtual",
            t_contacts: "Свяжитесь с нами",
            t_ceo: "Генеральный директор",
            t_ceo_contact: "Свяжитесь с нашим генеральным директором по вопросам, связанным с руководством.",
            t_ceo_contact_name: "Discord: bananensammler_",
            t_ceo_contact_discord: "Или здесь",
            t_coo: "Операционный директор",
            t_coo_contact: "Свяжитесь с нашим операционным директором по вопросам операций.",
            t_coo_contact_name: "Discord: itstim0904",
            t_coo_contact_discord: "Или здесь",
            t_doo: "Директор операций",
            t_doo_contact: "Свяжитесь с нашим директором по операциям для получения информации о ежедневных операциях.",
            t_doo_contact_name: "Discord: theotittler",
            t_doo_contact_discord: "Или здесь",
            t_trusted: "Доверие ведущих авиационных сообществ.",
            t_route_head: "Маршруты",
            t_route_route_head: "Маршруты и планы полетов",
            t_route_route_long: "Дальне магистральные",
            t_route_route_middle: "Средне магистральные",
            t_route_route_short: "Коротко магистральные",
            t_route_group_header: "Группа Lufthansa",
            t_route_group_info: "Вы можете летать только с авиалиниями группы Lufthansa, потому что мы — Lufthansa Virtual и стремимся сделать ваш опыт полетов максимально реалистичным в рамках нашей виртуальной авиакомпании. Поэтому мы просим вас летать только с авиалиниями группы Lufthansa.",
            t_route_group_list: "К группе Lufthansa относятся:",
            t_route_points_header: "Аэробаллы",
            t_route_points_info: "За каждый ваш полет, выполненный по указанным маршрутам на утвержденном самолете и с одной из авиалиний группы Lufthansa, и зарегистрированный",
            t_route_points_info2: "НА ЭТОМ САЙТЕ",
            t_route_points_info3: "вы получите аэробаллы. Вы также получите их, если выиграете в мероприятии. Вы можете увидеть свои и чужие зарегистрированные полеты и количество полученных баллов",
            t_route_points_info4: "НА ЭТОМ САЙТЕ",
            t_route_points_how: "Количество полученных баллов зависит от маршрута и использования предложенного плана полета. Баллы начисляются следующим образом:",
            t_route_points_how2: "- Дальнемагистральные: 75 + 15 за использование плана полета",
            t_route_points_how3: "- Среднемагистральные: 50 + 15 за использование плана полета",
            t_route_points_how4: "- Короткомагистральные: 25 + 15 за использование плана полета",
            t_route_points_roles: "В зависимости от количества аэробаллов вы получите роли на нашем сервере Discord. Вот роли и необходимое количество баллов:",
            t_staff_design_head: "🎨 Команда дизайнеров",
            t_staff_design_info: "Хотите помочь нашей команде, создавая изображения и материалы для рекламы, а также выполняя другие важные задачи на сервере?",
            t_staff_design_apply: "Подать заявку",
            t_staff_development_head: "⚒️ Команда разработчиков",
            t_staff_development_info: "Хотите видеть, как наш сервер развивается, и участвовать в воплощении идей в жизнь? Присоединяйтесь сейчас",
            t_staff_development_info2: "Кодирование не требуется!",
            t_staff_development_apply: "Подать заявку",
            t_staff_marketing_head: "🥂 Маркетинговая команда",
            t_staff_marketing_info: "Хотите быть частью команды, создавать рекламу для нас и общаться с партнерами?",
            t_staff_marketing_info2: "Помогите нам развивать наше сообщество!",
            t_staff_marketing_apply: "Подать заявку",
            t_staff_event_head: "🏝️ Команда мероприятий",
            t_staff_event_info: "Хотите быть частью команды, создавать и управлять мероприятиями?",
            t_staff_event_apply: "Подать заявку"
        },
    };

    function setLanguage(lang) {
        var langen = document.getElementById('lang-en');
        var langde = document.getElementById('lang-de');
        var langru = document.getElementById('lang-ru');
        var langfr = document.getElementById('lang-fr');
        var langes = document.getElementById('lang-es');
        var dropdown = document.querySelector('.dropdown-content');
        if(lang == 'en') {
            langen.classList.add('bold');
            langde.classList.remove('bold');
            langru.classList.remove('bold');
            langfr.classList.remove('bold');
            langes.classList.remove('bold');
            document.getElementById('langsel').textContent = "🌐 EN ";
            
            if (dropdown) dropdown.id = 'dropdown-content-en';
            
        } else if(lang == 'de') {
            langen.classList.remove('bold');
            langde.classList.add('bold');
            langru.classList.remove('bold');
            langfr.classList.remove('bold');
            langes.classList.remove('bold');
            document.getElementById('langsel').textContent = "🌐 DE ";

            if (dropdown) dropdown.id = 'dropdown-content-de';
        } else if(lang == 'ru') {
            langen.classList.remove('bold');
            langde.classList.remove('bold');
            langru.classList.add('bold');
            langfr.classList.remove('bold');
            langes.classList.remove('bold');
            document.getElementById('langsel').textContent = "🌐 RU ";

            if (dropdown) dropdown.id = 'dropdown-content-ru';
        } else if(lang == 'fr') {
            langen.classList.remove('bold');
            langde.classList.remove('bold');
            langru.classList.remove('bold');
            langfr.classList.add('bold');
            langes.classList.remove('bold');
            document.getElementById('langsel').textContent = "🌐 FR ";

            if (dropdown) dropdown.id = 'dropdown-content-fr';
        } else if(lang == 'es') {
            langen.classList.remove('bold');
            langde.classList.remove('bold');
            langru.classList.remove('bold');
            langfr.classList.remove('bold');
            langes.classList.add('bold');
            document.getElementById('langsel').textContent = "🌐 ES ";

            if (dropdown) dropdown.id = 'dropdown-content-es';
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
    document.getElementById('lang-ru').addEventListener('click', function() {
        setLanguage('ru');
    });
    document.getElementById('lang-fr').addEventListener('click', function() {
        setLanguage('fr');
    });
    document.getElementById('lang-es').addEventListener('click', function() {
        setLanguage('es');
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
