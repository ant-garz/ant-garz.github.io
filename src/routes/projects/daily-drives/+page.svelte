<script lang="ts">
    import { Icon, Image } from "@sveltestrap/sveltestrap";
	import Nav from "../../../components/Nav.svelte";
    import dailyDrive from '$lib/assets/blurred-example.gif';

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
    <section class="container p-5">
        <h2>Daily Drives<Icon name="car-front" /></h2>
        <p>A project that takes dash cam footage from a folder and stitches videos from 1 selected day into a "drive of the day", with an optional privacy filter.</p>
        <h3>Why I built this</h3>
        <p>Dashcams generate a lot of small clips per drive. I used this project to explore video processing tools like FFmpeg, and to experiment with organizing and stitching real-world footage into a single continuous video. I also used it to learn about basic privacy filtering for shared dashcam footage, using pre-trained face detection models to blur identifiable details before exporting.</p>
        <div class="mx-auto">
            <div>
                <div class="mx-auto px-5 mt-3">
                    <div class="mx-auto w-25">
                        <Image fluid alt="space ink example image" src={dailyDrive}></Image>
                    </div>
                </div>
            </div>

            <div class="mx-auto px-5 mt-3">
                <p class="h3 mt-4"><a rel="external" href="https://github.com/ant-garz/daily-drives" target="_blank"><Icon name="github" /> Github repository</a></p>
                <h3>Overview</h3>
                <p>This is a command-line tool. Built as a personal project to explore video processing and computer vision workflows in Python.</p>
                <h3>Key features</h3>
                <ul>
                    <li>Automatically scans a directory for dashcam video files.</li>
                    <li>Groups clips by recording date.</li>
                    <li>Sorts clips chronologically.</li>
                    <li>Optionally applies face detection and blur for privacy.</li>
                    <li>Efficiently stitches clips together using FFmpeg (no re-encoding)</li>
                </ul>
                <h3>Technologies used</h3>
                <ul><li>Python for scripting</li></ul>
                <ul><li>Python open-cv module</li></ul>
                <ul><li>OpenCV's YuNet face detection model</li></ul>
                <ul><li>FFmpeg</li></ul>
            </div>
        </div>
    </section>
</container>

<style>
    @import "../../../style.css";
</style>