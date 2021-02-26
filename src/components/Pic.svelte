<script>
  export let style = '';
  export let src = '';
  export let className = '';
  import { onMount } from 'svelte';
  /* Store the element in el */
  //   let el = document.getElementById('tilt');

  let el = null;
  let transform =
    'perspective(1000px) scale(1) rotateX( -7.52632deg) rotateY( 8.14978deg);';
  onMount(() => {
    if (!el) return;
    /* Get the height and width of the element */
    const height = el.clientHeight;
    const width = el.clientWidth;

    /*
     * Add a listener for mousemove event
     * Which will trigger function 'handleMove'
     * On mousemove
     */
    el.addEventListener('mousemove', handleMove);

    /* Define function a */
    function handleMove(e) {
      /*
       * Get position of mouse cursor
       * With respect to the element
       * On mouseover
       */
      /* Store the x position */
      const xVal = e.layerX;
      /* Store the y position */
      const yVal = e.layerY;

      /*
       * Calculate rotation valuee along the Y-axis
       * Here the multiplier 20 is to
       * Control the rotation
       * You can change the value and see the results
       */
      const yRotation = 20 * ((xVal - width / 2) / width);

      /* Calculate the rotation along the X-axis */
      const xRotation = -20 * ((yVal - height / 2) / height);

      /* Generate string for CSS transform property */
      transform =
        'perspective(1000px) scale(1) rotateX(' +
        xRotation +
        'deg) rotateY(' +
        yRotation +
        'deg)';

      /* Apply the calculated transformation */
      // el.style.transform = transform;
    }

    /* Add listener for mouseout event, remove the rotation */
    // el.addEventListener('mouseout', function () {
    //   el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
    // });

    // /* Add listener for mousedown event, to simulate click */
    // el.addEventListener('mousedown', function () {
    //   el.style.transform =
    //     'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
    // });

    // /* Add listener for mouseup, simulate release of mouse click */
    // el.addEventListener('mouseup', function () {
    //   el.style.transform =
    //     'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
    // });
  });
</script>

<div
  bind:this={el}
  class="shade relative transition transition duration-300 ease-in-out w-full h-full"
  style="transform:{transform}; box-shadow: 10px 10px 0px #ccd3da">
  <img {src} alt="src" class="object-cover object-center w-full h-full  " />
  <div class="absolute bottom-0"><slot /></div>
</div>

<style>
</style>
