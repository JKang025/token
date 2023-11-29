import { writable } from 'svelte/store';

export const phoneStore = writable('');

export const nameStore = writable([]);

export const amountStore = writable(0);
