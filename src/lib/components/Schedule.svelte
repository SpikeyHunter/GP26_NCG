<script lang="ts">
	import { onMount } from 'svelte';
	import { eventDays } from '$lib/eventData';

	// Flag lookup — match against act strings (case-insensitive, partial match supported)
	const artistFlags: Record<string, string> = {
		'paskal daze': '🇨🇦',
		'nico de andrea': '🇫🇷',
		'maxi meraki': '🇧🇪',
		luch: '🇲🇽',
		'del arte': '🇨🇦',
		'lou phelps': '🇨🇦',
		kaytranada: '🇨🇦',
		eviatar: '🇨🇦',
		'laura scavo': '🇨🇦',
		pauza: '🇨🇺',
		'stef agostino': '🇨🇦',
		dansyn: '🇨🇦',
		'james hype': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
		malena: '🇨🇦',
		'simon fitch': '🇨🇦',
		maesic: '🇫🇷',
		mvngo: '🇨🇦',
		twinsick: '🇺🇸',
		'timmy trumpet': '🇦🇺'
	};

	function flagsFor(act: string): string {
		const upper = act.toUpperCase();
		if (upper.includes('CURFEW') || upper.includes('CLOSE') || upper.includes('TBD')) return '';

		const found: string[] = [];
		for (const [name, flag] of Object.entries(artistFlags)) {
			const re = new RegExp(`\\b${name.replace(/\s+/g, '\\s+')}\\b`, 'i');
			if (re.test(act) && !found.includes(flag)) {
				found.push(flag);
			}
		}
		return found.join(' ');
	}

	// Mobile carousel — sync horizontal scroll with vertical page scroll
	let carouselEl = $state<HTMLElement | null>(null);
	let scheduleEl = $state<HTMLElement | null>(null);
	let isInView = $state(false);
	let isUserDragging = false;
	let dragReleaseTimer: ReturnType<typeof setTimeout>;

	onMount(() => {
		const mq = window.matchMedia('(max-width: 768px)');

		// Section enter/exit animation observer
		const sectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					isInView = entry.isIntersecting;
				});
			},
			{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
		);
		if (scheduleEl) sectionObserver.observe(scheduleEl);

		function onPageScroll() {
			if (!carouselEl || !scheduleEl || !mq.matches || isUserDragging) return;

			const rect = scheduleEl.getBoundingClientRect();
			const vh = window.innerHeight;
			const total = rect.height + vh;
			const traveled = vh - rect.top;
			const progress = Math.max(0, Math.min(1, traveled / total));

			const maxScroll = carouselEl.scrollWidth - carouselEl.clientWidth;
			carouselEl.scrollLeft = progress * maxScroll;
		}

		function onCarouselTouch() {
			isUserDragging = true;
			clearTimeout(dragReleaseTimer);
			dragReleaseTimer = setTimeout(() => (isUserDragging = false), 1500);
		}

		window.addEventListener('scroll', onPageScroll, { passive: true });
		carouselEl?.addEventListener('touchstart', onCarouselTouch, { passive: true });
		carouselEl?.addEventListener('touchmove', onCarouselTouch, { passive: true });
		carouselEl?.addEventListener('wheel', onCarouselTouch, { passive: true });

		onPageScroll();

		return () => {
			window.removeEventListener('scroll', onPageScroll);
			carouselEl?.removeEventListener('touchstart', onCarouselTouch);
			carouselEl?.removeEventListener('touchmove', onCarouselTouch);
			carouselEl?.removeEventListener('wheel', onCarouselTouch);
			sectionObserver.disconnect();
			clearTimeout(dragReleaseTimer);
		};
	});
</script>

