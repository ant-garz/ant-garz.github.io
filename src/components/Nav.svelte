<script lang="ts">
	import {
	  Collapse,
	  NavbarToggler,
	  NavbarBrand,
	  Nav,
	  Navbar,
	  NavItem,
	  NavLink,
	  Icon,
	  Dropdown,
	  DropdownToggle,
	  DropdownMenu,
	  DropdownItem
	} from '@sveltestrap/sveltestrap';
	import ToggleDarkMode from '../components/ToggleDarkMode.svelte';
	import { base } from '$app/paths';
  
	let isOpen = false; // Tracks whether the collapse is open or not
  </script>
  
  <Navbar color="dark" theme="dark" expand="md" container="fluid" sticky="top" class="bg-dark">
	<NavbarBrand href="{base}/"><Icon name="robot" class="h1"/> Portfolio</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	
	<!-- Use bind:isOpen to directly manage the collapse state -->
	<Collapse bind:isOpen={isOpen} navbar expand="md">
	  <Nav theme="auto" class="ms-auto d-flex" navbar>
		<NavItem><NavLink href="{base}/">Home</NavLink></NavItem>
		
		<Dropdown nav inNavbar>
		  <DropdownToggle nav caret>Projects</DropdownToggle>
		  <DropdownMenu end>
			<DropdownItem><NavLink href="{base}/projects">All</NavLink></DropdownItem>
			<DropdownItem><NavLink href="{base}/projects/space-ink">Space Ink</NavLink></DropdownItem>
			<DropdownItem divider />
			<DropdownItem>Reset</DropdownItem>
		  </DropdownMenu>
		</Dropdown>
  
		<NavItem><ToggleDarkMode /></NavItem>
	  </Nav>
	</Collapse>
  </Navbar>