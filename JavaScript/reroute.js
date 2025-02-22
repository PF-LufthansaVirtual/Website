// Hole die aktuelle URL
const path = window.location.pathname;

// Funktion, die die entsprechende HTML-Datei basierend auf der URL lädt
function loadPage() {
  if (path === "/home") {
    window.location.replace("/index.html"); // Lade index.html für /home
  } else if (path === "/routes") {
    window.location.replace("/routes.html"); // Lade Lufthansa_Routes_en.html für /routes
  } else if (path === "/staff") {
    window.location.replace("/staff.html");
  } else if (path === "/PFConnect/pfconnect") {
    window.location.replace("/PFConnect/pfconnect.html");
  } else {
    // Falls keine der definierten Routen zutrifft, bleibt die 404-Seite aktiv
    document.body.innerHTML = "<h1> 404 - Site not found!</h1>";
  }
}

loadPage(); // Rufe die Funktion beim Laden der Seite auf