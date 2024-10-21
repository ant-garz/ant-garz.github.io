<script lang="ts">
    import { Icon } from "@sveltestrap/sveltestrap";
	import Nav from "../../../components/Nav.svelte";
    import { onMount } from 'svelte';
    import MediaQuery from "../../../components/MediaQuery.svelte";

    let darkMode = false;
    onMount(() => {
        const storedValue = localStorage.getItem('dark-mode');
        if (storedValue && storedValue === "1") {
            if(!document.body.classList.contains("dark-mode") && storedValue === "1"){
                document.body.classList.add('dark-mode');
                // since we add this here and we toggle this here
                darkMode = true;
            }
        }
    });
	
</script>

<Nav></Nav>

<container theme="auto">
    <section class="mx-auto p-5">
        <h2>Space Ink <Icon name="moon-stars-fill" /></h2>
        <div class="mx-auto">
            <!-- default -->
            <MediaQuery query="(min-width: 1281px)" let:matches>
                {#if matches}
                    <div>
                        default content tbd
                    </div>
                {/if}
            </MediaQuery>
            <!-- tablet -->
            <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
                {#if matches}
                <div>
                    tablet  content tbd
                </div>
                {/if}
            </MediaQuery>
            <!-- mobile -->
            <MediaQuery query="(max-width: 480px)" let:matches>
                {#if matches}
                <div>
                    mobile  content tbd
                </div>
                {/if}
            </MediaQuery>
        </div>
    </section>
</container>

<style>
    @import "../../../style.css";
</style>