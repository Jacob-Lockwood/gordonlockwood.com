<script lang="ts">
  // import YouTubeEmbed from "./YouTubeEmbed.svelte";

  interface Video {
    id: string;
    width: number;
    height: number;
  }
  export let videos: Video[];
  $: openVideo = 0;
  const switchVideo = (i: number) => (e: Event) => (openVideo = i);
  const prev = (e: Event) =>
    openVideo === 0 ? (openVideo = videos.length - 1) : openVideo--;
  const next = (e: Event) =>
    openVideo === videos.length - 1 ? (openVideo = 0) : openVideo++;
</script>

<div class="carousel">
  <button class="prev" on:click={prev}>
    <span class="arrow">&larr;</span>
  </button>
  {#each videos as { width, height, id }, i}
    <div class="parent" class:selected={openVideo === i}>
      <div class="wrap" style="--width: {width}; --height: {height}">
        <iframe
          src="https://www.youtube.com/embed/{id}"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  {/each}
  <button class="next" on:click={next}>
    <span class="arrow">&rarr;</span>
  </button>
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
  .prev,
  .next {
    width: 3rem;
  }
  .arrow {
    font-size: 2rem;
  }
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
  button:active,
  button.active {
    background: white;
    color: navy;
    border: 3px solid navy;
  }
  @media (max-width: 500px) {
    .carousel {
      font-size: 0.5em;
    }
  }

  .parent {
    display: none;
    justify-content: center;
    padding: 0 4em 1em;
  }
  .parent.selected {
    display: flex;
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
