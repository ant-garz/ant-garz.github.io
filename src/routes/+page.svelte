<script lang="ts">
    import { Icon, Carousel, CarouselControl, CarouselItem, CarouselIndicators } from "@sveltestrap/sveltestrap";
    import Nav from "../components/Nav.svelte";
    import MediaQuery from "../components/MediaQuery.svelte";
    import photo1 from '$lib/assets/photo1.jpg';
    import photo2 from '$lib/assets/photo2.jpg';
    import photo3 from '$lib/assets/photo3.jpg';
    import photo4 from '$lib/assets/photo4.jpg';
    import photo5 from '$lib/assets/photo5.jpg';
    import photo6 from '$lib/assets/photo6.jpg';
    import photo7 from '$lib/assets/photo7.jpg';
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
</script>

<Nav></Nav>

<container>
    <h1 class="mx-auto px-5 mt-3">Hello <Icon name="triangle-half" /></h1>
    <section class="mx-auto p-5">
        <h2>Professional Background</h2>
        <p>My name is Anthony Garza.</p>
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
            <p class="h4 mt-4"><a rel=external href={"www.linkedin.com/in/anthony-garza"} target="_blank"><Icon name="linkedin" /> Linkedin Profile</a></p>
            <p class="h4 mt-4"><a rel=external href={"https://github.com/ant-garz"} target="_blank"><Icon name="github" /> Github Profile</a></p>
        </div>
    </section>

    <section class="mx-auto p-5">
        <h2>Personal Background</h2>
        <h3>Music</h3>
        <div class="mx-auto">
            <p>I enjoy music and enjoy spending time playing songs on guitar and bass.</p>
            <p>Here are some songs that I have been listening to recently:</p>
            <!-- default -->
            <MediaQuery query="(min-width: 1281px)" let:matches>
                {#if matches}
                <div class="mx-auto w-75 px-5 mt-3">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EpsmOwbl4tnBg?utm_source=generator&theme=0" width="100%" height="400" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                {/if}
            </MediaQuery>
            <!-- tablet -->
            <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
                {#if matches}
                <div class="mx-auto w-75 px-5 mt-3">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EpsmOwbl4tnBg?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                {/if}
            </MediaQuery>
            <!-- mobile -->
            <MediaQuery query="(max-width: 480px)" let:matches>
                {#if matches}
                <div class="mx-auto">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EpsmOwbl4tnBg?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                {/if}
            </MediaQuery>
        </div>

        <h3>Photography</h3>
        <div class="mx-auto px-5 mt-3">
            <p>I also enjoy photography as a hobby. Here are some photos I took recently.</p>
            <!-- default -->
            <MediaQuery query="(min-width: 1281px)" let:matches>
                {#if matches}
                    <div class="d-flex justify-content-center w-50 align-center mx-auto">
                        <Carousel {items} bind:activeIndex>
                            <CarouselIndicators bind:activeIndex {items} />
                            <div class="carousel-inner ">
                                {#each items as item, index}
                                <CarouselItem bind:activeIndex itemIndex={index}>
                                    <img src={item} class="img-fluid" alt="{item} {index + 1}" style="height: 100%; object-fit: cover;"  />
                                </CarouselItem>
                                {/each}
                            </div>
                            <CarouselControl direction="prev" bind:activeIndex {items} />
                            <CarouselControl direction="next" bind:activeIndex {items} />
                        </Carousel>
                    </div>
                {/if}
            </MediaQuery>
            <!-- tablet -->
            <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
                {#if matches}
                <div class="d-flex justify-content-center w-75 align-center mx-auto">
                    <Carousel {items} bind:activeIndex>
                        <CarouselIndicators bind:activeIndex {items} />
                        <div class="carousel-inner ">
                            {#each items as item, index}
                            <CarouselItem bind:activeIndex itemIndex={index}>
                                <img src={item} class="img-fluid" alt="{item} {index + 1}" style="height: 100%; object-fit: cover;"  />
                            </CarouselItem>
                            {/each}
                        </div>
                        <CarouselControl direction="prev" bind:activeIndex {items} />
                        <CarouselControl direction="next" bind:activeIndex {items} />
                    </Carousel>
                </div>
                {/if}
            </MediaQuery>
            <!-- mobile -->
            <MediaQuery query="(max-width: 480px)" let:matches>
                {#if matches}
                <Carousel {items} bind:activeIndex>
                    <CarouselIndicators bind:activeIndex {items} />
                    <div class="carousel-inner ">
                        {#each items as item, index}
                        <CarouselItem bind:activeIndex itemIndex={index}>
                            <img src={item} class="img-fluid " alt="{item} {index + 1}" style="height: 250px; width:100%; object-fit: cover;"/>
                        </CarouselItem>
                        {/each}
                    </div>
                    <CarouselControl direction="prev" bind:activeIndex {items} />
                    <CarouselControl direction="next" bind:activeIndex {items} />
                </Carousel>
                {/if}
            </MediaQuery>
        </div>
    </section>
</container>

<style>
    @import "../style.css";
</style>