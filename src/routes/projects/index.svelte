<script>
  import ProjectPage from './ProjectPage.svelte';
  import { onMount } from 'svelte';
  // import fetch from 'cross-fetch';
  const API_KEY = '5c4e7ab0a5acc4e3b261f08e16011d48'; //TODO
  const searchKey = 'project';
  const urlExtra =
    '&extras=description,date_upload,geo,tags,machine_tags,o_dims,views,media,path_alias,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o&format=json&nojsoncallback=1';
  const contentType = 'content_type=7';
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5c4e7ab0a5acc4e3b261f08e16011d48&user_id=156337600%40N04&tags=${searchKey}&${contentType}&format=json&nojsoncallback=1${urlExtra}`;

  let promise = null;
  onMount(() => {
    promise = fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((result) => {
        console.log('result', result);
        const { photos } = result;
        const { photo } = photos;
        return photo
          .map((p) => {
            const tags = p.tags.split(' ');
            return { ...p, tags, description: p.description._content };
          })
          .filter((p) => p.tags.includes('project'));
      });
  });
</script>

<div>
  {#if promise}
    {#await promise}
      <!-- promise is pending -->
      <p>Download...</p>
    {:then data}
      <ProjectPage {data} />
    {:catch error}
      <!-- promise was rejected -->
      <p>Something went wrong: {error.message}</p>
    {/await}
  {:else}
    <p>Download...</p>
  {/if}
</div>
