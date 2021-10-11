<script>
  import { onMount } from "svelte";
  let activeLink = -1;
  const urls = ["top", "Media", "About", "Events"].map((title) => ({
    title,
    href: `#${title.toLowerCase()}`,
  }));
  onMount(() => {
    const sections = [
      ...document.querySelectorAll(urls.map(({ href }) => href).join(", ")),
    ];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          activeLink = sections.indexOf(target);
        }),
      { threshold: 0.3 }
    );
    sections.forEach((section) => io.observe(section));
  });

  let shown = false;
  const toggleNav = () => (shown = !shown);
  const linkClick = ({ target }) => {
    document.querySelector(target.href.replace(/^.*#/, "#")).scrollIntoView();
  };
</script>

<header>
  <button class="nav-toggle" class:shown on:click={toggleNav}>
    <svg
      viewBox="0 0 50 50"
      width="30"
      height="30"
      overflow="visible"
      stroke="navy"
      stroke-width="10"
      stroke-linecap="round"
    >
      {#if shown}
        <line x1="0" y1="0" x2="50" y2="50" />
        <line x1="50" y1="0" x2="0" y2="50" />
      {:else}
        <line x1="0" y1="0" x2="50" y2="0" />
        <line x1="0" y1="25" x2="50" y2="25" />
        <line x1="0" y1="50" x2="50" y2="50" />
      {/if}
    </svg>
  </button>
  <nav class:shown>
    <ul>
      {#each urls as { title, href }, i}
        <li>
          <a
            {href}
            class:active={i === activeLink}
            on:click|preventDefault={linkClick}
          >
            {title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .nav-toggle {
    position: fixed;
    z-index: 2000;
    background: white;
    top: 1em;
    right: 10%;
    padding: 1em;
    background: none;
    border: none;
    opacity: 0.8;
    cursor: pointer;
  }
  .nav-toggle svg {
    filter: drop-shadow(3px 0 0 white) drop-shadow(-3px 0 0 white)
      drop-shadow(0 3px 0 white) drop-shadow(0 -3px 0 white);
  }
  nav {
    position: fixed;
    inset: 0;
    margin: 0;
    padding: 1em;
    background: rgba(0, 0, 128, 0.8);
    color: white;
    width: 8em;
    transition: transform 500ms;
    transform: translateX(-100%);
    text-transform: uppercase;
    /* font-size: 2em; */
    font-weight: bold;
    z-index: 1000;
  }
  nav.shown {
    transform: translateX(0);
  }
  nav ul {
    list-style: none;
    padding: 0;
  }
  nav a {
    color: white;
  }
  nav a.active {
    color: red;
  }
  nav li {
    margin-top: 0.3em;
  }
  nav li:first-child {
    position: absolute;
    bottom: 5%;
  }
  @media (max-width: 600px) {
    .nav-toggle {
      right: 0;
    }
    nav {
      width: 100%;
    }
  }
</style>
