<script lang="ts">
	import { eventDays } from '$lib/eventData';
</script>

<section id="schedule" class="schedule">
	<div class="container">
		<div class="section-header">
			<span class="section-eyebrow">→ FULL WEEKEND</span>
			<h2 class="section-title">THE SCHEDULE</h2>
		</div>

		<div class="schedule-grid">
			{#each eventDays as day}
				<div class="schedule-day">
					<div class="schedule-day-header">
						<span class="schedule-date">{day.date}</span>
						<div class="schedule-day-meta">
							<span class="schedule-name">{day.dayName}</span>
							<span class="schedule-month">{day.month}</span>
						</div>
					</div>
					{#each day.shows as show}
						<div class="schedule-show" style="--show-accent: {show.accentColor}">
							<div class="schedule-show-head">
								<span class="schedule-venue">{show.venue}</span>
								<h4 class="schedule-artist">{show.artist}</h4>
							</div>
							<ul class="schedule-times">
								{#each show.setTimes as t}
									<li>
										<span class="time">{t.time}</span>
										<span class="act">{t.act}</span>
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.schedule { padding: 120px 0; background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
	.schedule-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
	@media (max-width: 1024px) { .schedule-grid { grid-template-columns: repeat(2, 1fr); } }
	@media (max-width: 600px) { .schedule-grid { grid-template-columns: 1fr; } }
	.schedule-day { border: 1px solid var(--line); padding: 24px; display: flex; flex-direction: column; gap: 24px; }
	.schedule-day-header { display: flex; align-items: baseline; gap: 12px; padding-bottom: 16px; border-bottom: 1px solid var(--line); }
	.schedule-date { font-family: var(--font-display); font-weight: 700; font-size: 48px; line-height: 0.9; }
	.schedule-day-meta { display: flex; flex-direction: column; gap: 2px; }
	.schedule-name, .schedule-month { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; }
	.schedule-month { color: var(--ink-faint); }
	.schedule-show { border-left: 2px solid var(--show-accent); padding-left: 16px; }
	.schedule-venue { font-size: 9px; font-weight: 700; letter-spacing: 0.2em; color: var(--ink-faint); display: block; margin-bottom: 4px; }
	.schedule-artist { font-family: var(--font-display); font-size: 20px; font-weight: 700; margin: 0 0 12px; }
	.schedule-times { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
	.schedule-times li { display: grid; grid-template-columns: 50px 1fr; gap: 12px; font-size: 11px; padding: 6px 0; border-bottom: 1px dashed var(--line); }
	.schedule-times .time { font-weight: 700; color: var(--show-accent); }
	.schedule-times .act { color: var(--ink-dim); }
</style>