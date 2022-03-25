<script>
  // import { eventsPromise } from "./restdb";
  import linkifyHtml from "linkify-html";
  const addressToLink = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
  const barbesInfo = {
    title: "Live at Barbès",
    address: "376 9th St. corner of 6th Ave, Park Slope, Brooklyn",
    description:
      "Gordon Lockwood live at Barbès: https://www.barbesbrooklyn.com/events",
  };
  const terraBluesInfo = {
    title: "Live at Terra Blues",
    address: "149 Bleecker St., Manhattan",
    description:
      "Gordon Lockwood live at Terra Blues: https://www.terrablues.com/events",
  };
  const events = [
    { ...terraBluesInfo, date: "Thursday March 31 7-10 pm" },
    { ...barbesInfo, date: "Friday April 22 8pm" },
    { ...terraBluesInfo, date: "Thursday April 28 7-10 pm" },
    { ...terraBluesInfo, date: "Thursday May 19 7-10 pm" },
    { ...barbesInfo, date: "Saturday May 21 6pm" },
    { ...terraBluesInfo, date: "Thursday June 2 7-10 pm" },
    {
      ...barbesInfo,
      title: "Saturday afternoon residency at Barbès in July each week at 6pm",
      date: "Saturdays July 4, 11, 18, 25 at 6 pm",
      description:
        "Gordon Lockwood live at Barbès every Saturday in July: https://www.barbesbrooklyn.com/events",
    },
  ];
</script>

<div class="events">
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
