<script lang="ts">
	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav class="nav">
	<div class="nav-inner">
		<a href="#top" class="nav-logo" onclick={closeMenu}>GP<span class="nav-logo-2">26</span></a>
		
		
		<div class="nav-right">
			<a href="https://www.tixr.com/groups/newcitygas" target="_blank" class="nav-cta">TICKETS</a>
			<a href="https://www.tixr.com/groups/newcitygas" target="_blank" class="nav-rsvp">RESERVATIONS</a>
		</div>
	</div>
</nav>

<style>
	.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50; backdrop-filter: blur(20px) saturate(140%); background: rgba(10, 9, 8, 0.85); border-bottom: 1px solid var(--line); }
	.nav-inner { max-width: 1280px; margin: 0 auto; padding: 0px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
	.nav-logo { font-family: var(--font-gp26); font-size: 48px; color: var(--ink-dim); text-decoration: none; flex-shrink: 0; }
    .nav-logo-2 { color: var(--gold2); }
	
	
	/* Layout container for the right side */
	.nav-right { display: flex; align-items: center; gap: 16px; }

	.nav-rsvp { font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.15em; padding: 10px 20px; border: 1px solid var(--ink); color: var(--ink); text-decoration: none; transition: all 0.2s; white-space: nowrap; }
	.nav-rsvp:hover { background: var(--ink); color: var(--bg); }

	.nav-cta { font-family: var(--font-body); background: var(--ink); font-size: 12px; font-weight: 700; letter-spacing: 0.15em; padding: 10px 20px; border: 1px solid var(--ink); color: var(--bg); text-decoration: none; transition: all 0.2s; white-space: nowrap; }
	.nav-cta:hover { background: var(--transparent); color: var(--ink); }

		
	@media (max-width: 1100px) {
		.nav-inner { padding: 12px 20px; }
		
		/* Adjust CTA padding on mobile so it doesn't take up too much space */
		.nav-cta { padding: 8px 16px; font-size: 11px; }
		.nav-rsvp { padding: 8px 16px; font-size: 11px; }
		
	}
</style>