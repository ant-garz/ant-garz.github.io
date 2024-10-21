<script lang="ts">
    import { Icon,
    Image ,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle  } from "@sveltestrap/sveltestrap";
	import Nav from "../../components/Nav.svelte";
    import { onMount } from 'svelte';
    import MediaQuery from "../../components/MediaQuery.svelte";
    import spaceInk from '$lib/assets/space-ink.jpg';


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

    /**
     * @returns void
     */
     function goToSpaceInk(){
        window.location.href = '/projects/space-ink';
     }
	
</script>

<Nav></Nav>

<container theme="auto">
    <section class="mx-auto p-5">
        <h2>Projects <Icon name="folder-check" /></h2>
        <div class="mx-auto">
            <!-- default -->
            <MediaQuery query="(min-width: 1281px)" let:matches>
                {#if matches}
                    <div class="container">

                        <!-- space ink card -->
                        <Card class="mx-auto mx-auto w-50" theme="auto">
                            <CardHeader>
                                <CardTitle>Space Ink</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Image class="img-fluid mx-auto w-75" fluid alt="space ink example image" src={spaceInk}></Image>
                                <CardText>A project that shows the NASA astronomy picture of the day and displays it on an e-paper module connected to a raspberry pi</CardText>
                                <Button on:click={goToSpaceInk}>Button</Button>

                            </CardBody>
                        </Card>
                    </div>
                {/if}
            </MediaQuery>
            <!-- tablet -->
            <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
                {#if matches}
                <div class="container">

                    <!-- space ink card -->
                    <Card theme="auto">
                        <CardHeader>
                            <CardTitle>Space Ink</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Image fluid alt="space ink example image" src={spaceInk}></Image>
                            <CardText>A project that shows the NASA astronomy picture of the day and displays it on an e-paper module connected to a raspberry pi</CardText>
                            <Button on:click={goToSpaceInk}>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                {/if}
            </MediaQuery>
            <!-- mobile -->
            <MediaQuery query="(max-width: 480px)" let:matches>
                {#if matches}
                <div class="container">
                    <!-- space ink card -->
                    <Card theme="auto">
                        <CardHeader>
                            <CardTitle>Space Ink</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Image fluid alt="space ink example image" src={spaceInk}></Image>
                            <CardText>A project that shows the NASA astronomy picture of the day and displays it on an e-paper module connected to a raspberry pi</CardText>
                            <Button on:click={goToSpaceInk}>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                {/if}
            </MediaQuery>
        </div>
    </section>
</container>

<style>
    @import "../../style.css";
</style>