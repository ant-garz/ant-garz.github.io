<script lang="ts">
    import { Icon } from "@sveltestrap/sveltestrap";
    import Nav from "../components/Nav.svelte";
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
    </section>

    <section class="mx-auto p-5">
        <h2>Personal Background</h2>
        <h3>Music</h3>
        <p>I enjoy music and enjoy spending time playing songs on guitar and bass.</p>
        <p>Here are some songs that I have been listening to recently:</p>
        <div class="mx-auto w-75">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EpsmOwbl4tnBg?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </section>
</container>

<style>
    @import "../style.css";
</style>