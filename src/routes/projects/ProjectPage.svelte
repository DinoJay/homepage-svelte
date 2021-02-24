<script>
  export let data = [];
  import { ArrowBigLeft } from 'tabler-icons-svelte';
  import Title from '$components/Title.svelte';

  const rowHeight = 20;
  let prepData = [];
  let offsetWidth = 0;
  const divisor = 8;
  $: {
    prepData = data.map((d) => ({
      ...d,
      cols: Math.max(Math.round(d.width_t / divisor), 1),
      rows: Math.max(Math.round(d.height_t / divisor), 1),
    }));
  }
  let id = null;
  const getStyles = (d) => {
    if (d.id !== id)
      return `grid-column: span ${d.cols};grid-row: span ${d.rows}`;
    return `grid-column: ${1};grid-row: ${1}`;
  };
</script>

<div class="w-full" bind:offsetWidth>
  <h1 class="text-7xl mb-3"><Title>Projects</Title></h1>
  <div
    class="gallery"
    style="grid-template-columns: repeat({Math.round(
      Math.floor(offsetWidth / divisor / 2.8)
    )}, {divisor}px); ">
    {#each prepData as d (d.id)}
      <div
        role="button"
        on:click={() => (id = id !== d.id ? id : d.id)}
        class="w-full h-full relative"
        style={getStyles(d)}>
        <span class="absolute top-0 bg-black text-white px-2">{d.title}</span>
        <img class="w-full h-full" alt={d.id} src={d.url_m} />
      </div>
    {/each}
  </div>
  <a href="/" class="text-2xl uppercase mb-3 flex items-center"
    ><ArrowBigLeft /> <span>Home</span></a>
</div>

<style>
  .gallery {
    display: grid;
    grid-auto-rows: 8px;
    grid-gap: 15px;
    grid-auto-flow: dense;
  }
</style>
