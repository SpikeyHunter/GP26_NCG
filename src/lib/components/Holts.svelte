<script lang="ts">
    import { holtsData } from '$lib/eventData';
    import { onMount } from 'svelte';

    let sectionRef: HTMLElement;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.15 });

        if (sectionRef) {
            observer.observe(sectionRef);
        }

        return () => {
            if (sectionRef) {
                observer.unobserve(sectionRef);
            }
        };
    });
</script>

<section id="holts" class="holts-section-compact scroll-fade-up" bind:this={sectionRef}>
    <div class="container">
        
        <div class="section-header holts-header">
            <span class="section-eyebrow holts-eyebrow">
                <span style="font-family: Arial, sans-serif;">&rarr;</span> PRODUKT, NEW CITY GAS, HOLT RENFREW OGILVY & INITIO PARFUMS PRIVES PRESENTS
            </span>
            <h2 class="section-title holts-title">THE BIG RACE 2026</h2>
        </div>

        <div class="video-grid">
            <video class="holt-video" autoplay loop muted playsinline preload="auto">
                <source src="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/Holt/Day_1.webm" type="video/webm" />
            </video>
            
            <video class="holt-video" autoplay loop muted playsinline preload="auto">
                <source src="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/Holt/Day_2.webm" type="video/webm" />
            </video>
            
            <video class="holt-video" autoplay loop muted playsinline preload="auto">
                <source src="https://vngekjtqbdnfeombtjnx.supabase.co/storage/v1/object/public/gp26-assets/Holt/Day_3.webm" type="video/webm" />
            </video>
        </div>

        <div class="compact-footer">
            <div class="holts-address-compact">
                <strong>{holtsData.address[0]}</strong>
                <span>{holtsData.address[1]} ({holtsData.address[2]})</span>
            </div>
            
            <div class="holts-action-compact">
                <a href={holtsData.rsvpUrl} target="_blank" rel="noopener" class="btn-sm btn-champagne">RSVP</a>
            </div>
        </div>
    </div>
</section>

<style>
    /* Fade In Up Animation */
    .scroll-fade-up {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    /* Use :global() so Svelte doesn't strip the dynamically added clss */
    .scroll-fade-up:global(.is-visible) {
        opacity: 1;
        transform: translateY(0);
    }

    .holts-section-compact {
        padding: 48px 0;
        background: linear-gradient(180deg, var(--bg) 0%, #1a1410 100%);
        border-top: 1px solid var(--line);
        font-family: var(--font-body);
        color: var(--champagne);
    }

    /* Header Styles */
    .holts-header {
        margin-bottom: 32px;
    }
    .holts-eyebrow {
        font-size: 16px;
        color: var(--champagne);
        margin-bottom: 4px;
        display: inline-block;
        opacity: 0.9;
    }
    .holts-title {
        font-size: clamp(28px, 4vw, 56px);
        margin: 0;
        color: var(--champagne);
        line-height: 1.1;
        text-transform: uppercase;
    }

    /* Grid */
    .video-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 40px;
    }
    
    .holt-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 1px solid rgba(232, 217, 183, 0.15);
        background: rgba(0, 0, 0, 0.3);
        transition: transform 0.3s, border-color 0.3s;
    }

    .holt-video:hover {
        transform: translateY(-5px);
        border-color: rgba(232, 217, 183, 0.4);
    }

    /* Footer (Address & RSVP) */
    .compact-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 32px;
        border-top: 1px solid rgba(232, 217, 183, 0.15);
    }
    .holts-address-compact {
        display: flex;
        flex-direction: column;
        font-size: 15px;
    }
    .holts-address-compact strong {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 4px;
    }
    .holts-address-compact span {
        opacity: 0.8;
    }
    
    .holts-action-compact {
        flex-shrink: 0;
        margin-left: 16px;
    }
    .btn-sm.btn-champagne {
        background: var(--champagne);
        color: var(--bg);
        border: 1px solid transparent; 
        transition: all 0.2s ease; 
        padding: 14px 32px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        display: inline-block;
        text-align: center;
        font-size: 14px;
    }

    .btn-sm:hover {
        background: transparent;
        border-color: var(--champagne);
        color: var(--champagne);
    }

    /* --- RESPONSIVE / MOBILE --- */
    @media (max-width: 900px) {
        .video-grid {
            grid-template-columns: 1fr;
            gap: 16px;
        }
        .holts-header {
            margin-bottom: 24px;
        }
        .holts-eyebrow {
            font-size: 11px;
        }
        
        .holt-video:hover {
            transform: none;
        }

        /* Footer Adjustments */
        .compact-footer {
            flex-direction: row;
            align-items: center;
            gap: 16px;
            padding-top: 24px;
        }
        .holts-address-compact {
            font-size: 13px;
        }
        .holts-address-compact strong {
            font-size: 16px;
        }
        .btn-sm.btn-champagne {
            padding: 12px 24px;
            font-size: 13px;
        }
    }
</style>