<script lang="ts">
	import { onMount } from 'svelte';
	import { eventDays } from '$lib/eventData';

	let activeDay = $state(0);
	let spacers = $state<HTMLElement[]>([]);
	let isProgrammaticScroll = false;
	let scrollTimeout: ReturnType<typeof setTimeout>;

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

	// Butter-smooth native scroll observer
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (isProgrammaticScroll) return;

				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const idx = Number(entry.target.getAttribute('data-index'));
						if (!isNaN(idx)) activeDay = idx;
					}
				});
			},
			{
				root: null,
				threshold: 0.5
			}
		);

		spacers.forEach((spacer) => {
			if (spacer) observer.observe(spacer);
		});

		return () => {
			observer.disconnect();
			clearTimeout(scrollTimeout);
		};
	});

	function selectDay(index: number) {
		activeDay = index;
		isProgrammaticScroll = true;
		clearTimeout(scrollTimeout);

		if (spacers[index]) {
			spacers[index].scrollIntoView({ behavior: 'smooth' });
		}

		scrollTimeout = setTimeout(() => {
			isProgrammaticScroll = false;
		}, 800);
	}
</script>

<section id="lineup" class="lineup-section" style="--day-count: {eventDays.length}">
	<div class="lineup-sticky">
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
						style="--tab-accent: {day.shows?.[0]?.accentColor || 'var(--ink)'}"
						onclick={() => selectDay(i)}
					>
						<span class="tab-day">{day.dayNameEn}</span>
						<span class="tab-date">{day.date}</span>
						<span class="tab-month">{day.month}</span>
					</button>
				{/each}
			</div>

			<div class="shows-stage">
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
												<span class="show-sponsor">{show.sponsor}</span>
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
											<a href={show.reservationUrl} class="btn btn-ghost">RESERVE A TABLE</a>
										</div>
									</div>
								</div>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<div class="scroll-track">
		{#each eventDays as day, i}
			<div class="scroll-spacer" data-index={i} bind:this={spacers[i]}></div>
		{/each}
	</div>
</section>

<style>
	/* ─────────────────────────────────────────────────────────
	   SCROLL BLOCKER LOGIC
	   ───────────────────────────────────────────────────────── */
	.lineup-section {
		position: relative;
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		height: calc(100dvh * var(--day-count));
	}

	.lineup-sticky {
		position: sticky;
		top: 0;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: var(--bg);
		overflow-y: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.lineup-sticky::-webkit-scrollbar {
		display: none;
	}

	.scroll-track {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.scroll-spacer {
		height: 100dvh;
		width: 100%;
	}

	/* ─────────────────────────────────────────────────────────
	   LAYOUT
	   ───────────────────────────────────────────────────────── */
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
		gap: 2px;
		cursor: pointer;
		transition: all 0.3s;
		position: relative;
		font-family: var(--font-body);
	}
	.day-tab:last-child {
		border-right: none;
	}
	.day-tab.active {
		color: var(--tab-accent);
		background: rgba(255, 255, 255, 0.03);
	}
	.day-tab.active::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -1px;
		height: 4px;
		background: var(--tab-accent);
	}
	.tab-day {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.2em;
	}
	.tab-date {
		font-family: var(--font-gp26);
		font-size: 40px;
		font-weight: 700;
		line-height: 1;
	}
	.tab-month {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.2em;
	}

	/* ─────────────────────────────────────────────────────────
	   SHOWS — FIXED HEIGHTS so poster width can't blow up the text column
	   ───────────────────────────────────────────────────────── */
	.shows-stage {
		--row-height: 480px;
		--row-height-single: 600px; /* taller for single */
		min-height: var(--row-height);
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

	/* Single Event Row — poster LEFT (3:4), text RIGHT */
	.show-row {
		display: grid;
		grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
		gap: 32px;
		background: var(--bg-2);
		height: var(--row-height);
		align-items: stretch;
	}
	.show-left {
		position: relative;
		height: 100%;
		width: 100%;
		max-width: 100%;
		min-width: 0;
	}

	/* Dual Events — TWO columns side-by-side, each with poster LEFT + text RIGHT */
	.shows-list.is-dual {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}
	.shows-list.is-dual .show-row {
		display: grid;
		grid-template-columns: minmax(0, 270px) minmax(0, 1fr);
		gap: 20px;
		height: var(--row-height);
		align-items: stretch;
	}
	.shows-list.is-dual .show-left {
		height: 100%;
		width: 100%;
		max-width: 100%;
		min-width: 0;
	}

	/* Media — fills its container, ratio comes from the cell shape */
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
		display: block;
		transition: opacity 0.3s ease-in-out;
		object-fit: cover;
		width: 101%;
		height: 101%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	/* Info Block */
	.show-right {
		padding: 32px 32px 32px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-width: 0; /* CRITICAL — allows grid item to shrink instead of overflow */
		overflow: hidden;
	}

	.shows-list.is-dual .show-right {
		padding: 20px 20px 20px 0;
		justify-content: flex-start;
		overflow: hidden;
	}
	.shows-list.is-dual .show-artist {
		font-size: clamp(22px, 2.2vw, 32px);
		margin-bottom: 6px;
	}
	.shows-list.is-dual .show-bio {
		font-size: 13px;
		margin-bottom: 16px;
		display: -webkit-box;
		-webkit-line-clamp: 6;
		line-clamp: 6;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.shows-list.is-dual .show-venue-text {
		font-size: 15px;
	}
	.shows-list.is-dual .show-sponsor {
		font-size: 10px;
	}

	/* Text Styles */
	.show-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
		margin-bottom: 14px;
		letter-spacing: 0.2em;
	}
	.show-venue-text {
		font-size: 18px;
		font-weight: 800;
		color: var(--show-accent);
		line-height: 1.1;
        text-align: justify;
	}
	.show-sponsor {
		font-size: 11px;
		font-weight: 700;
		color: var(--ink-faint);
		line-height: 1.1;
	}
	.show-artist {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(28px, 3.5vw, 52px);
		line-height: 1;
		margin: 0 0 12px;
		text-transform: uppercase;
		word-break: break-word;
	}
	.show-supporting {
		font-size: 13px;
		font-weight: 400;
		color: var(--ink);
		margin: 0 0 16px;
		letter-spacing: 0.1em;
	}
	.show-bio {
		font-size: 14px;
		line-height: 1.55;
		color: var(--ink-dim);
		margin-bottom: 20px;
		text-align: justify; /* No more justify — was creating word-island spacing */
	}
	.show-actions {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}

	/* 📱 TABLET */
	@media (max-width: 1200px) {
		.shows-list.is-dual {
			grid-template-columns: 1fr;
		}
		.shows-list.is-dual .show-row {
			display: grid;
			grid-template-columns: minmax(0, 280px) minmax(0, 1fr);
			gap: 32px;
			height: 500px;
		}
		.shows-list.is-dual .show-bio {
			-webkit-line-clamp: unset;
			line-clamp: unset;
			display: block;
			overflow: visible;
		}
		.shows-list.is-dual .show-right {
			padding: 32px 32px 32px 0;
			justify-content: center;
		}
	}

	/* 📱 MOBILE */
	@media (max-width: 900px) {
		.day-tabs {
			grid-template-columns: repeat(4, 1fr);
			margin-bottom: 16px;
		}
		.day-tab {
			padding: 8px 4px;
			align-items: center;
			text-align: center;
			border-bottom: none;
			border-right: 1px solid var(--line);
		}
		.day-tab:nth-child(2) {
			border-right: 1px solid var(--line);
		}
		.tab-day,
		.tab-month {
			font-size: 8px;
		}
		.tab-date {
			font-size: 20px;
		}
		.lineup-header {
			margin-bottom: 12px;
		}

		.shows-stage {
			min-height: auto;
		}

		.show-row {
			grid-template-columns: 1fr;
			height: auto;
			min-height: auto;
			gap: 0;
		}
		.show-left {
			height: auto;
		}

		/* Mobile dual events as scroll-snap carousel */
		.shows-list.is-dual {
			display: flex;
			flex-direction: row;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			gap: 16px;
			padding-bottom: 12px;
			-ms-overflow-style: none;
			scrollbar-width: none;
		}
		.shows-list.is-dual::-webkit-scrollbar {
			display: none;
		}
		.shows-list.is-dual .show-row {
			display: flex;
			flex-direction: column;
			flex: 0 0 85%;
			scroll-snap-align: center;
			height: auto;
			min-height: auto;
		}
		.shows-list.is-dual .show-left {
			height: auto;
		}
		.shows-list.is-dual .show-bio {
			-webkit-line-clamp: unset;
			line-clamp: unset;
			display: block;
			overflow: visible;
		}
		.shows-list.is-dual .show-right {
			padding: 20px;
		}

		.media-container {
			aspect-ratio: 3 / 4;
			height: auto;
			border-bottom: 1px solid var(--line);
		}
		.show-venue-text {
			font-size: 16px;
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
