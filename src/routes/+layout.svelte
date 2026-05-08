<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>GP26 — Race Week at New City Gas</title>
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />