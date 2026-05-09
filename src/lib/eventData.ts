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
	setTimes: { time: string; act: string }[];
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
		month: 'MAY',
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
					{ time: '10:00PM', act: 'DOORS' },
                    { time: '10:00PM', act: 'PASKAL DAZE' },
					{ time: '12:00AM', act: 'NICO DE ANDREA B2B MAXI MERAKI B2B LUCH' },
					{ time: '03:00AM', act: 'CURFEW' }
				],
				ticketUrl: 'https://link.produkt.ca/26-gp-nml',
				reservationUrl: 'https://newcitygas.com/event/nico-de-andrea-b2b-maxi-meraki-b2b-luch-186264/#reservations',
				accentColor: '#DEDEDE',
				sponsor: 'PRODUKT present'
			}
		]
	},
	{
		date: '22',
		dayName: 'VENDREDI',
		dayNameEn: 'FRIDAY',
		month: 'MAY',
		tagline: 'ALL GAS NO BRAKES',
		shows: [
			{
				artist: 'KAYTRANADA',
				supporting: ['LOU PHELPS', 'DEL ARTE'],
				venue: 'NEW CITY GAS',
				posterUrl: lineup.flyer_may22_kaytranada,
				posterVideoUrl: lineup.flyer_may22_kaytranada_video, // <-- ADDED
				setupImageUrl: setup.main_room,
				aboutArtist:
					'Kaytranada is a Montreal-born producer and DJ known for his signature blend of house, hip-hop, R&B, and electronic music. A Grammy Award-winning artist, he has collaborated with names like Anderson .Paak, H.E.R., and The Weeknd while performing at major festivals and iconic venues worldwide.',
				setTimes: [
					{ time: '10:00PM', act: 'DOORS' },
                    { time: '10:00PM', act: 'DEL ARTE' },
					{ time: '11:30PM', act: 'LOU PHELPS' },
					{ time: '12:45AM', act: 'KAYTRANADA (DJ SET)' },
					{ time: '02:30AM', act: 'TBD' },
					{ time: '03:00AM', act: 'CURFEW' }
				],
				ticketUrl: 'https://link.produkt.ca/26-gp-kay',
				reservationUrl: 'https://newcitygas.com/event/kaytranada-dj-set-lou-phelps-181527/#reservations',
				accentColor: '#C2A666',
				sponsor: 'PATRON TEQUILA & PRODUKT present'
			},
			{
				artist: 'PAUZA',
				supporting: ['LAURA SCAVO', 'EVIATAR'],
				venue: 'BAZART',
				posterUrl: lineup.flyer_may22_pauza,
				posterVideoUrl: lineup.flyer_may22_pauz_video, // <-- ADDED
				setupImageUrl: setup.bazart_setup,
				aboutArtist:
					"PAUZA (Zahira Sánchez and Paula Fernández) are the first first female electronic duo from Havana, Cuba. The duo has re-interpreted the cultural current of house music by adding latin rhythms and Cuban folklore.",
				setTimes: [
					{ time: '10:00PM', act: 'DOORS' },
                    { time: '10:00PM', act: 'EVIATAR' },
					{ time: '11:30PM', act: 'LAURA SCAVO' },
					{ time: '01:00AM', act: 'PAUZA' },
					{ time: '03:00AM', act: 'CURFEW' }
				],
				ticketUrl: 'https://link.produkt.ca/26-gp-pa',
				reservationUrl: 'https://newcitygas.com/event/pauza-laura-scavo-181824/#reservations',
				accentColor: '#E8D9B7',
				sponsor: 'ARMAND DE BRIGNAC, BAZART & PRODUKT present'
			}
		]
	},
	{
		date: '23',
		dayName: 'SAMEDI',
		dayNameEn: 'SATURDAY',
		month: 'MAY',
		tagline: 'ALL GAS NO BRAKES',
		shows: [
			{
				artist: 'JAMES HYPE',
				supporting: ['DANSYN', 'STEF AGOSTINO'],
				venue: 'NEW CITY GAS',
				posterUrl: lineup.flyer_may23_jameshype,
				posterVideoUrl: lineup.flyer_may23_jameshype_video, // <-- ADDED
				setupImageUrl: setup.main_room,
				aboutArtist:
					'James Hype is a UK DJ and producer known for explosive live mixing and high-energy house tracks like “Ferrari.” With hundreds of millions of streams and performances at major festivals including Tomorrowland, Electric Daisy Carnival, and Lollapalooza, he has become one of electronic music’s biggest global acts.',
				setTimes: [
					{ time: '10:00PM', act: 'DOORS' },
                    { time: '10:00PM', act: 'STEF AGOSTINO' },
					{ time: '11:30PM', act: 'DANSYN' },
					{ time: '01:00AM', act: 'JAMES HYPE' },
					{ time: '03:00AN', act: 'CURFEW' }
				],
				ticketUrl: 'https://link.produkt.ca/26-gp-jh',
				reservationUrl: 'https://newcitygas.com/event/james-hype-dansyn-181526/#reservations',
				accentColor: '#DF2A44',
				sponsor: 'RED BULL RACING & PRODUKT present'
			},
			{
				artist: 'MAESIC',
				supporting: ['SIMON FITCH', 'MALENA'],
				venue: 'BAZART',
				posterUrl: lineup.flyer_may23_maesic,
				posterVideoUrl: lineup.flyer_may23_maesic_video, // <-- ADDED
				setupImageUrl: setup.bazart_setup,
				aboutArtist:
					'Maesic is known for blending tech house, afro house, melodic techno, and EDM into a forward-thinking sound inspired by global club culture. Supported by artists like Diplo, Fisher, and Malaa, Maesic has collaborated with names including Bob Sinclar and Hugel while rapidly emerging as one of dance music’s most exciting new talents.',
				setTimes: [
					{ time: '10:00PM', act: 'DOORS' },
                    { time: '10:00PM', act: 'MALENA' },
					{ time: '11:30PM', act: 'SIMON FITCH' },
					{ time: '01:00AM', act: 'MAESIC' },
					{ time: '03:00AM', act: 'CLOSE' }
				],
				ticketUrl: 'https://link.produkt.ca/26-gp-ma',
				reservationUrl: 'https://newcitygas.com/event/maesic-simon-fitch-186084/#reservations',
				accentColor: '#E8D9B7',
				sponsor: 'ARMAND DE BRIGNAC, BAZART & PRODUKT present'
			}
		]
	},
	{
		date: '24',
		dayName: 'DIMANCHE',
		dayNameEn: 'SUNDAY',
		month: 'MAY',
		tagline: 'ALL GAS NO BRAKES',
		shows: [
			{
				artist: 'TIMMY TRUMPET',
				supporting: ['TWINSICK', 'MVNGO'],
				venue: 'NEW CITY GAS',
				posterUrl: lineup.flyer_may24_timmy,
				posterVideoUrl: lineup.flyer_may24_timmy_video, // <-- ADDED
				setupImageUrl: setup.main_room,
				aboutArtist:
					'Australian DJ, producer, and live instrumentalist Timmy Trumpet is known for his explosive performances that combine high-energy electronic music with live trumpet playing. A multi-platinum selling artist and one of the top names in global dance music, Timmy Trumpet gained worldwide recognition with his hit “Freaks,” which has amassed over half a billion streams and topped charts across multiple countries.',
				setTimes: [
					{ time: '10:00PM', act: 'DOORS' },
                    { time: '10:00PM', act: 'MVNGO' },
					{ time: '11:15PM', act: 'TWINSICK' },
					{ time: '12:45AM', act: 'TIMMY TRUMPET' },
					{ time: '02:00AM', act: 'TBD' },
					{ time: '03:00AM', act: 'CURFEW' }
				],
				ticketUrl: 'https://link.produkt.ca/26-gp-tt',
				reservationUrl: 'https://newcitygas.com/event/timmy-trumpet-twinsick-185229/#reservations',
				accentColor: '#44AA41',
				sponsor: 'HEINEKEN & PRODUKT present'
			}
		]
	}
];

export const siteConfig = {
	venueAddress: '950 Rue Ottawa, Montreal, QC',
	venueMapUrl: 'https://maps.google.com/?q=New+City+Gas+Montreal',
	bazartTagline: 'A more intimate, elevated experience adjacent to the main floor.',
	socials: {
		instagram: 'https://instagram.com/newcitygas',
		facebook: 'https://facebook.com/newcitygas'
	}
};
