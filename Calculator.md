<style>
h2 {
  font-size: 36px;
}
h1 {
  display: none !important;
}
</style>

<h2 style="font-size:48px; font-weight:bold; margin-bottom:10px;">My Calculator</h2>


<input type="range" id="slider" min="1" max="25" value="1">
<span id="val">1</span>

<p>Result: <span id="out">3</span></p>

<script src="calculator.js"></script>
<script>
  const slider = document.getElementById('slider');
  const val = document.getElementById('val');
  const out = document.getElementById('out');

  slider.addEventListener('input', () => {
    const x = Number(slider.value);
    val.textContent = x;
    out.textContent = addTwo(x);
  });
</script>
