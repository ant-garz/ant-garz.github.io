<script lang="ts">

import { onMount } from 'svelte';
import { Button } from '@sveltestrap/sveltestrap';

onMount(() => {
  const storedValue = localStorage.getItem('dark-mode');
  if (storedValue) {
    // Do something with the value
    console.log('Value from localStorage:', storedValue);
    if(!document.body.classList.contains("dark-mode")){
        console.log('dark mode')
        document.body.classList.add('dark-mode');
    }
  }
});

function toggle() {
    window.document.body.classList.toggle('dark-mode')

    if(localStorage.getItem("dark-mode")){
        localStorage.removeItem("dark-mode")
    } else{
        localStorage.setItem("dark-mode", "1")
    }
}

</script>
<Button on:click={toggle} size="sm">
    <slot/>
</Button>