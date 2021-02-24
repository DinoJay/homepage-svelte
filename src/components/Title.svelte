<script>
  export let className = '';
</script>

<span class="{className} mb-4 relative title">
  <span class=" opacity-0  px-2 font-mono font-bold "><slot /></span>
  <span
    class=" first absolute left-0 top-0   font-mono font-bold transition-all"
    ><slot /></span>
  <span
    class=" second absolute left-0 top-0   font-mono font-bold transition-all"
    ><slot /></span>
  <span
    class="third absolute left-0 top-0  px-2 font-mono font-bold transition-all"
    ><slot /></span>
  <span class="hidden absolute text-black left-0 px-2 font-mono font-bold "
    ><slot /></span>
</span>

<style>
  .title * {
    text-transform: uppercase;
    letter-spacing: -0.1em;
    transform-origin: left;
    mix-blend-mode: multiply;
  }
  .first {
    transform: translate(0%, 0%);
    color: #0091e5;
  }
  .second {
    transform: translate(1%, 0%);
    color: #e42149;
  }
  .third {
    transform: translate(0.3%, 0%);
    color: #fff146;
  }
</style>
