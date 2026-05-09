<script lang="ts">
	import { siteConfig } from '$lib/eventData';
	import { bazart } from '$lib/images';
</script>

<section id="bazart" class="bazart">
	<div class="container">
		<div class="bazart-grid">
			<div class="bazart-images">
				<img src={bazart.gallery_1} alt="Bazart venue" />
				<img src={bazart.gallery_3} alt="Bazart atmosphere" />
				<img src={bazart.gallery_4} alt="Bazart crowd" />
				<img src={bazart.gallery_2} alt="Bazart DJ" />
			</div>

			<div class="bazart-text">
				<img
					src="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/Nuits%20Bazart%20logo.png"
					alt="Nuits Bazart"
					class="bazart-logo"
				/>
				<h2 class="bazart-title">The Lounge</h2>
				<p class="bazart-desc">{siteConfig.bazartTagline}</p>
				<p class="bazart-desc">
					Bazart hosts an intimate, refined parallel program during GP26. Curated for those who want
					the energy of race week with the atmosphere of a private soirée.
				</p>
				<a href="#tickets" class="btn btn-champagne">BAZART RESERVATIONS</a>
			</div>
		</div>
	</div>
</section>

<style>
	.bazart {
		padding: 64px 0;
		background: linear-gradient(180deg, var(--bg) 0%, #1a1410 100%);
		font-family: var(--font-bazart);
	}
	.bazart-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
		align-items: center;
	}
	.bazart-text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.bazart-logo {
		width: 100%;
		max-width: 180px;
		height: auto;
		display: block;
		margin-bottom: 40px;
		margin-left: 0px;
	}
	.bazart-title {
		color: var(--champagne);
		font-family: var(--font-bazart);
		font-weight: 600;
		font-size: clamp(36px, 4.5vw, 56px);
		line-height: 1;
		margin: 0 0 28px;
		white-space: nowrap;
	}
	.bazart-desc {
		color: var(--champagne);
		line-height: 1.65;
		font-size: 17px;
		margin: 0 0 20px;
		max-width: 480px;
		font-weight: 600;
		opacity: 0.92;
	}
	.btn-champagne {
		background: var(--champagne);
		color: var(--bg);
		font-family: var(--font-body);
	}

	/* --- ASYMMETRIC 4-IMAGE GRID LOGIC --- */
	.bazart-images {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	}
	.bazart-images img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.bazart-images img:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
		aspect-ratio: 4 / 5;
	}
	.bazart-images img:nth-child(2) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		aspect-ratio: 1 / 1;
	}
	.bazart-images img:nth-child(3) {
		grid-column: 2 / 3;
		grid-row: 2 / 4;
		aspect-ratio: 4 / 5;
	}
	.bazart-images img:nth-child(4) {
		grid-column: 1 / 2;
		grid-row: 3 / 4;
		aspect-ratio: 1 / 1;
	}

	@media (max-width: 1024px) {
		.bazart-grid {
			grid-template-columns: 1fr;
			gap: 48px;
		}
		/* On mobile, show the text first so users see the heading before the gallery */
		.bazart-text {
			order: -1;
		}
	}
	@media (max-width: 768px) {
		.bazart {
			padding: 48px 0;
		}
		.bazart-grid {
			gap: 32px;
		}
		.bazart-logo {
			max-width: 240px;
		}
		.bazart-title {
			font-size: 32px;
		}
		.bazart-images {
			gap: 12px;
		}
	}
</style>