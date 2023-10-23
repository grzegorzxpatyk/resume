<script lang="ts">
    import { onMount } from 'svelte';
    import { theme } from '../../store';
    import ThemeSwitchButton from './themeSwitchButton.svelte';

    function setDarkTheme() {
        if ($theme === 'dark') {
            theme.set('OSDefault');
        } else {
            theme.set('dark');
        }
    }

    function setLightTheme() {
        if ($theme === 'light') {
            theme.set('OSDefault');
        } else {
            theme.set('light');
        }
    }

    function setOSDefaultTheme() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    onMount(() => {
        theme.set(localStorage?.theme);

        theme.subscribe((value) => {
            localStorage.theme = value;
            switch (value) {
                case 'dark':
                    document.documentElement.classList.add('dark');
                    break;
                case 'light':
                    document.documentElement.classList.remove('dark');
                    break;
                case 'OSDefault':
                default:
                    setOSDefaultTheme();
                    break;
            }
        });

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                if (localStorage.theme !== 'OSDefault') {
                    return;
                }
                setOSDefaultTheme();
            });

        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', () => {
                    if (localStorage.theme !== 'OSDefault') {
                        return;
                    }
                    setOSDefaultTheme();
                });
        };
    });
</script>

<svelte:head>
    <script>
        if (
            localStorage.theme === 'dark' ||
            (!localStorage.theme &&
                window.matchMedia('(prefers-color-scheme: dark)').matches) ||
            (localStorage.theme === 'OSDefault' &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    </script>
</svelte:head>

<div
    class="fixed top-4 right-4 p-2 hidden sm:grid grid-cols-2 gap-2 bg-zinc-300 dark:bg-zinc-500 bg-opacity-30 dark:bg-opacity-30 rounded-md print:hidden print:sm:hidden"
>
    <ThemeSwitchButton
        variant="light"
        clickHandler={setLightTheme}
        isActive={$theme === 'light'}
    />
    <ThemeSwitchButton
        variant="dark"
        clickHandler={setDarkTheme}
        isActive={$theme === 'dark'}
    />
</div>
