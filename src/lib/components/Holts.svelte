<script lang="ts">
    import { holtsData } from '$lib/eventData';
</script>

<section id="holts" class="holts-section-compact">
    <div class="container">
        
        <div class="section-header holts-header">
            <span class="section-eyebrow holts-eyebrow"
                ><span style="font-family: Arial, sans-serif;">&rarr;</span> {holtsData.presenters.toUpperCase()}</span
            >
            <h2 class="section-title holts-title">{holtsData.title}</h2>
        </div>

        <div class="compact-schedule">
            {#each holtsData.schedule as day}
                <div class="compact-day-card">
                    <div class="day-image-container">
                        <img src={day.imgSrc} alt={day.title} class="day-image" />
                        <div class="image-overlay">
                            <span class="overlay-day">{day.dayName}</span>
                            <h3 class="overlay-date">{day.dateNum}</h3>
                            <span class="overlay-time">{day.time}</span>
                        </div>
                    </div>

                    <div class="day-info-compact">
                        <h4 class="compact-theme">{day.title}</h4>
                        <p class="compact-desc">{day.detail}</p>
                        
                        <div class="condensed-sets">
                            {#each day.sets as set}
                                <div class="set-line">
                                    <span class="act-name">{set.act}</span>
                                    <span class="act-time">{set.time}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
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
    .compact-schedule {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 40px;
    }
    .compact-day-card {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(232, 217, 183, 0.15);
        display: flex;
        flex-direction: column;
        transition: transform 0.3s, border-color 0.3s;
    }
    .compact-day-card:hover {
        transform: translateY(-5px);
        border-color: rgba(232, 217, 183, 0.4);
    }

    /* Image Block */
    .day-image-container {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
    }
    .day-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .image-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 16px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .overlay-day {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--champagne);
        margin: 0 0 2px;
        opacity: 0.9;
    }
    .overlay-date {
        font-size: 22px;
        font-weight: 700;
        color: var(--champagne);
        margin: 0 0 6px;
        line-height: 1;
    }
    .overlay-time {
        font-size: 13px;
        color: var(--champagne);
        opacity: 0.8;
        font-weight: 400;
    }

    /* Card Details */
    .day-info-compact {
        padding: 24px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .compact-theme {
        font-size: 20px;
        font-weight: 700;
        margin: 0 0 12px;
        line-height: 1.2;
    }
    .compact-desc {
        font-size: 14px;
        line-height: 1.5;
        opacity: 0.8;
        margin: 0 0 24px;
    }

    /* Aligned Sets Container */
    .condensed-sets {
        margin-top: auto; /* Aligns the border to the bottom of all cards */
        border-top: 1px solid rgba(232, 217, 183, 0.15);
        padding-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .set-line {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        gap: 10px;
    }
    .act-name {
        font-weight: 700;
    }
    .act-time {
        opacity: 0.7;
        font-weight: 400;
        text-align: right;
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
        transition: all 0.2s ease; /* Changed to 'all' to animate border-color too */
        padding: 14px 32px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        display: inline-block;
        text-align: center;
        font-size: 14px;
    }

    .btn-sm:hover {
        /* This will now swap the background and show the border */
        background: transparent;
        border-color: var(--champagne);
        color: var(--champagne);
    }

    /* --- RESPONSIVE / MOBILE --- */
    @media (max-width: 900px) {
        .compact-schedule {
            grid-template-columns: 1fr;
            gap: 16px;
        }
        .holts-header {
            margin-bottom: 24px;
        }
        .holts-eyebrow {
            font-size: 11px;
        }
        
        /* Compact Mobile Cards */
        .compact-day-card {
            flex-direction: row; /* Restored side-by-side layout */
            gap: 0;
        }
        .day-image-container {
            width: 35%; /* Fixed smaller width for image on mobile */
            aspect-ratio: 1 / 1; /* Square crop */
            height: auto;
        }
        .image-overlay {
            padding: 10px;
            background: rgba(0,0,0,0.7);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start; /* <-- Change this from 'center' to 'flex-end' */
            top: 0;
        }
        .overlay-day {
            font-size: 10px;
        }
        .overlay-date {
            font-size: 16px;
            margin-bottom: 4px;
        }
        .overlay-time {
            font-size: 11px;
        }
        .day-info-compact {
            width: 65%;
            padding: 16px;
        }
        .compact-theme {
            font-size: 16px;
            margin-bottom: 8px;
        }
        .compact-desc {
            font-size: 12px;
            margin-bottom: 12px;
        }
        .condensed-sets {
            padding-top: 12px;
        }
        .set-line {
            font-size: 11px;
        }

        /* Footer Adjustments */
        .compact-footer {
            flex-direction: row; /* Keep 2-columns on mobile */
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
        .compact-day-card:hover {
            transform: none; 
        }
    }
</style>