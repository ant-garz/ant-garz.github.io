<script lang="ts">
    import { Icon } from "@sveltestrap/sveltestrap";
    import Nav from "../components/Nav.svelte";
</script>


<Nav></Nav>

<container>
    <h1 class="mx-auto px-5 mt-3">Hello <Icon name="triangle-half" /></h1>
    <section class="mx-auto p-5">
        <h2>About me</h2>
        <p>With professional experience as both a Software QA Analyst and a Software Developer, I bring hands-on knowledge of agile methodologies and the software development life cycle.</p>
        <p>Outside of work, my passion for technology continues to drive me to learn more. I enjoy working on personal projects with Arduino micro controllers and Raspberry Pi computers, which helps me stay enthusiastic about my field and current with emerging technologies.</p>

        <h3>Professional experience</h3>
        <ul>
            <li>Software Development</li>
            <li>Software Quality Assurance</li>
        </ul>
    </section>
</container>

<style>
    @import "../style.css";
</style>