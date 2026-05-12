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
				<h2 class="bazart-title">969 Wellington Street, Montreal, QC</h2>
				<p class="bazart-desc">{siteConfig.bazartTagline}</p>
				<p class="bazart-desc">
					Bazart hosts an intimate, refined parallel program during GP26.
					Curated for those who want the energy of race week with the atmosphere of a private soirée.
				</p>
				<a target="_blank" rel="noopener" href="https://www.google.com/maps/place/Bazart/@45.4947899,-73.5592937,1606m/data=!3m1!1e3!4m6!3m5!1s0x4cc91bf54bdfa5cf:0x670c15f6e7efd83!8m2!3d45.4947862!4d-73.5567134!16s%2Fg%2F11rg56r74s?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D" class="btn btn-champagne">VIEW ON MAPS</a>
			</div>
		</div>
	</div>
</section>

<style>
	.bazart {
		padding: 40px;
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
		max-width: 160px;
		height: auto;
		display: block;
		margin-bottom: 20px;
		margin-left: 0px;
	}
	.bazart-title {
		color: var(--champagne);
		font-family: var(--font-body);
		font-weight: 600;
		font-size: clamp(16px, 4.5vw, 20px);
		line-height: 1.3;
		margin: 0 0 28px;
		white-space: normal; 
		word-wrap: break-word; 
		opacity: 0.8;
	}
	.bazart-desc {
		color: var(--champagne);
		font-family: var(--font-body);
		line-height: 1.5;
		font-size: 15px;
		margin: 0 0 20px;
		max-width: 480px;
		font-weight: 100;
		opacity: 0.92;
	}
	.btn-champagne {
		background: var(--champagne);
		color: var(--bg);
		font-family: var(--font-body);
	}

	.btn-champagne:hover {
        /* This will now swap the background and show the border */
        background: transparent;
        border-color: var(--champagne);
        color: var(--champagne);
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
		/* On mobile/tablet, show the text first so users see the heading before the gallery */
		.bazart-text {
			order: -1;
		}
	}
	
	/* --- MOBILE ONLY TWEAKS --- */
	@media (max-width: 768px) {
		.bazart {
			padding: 48px 0;
		}
		.bazart-grid {
			gap: 32px;
		}
		.bazart-text {
			align-items: flex-end; /* Aligns the logo and button to the right */
			text-align: right; /* Aligns the text itself to the right */
		}
		.bazart-logo {
			max-width: 140px; /* Shrunk the logo for mobile */
		}
		.bazart-title {
			font-size: 24px; 
		}
		.bazart-images {
			gap: 12px;
		}
	}
</style>