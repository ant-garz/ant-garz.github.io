<script lang="ts">
    import { Icon,
    Image ,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle  } from "@sveltestrap/sveltestrap";
	import Nav from "../../components/Nav.svelte";
    import MediaQuery from "../../components/MediaQuery.svelte";
    import spaceInk from '$lib/assets/space-ink.jpg';


    import { theme } from '../../utilities/themeStore';
  import { onMount } from "svelte";

    let currentTheme:string = 'auto'; // default
    // Subscribe to the theme store
    theme.subscribe(value => {
        currentTheme = value;
    });

    /**
     * @returns void
     */
     function goToSpaceInk(){
        window.location.href = '/projects/space-ink';
     }

    // Set the initial theme on mount
    onMount(() => {
        document.body.className = currentTheme;
    });
	
</script>

<Nav></Nav>

<container theme={currentTheme}>
    <section class="mx-auto p-5">
        <h2>Projects <Icon name="folder-check" /></h2>
        <div class="mx-auto">
            <p>Welcome to my projects portfolio.</p>
            <p> I am a developer with experience in both web and software development.</p>
            <p>My projects reflect a range of skills, focusing on creating functional applications and software solutions. I enjoy solving problems and find joy in the process of programming.</p>
            <p>A goal of mine is to create meaningful, impactful work that benefits others. However, sometimes creating projects just for fun is a great way to explore new ideas and enhance my skills without the pressure of expectations. Take a look at my work to see my approach and capabilities.</p>
        </div>
        <div class="mx-auto">
            <!-- default -->
            <MediaQuery query="(min-width: 1281px)" let:matches>
                {#if matches}
                    <div class="container">
                        <!-- space ink card -->
                        <Card class="mx-auto mx-auto w-50" theme={currentTheme}>
                            <CardHeader>
                                <CardTitle>Space Ink</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Image class="img-fluid mx-auto w-75" fluid alt="space ink example image" src={spaceInk}></Image>
                                <CardText>A project that shows the NASA astronomy picture of the day and displays it on an e-paper module connected to a raspberry pi</CardText>
                                <Button on:click={goToSpaceInk}>view</Button>

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
                    <Card theme={currentTheme}>
                        <CardHeader>
                            <CardTitle>Space Ink</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Image fluid alt="space ink example image" src={spaceInk}></Image>
                            <CardText>A project that shows the NASA astronomy picture of the day and displays it on an e-paper module connected to a raspberry pi</CardText>
                            <Button on:click={goToSpaceInk}>view</Button>
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
                    <Card theme={currentTheme}>
                        <CardHeader>
                            <CardTitle>Space Ink</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Image fluid alt="space ink example image" src={spaceInk}></Image>
                            <CardText>A project that shows the NASA astronomy picture of the day and displays it on an e-paper module connected to a raspberry pi</CardText>
                            <Button on:click={goToSpaceInk}>view</Button>
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