<script lang="ts">
	import { Nav,  NavLink } from '@sveltestrap/sveltestrap';
	import ToggleDarkMode from '../components/ToggleDarkMode.svelte';
</script>

<Nav theme="auto">
	<NavLink href="/" active>Home</NavLink>
	<NavLink href="/projects">Projects</NavLink>
	<ToggleDarkMode>
		Toggle dark mode
	</ToggleDarkMode>
  </Nav>