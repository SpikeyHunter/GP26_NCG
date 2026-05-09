<script lang="ts">
	import { hero } from '$lib/images';
</script>

<section id="top" class="hero">
	<div
		class="hero-bg"
		style="background-image: linear-gradient(to bottom, rgba(10, 9, 8, 1) 0%, transparent 40%, rgba(10, 9, 8, 1) 100%), url({hero.background});"
	></div>

	<div class="hero-overlay"></div>

	<div class="hero-video-wrapper">
		<video
			src="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/Hero/GP26_Video-Animation.webm"
			autoplay
			loop
			muted
			playsinline
			preload="auto"
			class="hero-video"
		></video>
	</div>

	<div class="hero-content">
		<p class="hero-sub">
			RACE WEEK <span class="hero-sub-venue">AT NEW CITY GAS</span>
		</p>
		<div class="hero-cta">
			<a href="#lineup" class="btn btn-secondary">VIEW LINEUP</a>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		/* min-height: 100vh; <--- REMOVE THIS */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		overflow: hidden;
		padding-top: 100px;
		padding-bottom: 40px; /* <--- ADD THIS to match your other sections */
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		opacity: 0.6;
		z-index: 0;
		filter: grayscale(60%);
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: radial-gradient(ellipse at center, transparent 0%, var(--bg) 80%);
		pointer-events: none;
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		padding: 0 32px;
		width: 100%;

		/* Replace 'auto' with a specific pixel value to bring it close to the video */
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.hero-video-wrapper {
		position: relative;
		z-index: 2;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.hero-video {
		width: 100%;
		height: auto;
		object-fit: contain;
		display: block;
	}

	.hero-sub {
		font-family: var(--font-raceweek);
		font-size: clamp(24px, 5vw, 48px);
		letter-spacing: 0.03em;
		color: var(--gold2);
		/* The first number is the top gap. Change 24px to 0px for max tightness */
		margin: 20px 0 20px;
	}

	/* ADD THIS NEW CLASS */
	.hero-sub-venue {
		font-family: var(--font-display);
		font-weight: 550;
		color: var(--ink);

		/* Use a negative value to pull letters closer together */
		letter-spacing: -0.055em;
	}

	.hero-cta {
		display: flex;
		gap: 16px;
		justify-content: center;
	}
	@media (max-width: 768px) {
		.hero {
			/* min-height: 80vh; <--- REMOVE THIS */
			padding-top: 100px;
			padding-bottom: 22px;
		}

		/* Forces "AT NEW CITY GAS" to drop to the next line on mobile */
		.hero-sub-venue {
			display: block;
			margin-top: 4px; /* Adjust this to pull it closer to or further from RACE WEEK */
		}
	}
</style>
