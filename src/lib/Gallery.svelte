<!-- Gallery.svelte -->
<script lang="ts">
  import { Row, Col, Card, CardImg, CardBody, CardTitle, Modal, ModalBody } from  "@sveltestrap/sveltestrap";
  import { theme } from "../utilities/themeStore";
  import { onMount } from 'svelte';

  let currentTheme: string = "auto"; // default

  /**
   * @type {any[]}
   */
   export let images:  { src: any; title: any; }[] = [];

  let modalOpen = false;
  /**
   * @type {{ src: any; title: any; } | null}
   */
  let selectedImage: { src: any; title: any; } | null = null;

  /**
   * @param {{ src: any; title: any; } | null} img
   */
  function openLightbox(img: { src: any; title: any; } | null) {
    selectedImage = img;
    modalOpen = true;
  }

  function closeLightbox() {
    modalOpen = false;
    selectedImage = null;
  }

  // Subscribe to the theme store
  theme.subscribe((value) => {
    currentTheme = value;
  });

  // Set the initial theme on mount
  onMount(() => {
    document.body.className = currentTheme;
  });
</script>

<style>
  :global(.gallery-card) {
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
    cursor: pointer;
  }

  :global(.gallery-card:hover) {
    transform: scale(1.02);
  }

  :global(.card-img-top) {
    object-fit: cover;
    height: 200px;
    width: 100%;
  }

  :global(.modal-img) {
    width: 100%;
    max-height: 80vh;
    object-fit: contain;
  }
</style>

<Row>
  {#each images as img (img.src)}
    <Col sm="6" md="4" lg="3">
      <Card class="gallery-card" on:click={() => openLightbox(img)}>
        <!-- Lazy-load image -->
        <CardImg
          top
          src={img.src}
          alt={img.title}
          class="card-img-top"
          loading="lazy"
        />
      </Card>
    </Col>
  {/each}
</Row>

<!-- Lightbox Modal -->
<Modal isOpen={modalOpen} toggle={closeLightbox} centered size="lg" theme={currentTheme}>
  <ModalBody class="text-center">
    {#if selectedImage}
      <img src={selectedImage.src} alt={selectedImage.title} class="modal-img" />
    {/if}
  </ModalBody>
</Modal>
