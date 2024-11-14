<script lang="ts">
    import { Icon, Carousel, CarouselControl, CarouselItem, CarouselIndicators } from "@sveltestrap/sveltestrap";
    import { onMount } from 'svelte';
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

    // Set the initial theme on mount
    onMount(() => {
        document.body.className = currentTheme;
    });

</script>

<Nav></Nav>

<container theme={currentTheme}>
    <h1 class="mx-auto px-5 mt-3">Hello, my name is Anthony Garza <Icon name="triangle-half" /></h1>
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
</style>