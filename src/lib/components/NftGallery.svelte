<script lang="ts">
	import { nft } from '$lib/images';
</script>

<section id="nft" class="nft-gallery">
	<div class="container">
		<div class="section-header">
			<span class="section-eyebrow schedule-eyebrow">
				<span style="font-family: Arial, sans-serif;">&rarr;</span> DIGITAL ART
			</span>
			<h2 class="section-title schedule-title">
				NFT GALLERY<span class="subtitle">by 0x Society</span>
			</h2>
			<p class="nft-description">
				Discover a curated selection of digital masterpieces pushing the boundaries of the blockchain. 
				0x Society brings together world-class artists to redefine the intersection of technology and aesthetic. 
				Experience the future of ownership and creativity in our immersive physical gallery during the GP26 weekend.
			</p>
		</div>
		
		<div class="nft-grid">
			<div class="nft-item">
				<img src={nft.piece_1} alt="NFT Piece 1" />
				<span class="caption">Genesis Collection</span>
			</div>
			<div class="nft-item">
				<img src={nft.piece_3} alt="NFT Piece 2" />
				<span class="caption">Abstract Motion</span>
			</div>
			<div class="nft-item">
				<img src={nft.piece_2} alt="NFT Piece 3" />
				<span class="caption">Digital Solitude</span>
			</div>
			<div class="nft-item">
				<img src={nft.piece_4} alt="NFT Piece 4" />
				<span class="caption">Neural Networks</span>
			</div>
		</div>
	</div>
</section>

<style>
	.nft-gallery { 
		padding: 40px 0;
		background: var(--bg-2); 
		border-top: 1px solid var(--line); 
	}

	.nft-description {
		width: 100%;
		font-size: 14px;
		line-height: 1.6;
		color: var(--ink-dim);
		margin-top: 16px;
		text-align: justify;
		text-align-last: left;
	}
	
	.nft-grid { 
		display: grid; 
		grid-template-columns: repeat(4, 1fr); 
		gap: 24px; 
	}

	.nft-item {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	
	.nft-grid img { 
		width: 100%;
		aspect-ratio: 1/1; 
		object-fit: cover; 
		transition: transform 0.3s; 
	}

	.caption {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--ink);
		opacity: 0.8;
	}
	
	.nft-grid img:hover { 
		transform: scale(1.02);
	}
	
	@media (max-width: 1024px) { 
		.nft-grid { 
			grid-template-columns: repeat(2, 1fr);
		} 
		
		.nft-item:nth-child(1) { order: 1; }
		.nft-item:nth-child(2) { order: 2; }
		.nft-item:nth-child(3) { order: 4; }
		.nft-item:nth-child(4) { order: 3; }
	}

	@media (max-width: 768px) {
		.nft-gallery { 
			padding: 48px 0;
		}
		.section-header { 
			margin-bottom: 32px; 
		}
	}
	
	.section-header { 
		margin-bottom: 20px; 
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
	
	.subtitle {
		font-size: clamp(10px, 4vw, 20px);
		margin-left: 8px;
	}
</style>