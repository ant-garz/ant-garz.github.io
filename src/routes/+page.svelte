<script>
  import P5 from 'p5-svelte';

  // Include all known p5.js 3D primitives
  const shapes = ['box', 'sphere', 'torus', 'cone', 'ellipsoid', 'cylinder'];
  let shapeType = shapes[Math.floor(Math.random() * shapes.length)];

  function sketch(p) {
    let angle = 0;

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
      p.angleMode(p.RADIANS);
    };

    p.draw = () => {
      p.background(240); // light gray

      p.ambientLight(180);
      p.directionalLight(255, 255, 255, 0.5, 0.5, -1);

      // Rotation
      p.rotateY(angle);
      p.rotateX(angle * 0.3);
      angle += 0.01;

      p.specularMaterial(0); // black

      // Larger shapes
      switch (shapeType) {
        case 'box':
          p.box(250);
          break;
        case 'sphere':
          p.sphere(200);
          break;
        case 'torus':
          p.torus(200, 125);
          break;
        case 'cone':
          p.cone(200, 300);
          break;
        case 'ellipsoid':
          p.ellipsoid(150, 100, 140);
          break;
        case 'cylinder':
          p.cylinder(300, 500);
          break;
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  }
</script>

<style>
  :global(body) {
    margin: 0;
    overflow: hidden;
    background-color: #f0f0f0;
  }

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    z-index: -1;
  }

  .overlay-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;
  }

  .overlay-text {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: white;
    background: rgba(0, 0, 0, 0.6);
    padding: 0.75rem 1.25rem;
    border-radius: 6px;
    user-select: none;
  }

  .overlay-button {
    background: black;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    cursor: pointer;
    border-radius: 4px;
    opacity: 0.95;
    transition: opacity 0.3s ease;
  }

  .overlay-button:hover {
    opacity: 1;
  }
</style>

<P5 {sketch} />

<div class="overlay-container">
  <div class="overlay-text">Hello, my name is Anthony Garza</div>
  <button class="overlay-button" on:click={() => window.location.href="/main"}>
    Enter
  </button>
</div>
