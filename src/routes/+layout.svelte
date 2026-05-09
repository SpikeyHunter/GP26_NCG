<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>GP26 New City Gas</title>
	
	<meta property="og:type" content="website" />
	<meta property="og:title" content="GP26 at New City Gas" />
	<meta property="og:description" content="Four Nights. One Weekend. All gas no brakes." />
	<meta property="og:image" content="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/Thumbnail2.jpg" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="GP26 at New City Gas" />
	<meta name="twitter:description" content="Four Nights. One Weekend. All gas no brakes." />
	<meta name="twitter:image" content="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/Thumbnail2.jpg" />
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />