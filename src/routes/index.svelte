<script>
  import { onMount } from 'svelte';
  import Pic from '$components/Pic.svelte';
  import Title from '$components/Title.svelte';
  let title = null;
  let rXP = 170;
  let rYP = 319;
  // onMount(() => {
  //   document.addEventListener('mousemove', (e) => {
  //     const offX = title ? title.offsetLeft : 0;
  //     const offY = title ? title.offsetTop : 0;
  //     const offsetWidth = title ? title.offsetWidth : 0;
  //     const offsetHeight = title ? title.offsetHeight : 0;
  //     rXP = Math.max(Math.min(e.pageX - offX - offsetWidth / 2, 170), -170);
  //     rYP = e.pageY - offY - offsetHeight / 2;
  //     console.log({ rXP, rYP });
  //   });
  // });
</script>

<div class="flex-grow flex items-center">
  <div class="max-w-2xl mr-12 ">
    <h1 class="text-7xl mb-4 relative">
      <Title>Jan Maushagen</Title>
    </h1>
    <p class="text-gray-700">
      <span class="line-through">PhD student</span>, orginally from Germany,
      (32) years{' and '} me {6} months old) for{' '}
      {7} years now. Getting my head around research, programming and languages.
      Drinking cappucino in the morning, jogging and doing Diss-co music in the evening.
      As part of my day job I work on data visualization and educational Games!
    </p>
  </div>
  <div class="gallery flex-grow">
    <div class="firstPic">
      <Pic src="/whiteboard.jpg" className="w-full h-full bg-cover bg-center">
        <h2 class="">
          <span
            class="bg-black text-white text-xl px-2 py-1 uppercase font-mono"
            ><a href="/projects">#projects</a></span>
        </h2>
      </Pic>
    </div>
    <div class="secPic">
      <Pic src="/mixer.jpg" className="bg-center bg-cover w-full h-full ">
        <h2 class="">
          <span
            class="bg-black text-white text-xl px-2 py-1 uppercase font-mono"
            >#mixtapes</span>
        </h2>
      </Pic>
    </div>
    <div class="thirdPic">
      <Pic
        src="/tickle.jpg"
        className="cover bg-cover bg-center w-full h-full ">
        <h2 class="absolute bottom-0">
          <span
            class="bg-black text-white text-xl px-2 py-1 uppercase font-mono"
            >#projects/</span>
          <span
            class="bg-black text-white text-xl px-2 py-1 uppercase font-mono">
            tickle
          </span>
        </h2>
      </Pic>
    </div>
    <div class="fourthPic">
      <Pic src="me_blurred.jpg" className="bg-center bg-cover w-full h-full ">
        <h2>
          <span
            class="bg-black text-white text-xl px-2 py-1 uppercase font-mono"
            ><a href="/work">#work</a></span>
        </h2>
      </Pic>
    </div>
    <div class="fifthPic">
      <Pic src="/holger.jpg" className="bg-cover bg-center w-full h-full ">
        <span class="bg-black text-white text-xl px-2 py-1 uppercase font-mono"
          ><a href="/work">#project/vinyl</a></span>
      </Pic>
    </div>
  </div>
</div>

<style>
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
  /* .layer {
    width: 100%;
    height: 100%;
    position: absolute;
  } */
  .layer-1 {
    opacity: 0.6;
  }
  .layer-2 {
    opacity: 0.6;
  }
  .layer-3 {
    opacity: 0.6;
  }
  .box {
    /* box-shadow: 7px 7px 0px #404040; */
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(18, 20px);
    column-gap: 25px;
    row-gap: 20px;
  }
  .firstPic {
    /* background-image: url(/whiteboard.jpg); */
    grid-column: span 9;
    grid-row: 1 / span 10;
  }
  .secPic {
    grid-column: span 7;
    grid-row: 2 / span 6;
  }
  .thirdPic {
    grid-column: span 4;
    grid-row: 11 / span 6;
  }
  .fourthPic {
    grid-column: span 5;
    grid-row: 11 / span 7;
  }
  .fifthPic {
    grid-column: span 7;
    grid-row: 8 / span 8;
  }
</style>
