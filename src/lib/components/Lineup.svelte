<script lang="ts">
	import { onMount } from 'svelte';
	import { eventDays } from '$lib/eventData';

	let activeDay = $state(0);
	let spacers = $state<HTMLElement[]>([]);
	let isProgrammaticScroll = false;
	let scrollTimeout: ReturnType<typeof setTimeout>;
	let isMobile = $state(false);

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

	// Butter-smooth native scroll observer (DESKTOP ONLY)
	onMount(() => {
		const mq = window.matchMedia('(max-width: 900px)');
		isMobile = mq.matches;

		const handleMqChange = (e: MediaQueryListEvent) => {
			isMobile = e.matches;
		};
		mq.addEventListener('change', handleMqChange);

		// Don't set up scroll observer on mobile — scroll-blocking is disabled there
		if (mq.matches) {
			return () => {
				mq.removeEventListener('change', handleMqChange);
			};
		}

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
			mq.removeEventListener('change', handleMqChange);
		};
	});

	function selectDay(index: number) {
		activeDay = index;

		// On mobile, just switch tabs — no scroll hijacking
		if (isMobile) return;

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
					><span style="font-family: Arial, sans-serif;">&rarr;</span> ALL GAS. NO BRAKES.</span
				>
				<h2 class="section-title lineup-title">FOUR NIGHTS.<br />RACE WEEK.</h2>
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
							{#each day.shows as show, showIndex}
								<div
									class="show-row"
									data-date={String(day.date)}
									style="--show-accent: {show.accentColor}"
								>
									<!-- ROW 1 (mobile): flyer left + venue/sponsor/headliner/supporting right -->
									<div class="show-top">
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

										<div class="show-headline">
											<div class="show-meta">
												{#if show.sponsor}
													<span class="show-venue-text">{show.sponsor}</span>
												{/if}
											</div>

											<h3 class="show-artist">{show.artist}</h3>

											{#if show.supporting?.length}
												<p class="show-supporting">{show.supporting.join(' · ')}</p>
											{/if}
											{#if showIndex === 0}
												<img
													src="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/NCG_LOGO1_BLANC.png"
													alt="New City Gas"
													class="venue-logo"
												/>
											{:else}
												<img
													src="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/Nuits_bazart_horz.png"
													alt="Nuits Bazart"
													class="venue-logo bazart-logo"
												/>
											{/if}
										</div>
									</div>

									<!-- ROW 2 (mobile): description -->
									<div class="show-bio">
										<p>{show.aboutArtist}</p>
									</div>

									<!-- ROW 3 (mobile): actions -->
									<div class="show-actions">
										<a href={show.ticketUrl} target="_blank" rel="noopener" class="btn btn-primary"
											>BUY TICKETS</a
										>
										<a
											href={show.reservationUrl}
											target="_blank"
											rel="noopener"
											class="btn btn-ghost">BOOK A TABLE</a
										>
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
		{#each eventDays as _day, i}
			<div class="scroll-spacer" data-index={i} bind:this={spacers[i]}></div>
		{/each}
	</div>
</section>

<style>
	/* ─────────────────────────────────────────────────────────
	   SCROLL BLOCKER LOGIC (DESKTOP)
	   ───────────────────────────────────────────────────────── */

	.venue-logo {
		width: 100%;
		max-width: 150px;
		height: auto;
		margin-bottom: -10px;
		margin-top: -10px;
		margin-left: -9px;
		display: block;
		opacity: 0.9;
	}
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
	   SHOWS — Desktop layout (poster left full-height, info right stacked)
	   ───────────────────────────────────────────────────────── */
	.shows-stage {
		--row-height: 480px;
		--row-height-single: 600px;
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

	/* DESKTOP: show-row is a 2-col grid (poster | info-stack) with explicit rows
	   so headline / bio / actions stack vertically while the poster spans them all. */
	.show-row {
		display: grid;
		grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
		grid-template-rows: auto 1fr auto;
		gap: 0 32px;
		background: var(--bg-2);
		height: var(--row-height);
		align-items: stretch;
	}

	/* On desktop the .show-top wrapper is invisible — its children spill into the grid */
	.show-top {
		display: contents;
	}

	/* Poster: column 1, spans ALL rows so it's full-height (preserves the original 3:4-ish ratio) */
	.show-left {
		position: relative;
		grid-column: 1;
		grid-row: 1 / -1;
		height: 100%;
		width: 100%;
		max-width: 100%;
		min-width: 0;
	}

	/* Right column stack */
	.show-headline {
		grid-column: 2;
		grid-row: 1;
		padding: 32px 32px 0 0;
		min-width: 0;
		overflow: hidden;
	}

	.show-bio {
		grid-column: 2;
		grid-row: 2;
		padding: 16px 32px 16px 0;
		font-size: 14px;
		line-height: 1.55;
		color: var(--ink-dim);
		text-align: justify;
		min-width: 0;
		overflow: hidden;
	}

	.show-actions {
		grid-column: 2;
		grid-row: 3;
		padding: 0 32px 32px 0;
		display: flex;
		flex-direction: row;
		gap: 12px;
		flex-wrap: wrap;
		align-self: end;
		width: auto;
	}

	.show-actions .btn {
		width: auto;
	}

	.bazart-logo {
		max-width: 160px;
		margin-left: 0; /* Reset NCG's negative margin */
		margin-top: -10px;
		margin-bottom: 2px;
	}

	/* Dual Events — TWO columns side-by-side */
	.shows-list.is-dual {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}
	.shows-list.is-dual .show-row {
		display: grid;
		grid-template-columns: minmax(0, 270px) minmax(0, 1fr);
		grid-template-rows: auto 1fr auto;
		gap: 0 20px;
		height: var(--row-height);
		align-items: stretch;
	}
	.shows-list.is-dual .show-headline {
		padding: 20px 20px 0 0;
	}
	.shows-list.is-dual .show-bio {
		padding: 12px 20px 12px 0;
		font-size: 13px;
		display: -webkit-box;
		-webkit-line-clamp: 6;
		line-clamp: 6;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.shows-list.is-dual .show-actions {
		padding: 0 20px 20px 0;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.shows-list.is-dual .show-actions .btn {
		width: 100%;
	}
	.shows-list.is-dual .show-artist {
		font-size: clamp(22px, 2.2vw, 32px);
		margin-bottom: 6px;
	}
	.shows-list.is-dual .show-venue-text {
		font-size: 15px;
	}
	.shows-list.is-dual .show-left {
		height: 100%;
		width: 100%;
		max-width: 100%;
		min-width: 0;
	}

	/* Media — fills its container */
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
		text-align: left;
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

	/* 📱 TABLET */
	@media (max-width: 1200px) and (min-width: 901px) {
		.shows-list.is-dual {
			grid-template-columns: 1fr;
		}
		.shows-list.is-dual .show-row {
			grid-template-columns: minmax(0, 280px) minmax(0, 1fr);
			grid-template-rows: auto 1fr auto;
			gap: 0 32px;
			height: 500px;
		}
		.shows-list.is-dual .show-bio {
			-webkit-line-clamp: unset;
			line-clamp: unset;
			display: block;
			overflow: visible;
		}
	}

	/* ─────────────────────────────────────────────────────────
	   📱 MOBILE — Disable scroll blocking, 3-row stack, fit iPhone screen
	   ───────────────────────────────────────────────────────── */
	@media (max-width: 900px) {
		/* Kill scroll hijacking */
		.venue-logo {
			width: 100%;
			max-width: 150px;
			height: auto;
			margin-bottom: -30px;
			margin-top: 5px;
			margin-left: -12px;
			display: block;
			opacity: 0.9;
		}
		.lineup-section {
			height: auto;
		}
		.lineup-sticky {
			position: static;
			height: auto;
			overflow-y: visible;
			padding: 24px 0 32px;
		}
		.scroll-track {
			display: none;
		}

		/* Keep 4 dates visible — tighter padding */
		.day-tabs {
			grid-template-columns: repeat(4, 1fr);
			margin-bottom: 16px;
		}
		.day-tab {
			padding: 8px 4px;
			align-items: center;
			text-align: center;
		}
		.tab-day,
		.tab-month {
			font-size: 8px;
		}
		.tab-date {
			font-size: 22px;
		}

		.lineup-header {
			margin-bottom: 12px;
		}
		.lineup-title {
			font-size: clamp(22px, 6vw, 32px);
		}

		.shows-stage {
			min-height: auto;
		}

		.show-row[data-date='22'] .show-poster,
		.show-row[data-date='22'] .show-video,
		.show-row[data-date='23'] .show-poster,
		.show-row[data-date='23'] .show-video {
			object-position: center top;
			padding-bottom: 0px;
		}
		.show-row[data-date='22'] .show-bio,
		.show-row[data-date='23'] .show-bio {
			padding-top: 20px !important;
			text-align: justify;
		}

		/* SHOW-ROW becomes a 3-row vertical stack designed to fit iPhone height. */
		.show-row {
			display: flex;
			flex-direction: column;
			grid-template-columns: none;
			grid-template-rows: none;
			height: auto;
			min-height: auto;
			gap: 20px;
			padding: 12px;
		}

		/* Row 1 — flyer + headline side-by-side */
		.show-top {
			display: grid;
			grid-template-columns: 38% 1fr;
			gap: 12px;
			align-items: stretch;
		}

		.show-left {
			grid-column: auto;
			grid-row: auto;
			height: auto;
			/* Default: no offset */
			transform: translateY(0);
		}

		.media-container {
			aspect-ratio: 3 / 4;
			height: auto;
			width: 100%;
			max-height: 42dvh;
			border: 1px solid var(--line);
		}

		.show-headline {
			grid-column: auto;
			grid-row: auto;
			padding: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			min-width: 0;
			overflow: hidden;
		}

		.show-meta {
			margin-bottom: 8px;
			gap: 2px;
		}
		.show-venue-text {
			font-size: 14px;
		}

		/* ── REQUESTED: artist name fits on ONE line on mobile ── */
		.show-artist {
			font-size: clamp(18px, 5.6vw, 26px);
			margin: 0 0 6px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			word-break: normal;
			max-width: 100%;
		}

		.show-row[data-date='21'] .show-artist,
		.show-row[data-date='24'] .show-artist {
			white-space: normal;
			overflow: visible;
			text-overflow: clip;
			line-height: 1.05;
		}

		.show-supporting {
			font-size: 11px;
			margin: 0;
		}

		/* Row 2 — bio (clamped so it can't push buttons off-screen) */
		.show-bio {
			grid-column: auto;
			grid-row: auto;
			padding: 0;
			font-size: 13px;
			line-height: 1.45;
			max-height: 22dvh;
			overflow-y: auto;
			-webkit-line-clamp: unset;
			line-clamp: unset;
			display: block;
			text-align: justify;
			-ms-overflow-style: none;
			scrollbar-width: none;
		}
		.show-bio::-webkit-scrollbar {
			display: none;
		}

		/* ── REQUESTED: Buy Tickets + Book A Table SIDE BY SIDE on mobile ── */
		/* ── REQUESTED: Buy Tickets + Book A Table SIDE BY SIDE on mobile ── */

		/* 1. Single Events (Pushed to bottom) */
		.show-actions {
			grid-column: auto;
			grid-row: auto;
			padding: 0;
			display: flex;
			flex-direction: row;
			width: 100%;
			gap: 8px;
			margin-top: auto;
		}

		/* 2. Dual Events (5px top margin) */
		.shows-list.is-dual .show-actions {
			grid-column: auto;
			grid-row: auto;
			padding: 0;
			display: flex;
			flex-direction: row;
			width: 100%;
			gap: 8px;
			margin-top: 10px; /* Custom 5px margin for dual events */
		}

		/* 3. Button Sizing for BOTH */
		.show-actions .btn,
		.shows-list.is-dual .show-actions .btn {
			flex: 1 1 0;
			min-width: 0;
			width: auto;
			padding: 16px 10px;
			font-size: 12px;
			letter-spacing: 0.08em;
			text-align: center;
			white-space: nowrap;
		}

		/* Mobile tweak for the secondary logo */
		.bazart-logo {
			max-width: 120px;
			margin-top: 30px;
			margin-bottom: -15px;
			margin-left: 2px;
		}

		/* Dual-event days: keep side-by-side but require manual horizontal scroll */
		.shows-list.is-dual {
			display: flex;
			flex-direction: row;
			grid-template-columns: none;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			gap: 16px;
			padding-bottom: 12px;
			-webkit-overflow-scrolling: touch;
			-ms-overflow-style: none;
			scrollbar-width: none;
		}
		.shows-list.is-dual::-webkit-scrollbar {
			display: none;
		}
		.shows-list.is-dual .show-row {
			display: flex;
			flex-direction: column;
			flex: 0 0 88%;
			scroll-snap-align: center;
			height: auto;
			min-height: 400px; /* Give it a minimum height so buttons can push to bottom */
			justify-content: flex-start;
		}

		/* Ensure the actions div always sticks to the bottom of that min-height */
		.show-actions {
			margin-top: auto !important; /* Force it to take up remaining space */
			padding-top: 5px;
		}
		.shows-list.is-dual .show-top {
			display: grid;
			grid-template-columns: 38% 1fr;
			gap: 12px;
		}
		.shows-list.is-dual .show-left {
			height: auto;
		}
		.shows-list.is-dual .show-headline,
		.shows-list.is-dual .show-bio,
		.shows-list.is-dual .show-actions {
			padding: 0;
		}
		.shows-list.is-dual .show-bio {
			-webkit-line-clamp: unset;
			line-clamp: unset;
			display: block;
			max-height: 22dvh;
			overflow-y: auto;
		}
		.shows-list.is-dual .show-artist {
			font-size: clamp(16px, 5vw, 22px);
		}
		.shows-list.is-dual .show-venue-text {
			font-size: 14px;
		}
	}
</style>
