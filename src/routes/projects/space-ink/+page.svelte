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

                            <p class="h4 mt-4"><a rel="external" href="https://github.com/ant-garz/space-ink" target="_blank"><Icon name="github" /> Github repository</a></p>
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
                        <p class="h4 mt-4"><a rel="external" href="https://github.com/ant-garz/space-ink" target="_blank"><Icon name="github" /> Github repository</a></p>
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

                        <p class="h4 mt-4"><a rel="external" href="https://github.com/ant-garz/space-ink" target="_blank"><Icon name="github" /> Github repository</a></p>
                    </div>
                </div>
                {/if}
            </MediaQuery>
        </div>
    </section>
</container>

<style>
    @import "../../../style.css";
</style>