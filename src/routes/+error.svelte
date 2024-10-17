<script lang="ts">
	import { page } from '$app/stores';
	import Nav from "../components/Nav.svelte";
</script>

<Nav></Nav>
<div class="position-absolute top-50 start-50 translate-middle">
	<h1 class="text-center">{$page.status}: {$page?.error?.message} <i class="bi bi-x-circle"></i></h1>

</div>

<style>
    @import "../style.css";
</style>