<section id="schedule" class="schedule" class:in-view={isInView} bind:this={scheduleEl}>
	<div class="container">
		<div class="section-header schedule-header">
			<span class="section-eyebrow schedule-eyebrow"
				><span style="font-family: Arial, sans-serif;">&rarr;</span> FULL WEEKEND</span
			>
			<h2 class="section-title schedule-title">SCHEDULE</h2>
		</div>

		<div class="schedule-grid" bind:this={carouselEl}>
			{#each eventDays as day, dayIdx}
				<div
					class="schedule-day"
					style="--day-accent: {day.shows[0]?.accentColor || 'var(--ink)'}; --day-stagger: {dayIdx *
						100}ms"
				>
					<div class="schedule-day-header">
						<div class="schedule-day-week">{day.dayNameEn}</div>
						<div class="schedule-day-row">
							<span class="schedule-date">{day.date}</span>
							<span class="schedule-month">{day.month}</span>
						</div>
					</div>

					<div class="schedule-shows-wrapper" class:dual={day.shows.length > 1}>
						{#each day.shows as show, showIdx}
							<div
								class="schedule-show"
								class:second-show={showIdx === 1}
								style="--show-accent: {show.accentColor}"
							>
								<div class="schedule-show-head">
									<span class="schedule-venue">{show.venue}</span>
									<h4 class="schedule-artist">{show.artist}</h4>
								</div>
								<ul class="schedule-times">
									{#each show.setTimes as t, idx}
										<li
											style="--stagger: {idx * 80}ms"
											class:bold-row={idx === 0 || idx === show.setTimes.length - 1}
										>
											<span class="time">{t.time}</span>
											<span class="act">{t.act}</span>
											{#if flagsFor(t.act)}
												<span class="flag">
													{#each flagsFor(t.act).split(' ') as f}
														<span class="flag-item">{f}</span>
													{/each}
												</span>
											{/if}
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.schedule {
		padding: 40px 0 64px;
		background: var(--bg-2);
	}

	.section-header {
		margin-bottom: 24px;

		/* Section enter animation */
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.schedule-eyebrow {
		font-size: 16px;
		color: var(--ink);
		margin-bottom: 4px;
		display: inline-block;
	}
	.schedule-title {
		font-size: clamp(28px, 4vw, 56px);
		margin: 0;
		color: var(--ink-dim);
	}

	/* ─────────────────────────────────────────────────────────
	   GRID — uses a real CSS grid so dual-event rows align across days
	   ───────────────────────────────────────────────────────── */
	.schedule-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 24px;
	}

	.schedule-day {
		border: 0.1px solid var(--day-accent);
		padding: 20px;
		display: grid;
		/* 3 rows: header, first show, second show — second row aligns across all days */
		grid-template-rows: auto 1fr 1fr;
		gap: 16px;

		/* Per-day enter animation, staggered by day index */
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
		transition-delay: var(--day-stagger, 0ms);
	}

	/* When the section comes into view, slide everything up */
	.schedule.in-view .section-header {
		opacity: 1;
		transform: translateY(0);
	}
	.schedule.in-view .schedule-day {
		opacity: 1;
		transform: translateY(0);
	}

	.schedule-day-header {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding-bottom: 12px;
		border-bottom: 1px solid var(--day-accent);
	}
	.schedule-day-week {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--day-accent);
	}
	.schedule-day-row {
		display: flex;
		align-items: baseline;
		gap: 10px;
	}
	.schedule-date {
		font-family: var(--font-gp26);
		font-weight: 700;
		font-size: 48px;
		line-height: 0.9;
		color: var(--day-accent);
	}
	.schedule-month {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--day-accent);
	}

	/* The wrapper now spans the show grid rows */
	.schedule-shows-wrapper {
		display: contents; /* Lets children participate in parent grid rows */
	}

	.schedule-show {
		padding-left: 8px;
	}
	/* Force the second show into row 3 — aligns with second show of other days */
	.schedule-show.second-show {
		grid-row: 3;
	}

	.schedule-show-head {
		margin-bottom: 10px;
	}
	.schedule-venue {
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.2em;
		color: var(--ink-dim);
		display: block;
		margin-bottom: 2px;
	}
	.schedule-artist {
		font-family: var(--font-display);
		font-size: 20px;
		font-weight: 700;
		margin: 0;
		text-transform: uppercase;
	}

	.schedule-times {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.schedule-times li {
		display: grid;
		grid-template-columns: 56px 1fr auto;
		gap: 10px;
		align-items: center;
		font-size: 11px;
		padding: 6px 0;
		border-bottom: 1px dashed var(--line);

		opacity: 0;
		transform: translateX(-12px);
		animation: row-slide-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
		animation-delay: var(--stagger, 0ms);
	}
	.schedule-times li:last-child {
		border-bottom: none;
	}

	/* Time + act now use the show accent color */
	.schedule-times .time {
		font-weight: 700;
		letter-spacing: 0.05em;
		color: var(--show-accent);
	}
	.schedule-times .act {
		color: var(--show-accent);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.85;
	}

	.schedule-times li.bold-row .time,
	.schedule-times li.bold-row .act {
		font-weight: 800;
		opacity: 1;
	}

	.schedule-times .flag {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 2px;
		font-size: 14px;
		justify-self: end;
		line-height: 1;
		white-space: nowrap;
		opacity: 0.8;
	}
	.schedule-times .flag-item {
		display: block;
		line-height: 1;
	}

	@keyframes row-slide-in {
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.schedule-times li,
		.schedule-day,
		.section-header {
			opacity: 1;
			transform: none;
			animation: none;
			transition: none;
		}
	}

	/* 💻 TABLET */
	@media (max-width: 1024px) {
		.schedule-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* 📱 MOBILE — horizontal scroll-snap carousel */
	@media (max-width: 768px) {
		.schedule {
			padding: 32px 0 48px;
		}

		.schedule-grid {
			display: flex;
			flex-direction: row;
			gap: 16px;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			-webkit-overflow-scrolling: touch;
			-ms-overflow-style: none;
			scrollbar-width: none;
			scroll-behavior: smooth;
			padding-bottom: 8px;
			margin: 0 -16px;
			padding-left: 16px;
			padding-right: 16px;
		}
		.schedule-grid::-webkit-scrollbar {
			display: none;
		}

		.schedule-day {
			flex: 0 0 85%;
			scroll-snap-align: center;
			/* Mobile drops the 3-row grid (no alignment needed for swipe carousel) */
			display: flex;
			flex-direction: column;
		}
		.schedule-shows-wrapper {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}
		.schedule-show.second-show {
			grid-row: auto;
		}

		.schedule-date {
			font-size: 40px;
		}
	}
</style>
