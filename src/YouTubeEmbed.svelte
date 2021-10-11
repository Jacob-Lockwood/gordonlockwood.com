<script>
  export let id, width, height;
</script>

<div class="parent">
  <div class="wrap" style="--width: {width}; --height: {height}">
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
    />
  </div>
</div>

<style>
  .parent {
    display: flex;
    justify-content: center;
    padding: 0 4em 1em;
  }
  .wrap {
    display: flex;
    justify-content: center;
    border-radius: 1em;
    overflow: hidden;
    height: calc((85vw) / (var(--width) / var(--height)));
    width: 100%;
  }
  iframe {
    flex-basis: 100%;
  }
</style>
