(function() {
  const b = (D) => {
    if (D <= 27) return Math.round(D + 4);
    else if (D <= 32) return Math.round(1.2 * D - 1.4);
    else return Math.round(2.636 * D - 47.23);
  };

  const f = (D) => Math.round(-1.05 * D + 147.2);
  const cmToIn = (cm) => Math.round(cm / 2.54);

  function init() {
    const container = document.querySelector('[data-monitor-calculator]') || (() => {
      const div = document.createElement('div');
      div.setAttribute('data-monitor-calculator', '');
      document.body.appendChild(div);
      return div;
    })();

    let D = 32;

    const html = `
      <div style="padding:20px;max-width:600px;font-family:sans-serif">
        <label style="display:block;margin-bottom:25px">
          <strong>Monitor Size: <span id="mdc-size">32</span>"</strong>
          <input type="range" id="mdc-range" min="20" max="43" value="32" style="width:100%;margin-top:10px;cursor:pointer">
        </label>
        <div style="display:flex;flex-direction:column;gap:14px;width:100%">
          <div>Distance from top of BT buttons to monitor: <span style="font-weight:bold" id="mdc-top">32 cm / 13"</span></div>
          <div>Distance from the floor to the bottom edge of monitor: <span style="font-weight:bold" id="mdc-bottom">95 cm / 37"</span></div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const range = container.querySelector('#mdc-range');
    const size = container.querySelector('#mdc-size');
    const top = container.querySelector('#mdc-top');
    const bottom = container.querySelector('#mdc-bottom');

    range.addEventListener('input', () => {
      D = Number(range.value);
      size.textContent = D;
      top.textContent = `${b(D)} cm / ${cmToIn(b(D))}"`;
      bottom.textContent = `${f(D)} cm / ${cmToIn(f(D))}"`;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
