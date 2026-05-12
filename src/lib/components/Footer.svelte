<script lang="ts">
	import { siteConfig } from '$lib/eventData';
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-grid">
			<div>
				<a href="#top" class="nav-logo">GP<span class="nav-logo-2">26</span></a>
				<p class="footer-tag">
					<span class="tag-part">RACE WEEK</span>
					<span class="tag-sep" aria-hidden="true">·</span>
					<span class="tag-part">MAY 21–24, 2026</span>
				</p>
			</div>
			<div>
				<p class="footer-label">VENUE</p>
				<p>NEW CITY GAS</p>
				<p>{siteConfig.venueAddress}</p>
				<br>
				<p>BAZART</p>
				<p>969 Wellington St., Montreal, QC</p>
			</div>
			<div>
				<p class="footer-label">FOLLOW</p>
				<a href={siteConfig.socials.instagram}>INSTAGRAM</a>
				<a href={siteConfig.socials.facebook}>FACEBOOK</a>
			</div>
			<div>
			
				<img 
					src="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/NCG-Produkt.svg" 
					alt="Produkt Logo" 
					class="produkt-logo"
				/>
			</div>
		</div>
		<div class="footer-bottom">
			<span>© 2026 NEW CITY GAS</span>
			<span>ALL GAS · NO BRAKES</span>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 30px 0 32px;
		background: #050403;
		border-top: 1px solid var(--line);
	}
	.footer-grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		gap: 48px;
		padding-bottom: 48px;
		border-bottom: 1px solid var(--line);
	}
	@media (max-width: 768px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
			gap: 32px;
		}
	}

	/* GP26 logo — matches header exactly, with !important to defeat the
	   generic `.footer div a` rule below */
	.nav-logo {
		font-family: var(--font-gp26) !important;
		font-size: 48px !important;
		color: var(--ink-dim) !important;
		text-decoration: none !important;
		flex-shrink: 0;
		display: inline-block !important;
		line-height: 1 !important;
		margin: 0 0 12px !important;
	}
	.nav-logo-2 {
		color: var(--gold2);
		font-family: inherit;
	}

	.footer-tag {
		font-family: var(--font-raceweek);
		font-size: 16px;
		letter-spacing: 0.1em;
		color: var(--ink-dim);
		margin: 0;
	}
	.tag-part {
		display: inline;
		white-space: nowrap;
	}
	.tag-sep {
		display: inline;
		margin: 0 0.4em;
	}
	@media (max-width: 768px) {
		.tag-sep {
			display: none;
		}
		.tag-part {
			display: block;
		}
	}

	.footer-label {
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.25em;
		color: var(--ink-faint);
		margin: 0 0 16px;
	}
	.footer div p,
	.footer div a {
		font-size: 13px;
		color: var(--ink-dim);
		text-decoration: none;
		display: block;
		margin: 0 0 6px;
		font-family: var(--font-body);
	}
	.footer div a:hover {
		color: var(--ink);
	}
	
	/* --- New Logo Styles --- */
	.produkt-logo {
		display: block;
		width: 100%;
		max-width: 200px; /* Base size for desktop */
		height: auto;
		opacity: 0.8;
		margin-top: 4px; /* Slight offset to align with text visually */
	}

	@media (max-width: 768px) {
		.produkt-logo {
			max-width: 160px; /* Scales down slightly on mobile */
			opacity: 0.8;
		}
	}

	.footer-bottom {
		display: flex;
		justify-content: space-between;
		padding-top: 20px;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.2em;
		color: var(--ink-faint);
	}
</style>