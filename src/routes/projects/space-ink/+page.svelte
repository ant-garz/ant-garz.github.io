<script lang="ts">
    import { Icon, Image } from "@sveltestrap/sveltestrap";
	import Nav from "../../../components/Nav.svelte";
    import spaceInk from '$lib/assets/space-ink.jpg';
    import MediaQuery from "../../../components/MediaQuery.svelte";

    import { theme } from '../../../utilities/themeStore';
  import { onMount } from "svelte";

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

<container theme={theme}>
    <section class="mx-auto p-5">
        <h2>Space Ink <Icon name="moon-stars-fill" /></h2>
        <p>A project that shows the NASA astronomy picture of the day and displays it on an e-paper module connected to a raspberry pi.</p>
        <div class="mx-auto">
            <!-- default -->
            <MediaQuery query="(min-width: 1281px)" let:matches>
                {#if matches}
                    <div>
                        <div class="mx-auto px-5 mt-3">
                            <div class="mx-auto w-75 d-flex">
                                <Image class="img-fluid mx-auto w-25" fluid alt="space ink example image" src={spaceInk}></Image>
                            </div>
                        </div>
                    </div>
                {/if}
            </MediaQuery>
            <!-- tablet -->
            <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
                {#if matches}
                <div>
                    <div class="mx-auto px-5 mt-3">
                        <Image class="img-fluid mx-auto" fluid alt="space ink example image" src={spaceInk}></Image>
                    </div>
                </div>
                {/if}
            </MediaQuery>
            <!-- mobile -->
            <MediaQuery query="(max-width: 480px)" let:matches>
                {#if matches}
                <div>
                    <div class="mx-auto px-5 mt-3">
                        <Image class="img-fluid mx-auto" fluid alt="space ink example image" src={spaceInk}></Image>
                    </div>
                </div>
                {/if}
            </MediaQuery>

            <div class="mx-auto px-5 mt-3">
                <p class="h3 mt-4"><a rel="external" href="https://github.com/ant-garz/space-ink" target="_blank"><Icon name="github" /> Github repository</a></p>
                <h3>Overview</h3>
                <p>Space Ink is a programming project that utilizes a 5.65-inch e-Paper Module (F) with a Raspberry Pi Zero 2 W to display the <a rel="external" target="_blank" href="https://apod.nasa.gov/apod/astropix.html">NASA Astronomy Picture of the Day</a> on an e-ink display.</p>
                <h3>Key features</h3>
                <ul>
                    <li>Automated daily retrieval of the Astronomy Photo of the Day.</li>
                    <li>Image manipulation to fit a designated white frame.</li>
                    <li>Addition of the photo's title for context.</li>
                    <li>Scheduled execution using CRON on the Raspberry Pi.</li>
                </ul>
                <h3>Technologies used</h3>
                <ul><li><a href="https://www.waveshare.com/wiki/5.65inch_e-Paper_Module_(F)_Manual#Overview" target="_blank" rel="external" >5.65inch e-Paper Module (F)</a></li></ul>
                <ul><li><a href="https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" target="_blank" rel="external" >Raspberry Pi Zero 2 W</a></li></ul>
                <ul><li>Python for scripting</li></ul>
                <ul><li><a href="https://api.nasa.gov/" target="_blank" rel="external" >NASA API</a> for image retrieval</li></ul>
            </div>
        </div>
    </section>
</container>

<style>
    @import "../../../style.css";
</style>