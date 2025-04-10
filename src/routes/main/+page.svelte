<script lang="ts">
    import { Icon, Carousel, CarouselControl, CarouselItem, CarouselIndicators } from "@sveltestrap/sveltestrap";
    import { onMount, onDestroy } from 'svelte';
    import Nav from "../../components/Nav.svelte";
    import photo1 from '$lib/assets/photo1.jpg?enhanced';
    import photo2 from '$lib/assets/photo2.jpg?enhanced';
    import photo3 from '$lib/assets/photo3.jpg?enhanced';
    import photo4 from '$lib/assets/photo4.jpg?enhanced';
    import photo5 from '$lib/assets/photo5.jpg?enhanced';
    import photo6 from '$lib/assets/photo6.jpg?enhanced';
    import photo7 from '$lib/assets/photo7.jpg?enhanced';
    import resume from '$lib/assets/resume.pdf';

    const items = [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7
    ];
    let activeIndex = 0;
    import { theme } from '../../utilities/themeStore';
    import { browser } from "$app/environment";
    let currentTheme:string = 'auto'; // default
    // Subscribe to the theme store
    theme.subscribe(value => {
        currentTheme = value;
    });

    // used for dynamic canvas as hero image
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    // used for updating ratio on spotify iframe div
    let width : number;
    let isMobile:boolean = false;
  // Helper function to generate a random color in RGB format, with controlled brightness
  function getRandomColor(): string {
    const h = Math.floor(Math.random() * 360); // Random Hue (0 to 360)
    const s = Math.floor(Math.random() * 30) + 50; // Saturation (50% to 80%)
    const l = Math.floor(Math.random() * 20) + 40; // Lightness (40% to 60%)

    // Convert HSL to RGB
    return hslToRgb(h, s, l);
  }

  // Function to convert HSL to RGB
  function hslToRgb(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }

    // Convert to RGB values in the range [0, 255]
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `rgb(${r}, ${g}, ${b})`;
  }

  // Gradient settings
  let gradientStart: string;
  let gradientEnd: string;
  let transitionProgress = 0; // Progress for color transition
  let previousTime: number = 0;

  // Function to create and draw the gradient
  function drawGradient() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

    const color1 = lerpColor(gradientStart, gradientEnd, transitionProgress);
    const color2 = lerpColor(gradientEnd, gradientStart, 1 - transitionProgress);

    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Function to interpolate between two RGB colors
  function lerpColor(color1: string, color2: string, t: number): string {
    const rgb1 = color1.match(/\d+/g)!.map(Number);
    const rgb2 = color2.match(/\d+/g)!.map(Number);

    const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * t);
    const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * t);
    const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * t);

    return `rgb(${r}, ${g}, ${b})`;
  }

  // Function to smoothly transition the colors over time
  function transitionColors(currentTime: number) {
    if (transitionProgress >= 1) {
      gradientStart = getRandomColor();
      gradientEnd = getRandomColor();
      transitionProgress = 0; // Reset the transition progress
    }

    const deltaTime = currentTime - previousTime;
    const transitionSpeed = 0.00005;

    transitionProgress += deltaTime * transitionSpeed;

    if (transitionProgress > 1) {
      transitionProgress = 1; // Ensure progress never exceeds 1
    }

    previousTime = currentTime;
  }

  // Animation loop with smooth transition
  function animate(currentTime: number) {
    transitionColors(currentTime); // Update the color transition progress
    drawGradient(); // Draw the new gradient with the interpolated colors
    requestAnimationFrame(animate); // Request the next frame
  }

  // Set the initial theme on mount
  onMount(() => {
    document.body.className = currentTheme;
    window.addEventListener('resize', handleResize);

    ctx = canvas.getContext("2d") as CanvasRenderingContext2D ;
    if (ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Initialize with random starting gradient colors
      gradientStart = getRandomColor();
      gradientEnd = getRandomColor();

      requestAnimationFrame(animate); // Start the animation loop
    }
  });

  onDestroy(() => {
    if(browser){
      window.removeEventListener('resize', handleResize);
    }
  });

  if(browser){
    // Reactive variable for window width
    width = window.innerWidth;
    // You can define a mobile breakpoint (e.g., 768px)
    isMobile = width <= 500;
  }

  // Update width on resize
  const handleResize = () => {
  width = window.innerWidth;
  };

