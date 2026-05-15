<script lang="ts">
	import { siteConfig } from '$lib/eventData';
	import { newCityGas } from '$lib/images';
</script>

<section id="newcitygas" class="venue">
	<div class="container">
		<div class="venue-grid">
			<div class="venue-info">
				<img
					src="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/NCG_LOGO1_BLANC.png"
					alt="New City Gas"
					class="venue-logo"
				/>
				<h3 class="venue-tagline">The Main Room</h3>
				<p class="venue-address">{siteConfig.venueAddress}</p>
				<p class="venue-desc">
					Located in Griffintown, New City Gas is a landmark of Montreal’s industrial heritage, originally established in 1849. Today, it has been thoughtfully reimagined as a multidisciplinary cultural destination where art, music, gastronomy, and contemporary expression converge.
				</p>
				<p class="venue-desc">
					Home to concerts, immersive events, the Bazart restaurant, and Canada’s first crypto art gallery, it unfolds across a series of distinctive indoor and outdoor spaces, each designed to host moments of culture at scale and intimacy alike.
				</p>
				<a href={siteConfig.venueMapUrl} target="_blank" rel="noopener" class="btn btn-ghost"
					>VIEW ON MAPS →</a
				>
			</div>
			<div class="venue-image">
				<img src={newCityGas.venue_main} alt="New City Gas venue" />
			</div>
		</div>
	</div>
</section>

<style>
	.venue {
		padding-top: 40px;
		border-top: 1px solid var(--line);
	}
	.venue-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
		align-items: center;
	}
	.venue-info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.venue-logo {
		width: 100%;
		max-width: 300px;
		height: auto;
		margin-bottom: -10px;
        margin-left: -20px;
		display: block;
        opacity: 0.9;
	}
	.venue-tagline {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 48px;
        letter-spacing: -2%;
		line-height: 1;
		color: var(--ink-dim);
		margin: 0 0 0px;
		text-transform: uppercase;
		white-space: nowrap;
	}
	.venue-address {
		font-family: var(--font-body);
		font-weight: 600;
		font-size: 12px;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--ink);
		margin: 0 0 32px;
        opacity: 0.5;
        margin-left: 0px;
	}
	.venue-desc {
		text-wrap: balance;
		color: var(--ink);
		line-height: 1.2;
		font-size: 15px;
		margin: 0 0 16px;
		max-width: 720px;
		font-family: var(--font-body);
        opacity: 0.9;
	}
	.venue-image img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	@media (max-width: 1024px) {
		.venue-grid {
			grid-template-columns: 1fr;
			gap: 48px;
		}
	}
	@media (max-width: 768px) {
		.venue {
			padding: 48px 0;
		}
		.venue-grid {
			gap: 32px;
		}
		.venue-logo {
			max-width: 260px;
			margin-left: -20px;
		}
		.venue-tagline {
			font-size: 24px;
		}
		.venue-desc {
			margin-bottom: 24px;
		}
	}
</style>