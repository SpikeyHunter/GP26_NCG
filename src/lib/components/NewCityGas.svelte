<script lang="ts">
	import { siteConfig } from '$lib/eventData';
	import { newCityGas } from '$lib/images';
</script>

<section id="newcitygas" class="venue">
	<div class="container">
		<div class="venue-grid">
			<div>
				<span class="section-eyebrow">→ THE HOME OF GP26</span>
				<h2 class="section-title">NEW CITY GAS</h2>
				<p class="venue-address">{siteConfig.venueAddress}</p>
				<p class="venue-desc">
					Montreal's premier nightlife destination — a historic industrial cathedral transformed into a
					world-class venue. For GP26, NCG becomes the official Race Week home: a multi-room experience
					with the main floor, Bazart, and DSTRKT all programmed across four nights.
				</p>
				<a href={siteConfig.venueMapUrl} target="_blank" rel="noopener" class="btn btn-ghost">OPEN IN MAPS →</a>
			</div>
			<div class="venue-image">
				<img src={newCityGas.venue_main} alt="New City Gas venue" />
			</div>
		</div>
	</div>
</section>

<style>
	.venue { padding: 64px 0; border-top: 1px solid var(--line); }
	.venue-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
	@media (max-width: 1024px) { .venue-grid { grid-template-columns: 1fr; gap: 48px; } }
	.venue-address { font-family: var(--font-display); font-weight: 700; font-size: 24px; color: var(--ink-dim); margin: 0 0 24px; }
	.venue-desc { color: var(--ink-dim); line-height: 1.6; font-size: 16px; margin: 0 0 32px; max-width: 480px; font-family: var(--font-body); }
	.venue-image img { width: 100%; aspect-ratio: 4/3; object-fit: cover; }
    @media (max-width: 768px) {
		.venue { padding: 48px 0; }
		.venue-grid { gap: 32px; }
		.venue-desc { margin-bottom: 24px; }
	}
</style>