<script lang="ts">
  let date: Date = $state(new Date());
  let year = $derived(date.getFullYear());
  let month = $derived(date.getMonth() + 1);
  let day = $derived(date.getDate());
  let hours = $derived(date.getHours().toString().padStart(2, "0"));
  let minutes = $derived(date.getMinutes().toString().padStart(2, "0"));
  let isColonVisible = $state(true);

  setInterval(() => {
    date = new Date();
    isColonVisible = !isColonVisible;
  }, 1000);

  function applyBackgroundColor() {
    const style = getComputedStyle(document.documentElement);
    const hex = style.getPropertyValue("--background-color").trim();
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) {
      return;
    }
    const [, r, g, b] = match.map((x) => parseInt(x, 16));
    document.documentElement.style.setProperty("--background-color-r", `${r}`);
    document.documentElement.style.setProperty("--background-color-g", `${g}`);
    document.documentElement.style.setProperty("--background-color-b", `${b}`);
  }

  applyBackgroundColor();
</script>

<div class="clock-container">
  <div class="clock">
    <div class="date date-vertical">
      {year}.{month}.{day}
    </div>
    <div class="date date-horizontal">
      {month}/{day}
    </div>
    <div class="time">
      {hours}
      <span class="colon" style="--colon-opacity: {isColonVisible ? 1 : 0}"
        >:</span
      >
      {minutes}
    </div>
  </div>
</div>
