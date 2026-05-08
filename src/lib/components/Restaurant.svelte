<script lang="ts">
	import { restaurant } from '$lib/images';
</script>

<section id="restaurant" class="restaurant">
	<div class="container">
		<div class="section-header">
			<span class="section-eyebrow">→ DINING</span>
			<h2 class="section-title">THE RESTAURANT</h2>
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
	.restaurant { padding: 120px 0; border-top: 1px solid var(--line); }
	.hero-image { margin-bottom: 24px; }
	.hero-image img { width: 100%; aspect-ratio: 21/9; object-fit: cover; border: 1px solid var(--line); }
	.dish-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
	.dish-grid img { width: 100%; aspect-ratio: 1/1; object-fit: cover; border: 1px solid var(--line); }
	@media (max-width: 768px) { .dish-grid { grid-template-columns: 1fr; } }
    @media (max-width: 768px) {
		section { padding: 64px 0; }
		.section-header { margin-bottom: 32px; }
		.restaurant { padding: 64px 0; }
	}
</style>