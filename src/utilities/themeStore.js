import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Load the theme from localStorage or default to 'light'
let storedTheme = 'light'

if(browser){
    storedTheme =  localStorage.getItem('theme') || 'light';
}

export const theme = writable(storedTheme);

if(browser){
    // Subscribe to changes in the theme and update localStorage
    theme.subscribe(value => {
        localStorage.setItem('theme', value);
    });
}