<script>
  import Workpage from './workpage.svelte';
  import WorkPage from './workpage.svelte';
  const API_KEY = '5c4e7ab0a5acc4e3b261f08e16011d48'; //TODO
  const url = `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${API_KEY}&user_id=156337600@N04&page=1&per_page=500&tag_mode=all&text=work&tags=work&extras=description,date_upload,geo,tags,machine_tags,o_dims,views,media,path_alias,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o&format=json&nojsoncallback=1`;

  let promise = fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((result) => {
      const { photos } = result;
      const { photo } = photos;
      return photo
        .map((p) => {
          const tags = p.tags.split(' ');
          return { ...p, tags, description: p.description._content };
        })
        .filter((p) => p.tags.includes('work'));
    });
</script>

<div>
  {#await promise}
    <!-- promise is pending -->
    <p>Download...</p>
  {:then data}
    <Workpage {data} />
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>
