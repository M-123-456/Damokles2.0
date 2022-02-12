// Slotmaschine als ein gebündeltes Objekt
const slotmaschine = {
  // Hier wird gleich das DOM-Element abgelegt um es später referenzieren zu können
  element: null,
  // Alle an der Slotmaschine teilnehmenden Personen mit Name und dem Element
  teilnehmer: [
    { name: "Miki", element: null },
    { name: "Marc", element: null },
    { name: "Jakob", element: null },
    { name: "Philipp", element: null },
  ],
  shuffle: true,
  center: { element: null },
  timers: { lastSecond: Date.now() },
};

// Wird ausgeführt, wenn unsere Seite vollständig geladen wurde
window.onload = () => {
  slotmaschine.element = document.getElementById("slots-body");
  slotmaschine.center.element = document.getElementById("slots-body-center");
  const teilnehmerElement = document.createElement("div");
  const randomTeilnehmer = getRandomItem(slotmaschine.teilnehmer);
  teilnehmerElement.innerHTML = randomTeilnehmer.name;
  randomTeilnehmer.element = teilnehmerElement;
  slotmaschine.center.element.append(teilnehmerElement);
  update();
};

// Wird jeden Frame ausgeführt und dient uns später die Animation abzuspielen
function update() {
  if (slotmaschine.shuffle) {
    // Jede Sekunde wird ein neuer Name gewählt und angezeigt
    if (slotmaschine.timers.lastSecond + 1000 <= Date.now()) {
      // Der aktuelle Teilnehmer wird aus dem DOM entfernt
      if (slotmaschine.center.element.childNodes.length >= 1) {
        slotmaschine.center.element.firstChild.remove();
      }
      const teilnehmerElement = document.createElement("div");
      const randomTeilnehmer = getRandomItem(slotmaschine.teilnehmer);
      teilnehmerElement.innerHTML = randomTeilnehmer.name;
      slotmaschine.center.element.append(teilnehmerElement);
      slotmaschine.timers.lastSecond = Date.now();
    }
    requestAnimationFrame(update);
  }
}

// Zufälliges Item des Arrays
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
