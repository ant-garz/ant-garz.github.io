<script lang="ts">
	import { page } from '$app/stores';
	import Nav from "../../components/Nav.svelte";
</script>

<Nav></Nav>
<h1>{$page.status}: {$page?.error?.message}</h1>

<style>
    @import "../../style.css";
</style>