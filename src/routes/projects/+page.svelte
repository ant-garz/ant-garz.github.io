<script lang="ts">
    import { Icon } from "@sveltestrap/sveltestrap";
	import Nav from "../../components/Nav.svelte";
</script>

<Nav></Nav>
<container>
    <h1 class="mx-auto px-5 mt-3">Projects <Icon name="folder-check" /></h1>
    <section class="mx-auto p-5">
        <p>Each project will have a summary here, with an option to view more details and links to repositories</p>
    </section>
</container>


<style>
    @import "../../style.css";
</style>