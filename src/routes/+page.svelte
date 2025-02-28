<script lang="ts">
    import { Icon, Button  } from "@sveltestrap/sveltestrap";
    import { onMount, onDestroy } from 'svelte';
    import Nav from "../components/Nav.svelte";
    import { theme } from '../utilities/themeStore';
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

  function handleClick() {
        window.location.href = "/main";
  }
</script>

<Nav></Nav>

<container theme={currentTheme} >

    <!-- Canvas element for the background -->
    <div class="hero-container" id='container'>
        <canvas bind:this={canvas} width="100%" height="100vh" class="hero-canvas"></canvas>

        <!-- Text content that will be displayed above the canvas -->
        <div class="hero-text">
            <h1 class="mx-auto px-5 mt-3">Hello, my name is Anthony Garza <Icon name="person-workspace" /></h1>
            <div class="scroll-arrow">
                <h1 class="mt-5"> <Button color="primary" on:click={() => handleClick()}>click to enter <Icon name="door-open" /></Button> </h1>
            </div>
        </div>
    </div>

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

</style>