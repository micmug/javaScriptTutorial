// console ----------------------------------------------------
// Original console.log speichern
const originalConsoleLog = console.log;

// console.log überschreiben
console.log = function (message) {
  // Standardausgabe in der Entwicklerkonsole
  originalConsoleLog.apply(console, arguments);

  // Ausgabe im HTML
  const consoleDiv = document.getElementById("customConsole");
  const time = new Date().toLocaleTimeString(); // Zeitstempel hinzufügen
  consoleDiv.innerHTML += `[${time}] ${message}<br>`;
  consoleDiv.scrollTop = consoleDiv.scrollHeight; // Automatisch nach unten scrollen
};

// Beispiel-Logs
console.log("Dies ist eine Testnachricht.");
console.log("Noch eine Nachricht, um das zu testen!");
