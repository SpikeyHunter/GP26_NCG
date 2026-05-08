<nav class="nav">
	<div class="nav-inner">
		<a href="#top" class="nav-logo">GP26</a>
		<div class="nav-links">
			<a href="#lineup">LINEUP</a>
			<a href="#schedule">SCHEDULE</a>
			<a href="#newcitygas">NEW CITY GAS</a>
			<a href="#bazart">BAZART</a>
			<a href="#restaurant">RESTAURANT</a>
			<a href="#nft">NFT GALLERY</a>
		</div>
		<a href="#tickets" class="nav-cta">TICKETS</a>
	</div>
</nav>

<style>
	.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50; backdrop-filter: blur(20px) saturate(140%); background: rgba(10, 9, 8, 0.7); border-bottom: 1px solid var(--line); }
	.nav-inner { max-width: 1280px; margin: 0 auto; padding: 16px 32px; display: flex; align-items: center; justify-content: space-between; gap: 32px; }
	.nav-logo { font-family: var(--font-gp26); font-size: 32px; color: var(--ink); text-decoration: none; }
	.nav-links { display: flex; gap: 28px; }
	.nav-links a { font-family: var(--font-body); color: var(--ink-dim); text-decoration: none; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; transition: color 0.2s; }
	.nav-links a:hover { color: var(--ink); }
	.nav-cta { font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.15em; padding: 10px 20px; border: 1px solid var(--ink); color: var(--ink); text-decoration: none; transition: all 0.2s; }
	.nav-cta:hover { background: var(--ink); color: var(--bg); }
	@media (max-width: 1100px) { .nav-links { display: none; } .nav-inner { padding: 14px 20px; } }
</style>