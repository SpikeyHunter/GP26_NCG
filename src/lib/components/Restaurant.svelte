<script lang="ts">
	import { restaurant } from '$lib/images';
</script>

<section id="restaurant" class="restaurant">
	<div class="container">
		<div class="schedule-header">
			<span class="section-eyebrow schedule-eyebrow"
				><span style="font-family: Arial, sans-serif;">&rarr;</span> DINING EXPERIENCE</span
			>
			<h2 class="section-title schedule-title">AT BAZART</h2>
		</div>
		<div class="hero-image">
			<img src={restaurant.hero} alt="Restaurant at NCG" />
		</div>
		<div class="dish-grid">
			<img src={restaurant.dish_1} alt="Dish 1" />
			<img src={restaurant.dish_2} alt="Dish 2" />
			<img src={restaurant.dish_3} alt="Dish 3" />
		</div>
	</div>
</section>

<style>
	
	.schedule-eyebrow {
		font-size: 16px;
		color: var(--ink);
		margin-bottom: 4px;
		display: inline-block;
	}
	.schedule-title {
		font-size: clamp(28px, 4vw, 56px);
		margin-bottom: 20px;
		color: var(--ink-dim);
	}

    .restaurant {
		padding: 64px 0;
		border-top: 1px solid var(--line);
	}
	.hero-image {
		margin-bottom: 24px;
	}
	.hero-image img {
		width: 100%;
		aspect-ratio: 21/9;
		object-fit: cover;
		border: 1px solid var(--line);
	}
	.dish-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}
	.dish-grid img {
		width: 100%;
		aspect-ratio: 1/1;
		object-fit: cover;
		border: 1px solid var(--line);
	}
	@media (max-width: 768px) {
		.restaurant {
			padding: 48px 0;
		}
		.hero-image {
			margin-bottom: 12px;
		}
		.dish-grid {
			gap: 12px;
		}
	}
</style>