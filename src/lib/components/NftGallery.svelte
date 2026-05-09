<script lang="ts">
	import { nft } from '$lib/images';
</script>

<section id="nft" class="nft-gallery">
	<div class="container">
		<div class="section-header">
			<span class="section-eyebrow schedule-eyebrow"
				><span style="font-family: Arial, sans-serif;">&rarr;</span> DIGITAL ART</span
			>
			<h2 class="section-title schedule-title">NFT GALLERY<span class="subtitle">by Ox Society</span></h2>
		</div>
		<div class="nft-grid">
			<img src={nft.piece_1} alt="NFT Piece 1" />
			<img src={nft.piece_2} alt="NFT Piece 2" />
			<img src={nft.piece_3} alt="NFT Piece 3" />
			<img src={nft.piece_4} alt="NFT Piece 4" />
		</div>
	</div>
</section>

<style>
	.nft-gallery { padding: 64px 0; background: var(--bg-2); border-top: 1px solid var(--line); }
	.nft-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
	.nft-grid img { width: 100%; aspect-ratio: 1/1; object-fit: cover; transition: transform 0.3s; }
	.nft-grid img:hover { transform: scale(1.02); }
	@media (max-width: 1024px) { .nft-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 768px) {
		.nft-gallery { padding: 48px 0; }
		.section-header { margin-bottom: 32px; }
	}
    .section-header { margin-bottom: 20px; }
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
    .subtitle {
        font-size: clamp(10px, 4vw, 20px);
    }
</style>