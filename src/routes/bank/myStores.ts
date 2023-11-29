import { writable, type Writable } from 'svelte/store';

export const zipStore = writable('');

export const bankStore: Writable<[string, string]> = writable(['', '']);
