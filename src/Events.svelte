<script>
  import { eventsPromise } from "./restdb";
  import linkifyHtml from "linkify-html";
  const addressToLink = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
</script>

<div class="events">
  {#await eventsPromise}
    <div class="event">
      <h4>Loading events...</h4>
      <p>...</p>
    </div>
  {:then events}
    {#each events as { title, date, address, description }}
      <div class="event">
        <h4>{title}</h4>
        <p>{date}</p>
        <p><a href={addressToLink(address)}>{address}</a></p>
        <p>
          {@html linkifyHtml(description)}
        </p>
      </div>
    {/each}
  {/await}
</div>

<style>
  .events {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    gap: 2em;
    box-shadow: inset -0.5em 0 0.5em -0.3em navy;
  }
  .event {
    width: 40ch;
    flex-shrink: 0;
    border: 3px dashed;
    padding: 0.5em;
  }
</style>
