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

	import {theme} from "../utilities/themeStore";

	let currentTheme:string = 'auto'; // default
    // Subscribe to the theme store
    theme.subscribe(value => {
        currentTheme = value;
    });

	let isOpen = false;

	function handleUpdate(event:any) {
		isOpen = event.detail.isOpen;
	}

  </script>
  
  <Navbar color="dark" theme="dark" expand="md" container="fluid" sticky="top">
	<NavbarBrand href="{base}/"><Icon name="robot" class="h1"/> Portfolio</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
	  <Nav  theme="auto"  class="ms-auto d-flex" navbar>
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