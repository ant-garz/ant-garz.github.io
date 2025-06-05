<!-- Gallery.svelte -->
<script>
  import { Row, Col, Card, CardImg, CardBody, CardTitle, Modal, ModalBody } from  "@sveltestrap/sveltestrap";
  import { onMount } from 'svelte';

  /**
   * @type {any[]}
   */
   export let images = [];

  let modalOpen = false;
  /**
   * @type {{ src: any; title: any; } | null}
   */
  let selectedImage = null;

  /**
   * @param {{ src: any; title: any; } | null} img
   */
  function openLightbox(img) {
    selectedImage = img;
    modalOpen = true;
  }

  function closeLightbox() {
    modalOpen = false;
    selectedImage = null;
  }
</script>

<style>
  .gallery-card {
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
    cursor: pointer;
  }

  .gallery-card:hover {
    transform: scale(1.02);
  }

  .card-img-top {
    object-fit: cover;
    height: 200px;
    width: 100%;
  }

  .modal-img {
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
        <CardBody>
          <CardTitle class="text-center">{img.title}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  {/each}
</Row>

<!-- Lightbox Modal -->
<Modal isOpen={modalOpen} toggle={closeLightbox} centered size="lg">
  <ModalBody class="text-center">
    {#if selectedImage}
      <img src={selectedImage.src} alt={selectedImage.title} class="modal-img" />
      <p class="mt-2 text-dark">{selectedImage.title}</p>
    {/if}
  </ModalBody>
</Modal>
