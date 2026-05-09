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
					Located in Griffintown, the historic New City Gas has been part of Montreal's story since
					1849. Now reimagined as a hub for art, music, culture, and gastronomy, it hosts concerts,
					events, the Bazart restaurant, and Canada's first crypto art gallery across unique indoor
					and outdoor spaces.
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
		padding: 64px 0;
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
		max-width: 500px;
		height: auto;
		margin-bottom: 0px;
        margin-left: -40px;
		display: block;
	}
	.venue-tagline {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 42px;
		line-height: 1;
		color: var(--ink-dim);
		margin: 0 0 6px;
		text-transform: uppercase;
		white-space: nowrap;
	}
	.venue-address {
		font-family: var(--font-body);
		font-weight: 600;
		font-size: 14px;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--ink);
		margin: 0 0 24px;
	}
	.venue-desc {
		text-align: justify;
		color: var(--ink);
		line-height: 1.6;
		font-size: 16px;
		margin: 0 0 32px;
		max-width: 520px;
		font-family: var(--font-body);
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
			margin-left: 0;
		}
		.venue-tagline {
			font-size: 24px;
		}
		.venue-desc {
			margin-bottom: 24px;
		}
	}
</style>