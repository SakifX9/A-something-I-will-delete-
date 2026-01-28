(function(targetId) {
  const b = (D) => {
    if (D <= 27) return Math.round(D + 4);
    else if (D <= 32) return Math.round(1.2 * D - 1.4);
    else return Math.round(2.636 * D - 47.23);
  };

  const f = (D) => Math.round(-1.05 * D + 147.2);
  const cmToIn = (cm) => Math.round(cm / 2.54);

  function init() {
    let D = 32;
    const target = targetId ? document.getElementById(targetId) : document.body;
    
    if (!target) return;

    const container = document.createElement('div');
    container.style.cssText = 'padding:20px;max-width:600px;font-family:sans-serif;margin:0;position:relative';

    const label = document.createElement('label');
    label.style.cssText = 'display:block;margin-bottom:25px;cursor:pointer';
    
    const title = document.createElement('strong');
    title.innerHTML = 'Monitor Size: <span class="mdc-size">32</span>"';
    
    const input = document.createElement('input');
    input.type = 'range';
    input.min = '20';
    input.max = '43';
    input.value = '32';
    input.style.cssText = 'width:100%;margin-top:10px;cursor:pointer;display:block';
    
    label.appendChild(title);
    const br = document.createElement('br');
    label.appendChild(br);
    label.appendChild(input);

    const valuesDiv = document.createElement('div');
    valuesDiv.style.cssText = 'display:flex;flex-direction:column;gap:14px;width:100%';

    const topDiv = document.createElement('div');
    topDiv.innerHTML = 'Distance from top of BT buttons to monitor: <span style="font-weight:bold" class="mdc-top">32 cm / 13"</span>';

    const bottomDiv = document.createElement('div');
    bottomDiv.innerHTML = 'Distance from the floor to the bottom edge of monitor: <span style="font-weight:bold" class="mdc-bottom">95 cm / 37"</span>';

    valuesDiv.appendChild(topDiv);
    valuesDiv.appendChild(bottomDiv);

    container.appendChild(label);
    container.appendChild(valuesDiv);

    target.appendChild(container);

    const sizeSpan = container.querySelector('.mdc-size');
    const topSpan = container.querySelector('.mdc-top');
    const bottomSpan = container.querySelector('.mdc-bottom');

    input.addEventListener('input', () => {
      D = Number(input.value);
      sizeSpan.textContent = D;
      topSpan.textContent = `${b(D)} cm / ${cmToIn(b(D))}"`;
      bottomSpan.textContent = `${f(D)} cm / ${cmToIn(f(D))}"`;
    });
  }

  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})('mdc-placeholder');
