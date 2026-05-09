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
		
		<div class="nav-links" class:open={menuOpen}>
			<a href="#lineup" onclick={closeMenu}>LINEUP</a>
			<a href="#schedule" onclick={closeMenu}>SCHEDULE</a>
			<a href="#newcitygas" onclick={closeMenu}>NEW CITY GAS</a>
			<a href="#bazart" onclick={closeMenu}>BAZART</a>
			<a href="#restaurant" onclick={closeMenu}>DINER</a>
			<a href="#nft" onclick={closeMenu}>NFT GALLERY</a>
		</div>
		
		<div class="nav-right">
			<a href="#tickets" class="nav-cta">TICKETS</a>
			<button class="mobile-toggle" onclick={toggleMenu} aria-label="Toggle menu">
				{menuOpen ? '✕' : '☰'}
			</button>
		</div>
	</div>
</nav>

<style>
	.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50; backdrop-filter: blur(20px) saturate(140%); background: rgba(10, 9, 8, 0.85); border-bottom: 1px solid var(--line); }
	.nav-inner { max-width: 1280px; margin: 0 auto; padding: 0px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
	.nav-logo { font-family: var(--font-gp26); font-size: 48px; color: var(--ink-dim); text-decoration: none; flex-shrink: 0; }
    .nav-logo-2 { color: var(--gold2); }
	
	.nav-links { display: flex; gap: 28px; align-items: center; }
	.nav-links a { font-family: var(--font-body); color: var(--ink-dim); text-decoration: none; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; transition: color 0.2s; }
	.nav-links a:hover { color: var(--ink); }
	
	/* Layout container for the right side */
	.nav-right { display: flex; align-items: center; gap: 16px; }

	.nav-cta { font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.15em; padding: 10px 20px; border: 1px solid var(--ink); color: var(--ink); text-decoration: none; transition: all 0.2s; white-space: nowrap; }
	.nav-cta:hover { background: var(--ink); color: var(--bg); }
	
	.mobile-toggle { display: none; background: none; border: none; color: var(--ink); font-size: 24px; cursor: pointer; padding: 4px; }
	
	@media (max-width: 1100px) {
		.nav-inner { padding: 12px 20px; }
		.mobile-toggle { display: block; }
		
		/* Adjust CTA padding on mobile so it doesn't take up too much space */
		.nav-cta { padding: 8px 16px; font-size: 11px; }
		
		.nav-links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: rgba(10, 9, 8, 0.98);
			backdrop-filter: blur(20px);
			flex-direction: column;
			padding: 32px 24px;
			gap: 32px;
			border-bottom: 1px solid var(--line);
			display: none;
		}
		.nav-links.open { display: flex; }
	}
</style>