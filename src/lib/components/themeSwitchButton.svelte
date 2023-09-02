<script lang="ts">
    import { Moon, Sun } from 'radix-icons-svelte';

    export let variant: 'light' | 'dark';
    export let clickHandler: () => void;
    export let isActive: boolean;
</script>

<button
    class="p-2 bg-zinc-50 dark:bg-zinc-200 bg-opacity-30 dark:bg-opacity-30 hover:bg-opacity-50 dark:hover:bg-opacity-50 rounded-md border-2 {isActive
        ? 'border-blue-400'
        : 'border-zinc-300 dark:border-zinc-300'}"
    on:click={clickHandler}
>
    {#if variant === 'dark'}
        <Moon size={16} />
    {:else}
        <Sun size={16} />
    {/if}
</button>
