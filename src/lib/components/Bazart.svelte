<script lang="ts">
	import { siteConfig } from '$lib/eventData';
	import { bazart } from '$lib/images';
</script>

<section id="bazart" class="bazart">
	<div class="container">
		<div class="bazart-grid">
			<div class="bazart-text">
				<span class="section-eyebrow champagne">→ NUITS BAZART</span>
				<h2 class="section-title bazart-title">A SECOND<br />FLOOR.<br />A DEEPER<br />NIGHT.</h2>
				<p class="bazart-desc">{siteConfig.bazartTagline}</p>
				<p class="bazart-desc">
					Bazart hosts an intimate, refined parallel program during GP26. Curated for those who want the energy of race week with the atmosphere of a private soirée.
				</p>
				<a href="#tickets" class="btn btn-champagne">BAZART RESERVATIONS</a>
			</div>
			<div class="bazart-images">
				<img src={bazart.gallery_1} alt="Bazart venue" />
				<img src={bazart.gallery_2} alt="Bazart atmosphere" />
			</div>
		</div>
	</div>
</section>

<style>
	.bazart { padding: 120px 0; background: linear-gradient(180deg, var(--bg) 0%, #1a1410 100%); font-family: var(--font-bazart); }
	.bazart-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
	@media (max-width: 1024px) { .bazart-grid { grid-template-columns: 1fr; gap: 48px; } }
	
	/* Force Sangu for Bazart Headings and Body */
	.bazart-title { color: var(--champagne); font-family: var(--font-bazart); font-weight: 600; font-size: clamp(48px, 7vw, 96px); line-height: 0.95; margin: 0 0 32px; }
	.bazart-desc { color: var(--ink-dim); line-height: 1.6; font-size: 18px; margin: 0 0 24px; max-width: 480px; font-weight: 300; }
	.section-eyebrow.champagne { color: var(--champagne); font-family: var(--font-body); } /* Keep eyebrow generic */

	.bazart-images { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
	.bazart-images img { width: 100%; height: 100%; object-fit: cover; border: 1px solid var(--line); }
	.bazart-images img:first-child { grid-row: span 2; aspect-ratio: 4/5; }
	.bazart-images img:last-child { aspect-ratio: 4/3; }

	.btn-champagne { background: var(--champagne); color: var(--bg); font-family: var(--font-body); }
	.btn-champagne:hover { background: transparent; color: var(--champagne); border-color: var(--champagne); }
</style>