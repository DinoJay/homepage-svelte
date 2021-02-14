<script>
</script>

<div class="flex-grow flex items-center">
  <div class="max-w-2xl mr-12 ">
    <h1 class="text-7xl mb-4 ">
      <span class="title text-white px-2 ">Jan Maushagen</span>
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
    <img
      src="/whiteboard.jpg"
      alt="photo1"
      class="object-cover firstPic w-full h-full border-2" />
    <img alt="photo2" src="/mixer.jpg" class="secPic w-full h-full border-2" />
    <img
      alt="photo3"
      src="/tickle.jpg"
      class="object-cover thirdPic w-full h-full border-2" />
    <img
      alt="photo4"
      src="/me_blurred.jpg"
      class="object-cover fourthPic w-full h-full border-2" />
    <img
      alt="photo5"
      src="/holger.jpg"
      class="object-cover fifthPic w-full h-full border-2" />
  </div>
</div>

<style>
  .title {
    background: #404040;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(18, 20px);
    column-gap: 25px;
    row-gap: 20px;
  }
  .firstPic {
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
