<script lang="ts">
  type Props = {
    layout: Layout;
  };

  const { layout }: Props = $props();
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
</script>

<div class="clock-container {layout}">
  <div class="clock">
    <div class="date">
      {#if layout === "standard"}
        {year}.{month}.{day}
      {:else}
        {month}/{day}
      {/if}
    </div>
    <div class="time">
      {hours}
      <span class="colon" style="--colon-opacity: {isColonVisible ? 1 : 0}">
        :
      </span>
      {minutes}
    </div>
  </div>
</div>
