<script lang="ts">
	import { page } from '$app/stores';
	import Nav from "../../../components/Nav.svelte";
	import { onMount } from 'svelte';
    
    import { theme } from '../../../utilities/themeStore';

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
	<div class="position-absolute top-50 start-50 translate-middle">
		<h1 class="text-center">{$page.status}: {$page?.error?.message} <i class="bi bi-x-circle"></i></h1>
	</div>
</container>

<style>
    @import "../../../style.css";
</style>