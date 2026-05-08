<script lang="ts">
	import { eventDays } from '$lib/eventData';
	let activeDay = $state(0);
</script>

<section id="lineup" class="lineup">
	<div class="container">
		<div class="section-header">
			<span class="section-eyebrow">→ THE LINEUP</span>
			<h2 class="section-title">FOUR NIGHTS.<br />ONE WEEKEND.</h2>
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
				<div class="shows-list">
					{#each day.shows as show}
						<div class="show-row" style="--show-accent: {show.accentColor}">
							<div class="show-left">
								<img src={show.posterUrl} alt={show.artist} class="show-poster" />
								<span class="venue-badge">{show.venue}</span>
							</div>
							<div class="show-right">
								{#if show.sponsor}
									<span class="show-sponsor">PRESENTED W/ {show.sponsor}</span>
								{/if}
								<h3 class="show-artist">{show.artist}</h3>
								{#if show.supporting?.length}
									<p class="show-supporting">{show.supporting.join(' · ')}</p>
								{/if}
								
								<div class="show-bio">
									<p>{show.aboutArtist}</p>
								</div>

								<div class="show-times">
									<h4>SET TIMES</h4>
									<ul>
										{#each show.setTimes as t}
											<li><span class="time">{t.time}</span> <span class="act">{t.act}</span></li>
										{/each}
									</ul>
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
	.lineup { padding: 120px 0; border-top: 1px solid var(--line); }
	.day-tabs { display: grid; grid-template-columns: repeat(4, 1fr); margin-bottom: 64px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
	.day-tab { background: transparent; border: none; border-right: 1px solid var(--line); padding: 32px 16px; color: var(--ink-dim); display: flex; flex-direction: column; align-items: flex-start; gap: 6px; cursor: pointer; transition: all 0.3s; position: relative; font-family: var(--font-body); }
	.day-tab:last-child { border-right: none; }
	.day-tab.active { color: var(--ink); background: rgba(255, 255, 255, 0.03); }
	.day-tab.active::after { content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; background: var(--tab-accent); }
	.tab-day { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; }
	.tab-date { font-family: var(--font-display); font-size: 56px; font-weight: 700; line-height: 1; }
	.tab-month { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; }

	.shows-list { display: flex; flex-direction: column; gap: 48px; animation: fade-in 0.5s ease; }
	@keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

	.show-row { display: grid; grid-template-columns: 450px 1fr; gap: 48px; background: var(--bg-2); border: 1px solid var(--line); border-left: 4px solid var(--show-accent); }
	@media (max-width: 900px) { .show-row { grid-template-columns: 1fr; } }
	
	.show-left { position: relative; }
	.show-poster { width: 100%; height: 100%; object-fit: cover; display: block; aspect-ratio: 4/5; }
	.venue-badge { position: absolute; top: 16px; left: 16px; background: rgba(0,0,0,0.8); color: var(--show-accent); padding: 6px 12px; font-size: 10px; font-weight: 700; letter-spacing: 0.2em; border: 1px solid var(--show-accent); }
	
	.show-right { padding: 48px 48px 48px 0; display: flex; flex-direction: column; justify-content: center; }
	@media (max-width: 900px) { .show-right { padding: 0 24px 32px 24px; } }
	
	.show-sponsor { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; color: var(--ink-faint); margin-bottom: 12px; }
	.show-artist { font-family: var(--font-display); font-weight: 700; font-size: clamp(32px, 5vw, 64px); line-height: 1; margin: 0 0 12px; }
	.show-supporting { font-size: 14px; font-weight: 400; color: var(--ink-dim); margin: 0 0 24px; }
	.show-bio { font-size: 15px; line-height: 1.6; color: var(--ink-dim); margin-bottom: 32px; max-width: 600px; }
	
	.show-times h4 { font-size: 11px; font-weight: 700; letter-spacing: 0.25em; color: var(--ink-faint); margin: 0 0 12px; }
	.show-times ul { list-style: none; padding: 0; margin: 0 0 32px; border-top: 1px solid var(--line); }
	.show-times li { display: grid; grid-template-columns: 80px 1fr; padding: 12px 0; border-bottom: 1px solid var(--line); font-size: 14px; }
	.show-times .time { font-weight: 700; color: var(--show-accent); }
	.show-times .act { color: var(--ink-dim); }
	
	.show-actions { display: flex; gap: 16px; flex-wrap: wrap; }
</style>