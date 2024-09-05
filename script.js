const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = parseFloat(
    getComputedStyle(e.target).getPropertyValue("width")
  );
  const label_width = parseFloat(
    getComputedStyle(label).getPropertyValue("width")
  );

  const max = +e.target.max;
  const min = +e.target.min;

  // Obliczanie pozycji etykiety
  const left =
    (value / max) * (range_width - label_width) +
    label_width / 2 -
    label_width / 2;

  label.style.left = `${left}px`;
  label.innerHTML = value;

  // Zmienianie koloru tła dynamicznie
  const hue = (value / max) * 360;
  document.body.style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
});

// Funkcja mapująca wartości z jednego zakresu na drugi
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
