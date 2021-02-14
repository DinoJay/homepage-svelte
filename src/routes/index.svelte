<script>
</script>

<div class="flex-grow flex items-center">
  <div class="max-w-2xl mr-12 ">
    <h1 class="text-7xl mb-4 ">
      <span class="bg-black text-white px-2 font-mono">Jan Maushagen</span>
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
    <div class="box w-full h-full firstPic bg-cover bg-center">
      <h2 class="">
        <span class="bg-black text-white text-xl px-2 py-1 uppercase font-mono"
          ><a href="/projects">#projects</a></span>
      </h2>
    </div>
    <div class="box secPic bg-center bg-cover w-full h-full ">
      <h2 class="">
        <span class="bg-black text-white text-xl px-2 py-1 uppercase font-mono"
          >#mixtapes</span>
      </h2>
    </div>
    <div
      class="box relative object-cover bg-cover bg-center thirdPic w-full h-full ">
      <h2 class="absolute bottom-0">
        <span class="bg-black text-white text-xl px-2 py-1 uppercase font-mono"
          >#projects/</span>
        <span class="bg-black text-white text-xl px-2 py-1 uppercase font-mono">
          tickle
        </span>
      </h2>
    </div>
    <div class="box object-cover bg-center bg-cover fourthPic w-full h-full ">
      <span class="bg-black text-white text-xl px-2 py-1 uppercase font-mono"
        ><a href="/work">#work</a></span>
    </div>
    <div class="box object-cover fifthPic bg-cover bg-center w-full h-full ">
      <span class="bg-black text-white text-xl px-2 py-1 uppercase font-mono"
        ><a href="/work">#project/vinyl</a></span>
    </div>
  </div>
</div>

<style>
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
    background-image: url(/whiteboard.jpg);
    grid-column: span 9;
    grid-row: 1 / span 10;
  }
  .secPic {
    background-image: url(/mixer.jpg);
    grid-column: span 7;
    grid-row: 2 / span 6;
  }
  .thirdPic {
    background-image: url(/tickle.jpg);
    grid-column: span 4;
    grid-row: 11 / span 6;
  }
  .fourthPic {
    background-image: url(/me_blurred.jpg);
    grid-column: span 5;
    grid-row: 11 / span 7;
  }
  .fifthPic {
    background-image: url(/holger.jpg);
    grid-column: span 7;
    grid-row: 8 / span 8;
  }
</style>
