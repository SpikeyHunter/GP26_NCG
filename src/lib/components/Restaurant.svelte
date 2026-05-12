<script lang="ts">
	import { restaurant } from '$lib/images';
	import { fade, scale } from 'svelte/transition';

	// Svelte 5 Rune for reactivity
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
		}
	}

	// Placeholder for your menu asset
	const menuAsset =
		'https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/BAZART_GP26_MENU_EN_1080X1920.png';
</script>

<section id="restaurant" class="restaurant">
	<div class="container">
		<div class="header-container">
			<div class="title-block">
				<span class="section-eyebrow schedule-eyebrow"
					><span style="font-family: Arial, sans-serif;">&rarr;</span> DINING EXPERIENCE</span
				>
				<h2 class="section-title schedule-title">AT BAZART</h2>
			</div>

			<p class="restaurant-description">
				Immerse yourself in a Mediterranean-inspired culinary journey where vibrant flavors meet
				locally sourced ingredients. Discover an unforgettable dining atmosphere perfect for
				intimate evenings and spirited gatherings alike.
			</p>

			<div class="header-action">
				<button class="btn btn-outline" onclick={toggleMenu}> VIEW MENU </button>

				<a
					href="https://www.opentable.ca/r/bazart-reservations-montreal?restref=1233340&lang=fr-CA&ot_source=Restaurant%20website&ot_campaign=2025%20Website%20Widget?font=trebuchetMs"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-champagne book-button"
				>
					BOOK A TABLE
				</a>
			</div>
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

{#if isMenuOpen}
	<div
		class="modal-backdrop"
		onclick={toggleMenu}
		onkeydown={(e) => e.key === 'Escape' && toggleMenu()}
		role="button"
		tabindex="0"
		transition:fade={{ duration: 200 }}
	>
		<div
			class="modal-content"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="none"
			transition:scale={{ duration: 300, start: 0.95 }}
		>
			<button class="close-modal" onclick={toggleMenu} aria-label="Close Menu">
				<svg
					viewBox="0 0 24 24"
					width="20"
					height="20"
					stroke="currentColor"
					stroke-width="2.5"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>

			<img src={menuAsset} alt="Restaurant Menu" class="menu-view" />
		</div>
	</div>
{/if}

<style>
	.restaurant {
		padding: 64px 0;
		border-top: 1px solid var(--line);
	}

	.header-container {
		display: grid;
		grid-template-columns: 1fr auto;
		column-gap: 24px;
		row-gap: 16px;
		margin-bottom: 32px;
		align-items: start;
	}

	.title-block {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}

	.header-action {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		display: flex;
		justify-content: flex-end;
		gap: 12px;
	}

	.restaurant-description {
		grid-column: 1 / -1;
		grid-row: 2 / 3;
		font-size: 16px;
		line-height: 1.5;
		color: var(--ink-dim);
		margin: 0;
		max-width: 100%;
		text-align: justify;
	}

	.schedule-eyebrow {
		font-size: 16px;
		color: var(--ink);
		margin-bottom: 4px;
		display: inline-block;
	}

	.schedule-title {
		font-size: clamp(28px, 4vw, 56px);
		margin-bottom: 0;
		color: var(--ink-dim);
		line-height: 1.1;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 24px;
		text-decoration: none;
		font-weight: 600;
		border: 1px solid transparent;
		transition: all 0.2s ease;
		white-space: nowrap;
		text-transform: uppercase;
		font-size: 14px;
		letter-spacing: 0.05em;
		border-radius: 0;
		cursor: pointer;
	}

	.btn-champagne {
		background: var(--champagne);
		color: var(--bg);
		font-family: var(--font-body);
	}

	.btn-champagne:hover {
		background: transparent;
		border-color: var(--champagne);
		color: var(--champagne);
	}

	.btn-outline {
		background: transparent;
		border-color: var(--champagne);
		color: var(--champagne);
		font-family: var(--font-body);
	}

	.btn-outline:hover {
		background: var(--champagne);
		color: var(--bg);
	}

	/* Modal Styling */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 20px;
		border: none;
		cursor: default;
	}

	.modal-content {
		position: relative;
		/* Shrink-wraps the container strictly to the size of the image */
		display: inline-flex;
		align-items: center;
		justify-content: center;
		max-width: 100%;
		max-height: 100%;
	}

	.close-modal {
		position: absolute;
		top: -15px;
		right: -15px;
		background: #665344; /* Changed from var(--bg, #fff) */
		color: #ebddc2; /* Changed from var(--ink, #000) */
		border: none;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		z-index: 1010;
		transition: transform 0.2s ease;
	}

	.close-modal:hover {
		transform: scale(1.1);
	}

	.menu-view {
		/* Allows natural aspect ratio without forcing a full screen width */
		width: auto;
		height: auto;
		max-width: 90vw;
		max-height: 90vh;
		object-fit: contain;
		display: block;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Optional: Adds depth to the image itself */
	}

	.hero-image {
		margin-bottom: 24px;
	}

	.hero-image img {
		width: 100%;
		aspect-ratio: 21 / 9;
		object-fit: cover;
	}

	.dish-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	.dish-grid img {
		width: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.header-container {
			grid-template-columns: 1fr;
			row-gap: 20px;
		}

		.title-block,
		.header-action,
		.restaurant-description {
			grid-column: 1 / -1;
		}

		.header-action {
			order: 3;
			flex-direction: row;
			gap: 12px;
		}

		.btn {
			width: auto;
			flex: 1;
			padding: 12px 16px;
			font-size: 12px;
		}

		/* Adjust button slightly on mobile so it doesn't get clipped by the viewport edges */
		.close-modal {
			top: -10px;
			right: -10px;
			width: 32px;
			height: 32px;
		}
	}
</style>
