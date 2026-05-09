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
					Bazart hosts an intimate, refined parallel program during GP26.
					Curated for those who want the energy of race week with the atmosphere of a private soirée.
				</p>
				<a href="#tickets" class="btn btn-champagne">BAZART RESERVATIONS</a>
			</div>
			
			<div class="bazart-images">
				<img src={bazart.gallery_1} alt="Bazart venue" />
				<img src={bazart.gallery_3} alt="Bazart atmosphere" />
				<img src={bazart.gallery_4} alt="Bazart crowd" />
				<img src={bazart.gallery_2} alt="Bazart DJ" /> 
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

	@media (max-width: 1024px) { 
		.bazart-grid { 
			grid-template-columns: 1fr; 
			gap: 48px; 
		} 
	}
	
	.bazart-title { 
		color: var(--champagne); 
		font-family: var(--font-bazart); 
		font-weight: 600;
		font-size: clamp(48px, 7vw, 96px); 
		line-height: 0.95; 
		margin: 0 0 32px; 
	}
	
	.bazart-desc { 
		color: var(--ink-dim); 
		line-height: 1.6; 
		font-size: 18px;
		margin: 0 0 24px; 
		max-width: 480px; 
		font-weight: 300; 
	}
	
	.section-eyebrow.champagne { 
		color: var(--champagne); 
		font-family: var(--font-body); 
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
	
	/* Interlocking Grid Spans */
	.bazart-images img:nth-child(1) { 
		grid-column: 1 / 2; 
		grid-row: 1 / 3; 
		aspect-ratio: 4/5; /* Tall left */
	}
	.bazart-images img:nth-child(2) { 
		grid-column: 2 / 3; 
		grid-row: 1 / 2; 
		aspect-ratio: 1/1; /* Square top right */
	}
	.bazart-images img:nth-child(3) { 
		grid-column: 2 / 3; 
		grid-row: 2 / 4; 
		aspect-ratio: 4/5; /* Tall bottom right */
	}
	.bazart-images img:nth-child(4) { 
		grid-column: 1 / 2; 
		grid-row: 3 / 4; 
		aspect-ratio: 1/1; /* Square bottom left */
	}

    @media (max-width: 768px) {
		.bazart { 
			padding: 48px 0; 
		}
		.bazart-grid { 
			gap: 32px; 
		}
		/* Grid automatically scales nicely on mobile, 
		   but you can adjust the gap if it feels too wide */
		.bazart-images {
			gap: 12px;
		}
	}
</style>