</script>

<Nav></Nav>

<section class="mx-auto px-5 mt-5">
    <h2 class="mt-2">Professional Background</h2>

    <p>I am a software developer with experience in full-stack development, specializing in Laravel or Slim PHP for back-end and Svelte or Vue for front-end development.</p>
    <p>Proficient in JavaScript, PHP, HTML, CSS, and Python, I have hands-on experience working in agile environments and throughout the software development lifecycle.</p>
    <p>Passionate about building software, I continuously explore new technologies to stay current and enhance development.</p>
    <p>I am currently pursuing an associate's degree in Cybersecurity. In my role as a software developer, I integrate security best practices into the development process, ensuring that web applications are robust and resistant to vulnerabilities.</p>

    <h3>Experience</h3>
    <ul>
        <li>Software Development</li>
        <li>Software Quality Assurance</li>
    </ul>

    <h3>Skills and technologies</h3>
    <ul>
      <li><strong>Software Development:</strong> Full stack, front end, back end, web development, scripting</li>
      <li><strong>Software Quality Assurance & Testing:</strong> Manual software testing, automated software testing (Selenium)</li>
      <li><strong>Programming Languages:</strong> PHP, Python, Javascript/Typescript, Java, SQL</li>
      <li><strong>Programming Frameworks:</strong> Slim PHP, Laravel, Svelte, React, Vue</li>
      <li><strong>Development Tools:</strong> Bitbucket, git, AWS (S3, EC2, RDS), JIRA, MySQL Workbench, SQL Server Management Studio, VSCode</li>
      <li><strong>Development Methodologies:</strong> Agile Scrum & Kanban, Waterfall</li>
  </ul>
    
    <h3>Stay Connected</h3>
    <div class="mx-auto px-5 mt-3">
        <p class="h4 mt-4"><a href={resume} target="_blank" rel="noopener noreferrer"><Icon name="file-earmark-text-fill" /> View My Resume</a></p>
        <p class="h4 mt-4"><a rel="external" href="https://www.linkedin.com/in/anthony-garza/" target="_blank"><Icon name="linkedin" /> Linkedin Profile</a></p>
        <p class="h4 mt-4"><a rel="external" href="https://github.com/ant-garz" target="_blank"><Icon name="github" /> Github Profile</a></p>
    </div>
</section>

<section class="mx-auto px-5 mt-3">
    <h2>Personal Background</h2>
    <div class="mx-auto">
        <h3>Music</h3>
        <p>I enjoy music and enjoy spending time playing songs on guitar and bass.</p>
        <p>Here are some songs that I have been listening to recently:</p>
        <div class="mt-4 ratio {isMobile ? 'ratio-1x1' : 'ratio-4x3 mx-auto w-75'}">
          <iframe
            title="on repeat playlist embed"
            style="border-radius: 12px;"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EpsmOwbl4tnBg?utm_source=generator&theme=0"
            frameborder="0"
            allowfullscreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>
    </div>
</section>

<section class="mx-auto px-5 mb-5">
  <h3>Photography</h3>
  <p>I also enjoy photography as a hobby. Here are some photos I took recently.</p>
  <div class="container">
      <Carousel {items} bind:activeIndex>
          <CarouselIndicators bind:activeIndex {items} />
          <div class="carousel-inner">
              {#each items as item, index}
              <CarouselItem bind:activeIndex itemIndex={index}>
                <div class="position-relative d-flex justify-content-center align-items-center">
                  <!-- Image container with Bootstrap classes to maintain aspect ratio -->
                  <enhanced:img
                    src={item}
                    alt="photo {index + 1}"
                    class="img-fluid"
                    sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
                  />
                </div>
              </CarouselItem>
            {/each}
          </div>
          <CarouselControl direction="prev" id="prev" bind:activeIndex {items} />
          <CarouselControl direction="next" id="next" bind:activeIndex {items} />
      </Carousel>
  </div>
</section>

<style>
        @import "../../style.css";
</style>