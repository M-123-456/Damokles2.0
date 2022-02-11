const machine = { element: null };

window.onload = () => {
  console.log("hi");
  machine.element = document.getElementById("slots-body");
  const child = document.createElement("div");
  child.innerHTML = "lol";
  machine.element.append(child);
};
