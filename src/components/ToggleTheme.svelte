<script>
  import { theme } from '../routes/store';

  const toggleTheme = (e) => {
    e.currentTarget.blur();
    $theme = $theme === 'dark' ? 'light' : 'dark';

    document.querySelector('html').classList.toggle('dark');
  };
</script>

<button on:click={toggleTheme}> Toggle Theme </button>
