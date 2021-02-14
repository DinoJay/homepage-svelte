<script>
  import './_global.pcss';
  import Nav from '$components/Nav.svelte';
</script>

<main class=" h-full mx-10 flex flex-col">
  <div class="pin m-auto bg-red-500 rounded-full w-6 h-6" />
  <Nav />
  <slot />
</main>

<style>
  .pin {
    box-shadow: 5px 5px 4px grey;
  }
  /* red #7b0d0c */
  /* slate #425f77 */
  /* yellow #f8d550 */
  main {
    /* overflow: auto;
    /* @apply p-3; */
    /* max-width: 62ch;
    max-height: 74ch;
    border-color: #888853;
    box-shadow: 5px 5px 0px #c1c1ab;
    /* border-radius: 255px 15px 225px 15px/15px 225px 15px 255px; */
    /* background: #f6f1e9; */
    /* // hsla(67, 95%, 95%, 0.7); */
    /* box-shadow: 0 5px 5px hsla(0, 0%, 0%, 0.3),
      inset 0 0 5px hsla(0, 0%, 0%, 0.3); */
  }
</style>
