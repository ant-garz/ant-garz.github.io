<script lang="ts">

import { onMount } from 'svelte';
import { Button } from '@sveltestrap/sveltestrap';


let darkMode = false;

onMount(() => {
  const storedValue = localStorage.getItem('dark-mode');
  if (storedValue) {
    if(!document.body.classList.contains("dark-mode") && storedValue === "1"){
        console.log('dark mode')
        document.body.classList.add('dark-mode');
        // since we add this here and we toggle this here
        darkMode = true;
    }else{
        darkMode = true;
    }
  }
});

function toggle() {
    window.document.body.classList.toggle('dark-mode')

    if(localStorage.getItem("dark-mode")){
        localStorage.removeItem("dark-mode")
        darkMode = false;
    } else{
        localStorage.setItem("dark-mode", "1")
        darkMode = true;
    }
}

</script>

{#if darkMode === true}
    <Button on:click={toggle}
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
    <Button on:click={toggle}
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
