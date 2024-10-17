<script lang="ts">
	import { Nav, NavLink } from '@sveltestrap/sveltestrap';
	import ToggleDarkMode from '../components/ToggleDarkMode.svelte';
	import { base } from '$app/paths';
  </script>
  
  <div class="position-relative">
	<Nav theme="auto" class="d-flex justify-content-between">
	  <div  class="d-flex">
		<NavLink href="{base}/" active>Home</NavLink>
		<NavLink href="{base}/projects">Projects</NavLink>
	  </div>
	  <div class="position-absolute top-0 end-0 p-2">
		<ToggleDarkMode />
	  </div>
	</Nav>
  </div>