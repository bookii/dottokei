<script lang="ts">
  type Props = {
    layout: Layout;
  };

  const { layout }: Props = $props();
  let date: Date = $state(new Date());
  let year = $derived(date.getFullYear());
  let month = $derived(date.getMonth() + 1);
  let day = $derived(date.getDate());
  let hours = $derived(date.getHours());
  let minutes = $derived(date.getMinutes());
  let seconds = $derived(date.getSeconds());

  setInterval(() => {
    date = new Date();
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
      {hours.toString().padStart(2, "0")}
      <span class="colon" style="--colon-opacity: {seconds % 2 === 0 ? 1 : 0}">
        :
      </span>
      {minutes.toString().padStart(2, "0")}
    </div>
  </div>
</div>
