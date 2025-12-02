<script lang="ts">
  import { Icon } from "@sveltestrap/sveltestrap";
  import { onMount, onDestroy } from "svelte";
  import Nav from "../../components/Nav.svelte";
  import photo1 from "$lib/assets/photo1.jpg?enhanced";
  import photo2 from "$lib/assets/photo2.jpg?enhanced";
  import photo3 from "$lib/assets/photo3.jpg?enhanced";
  import photo4 from "$lib/assets/photo4.jpg?enhanced";
  import photo5 from "$lib/assets/photo5.jpg?enhanced";
  import photo6 from "$lib/assets/photo6.jpg?enhanced";
  import photo7 from "$lib/assets/photo7.jpg?enhanced";
  import photo8 from "$lib/assets/photo8.jpg?enhanced";
  import photo9 from "$lib/assets/photo9.jpg?enhanced";
  import photo10 from "$lib/assets/photo10.jpg?enhanced";
  import resume from "$lib/assets/resume.pdf";

  import { theme } from "../../utilities/themeStore";

  import Gallery from "$lib/Gallery.svelte";
  let currentTheme: string = "auto"; // default
  import { browser } from "$app/environment";
  // used for updating ratio on spotify iframe div
  let width: number;
  let isMobile: boolean = false;
  // Subscribe to the theme store
  theme.subscribe((value) => {
    currentTheme = value;
  });

  // Set the initial theme on mount
  onMount(() => {
    document.body.className = currentTheme;
  });

  if(browser){
    // Reactive variable for window width
    width = window.innerWidth;
    // You can define a mobile breakpoint (e.g., 768px)Add commentMore actions
    isMobile = width <= 500;
  }

  const galleryImages = [
    { src: photo1.img.src, title: "waterfall" },
    { src: photo2.img.src, title: "river and mountains" },
    { src: photo3.img.src, title: "waterfall" },
    { src: photo4.img.src, title: "field" },
    { src: photo5.img.src, title: "horses" },
    { src: photo6.img.src, title: "hike" },
    { src: photo7.img.src, title: "mountain highway" },
    { src: photo8.img.src, title: "Sheep" },
    { src: photo9.img.src, title: "Puffin" },
    { src: photo10.img.src, title: "train"}
  ];
</script>

<Nav></Nav>

<section class="mx-auto px-5 mt-5">
  <h2 class="mt-2">Professional Background</h2>

  <p>
    I am a software developer with experience in full-stack development,
    specializing in Laravel or Slim PHP for back-end and Svelte or Vue for
    front-end development.
  </p>
  <p>
    Proficient in JavaScript, PHP, HTML, CSS, and Python, I have hands-on
    experience working in agile environments and throughout the software
    development lifecycle.
  </p>
  <p>
    Passionate about building software, I continuously explore new technologies
    to stay current and enhance development.
  </p>
  <p>
    I am currently pursuing an associate's degree in Cybersecurity.</p>

  <h3>Experience</h3>
  <ul>
    <li>Software Development</li>
    <li>Software Quality Assurance</li>
  </ul>

  <h3>Skills and technologies</h3>
  <ul>
    <li>
      <strong>Software Development:</strong> Full stack, front end, back end, web
      development, scripting
    </li>
    <li>
      <strong>Software Quality Assurance & Testing:</strong> Manual software testing,
      automated software testing (Selenium)
    </li>
    <li>
      <strong>Programming Languages:</strong> PHP, Python, Javascript/Typescript,
      Java, SQL
    </li>
    <li>
      <strong>Programming Frameworks:</strong> Slim PHP, Laravel, Svelte, React,
      Vue
    </li>
    <li>
      <strong>Development Tools:</strong> Bitbucket, git, AWS (S3, EC2, RDS), JIRA,
      MySQL Workbench, SQL Server Management Studio, VSCode
    </li>
    <li>
      <strong>Development Methodologies:</strong> Agile Scrum & Kanban, Waterfall
    </li>
  </ul>

  <h3>Stay Connected</h3>
  <div class="mx-auto px-5 mt-3">
    <p class="h4 mt-4">
      <a href={resume} target="_blank" rel="noopener noreferrer"
        ><Icon name="file-earmark-text-fill" /> View My Resume</a
      >
    </p>
    <p class="h4 mt-4">
      <a
        rel="external"
        href="https://www.linkedin.com/in/anthony-garza/"
        target="_blank"><Icon name="linkedin" /> Linkedin Profile</a
      >
    </p>
    <p class="h4 mt-4">
      <a rel="external" href="https://github.com/ant-garz" target="_blank"
        ><Icon name="github" /> Github Profile</a
      >
    </p>
  </div>
</section>

<section class="mx-auto px-5 mt-3">
  <h2>Personal Background</h2>
  <div class="mx-auto">
    <h3>Music</h3>
    <p>
      I enjoy music and enjoy spending time playing songs on guitar and bass.
    </p>
    <p>Here are some songs that I have been listening to recently:</p>
    <div class="mt-4 ratio {isMobile ? 'ratio-1x1' : 'ratio-4x3 mx-auto w-75'}">
      <iframe
        title="on repeat playlist embed"
        style="border-radius: 12px;"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EpsmOwbl4tnBg?utm_source=generator&theme=0"
        frameborder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      >
      </iframe>
    </div>
  </div>
</section>

<section class="mx-auto px-5 mb-5">
  <h3>Photography</h3>
  <p>I also enjoy photography as a hobby. Here are some photos I took.</p>
  <div class="container">
    <Gallery images={galleryImages} />
  </div>
</section>

<style>
  @import "../../style.css";
</style>
