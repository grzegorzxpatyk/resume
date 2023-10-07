<script lang="ts">
    import { Moon, Sun } from 'radix-icons-svelte';

    export let variant: 'light' | 'dark';
    export let clickHandler: () => void;
    export let isActive: boolean;

    let isLabelVisible: boolean = false;

    function handleMouseOver(event: Event) {
        isLabelVisible = true;
    }

    function handleMouseLeave(event: Event) {
        isLabelVisible = false;
    }
</script>

<button
    name="theme-{variant}-switch"
    class="p-2 bg-zinc-50 dark:bg-zinc-200 bg-opacity-30 dark:bg-opacity-30 hover:bg-opacity-50 dark:hover:bg-opacity-50 rounded-md border-2 {isActive
        ? 'border-blue-400'
        : 'border-zinc-300 dark:border-zinc-300'}"
    on:click={clickHandler}
    on:mouseover={handleMouseOver}
    on:focus={handleMouseOver}
    on:mouseleave={handleMouseLeave}
    on:blur={handleMouseLeave}
>
    {#if variant === 'dark'}
        <Moon size={16} />
    {:else}
        <Sun size={16} />
    {/if}
</button>
<label for="theme-{variant}-switch" class="{isLabelVisible ? 'absolute' : 'hidden'} top-16 p-2 dark:bg-zinc-300 dark:bg-opacity-50 bg-zinc-200 bg-opacity-50 rounded-md font-semibold text-sm w-full text-center">
    {#if isActive}
        OS Default
    {:else}
        {variant} theme
    {/if}
</label>
