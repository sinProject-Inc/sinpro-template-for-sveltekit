<script>
	import { version } from '$app/environment'
	import '../app.css'
</script>

<slot />

<h1 class="text-3xl font-bold underline">Hello world!</h1>

{version}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
