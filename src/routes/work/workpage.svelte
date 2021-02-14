<script>
  export let data = [];
  import picHanging from './pictureHanging';
  const rowHeight = 20;
  let prepData = [];
  let offsetWidth = 0;
  const divisor = 10;
  $: {
    prepData = data.map((d) => ({
      ...d,
      cols: Math.max(Math.round(d.width_t / 4), 1),
      rows: Math.max(Math.round(d.height_t / 4), 1),
    }));
    console.log('prepData', prepData);
  }
</script>

<div class="w-full" bind:offsetWidth>
  <div
    class="gallery"
    style="grid-template-columns: repeat({Math.round(
      offsetWidth / divisor
    )}, {divisor}px);
  ">
    {#each prepData as d (d.id)}
      <div
        class="w-full h-full"
        style="grid-column: span {d.cols};grid-row: span {d.rows}">
        <img class="w-full h-full" alt={d.id} src={d.url_m} />
      </div>
    {/each}
  </div>
</div>

<style>
  .gallery {
    display: grid;
    grid-template-rows: repeat(8, 15px);
    grid-gap: 15px;
  }
</style>
