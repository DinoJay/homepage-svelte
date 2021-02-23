<script>
  import Workpage from './workpage.svelte';
  import { onMount } from 'svelte';
  // import fetch from 'cross-fetch';
  const API_KEY = '5c4e7ab0a5acc4e3b261f08e16011d48'; //TODO
  const url = `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${API_KEY}&user_id=156337600@N04&page=1&per_page=500&tag_mode=all&text=work&tags=work&extras=description,date_upload,geo,tags,machine_tags,o_dims,views,media,path_alias,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o&format=json&nojsoncallback=1`;
  const urlExtra =
    '&extras=description,date_upload,geo,tags,machine_tags,o_dims,views,media,path_alias,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o&format=json&nojsoncallback=1';
  const url2 = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5c4e7ab0a5acc4e3b261f08e16011d48&user_id=156337600%40N04&tags=work&format=json&nojsoncallback=1${urlExtra}`;

  let promise = null;
  onMount(() => {
    promise = fetch(url2, { mode: 'cors' })
      .then((response) => response.json())
      .then((result) => {
        const { photos } = result;
        const { photo } = photos;
        return photo.map((p) => {
          const tags = p.tags.split(' ');
          return { ...p, tags, description: p.description._content };
        });
        // .filter((p) => p.tags.includes('work'));
      });
  });
</script>

<div>
  {#if promise}
    {#await promise}
      <!-- promise is pending -->
      <p>Download...</p>
    {:then data}
      <Workpage {data} />
    {:catch error}
      <!-- promise was rejected -->
      <p>Something went wrong: {error.message}</p>
    {/await}
  {:else}
    <p>Download...</p>
  {/if}
</div>
