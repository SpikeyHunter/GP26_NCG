<script lang="ts">
	import { eventDays } from '$lib/eventData';
	let activeDay = $state(0);

	// Custom Svelte action to alternate smoothly between image and video
	function mediaAlternator(node: HTMLElement) {
		const img = node.querySelector('img') as HTMLImageElement | null;
		const vid = node.querySelector('video') as HTMLVideoElement | null;
		if (!img || !vid) return;

		let timeout: ReturnType<typeof setTimeout>;

		function showImage() {
			if (!img || !vid) return;
			img.style.opacity = '1';
			vid.style.opacity = '0';
			vid.pause();
			vid.currentTime = 0;

			timeout = setTimeout(() => {
				if (!img || !vid) return;
				img.style.opacity = '0';
				vid.style.opacity = '1';
				vid.play().catch(() => {
					img.style.opacity = '1';
				});
			}, 3000);
		}

		// New listener to stop video at 5 seconds
		const handleTimeUpdate = () => {
			if (vid && vid.currentTime >= 6) {
				showImage();
			}
		};

		vid.addEventListener('timeupdate', handleTimeUpdate);
		vid.addEventListener('ended', showImage);
		showImage();

		return {
			destroy() {
				clearTimeout(timeout);
				vid.removeEventListener('timeupdate', handleTimeUpdate);
				vid.removeEventListener('ended', showImage);
			}
		};
	}
</script>

