// Hole die aktuelle URL
const path = window.location.pathname;

// Funktion, die die entsprechende HTML-Datei basierend auf der URL lädt
function loadPage() {
  if (path === "/home") {
    window.location.replace("/index.html"); // Lade index.html für /home
  } else if (path === "/routes") {
    window.location.replace("/Lufthansa_Routes_en.html"); // Lade Lufthansa_Routes_en.html für /routes
  } else if (path === "/staff") {
    window.location.replace("/Lufthansa_staff_en.html")
  } else {
    // Falls keine der definierten Routen zutrifft, bleibt die 404-Seite aktiv
    document.body.innerHTML = "<h1>Seite nicht gefunden</h1>";
  }
}

loadPage(); // Rufe die Funktion beim Laden der Seite auf