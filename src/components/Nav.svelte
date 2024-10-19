<script lang="ts">
	import {
		Collapse,
		NavbarToggler,
		NavbarBrand,
		Nav,
		Navbar,
		NavItem,
		NavLink,
		Icon
    } from '@sveltestrap/sveltestrap';
	import ToggleDarkMode from '../components/ToggleDarkMode.svelte';
	import { base } from '$app/paths';

	let isOpen = false;

	function handleUpdate(event:any) {
	isOpen = event.detail.isOpen;
	}

  </script>
  
  <Navbar   color="dark" theme="dark" expand="md" container="fluid">
	<NavbarBrand href="{base}/"><Icon name="robot" class="h1"/> Portfolio</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
	  <Nav  theme="auto"  class="ms-auto" navbar>
		<NavItem><NavLink href="{base}/">Home</NavLink></NavItem>
		<NavItem><NavLink href="{base}/projects">Projects</NavLink></NavItem>
		<ToggleDarkMode />
	  </Nav>
	</Collapse>
  </Navbar>