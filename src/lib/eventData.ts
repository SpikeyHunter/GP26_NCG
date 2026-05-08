// ═══════════════════════════════════════════════════════════════════
//  GP26 EVENT DATA
//  Image URLs live in /src/lib/images.ts — only edit text here.
// ═══════════════════════════════════════════════════════════════════

import { lineup, setup } from './images';

export interface Show {
	artist: string;
	supporting?: string[];
	venue: 'NEW CITY GAS' | 'BAZART';
	posterUrl: string;
	posterVideoUrl?: string;
	setupImageUrl?: string;
	aboutArtist: string;
	setTimes: { time: string; act: string }[]; // <--- Added this back!
	ticketUrl: string;
	reservationUrl: string;
	accentColor: string;
	sponsor?: string;
}

export interface EventDay {
	date: string;
	dayName: string;
	dayNameEn: string;
	month: string;
	tagline: string;
	shows: Show[];
}

export const eventDays: EventDay[] = [
	{
		date: '21',
		dayName: 'JEUDI',
		dayNameEn: 'THURSDAY',
		month: 'MAI',
		tagline: 'ALL GAS NO BRAKES',
		shows: [
			{
				artist: 'NICO DE ANDREA',
				supporting: ['B2B MAXI MERAKI', 'B2B LUCH', 'PASKAL DAZE'],
				venue: 'NEW CITY GAS',
				posterUrl: lineup.flyer_may21_nico,
				posterVideoUrl: lineup.flyer_may21_nico_video,
				setupImageUrl: setup.main_room,
				aboutArtist:
					'French producer and DJ Nico De Andrea is known for blending emotive pop, afro house, and techno into melodic, energetic sets. With over 100 million Spotify streams and performances in more than 40 countries, he has earned support from artists like Black Coffee, Solomun, and Diplo while playing iconic venues including Pacha Ibiza and Ministry of Sound.',
				setTimes: [
					{ time: '22:00', act: 'PASKAL DAZE' },
					{ time: '23:30', act: 'NICO DE ANDREA B2B MAXI MERAKI B2B LUCH' },
					{ time: '03:00', act: 'CLOSE' }
				],
				ticketUrl: '#tickets',
				reservationUrl: '#tickets',
				accentColor: '#FFFFFF'
			}
		]
	},
	{
		date: '22',
		dayName: 'VENDREDI',
		dayNameEn: 'FRIDAY',
		month: 'MAI',
		tagline: 'ALL GAS NO BRAKES',
		shows: [
			{
				artist: 'KAYTRANADA',
				supporting: ['DJ SET', 'LOU PHELPS', 'DEL ARTE'],
				venue: 'NEW CITY GAS',
				posterUrl: lineup.flyer_may22_kaytranada,
				setupImageUrl: setup.main_room,
				aboutArtist:
					'Grammy-winning Montreal hometown hero. Kaytranada returns to New City Gas for an exclusive DJ set during F1 weekend, joined by Lou Phelps and Del Arte. A genre-defying night of soulful house, hip-hop, and beats that built a global movement.',
				setTimes: [
					{ time: '22:00', act: 'DEL ARTE' },
					{ time: '23:30', act: 'LOU PHELPS' },
					{ time: '01:00', act: 'KAYTRANADA (DJ SET)' },
					{ time: '03:00', act: 'CLOSE' }
				],
				ticketUrl: '#tickets',
				reservationUrl: '#tickets',
				accentColor: '#D4AF37',
				sponsor: 'PATRÓN TEQUILA'
			},
			{
				artist: 'PAUZA',
				supporting: ['LAURA SCAVO', 'EVIATAR'],
				venue: 'BAZART',
				posterUrl: lineup.flyer_may22_pauza,
				setupImageUrl: setup.bazart_setup,
				aboutArtist:
					"Italian duo PAUZA bring their signature hypnotic, organic house sound to Bazart. With releases on Solomun's Diynamic and Crosstown Rebels, sisters Giulia and Alice deliver an intimate, sun-drenched journey perfect for the elevated Bazart experience.",
				setTimes: [
					{ time: '22:00', act: 'EVIATAR' },
					{ time: '23:30', act: 'LAURA SCAVO' },
					{ time: '01:00', act: 'PAUZA' },
					{ time: '03:00', act: 'CLOSE' }
				],
				ticketUrl: '#tickets',
				reservationUrl: '#tickets',
				accentColor: '#E8D9B7',
				sponsor: 'ARMAND DE BRIGNAC'
			}
		]
	},
	{
		date: '23',
		dayName: 'SAMEDI',
		dayNameEn: 'SATURDAY',
		month: 'MAI',
		tagline: 'ALL GAS NO BRAKES',
		shows: [
			{
				artist: 'JAMES HYPE',
				supporting: ['DANSYN', 'STEF AGOSTINO'],
				venue: 'NEW CITY GAS',
				posterUrl: lineup.flyer_may23_jameshype,
				setupImageUrl: setup.main_room,
				aboutArtist:
					'The man behind "Ferrari" and one of the most explosive live acts in dance music. James Hype brings his high-energy tech-house mastery to Saturday night — expect rapid-fire mixing, viral edits, and a peak-time experience built for the GP weekend.',
				setTimes: [
					{ time: '22:00', act: 'STEF AGOSTINO' },
					{ time: '23:30', act: 'DANSYN' },
					{ time: '01:00', act: 'JAMES HYPE' },
					{ time: '03:00', act: 'CLOSE' }
				],
				ticketUrl: '#tickets',
				reservationUrl: '#tickets',
				accentColor: '#E63946',
				sponsor: 'ORACLE RED BULL RACING'
			},
			{
				artist: 'MAESIC',
				supporting: ['SIMON FITCH', 'MALENA'],
				venue: 'BAZART',
				posterUrl: lineup.flyer_may23_maesic,
				setupImageUrl: setup.bazart_setup,
				aboutArtist:
					'Croatian producer Maesic crafts emotive, melodic house with cinematic depth. With co-signs from Solomun and a steady stream of Diynamic releases, his Bazart set is built for the long, atmospheric peak of Saturday night.',
				setTimes: [
					{ time: '22:00', act: 'MALENA' },
					{ time: '23:30', act: 'SIMON FITCH' },
					{ time: '01:00', act: 'MAESIC' },
					{ time: '03:00', act: 'CLOSE' }
				],
				ticketUrl: '#tickets',
				reservationUrl: '#tickets',
				accentColor: '#E8D9B7',
				sponsor: 'ARMAND DE BRIGNAC'
			}
		]
	},
	{
		date: '24',
		dayName: 'DIMANCHE',
		dayNameEn: 'SUNDAY',
		month: 'MAI',
		tagline: 'ALL GAS NO BRAKES',
		shows: [
			{
				artist: 'TIMMY TRUMPET',
				supporting: ['TWINSICK', 'INVITÉS SPÉCIAUX', 'MVNGO'],
				venue: 'NEW CITY GAS',
				posterUrl: lineup.flyer_may24_timmy,
				setupImageUrl: setup.main_room,
				aboutArtist:
					'The trumpet-wielding global headliner closing out GP26. Timmy Trumpet brings festival-level energy with anthems played by every major DJ on the planet — supported by TWINSICK and MVNGO. The race-day finale.',
				setTimes: [
					{ time: '22:00', act: 'MVNGO' },
					{ time: '23:30', act: 'TWINSICK' },
					{ time: '01:00', act: 'TIMMY TRUMPET' },
					{ time: '03:00', act: 'CLOSE' }
				],
				ticketUrl: '#tickets',
				reservationUrl: '#tickets',
				accentColor: '#2ECC71',
				sponsor: 'HEINEKEN'
			}
		]
	}
];

export const siteConfig = {
	venueAddress: '950 Rue Ottawa, Montréal, QC',
	venueMapUrl: 'https://maps.google.com/?q=New+City+Gas+Montreal',
	bazartTagline: 'A more intimate, elevated experience adjacent to the main floor.',
	socials: {
		instagram: 'https://instagram.com/newcitygas',
		facebook: 'https://facebook.com/newcitygas'
	}
};