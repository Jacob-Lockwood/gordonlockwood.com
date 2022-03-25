<script>
  import Carousel from "./Carousel.svelte";
  import Events from "./Events.svelte";

  const videos = [
    { id: "0uHk1MXrhGw", width: 560, height: 315 },
    { id: "j92oXP9pWbA", width: 560, height: 315 },
    { id: "WB0VMW2ACiE", width: 560, height: 315 },
  ];

  const images = [
    { src: "/images/graphic.webp", alt: "" },
    { src: "/images/lockwood.jpg", alt: "Jeremiah Lockwood" },
    { src: "/images/gordon.jpg", alt: 'Ricky "Dirty Red" Gordon' },
  ];

  const socials = [
    {
      href: "https://www.youtube.com/channel/UC8ve7pvyF9rQMX02fBXgTsw",
      image: { src: "images/youtube.svg", alt: "YouTube" },
    },
    {
      href: "https://www.facebook.com/jeremiah.lockwood",
      image: { src: "images/facebook.svg", alt: "Facebook" },
    },
  ];
</script>

<main>
  <section id="top">
    <h1>Gordon Lockwood</h1>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img {...images[0]} />
  </section>

  <section id="media">
    <div>
      <h2>Gordon Lockwood LIVE at Barbés Brooklyn</h2>
      <Carousel {videos} />
    </div>
  </section>

  <p class="about-para">
    Jeremiah Lockwood and Ricky Gordon have been making music together for over
    two decades, originally as disciples of Piedmont Blues legend Carolina Slim.
    For their first post-pandemic live shows they have begun a new duo to share
    the sonic pleasures stored up over a tumultuous year of longing. Expect old
    time blues, new-time rhythms, and ballads about all the things we want to do
    with you.
  </p>

  <h2>About the artists</h2>

  <section class="about" id="about">
    <div>
      <h3>Jeremiah Lockwood</h3>
      <p>
        Singer/guitarist Jeremiah Lockwood is the founder of The Sway Machinery,
        a world-exploring, genre-defying band perhaps best known for its
        collaborations with the late great Khaira Arby of Timbuktu.
      </p>
    </div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img {...images[1]} />
  </section>

  <section class="about">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img {...images[2]} />
    <div>
      <h3>Ricky "Dirty Red" Gordon</h3>
      <p>
        Drummer Ricky Gordon is a member of the Wynton Marsalis Ensemble and a
        prolific composer for the screen, including iconic collaborations with
        Spike Lee.
      </p>
    </div>
  </section>

  <h2>Events</h2>

  <section id="events">
    <Events />
  </section>

  <footer>
    <h2>Contact us!</h2>
    <h3>
      <a href="mailto:jeremiahdaniellockwood@yahoo.com">
        jeremiahdaniellockwood@yahoo.com
      </a>
    </h3>
    <ul class="socials">
      {#each socials as { href, image }}
        <li>
          <a {href}>
            <!-- svelte-ignore a11y-missing-attribute -->
            <img {...image} />
          </a>
        </li>
      {/each}
    </ul>
  </footer>
</main>

<style>
  h1,
  h2 {
    text-align: center;
  }
  h2 {
    text-transform: uppercase;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    padding: 1em;
  }
  main::before,
  main::after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
    background-size: 100%;
    background-image: url(/images/margin-right.webp);
  }
  main::before {
    left: 0;
    background-image: url(/images/margin-left.webp);
  }
  section,
  footer {
    position: relative;
    display: flex;
    gap: 1em;
    justify-content: center;
    width: 80%;
    margin-bottom: 2em;
  }
  section > * {
    flex-basis: 100%;
  }
  .about-para {
    width: 50%;
    text-align: center;
    font-size: 1.2rem;
  }
  .about > div {
    flex-basis: 110%;
  }
  .about {
    font-size: 1.5rem;
    text-align: left;
  }
  h3 {
    font-size: 1.5em;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
  h1 {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 80%;
    font-family: "Rubik Mono One", sans-serif;
    font-size: 5rem;
    color: navy;
    opacity: 0.7;
  }

  footer {
    text-align: center;
    display: block;
    background-color: navy;
    padding: 2em;
    color: white;
  }
  footer h2,
  footer h3 {
    margin: 0;
  }
  footer a {
    color: whitesmoke;
    width: 100%;
    text-decoration: underline;
    word-wrap: break-word;
  }
  .socials {
    width: 100%;
    justify-content: center;
    display: flex;
    list-style: none;
    gap: 2em;
    padding: 0;
  }
  .socials img {
    width: 3em;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 3rem;
      width: 90%;
    }
    .about {
      flex-direction: column;
    }
    .about > img {
      order: 1;
    }
  }

  @media (max-width: 800px) {
    .about-para {
      width: 80%;
    }
  }

  @media (max-width: 600px) {
    section,
    footer {
      width: 100%;
    }
    main::before,
    main::after {
      content: none;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 2rem;
      /* width: 90%; */
    }
  }
</style>
