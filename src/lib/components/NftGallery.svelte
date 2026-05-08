<script lang="ts">
	import { nft } from '$lib/images';
</script>

<section id="nft" class="nft-gallery">
	<div class="container">
		<div class="section-header">
			<span class="section-eyebrow">→ DIGITAL ART</span>
			<h2 class="section-title">NFT GALLERY</h2>
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
	.nft-gallery { padding: 120px 0; background: var(--bg-2); border-top: 1px solid var(--line); }
	.nft-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
	.nft-grid img { width: 100%; aspect-ratio: 1/1; object-fit: cover; border: 1px solid var(--line); transition: transform 0.3s; }
	.nft-grid img:hover { transform: scale(1.02); }
	@media (max-width: 1024px) { .nft-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 768px) {
		section { padding: 64px 0; }
		.section-header { margin-bottom: 32px; }
		.nft-gallery { padding: 64px 0; }
	}
</style>