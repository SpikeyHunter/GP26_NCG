<script lang="ts">
	import { siteConfig } from '$lib/eventData';
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-grid">
			<div>
				<div class="footer-logo">GP26</div>
				<p class="footer-tag">RACE WEEK · MAY 21–24, 2026</p>
			</div>
			<div>
				<p class="footer-label">VENUE</p>
				<p>NEW CITY GAS</p>
				<p>{siteConfig.venueAddress}</p>
			</div>
			<div>
				<p class="footer-label">FOLLOW</p>
				<a href={siteConfig.socials.instagram}>INSTAGRAM</a>
				<a href={siteConfig.socials.facebook}>FACEBOOK</a>
			</div>
			<div>
				<p class="footer-label">PRODUCED BY</p>
				<p>PRODKT XX · 20 ANS DE CULTURE</p>
			</div>
		</div>
		<div class="footer-bottom">
			<span>© 2026 NEW CITY GAS</span>
			<span>ALL GAS · NO BRAKES</span>
		</div>
	</div>
</footer>

<style>
	.footer { padding: 80px 0 32px; background: #050403; border-top: 1px solid var(--line); }
	.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 48px; border-bottom: 1px solid var(--line); }
	@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
	
	.footer-logo { font-family: var(--font-gp26); font-size: 64px; line-height: 1; margin-bottom: 12px; }
	.footer-tag { font-family: var(--font-raceweek); font-size: 16px; letter-spacing: 0.1em; color: var(--ink-dim); margin: 0; }
	
	.footer-label { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; color: var(--ink-faint); margin: 0 0 16px; }
	.footer div p, .footer div a { font-size: 13px; color: var(--ink-dim); text-decoration: none; display: block; margin: 0 0 6px; font-family: var(--font-body); }
	.footer div a:hover { color: var(--ink); }
	
	.footer-bottom { display: flex; justify-content: space-between; padding-top: 32px; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; color: var(--ink-faint); }
</style>