<section id="lineup" class="lineup">
	<div class="container">
		<div class="section-header lineup-header">
			<span class="section-eyebrow lineup-eyebrow"
				><span style="font-family: Arial, sans-serif;">&rarr;</span> THE LINEUP</span
			>
			<h2 class="section-title lineup-title">FOUR NIGHTS.<br />ONE WEEKEND.</h2>
		</div>

		<div class="day-tabs">
			{#each eventDays as day, i}
				<button
					class="day-tab"
					class:active={activeDay === i}
					style="--tab-accent: {day.shows[0].accentColor}"
					onclick={() => (activeDay = i)}
				>
					<span class="tab-day">{day.dayNameEn}</span>
					<span class="tab-date">{day.date}</span>
					<span class="tab-month">{day.month}</span>
				</button>
			{/each}
		</div>

		{#each eventDays as day, i}
			{#if activeDay === i}
				<div class="shows-list" class:is-dual={day.shows.length > 1}>
					{#each day.shows as show}
						<div class="show-row" style="--show-accent: {show.accentColor}">
							<div class="show-left">
								{#if show.posterVideoUrl}
									<div class="media-container" use:mediaAlternator>
										<img src={show.posterUrl} alt={show.artist} class="show-poster" />
										<video
											src={show.posterVideoUrl}
											muted
											playsinline
											preload="auto"
											class="show-video"
										></video>
									</div>
								{:else}
									<div class="media-container">
										<img src={show.posterUrl} alt={show.artist} class="show-poster" />
									</div>
								{/if}
							</div>

							<div class="show-right">
								<div class="show-meta">
									<span class="show-venue-text">{show.venue}</span>
									{#if show.sponsor}
										<span class="show-sponsor"> • PRESENTED W/ {show.sponsor}</span>
									{/if}
								</div>

								<h3 class="show-artist">{show.artist}</h3>

								{#if show.supporting?.length}
									<p class="show-supporting">{show.supporting.join(' · ')}</p>
								{/if}

								<div class="show-bio">
									<p>{show.aboutArtist}</p>
								</div>

								<div class="show-actions">
									<a href={show.ticketUrl} class="btn btn-primary">BUY TICKETS</a>
									<a href={show.reservationUrl} class="btn btn-ghost">RESERVE TABLE</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		{/each}
	</div>
</section>

<style>
	/* Greatly reduced top and bottom padding */
	.lineup {
		padding: 40px 0;
		border-top: 1px solid var(--line);
	}

	/* Reduced gaps around the headers */
	.lineup-header {
		margin-bottom: 20px;
	}
	.lineup-eyebrow {
		font-size: 16px;
		color: var(--ink);
		margin-bottom: 4px;
		display: inline-block;
	}
	.lineup-title {
		font-size: clamp(28px, 4vw, 56px);
		margin: 0;
		color: var(--ink-dim);
	}

	/* Tighter Tabs */
	.day-tabs {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin-bottom: 32px;
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}
	.day-tab {
		background: transparent;
		border: none;
		border-right: 1px solid var(--line);
		padding: 16px;
		color: var(--ink-dim);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
		cursor: pointer;
		transition: all 0.3s;
		position: relative;
		font-family: var(--font-body);
	}
	.day-tab:last-child {
		border-right: none;
	}
	.day-tab.active {
		color: var(--ink);
		background: rgba(255, 255, 255, 0.03);
	}
	.day-tab.active::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -1px;
		height: 2px;
		background: var(--tab-accent);
	}
	.tab-day {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.2em;
	}
	.tab-date {
		font-family: var(--font-display);
		font-size: 40px;
		font-weight: 700;
		line-height: 1;
	}
	.tab-month {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.2em;
	}

	.shows-list {
		display: flex;
		flex-direction: column;
		gap: 24px;
		animation: fade-in 0.5s ease;
	}
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Base Show Row (Single Event) */
	.show-row {
		display: grid;
		grid-template-columns: 400px 1fr; /* Flyer takes exactly 400px */
		gap: 32px;
		background: var(--bg-2);
		border: 1px solid var(--line);
		border-left: 4px solid var(--show-accent);
		min-height: 480px; /* Locks the height so it perfectly matches dual events */
	}

	.show-left {
		position: relative;
		height: 100%;
	}

	/* SIDE-BY-SIDE LOGIC (Dual Events) */
	.shows-list.is-dual {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}
	.shows-list.is-dual .show-row {
		grid-template-columns: 1fr 1fr; /* 50/50 internal split */
		gap: 0;
		min-height: 480px; /* Same locked height */
	}

	/* Media takes 100% of whatever height the card is */
	.media-container {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #000;
	}
	.show-poster,
	.show-video {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: opacity 0.3s ease-in-out;
	}

	/* Single Event Info Block */
	.show-right {
		padding: 40px 40px 40px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	/* Dual Event Info Block Tweaks (To make it fit perfectly without expanding) */
	.shows-list.is-dual .show-right {
		padding: 24px;
	}
	.shows-list.is-dual .show-artist {
		font-size: clamp(20px, 2.5vw, 36px);
		margin-bottom: 6px;
	}
	.shows-list.is-dual .show-bio {
		font-size: 13px;
		line-height: 1.4;
		margin-bottom: 16px;
	}
	.shows-list.is-dual .show-actions {
		flex-direction: column;
		gap: 8px;
	}
	.shows-list.is-dual .show-actions .btn {
		width: 100%;
	}

	/* Common Text Styles */
	.show-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
		margin-bottom: 12px;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.2em;
		color: var(--show-accent);
	}
	.show-sponsor {
		color: var(--ink-faint);
	}
	.show-artist {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(32px, 4vw, 56px);
		line-height: 1;
		margin: 0 0 12px;
		text-transform: uppercase;
	}
	.show-supporting {
		font-size: 13px;
		font-weight: 400;
		color: var(--ink-dim);
		margin: 0 0 16px;
	}
	.show-bio {
		font-size: 14px;
		line-height: 1.6;
		color: var(--ink-dim);
		margin-bottom: 24px;
	}
	.show-actions {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}

	/* 📱 MOBILE FIXES */
	@media (max-width: 1200px) {
		.shows-list.is-dual {
			grid-template-columns: 1fr;
		}
		.shows-list.is-dual .show-row {
			grid-template-columns: 400px 1fr;
			gap: 32px;
		}
		.shows-list.is-dual .show-right {
			padding: 40px 40px 40px 0;
		}
		.shows-list.is-dual .show-actions {
			flex-direction: row;
		}
		.shows-list.is-dual .show-actions .btn {
			width: auto;
		}
	}

	@media (max-width: 900px) {
		.lineup {
			padding: 32px 0;
		}
		.day-tabs {
			grid-template-columns: repeat(2, 1fr);
			margin-bottom: 24px;
		}
		.day-tab {
			padding: 12px;
			align-items: center;
			border-bottom: 1px solid var(--line);
		}
		.day-tab:nth-child(2) {
			border-right: none;
		}

		/* Stack flyer on top of info on mobile */
		.show-row,
		.shows-list.is-dual .show-row {
			grid-template-columns: 1fr;
			min-height: auto;
			gap: 0;
		}
		.media-container {
			aspect-ratio: 1/1;
			height: auto;
			border-bottom: 1px solid var(--line);
		}

		.show-right,
		.shows-list.is-dual .show-right {
			padding: 24px;
		}
		.show-artist {
			font-size: clamp(28px, 8vw, 40px);
		}
		.show-actions {
			flex-direction: column;
			gap: 12px;
		}
		.show-actions .btn {
			width: 100%;
		}
	}
</style>
