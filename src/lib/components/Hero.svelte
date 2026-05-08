<script lang="ts">
	import { hero } from '$lib/images';
</script>

<section id="top" class="hero">
	<div class="hero-bg" style="background-image: url({hero.background});"></div>
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<div class="hero-meta">
			<span class="meta-item">→ ALL GAS</span>
			<span class="meta-item meta-accent">→ NO BRAKES</span>
		</div>
		<h1 class="hero-title">GP26</h1>
		<p class="hero-sub">RACE WEEK AT NEW CITY GAS</p>
		<div class="hero-cta">
			<a href="#lineup" class="btn btn-primary">VIEW LINEUP</a>
		</div>
	</div>
</section>

<style>
	.hero { position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; padding-top: 80px; }
	.hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; filter: grayscale(0.3) contrast(1.05); opacity: 0.45; }
	.hero-overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(10, 9, 8, 0.3) 0%, rgba(10, 9, 8, 0.95) 80%), linear-gradient(180deg, transparent 0%, var(--bg) 100%); }
	.hero-content { position: relative; z-index: 2; text-align: center; padding: 0 32px; }
	.hero-meta { display: flex; justify-content: center; gap: 24px; margin-bottom: 24px; font-size: 13px; font-weight: 700; letter-spacing: 0.2em; font-family: var(--font-body); }
	.meta-item { color: var(--ink-dim); } .meta-accent { color: var(--ink); }
	.hero-title { font-family: var(--font-gp26); font-size: clamp(120px, 22vw, 320px); line-height: 0.85; margin: 0; background: linear-gradient(180deg, #fff 0%, #c5b896 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
	.hero-sub { font-family: var(--font-raceweek); font-size: clamp(24px, 5vw, 48px); letter-spacing: 0.1em; color: var(--ink-dim); margin: 24px 0 48px; }
	.hero-cta { display: flex; gap: 16px; justify-content: center; }
</style>