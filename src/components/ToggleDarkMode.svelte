<script lang="ts">

import { onMount } from 'svelte';
import { Button } from '@sveltestrap/sveltestrap';
import { theme } from '../utilities/themeStore';


let currentTheme: string;

// Subscribe to the theme store
theme.subscribe(value => {
    currentTheme = value;
    document.body.className = currentTheme; // Apply class to body
});

// Set the initial theme on mount
onMount(() => {
    document.body.className = currentTheme;
});

// Function to toggle theme
const toggleTheme = () => {
    theme.set(currentTheme === 'light' ? 'dark' : 'light');
};
</script>

{#if currentTheme === 'dark'}
    <Button on:click={toggleTheme}
    class="mx-auto p-2"
    active={false}
    block={false}
    close={false}
    color="secondary"
    disabled={false}
    href=""
    outline={false}
    size="md"
    value=""
    >
        <slot/>
        <i class="bi bi-moon"></i>
    </Button>
{:else}
    <Button on:click={toggleTheme}
    class="mx-auto p-2"
    active={false}
    block={false}
    close={false}
    color="warning"
    disabled={false}
    href=""
    outline={false}
    size="md"
    value=""
    >
        <slot/>
        <i class="bi bi-brightness-high"></i>
    </Button>
{/if}
