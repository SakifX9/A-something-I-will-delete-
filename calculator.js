(function() {
  function initCalculator() {
    // --- Create container ---
    const container = document.createElement("div");
    container.style.padding = "20px";
    container.style.maxWidth = "600px";
    container.style.fontFamily = "sans-serif";

    // --- Slider label ---
    const label = document.createElement("label");
    label.style.display = "block";
    label.style.marginBottom = "25px";

    const title = document.createElement("strong");
    title.textContent = "Monitor Size: ";

    const monitorValue = document.createElement("span");
    monitorValue.textContent = "32"; // initial value

    title.appendChild(monitorValue);
    label.appendChild(title);

    // Slider input
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "20";
    slider.max = "43";
    slider.value = "32";
    slider.style.width = "100%";
    slider.style.marginTop = "10px";

    label.appendChild(slider);
    container.appendChild(label);

    // --- Results container ---
    const results = document.createElement("div");
    results.style.display = "flex";
    results.style.flexDirection = "column";
    results.style.gap = "14px";
    container.appendChild(results);

    // --- Append container directly after this script tag ---
    const currentScript = document.currentScript;
    currentScript.parentNode.insertBefore(container, currentScript.nextSibling);

    // --- Calculator functions ---
    const b = (D) =>
      Math.round(
        (37 / ((32 / Math.sqrt((9 / 16) ** 2 + 1)) * 2.54)) *
          ((D / Math.sqrt((9 / 16) ** 2 + 1)) * 2.54)
      );

    const f = (D) => Math.round(-1.05 * D + 147.2);
    const cmToIn = (cm) => Math.round(cm / 2.54);

    // --- Update function ---
    function update() {
      const D = Number(slider.value);
      monitorValue.textContent = D;

      results.innerHTML = `
        <div>
          Distance from top of BT buttons to monitor: 
          <b>${b(D)} cm / ${cmToIn(b(D))}"</b>
        </div>
        <div>
          Distance from floor to bottom edge of monitor: 
          <b>${f(D)} cm / ${cmToIn(f(D))}"</b>
        </div>
      `;
    }

    // Listen for slider changes
    slider.addEventListener("input", update);
    update();
  }

  // --- Run immediately if DOM is ready, otherwise wait ---
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCalculator);
  } else {
    initCalculator();
  }
})();
