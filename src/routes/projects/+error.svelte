<script lang="ts">
	import { page } from '$app/stores';
	import Nav from "../../components/Nav.svelte";
	import { onMount } from 'svelte';
    
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
	<div class="position-absolute top-50 start-50 translate-middle">
		<h1 class="text-center">{$page.status}: {$page?.error?.message} <i class="bi bi-x-circle"></i></h1>
	</div>
</container>

<style>
    @import "../../style.css";
</style>