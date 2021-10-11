<script>
  import YouTubeEmbed from "./YouTubeEmbed.svelte";
  /** @type {{ id: string, width: number, height: number }[]} */
  export let videos;
  $: openVideo = 0;
  const switchVideo = (i) => (e) => (openVideo = i);
  const prev = (e) =>
    openVideo === 0 ? (openVideo = videos.length - 1) : openVideo--;
  const next = (e) =>
    openVideo === videos.length - 1 ? (openVideo = 0) : openVideo++;
</script>

<div class="carousel">
  <button class="prev" on:click={prev}>&larr;</button>
  <YouTubeEmbed {...videos[openVideo]} />
  <button class="next" on:click={next}>&rarr;</button>
  <div class="switcher">
    {#each videos as _, i}
      <button
        class="switch-btn"
        class:active={openVideo === i}
        on:click={switchVideo(i)}
      >
        •
      </button>
    {/each}
  </div>
</div>

<style>
  button {
    cursor: pointer;
    opacity: 0.8;
  }
  .carousel {
    position: relative;
    width: 100%;
  }
  .next,
  .prev {
    height: calc(100% - 1.25em);
    padding: 0;
    font-size: 3em;
    /* width: 2em; */

    position: absolute;
    top: 0;
    background: navy;
    color: white;
    border: none;
    border-radius: 0.5em;
  }
  .next {
    right: 0;
  }
  .prev {
    left: 0;
  }
  .switcher {
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: space-around;
    gap: 1em;
  }
  .switch-btn {
    flex-basis: 100%;
    background: navy;
    color: white;
    border: none;
    border-radius: 0.5em;
  }
  .switch-btn.active,
  .switch-btn:active,
  .next:active,
  .prev:active {
    background: white;
    color: navy;
    border: 3px solid navy;
  }
  @media (max-width: 500px) {
    .carousel {
      font-size: 0.5em;
    }
  }
</style>
