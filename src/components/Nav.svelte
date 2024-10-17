<script lang="ts">
	import { Nav,  NavLink } from '@sveltestrap/sveltestrap';
	import ToggleDarkMode from '../components/ToggleDarkMode.svelte';
  	import { base } from '$app/paths';
</script>

<Nav theme="auto">
	<NavLink href="{base}/" active>Home</NavLink>
	<NavLink href="{base}/projects">Projects</NavLink>
	<ToggleDarkMode>
		Toggle dark mode
	</ToggleDarkMode>
  </Nav>