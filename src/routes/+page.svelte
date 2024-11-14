<script lang="ts">
    import { Icon, Carousel, CarouselControl, CarouselItem, CarouselIndicators } from "@sveltestrap/sveltestrap";
    import { onMount, onDestroy } from 'svelte';
    import Nav from "../components/Nav.svelte";
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
    import { theme } from '../utilities/themeStore';
    let currentTheme:string = 'auto'; // default
    // Subscribe to the theme store
    theme.subscribe(value => {
        currentTheme = value;
    });

    let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let scrollArrow: HTMLDivElement;

  // Helper function to generate a random color in RGB format
  function getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Gradient settings
  let gradientStart: string;
  let gradientEnd: string;
  let transitionProgress = 0; // Progress for color transition
  let previousTime: number = 0;

  // Function to create and draw the gradient
  function drawGradient() {
    // Create a gradient from left to right
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

    // Apply gradual color blending
    const color1 = lerpColor(gradientStart, gradientEnd, transitionProgress);
    const color2 = lerpColor(gradientEnd, gradientStart, 1 - transitionProgress);

    // Set the gradient colors
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Function to interpolate between two RGB colors
  function lerpColor(color1: string, color2: string, t: number): string {
    const rgb1 = color1.match(/\d+/g)!.map(Number);
    const rgb2 = color2.match(/\d+/g)!.map(Number);

    // Linear interpolation between two colors
    const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * t);
    const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * t);
    const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * t);

    return `rgb(${r}, ${g}, ${b})`;
  }

  // Function to smoothly transition the colors over time
  function transitionColors(currentTime: number) {
    if (transitionProgress >= 1) {
      // Generate new random colors for the next transition
      gradientStart = getRandomColor();
      gradientEnd = getRandomColor();
      transitionProgress = 0; // Reset the transition progress
    }

    // Calculate time-based progress to smoothly transition over time
    const deltaTime = currentTime - previousTime;
    const transitionSpeed = 0.00009; // Adjusted to a slower value

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

</script>

<Nav></Nav>

<container theme={currentTheme}>

    <!-- Canvas element for the background -->
    <div class="hero-container">
        <canvas bind:this={canvas} width="100%" height="100vh" class="hero-canvas"></canvas>

        <!-- Text content that will be displayed above the canvas -->
        <div class="hero-text">
            <h1 class="mx-auto px-5 mt-3">Hello, my name is Anthony Garza <Icon name="triangle-half" /></h1>
            <div bind:this={scrollArrow} class="scroll-arrow">
                <h1 class="mt-3"><Icon name="arrow-down-circle" /></h1>
            </div>
        </div>
    </div>

    <section class="mx-auto p-5">
        <h2>Professional Background</h2>
        <p>With professional experience as both a Software QA Analyst and a Software Developer, I bring hands-on knowledge of agile methodologies and the software development life cycle.</p>
        <p>Outside of work, my passion for technology continues to drive me to learn more. I enjoy working on personal projects with Arduino micro controllers and Raspberry Pi computers, which helps me stay enthusiastic about my field and current with emerging technologies.</p>

        <h3>Experience</h3>
        <ul>
            <li>Software Development</li>
            <li>Software Quality Assurance</li>
        </ul>
        
        <h3>Stay Connected</h3>
        <div class="mx-auto px-5 mt-3">
            <p class="h4 mt-4"><a href={resume} target="_blank" rel="noopener noreferrer"><Icon name="file-earmark-text-fill" /> View My Resume</a></p>
            <p class="h4 mt-4"><a rel="external" href="https://www.linkedin.com/in/anthony-garza/" target="_blank"><Icon name="linkedin" /> Linkedin Profile</a></p>
            <p class="h4 mt-4"><a rel="external" href="https://github.com/ant-garz" target="_blank"><Icon name="github" /> Github Profile</a></p>
        </div>
    </section>

    <section class="mx-auto p-5">
        <h2>Personal Background</h2>
        <div class="mx-auto">
            <h3>Music</h3>
            <p>I enjoy music and enjoy spending time playing songs on guitar and bass.</p>
            <p>Here are some songs that I have been listening to recently:</p>
            <div class="container mt-4">
                <div class="ratio ratio-16x9 mx-auto">
                    <iframe
                        style="border-radius: 12px"
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1EpsmOwbl4tnBg?utm_source=generator&theme=0"
                        frameborder="0"
                        allowfullscreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    </section>

    <section class="mx-auto p-5">
        <div>
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
        </div>
    </section>
</container>

<style>
    @import "../style.css";

  /* Hero Section (Background Canvas) */
  .hero-container {
    position: relative;
    width: 100%;
    height: 100vh; /* Full viewport height */
    padding-top: 60px; /* Space for fixed navbar */
  }

  .hero-canvas {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Full height of the viewport */
    z-index: 1; /* Ensure the canvas is behind the text */
  }

  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 2; /* Ensure the text is above the canvas */
  }

  .hero-text h1 {
    font-size: 3rem;
    margin: 0;
  }

  .hero-text p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .scroll-arrow {
    bottom: 30px; /* Position it towards the bottom */
    font-size: 2rem;
    color: white;
    animation: bounce 1.5s ease-in-out infinite; /* Apply animation */
    cursor: pointer;
  }

  /* Keyframe animation to create the bounce effect */
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0); /* Start and end at the normal position */
    }
    50% {
      transform: translateY(10px); /* Move down slightly at the middle of the animation */
    }
  }
</style>