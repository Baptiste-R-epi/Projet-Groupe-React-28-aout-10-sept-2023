module.exports = {
	'--Catégorie--': {
		'--Aucun--': {
			APIwhere: '',
			findSub: (any) => false
		},
	},
	'Musique': {
		'--Tous--': {
			APIwhere: 'keywords_fr%20LIKE%20\'concert\'%20OR%20keywords_fr%20LIKE%20\'rock\'%20OR%20keywords_fr%20LIKE%20\'musique\'%20OR%20keywords_fr%20LIKE%20\'orchestre\'%20OR%20keywords_fr%20LIKE%20\'piano\'%20OR%20keywords_fr%20LIKE%20\'jazz\'%20OR%20keywords_fr%20LIKE%20\'chanson\'%20OR%20keywords_fr%20LIKE%20\'chant\'%20OR%20keywords_fr%20LIKE%20\'classique\'%20OR%20keywords_fr%20LIKE%20\'pop\'%20OR%20keywords_fr%20LIKE%20\'folk\'%20OR%20keywords_fr%20LIKE%20\'festival\'',
			findSub: (any) => false
		},
		'Concert': {
			APIwhere: 'keywords_fr%20LIKE%20\'concert\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('concert')) ? 'Concert' : false
		},
		'Rock': {
			APIwhere: 'keywords_fr%20LIKE%20\'rock\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('rock')) ? 'Rock' : false
		},
		'Musique': {
			APIwhere: 'keywords_fr%20LIKE%20\'musique\'%20OR%20keywords_fr%20LIKE%20\'orchestre\'%20OR%20keywords_fr%20LIKE%20\'piano\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('musique')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('orchestre')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('piano')) ? 'Musique' : false
		},
		'Jazz': {
			APIwhere: 'keywords_fr%20LIKE%20\'jazz\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('jazz')) ? 'Jazz' : false
		},
		'Chant & Chanson': {
			APIwhere: 'keywords_fr%20LIKE%20\'chanson\'%20OR%20keywords_fr%20LIKE%20\'chant\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('chanson')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('chant')) ? 'Chant & Chanson' : false
		},
		'Classique': {
			APIwhere: 'keywords_fr%20LIKE%20\'classique\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('classique')) ? 'Classique' : false
		},
		'Pop': {
			APIwhere: 'keywords_fr%20LIKE%20\'pop\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('pop')) ? 'Pop' : false
		},
		'Folk': {
			APIwhere: 'keywords_fr%20LIKE%20\'folk\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('folk')) ? 'Folk' : false
		},
		'Festival': {
			APIwhere: 'keywords_fr%20LIKE%20\'festival\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('festival')) ? 'Festival' : false
		},
	},
	'Création': {
		'--Tous--': {
			APIwhere: 'keywords_fr%20LIKE%20\'atelier\'%20OR%20keywords_fr%20LIKE%20\'stage\'%20OR%20keywords_fr%20LIKE%20\'formation\'%20OR%20keywords_fr%20LIKE%20\'creation\'%20OR%20keywords_fr%20LIKE%20\'cuisine\'',
			findSub: (any) => false
		},
		'Atelier': {
			APIwhere: 'keywords_fr%20LIKE%20\'atelier\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('atelier')) ? 'Atelier' : false
		},
		'Stage & Formation': {
			APIwhere: 'keywords_fr%20LIKE%20\'stage\'%20OR%20keywords_fr%20LIKE%20\'formation\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('stage')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('formation')) ? 'Stage & Formation' : false
		},
		'Création': {
			APIwhere: 'keywords_fr%20LIKE%20\'creation\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('creation')) ? 'Création' : false
		},
		'Cuisine': {
			APIwhere: 'keywords_fr%20LIKE%20\'cuisine\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('cuisine')) ? 'Cuisine' : false
		},
	},
	'Danses & Bals': {
		'--Tous--': {
			APIwhere: 'keywords_fr%20LIKE%20\'danse\'%20OR%20keywords_fr%20LIKE%20\'balfolk\'%20OR%20keywords_fr%20LIKE%20\'baltrad\'',
			findSub: (any) => false
		},
		'Danse': {
			APIwhere: 'keywords_fr%20LIKE%20\'danse\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('danse')) ? 'Danse' : false
		},
		'Bal Folk': {
			APIwhere: 'keywords_fr%20LIKE%20\'balfolk\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('balfolk')) ? 'Bal Folk' : false
		},
		'Bal Traditionnel': {
			APIwhere: 'keywords_fr%20LIKE%20\'baltrad\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('baltrad')) ? 'Bal Traditionnel' : false
		},
	},
	'Culture': {
		'--Tous--': {
			APIwhere: 'keywords_fr%20LIKE%20\'exposition\'%20OR%20keywords_fr%20LIKE%20\'spectacle\'%20OR%20keywords_fr%20LIKE%20\'theatre\'%20OR%20keywords_fr%20LIKE%20\'patrimoine\'%20OR%20keywords_fr%20LIKE%20\'culture\'%20OR%20keywords_fr%20LIKE%20\'cinema\'%20OR%20keywords_fr%20LIKE%20\'film\'%20OR%20keywords_fr%20LIKE%20\'documentaire\'%20OR%20keywords_fr%20LIKE%20\'animation\'%20OR%20keywords_fr%20LIKE%20\'comedie\'%20OR%20keywords_fr%20LIKE%20\'visite\'%20OR%20keywords_fr%20LIKE%20\'art\'%20OR%20keywords_fr%20LIKE%20\'sculpture\'%20OR%20keywords_fr%20LIKE%20\'histoire\'%20OR%20keywords_fr%20LIKE%20\'musee\'%20OR%20keywords_fr%20LIKE%20\'peinture\'%20OR%20keywords_fr%20LIKE%20\'dessin\'%20OR%20keywords_fr%20LIKE%20\'projection\'',
			findSub: (any) => false
		},
		'Exposition': {
			APIwhere: 'keywords_fr%20LIKE%20\'exposition\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('exposition')) ? 'Exposition' : false
		},
		'Spectacle': {
			APIwhere: 'keywords_fr%20LIKE%20\'spectacle\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('spectacle')) ? 'Spectacle' : false
		},
		'Théâtre': {
			APIwhere: 'keywords_fr%20LIKE%20\'theatre\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('theatre')) ? 'Théâtre' : false
		},
		'Patrimoine': {
			APIwhere: 'keywords_fr%20LIKE%20\'patrimoine\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('patrimoine')) ? 'Patrimoine' : false
		},
		'Culture': {
			APIwhere: 'keywords_fr%20LIKE%20\'culture\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('culture')) ? 'Culture' : false
		},
		'Cinéma & Film': {
			APIwhere: 'keywords_fr%20LIKE%20\'cinema\'%20OR%20keywords_fr%20LIKE%20\'film\'%20OR%20keywords_fr%20LIKE%20\'documentaire\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('cinema')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('film')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('documentaire')) ? 'Cinéma & Film' : false
		},
		'Animation': {
			APIwhere: 'keywords_fr%20LIKE%20\'animation\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('animation')) ? 'Animation' : false
		},
		'Comédie': {
			APIwhere: 'keywords_fr%20LIKE%20\'comedie\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('comedie')) ? 'Comédie' : false
		},
		'Visite': {
			APIwhere: 'keywords_fr%20LIKE%20\'visite\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('visite')) ? 'Visite' : false
		},
		'Art': {
			APIwhere: 'keywords_fr%20LIKE%20\'art\'%20OR%20keywords_fr%20LIKE%20\'sculpture\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('art')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('sculpture')) ? 'Art' : false
		},
		'Histoire': {
			APIwhere: 'keywords_fr%20LIKE%20\'histoire\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('histoire')) ? 'Histoire' : false
		},
		'Musée': {
			APIwhere: 'keywords_fr%20LIKE%20\'musee\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('musee')) ? 'Musée' : false
		},
		'Peinture': {
			APIwhere: 'keywords_fr%20LIKE%20\'peinture\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('peinture')) ? 'Peinture' : false
		},
		'Dessin': {
			APIwhere: 'keywords_fr%20LIKE%20\'dessin\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('dessin')) ? 'Dessin' : false
		},
		'Projection': {
			APIwhere: 'keywords_fr%20LIKE%20\'projection\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('projection')) ? 'Projection' : false
		},
	},
	'Lettres': {
		'--Tous--': {
			APIwhere: 'keywords_fr%20LIKE%20\'lecture\'%20OR%20keywords_fr%20LIKE%20\'conte\'%20OR%20keywords_fr%20LIKE%20\'livre\'%20OR%20keywords_fr%20LIKE%20\'litterature\'%20OR%20keywords_fr%20LIKE%20\'poesie\'%20OR%20keywords_fr%20LIKE%20\'ecriture\'%20OR%20keywords_fr%20LIKE%20\'mediatheque\'%20OR%20keywords_fr%20LIKE%20\'bibliotheque\'',
			findSub: (any) => false
		},
		'Lecture': {
			APIwhere: 'keywords_fr%20LIKE%20\'lecture\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('lecture')) ? 'Lecture' : false
		},
		'Conte': {
			APIwhere: 'keywords_fr%20LIKE%20\'conte\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('conte')) ? 'Conte' : false
		},
		'Littérature': {
			APIwhere: 'keywords_fr%20LIKE%20\'livre\'%20OR%20keywords_fr%20LIKE%20\'litterature\'%20OR%20keywords_fr%20LIKE%20\'poesie\'%20OR%20keywords_fr%20LIKE%20\'ecriture\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('livre')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('litterature')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('poesie')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('ecriture')) ? 'Littérature' : false
		},
		'Médiathèque & Bibliothèque': {
			APIwhere: 'keywords_fr%20LIKE%20\'mediatheque\'%20OR%20keywords_fr%20LIKE%20\'bibliotheque\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('mediatheque')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('bibliotheque')) ? 'Médiathèque & Bibliothèque' : false
		},
	},
	'Sciences': {
		'--Tous--': {
			APIwhere: 'keywords_fr%20LIKE%20\'architecture\'%20OR%20keywords_fr%20LIKE%20\'innovation\'%20OR%20keywords_fr%20LIKE%20\'informatique\'%20OR%20keywords_fr%20LIKE%20\'numerique\'%20OR%20keywords_fr%20LIKE%20\'archeologie\'%20OR%20keywords_fr%20LIKE%20\'science\'%20OR%20keywords_fr%20LIKE%20\'recherche\'',
			findSub: (any) => false
		},
		'Architecture': {
			APIwhere: 'keywords_fr%20LIKE%20\'architecture\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('architecture')) ? 'Architecture' : false
		},
		'Innovation': {
			APIwhere: 'keywords_fr%20LIKE%20\'innovation\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('innovation')) ? 'Innovation' : false
		},
		'Informatique': {
			APIwhere: 'keywords_fr%20LIKE%20\'informatique\'%20OR%20keywords_fr%20LIKE%20\'numerique\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('informatique')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('numerique')) ? 'Informatique' : false
		},
		'Archéologie': {
			APIwhere: 'keywords_fr%20LIKE%20\'archeologie\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('archeologie')) ? 'Archéologie' : false
		},
		'Sciences': {
			APIwhere: 'keywords_fr%20LIKE%20\'science\'%20OR%20keywords_fr%20LIKE%20\'recherche\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('science')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('recherche')) ? 'Sciences' : false
		},
	},
	'Loisirs': {
		'--Tous--': {
			APIwhere: 'keywords_fr%20LIKE%20\'rencontre\'%20OR%20keywords_fr%20LIKE%20\'jeu\'%20OR%20keywords_fr%20LIKE%20\'decouverte\'%20OR%20keywords_fr%20LIKE%20\'loisir\'%20OR%20keywords_fr%20LIKE%20\'balade\'%20OR%20keywords_fr%20LIKE%20\'randonnee\'%20OR%20keywords_fr%20LIKE%20\'cirque\'%20OR%20keywords_fr%20LIKE%20\'humour\'%20OR%20keywords_fr%20LIKE%20\'vacance\'%20OR%20keywords_fr%20LIKE%20\'ucpa\'%20OR%20keywords_fr%20LIKE%20\'montagne\'%20OR%20keywords_fr%20LIKE%20\'poney\'%20OR%20keywords_fr%20LIKE%20\'cheval\'%20OR%20keywords_fr%20LIKE%20\'equitation\'%20OR%20keywords_fr%20LIKE%20\'photographie\'%20OR%20keywords_fr%20LIKE%20\'fete\'%20OR%20keywords_fr%20LIKE%20\'mer\'%20OR%20keywords_fr%20LIKE%20\'ocean\'%20OR%20keywords_fr%20LIKE%20\'soiree\'%20OR%20keywords_fr%20LIKE%20\'diner\'%20OR%20keywords_fr%20LIKE%20\'baignade\'',
			findSub: (any) => false
		},
		'Rencontre': {
			APIwhere: 'keywords_fr%20LIKE%20\'rencontre\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('rencontre')) ? 'Rencontre' : false
		},
		'Jeux': {
			APIwhere: 'keywords_fr%20LIKE%20\'jeu\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('jeu')) ? 'Jeux' : false
		},
		'Découverte': {
			APIwhere: 'keywords_fr%20LIKE%20\'decouverte\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('decouverte')) ? 'Découverte' : false
		},
		'Loisirs': {
			APIwhere: 'keywords_fr%20LIKE%20\'loisir\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('loisir')) ? 'Loisirs' : false
		},
		'Balade': {
			APIwhere: 'keywords_fr%20LIKE%20\'balade\'%20OR%20keywords_fr%20LIKE%20\'randonnee\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('balade')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('randonnee')) ? 'Balade' : false
		},
		'Cirque': {
			APIwhere: 'keywords_fr%20LIKE%20\'cirque\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('cirque')) ? 'Cirque' : false
		},
		'Humour': {
			APIwhere: 'keywords_fr%20LIKE%20\'humour\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('humour')) ? 'Humour' : false
		},
		'Vacances': {
			APIwhere: 'keywords_fr%20LIKE%20\'vacance\'%20OR%20keywords_fr%20LIKE%20\'ucpa\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('vacance')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('ucpa')) ? 'Vacances' : false
		},
		'Montagne': {
			APIwhere: 'keywords_fr%20LIKE%20\'montagne\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('montagne')) ? 'Montagne' : false
		},
		'Équitation': {
			APIwhere: 'keywords_fr%20LIKE%20\'poney\'%20OR%20keywords_fr%20LIKE%20\'cheval\'%20OR%20keywords_fr%20LIKE%20\'equitation\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('poney')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('cheval')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('equitation')) ? 'Équitation' : false
		},
		'Photographie': {
			APIwhere: 'keywords_fr%20LIKE%20\'photographie\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('photographie')) ? 'Photographie' : false
		},
		'Fête': {
			APIwhere: 'keywords_fr%20LIKE%20\'fete\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('fete')) ? 'Fête' : false
		},
		'Mer': {
			APIwhere: 'keywords_fr%20LIKE%20\'mer\'%20OR%20keywords_fr%20LIKE%20\'ocean\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('mer')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('ocean')) ? 'Mer' : false
		},
		'Soirée': {
			APIwhere: 'keywords_fr%20LIKE%20\'soiree\'%20OR%20keywords_fr%20LIKE%20\'diner\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('soiree')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('diner')) ? 'Soirée' : false
		},
		'Baignade': {
			APIwhere: 'keywords_fr%20LIKE%20\'baignade\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('baignade')) ? 'Baignade' : false
		},
	},
	'Publique': {
		'--Tous--': {
			APIwhere: 'keywords_fr%20LIKE%20\'famille\'%20OR%20keywords_fr%20LIKE%20\'adultes\'%20OR%20keywords_fr%20LIKE%20\'enfant\'%20OR%20keywords_fr%20LIKE%20\'jeune\'%20OR%20keywords_fr%20LIKE%20\'tout\'%20publique\'',
			findSub: (any) => false
		},
		'Famille': {
			APIwhere: 'keywords_fr%20LIKE%20\'famille\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('famille')) ? 'Famille' : false
		},
		'Adulte': {
			APIwhere: 'keywords_fr%20LIKE%20\'adultes\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('adultes')) ? 'Adulte' : false
		},
		'Jeunesse': {
			APIwhere: 'keywords_fr%20LIKE%20\'enfant\'%20OR%20keywords_fr%20LIKE%20\'jeune\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('enfant')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('jeune')) ? 'Jeunesse' : false
		},
		'Tout publique': {
			APIwhere: 'keywords_fr%20LIKE%20\'tout\'%20publique\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('tout publique')) ? 'Tout publique' : false
		},
	},
	'Autres': {
		'--Tous--': {
			APIwhere: 'keywords_fr%20LIKE%20\'debat\'%20OR%20keywords_fr%20LIKE%20\'sante\'%20OR%20keywords_fr%20LIKE%20\'jardin\'%20OR%20keywords_fr%20LIKE%20\'animaux\'%20OR%20keywords_fr%20LIKE%20\'animal\'%20OR%20keywords_fr%20LIKE%20\'solidarite\'%20OR%20keywords_fr%20LIKE%20\'association\'%20OR%20keywords_fr%20LIKE%20\'gratuit\'%20OR%20keywords_fr%20LIKE%20\'nature\'%20OR%20keywords_fr%20LIKE%20\'environnement\'%20OR%20keywords_fr%20LIKE%20\'ecologie\'%20OR%20keywords_fr%20LIKE%20\'biodiversite\'%20OR%20keywords_fr%20LIKE%20\'sport\'%20OR%20keywords_fr%20LIKE%20\'velo\'%20OR%20keywords_fr%20LIKE%20\'conference\'%20OR%20keywords_fr%20LIKE%20\'emploi\'',
			findSub: (any) => false
		},
		'Débat': {
			APIwhere: 'keywords_fr%20LIKE%20\'debat\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('debat')) ? 'Débat' : false
		},
		'Santé': {
			APIwhere: 'keywords_fr%20LIKE%20\'sante\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('sante')) ? 'Santé' : false
		},
		'Jardin': {
			APIwhere: 'keywords_fr%20LIKE%20\'jardin\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('jardin')) ? 'Jardin' : false
		},
		'Animaux': {
			APIwhere: 'keywords_fr%20LIKE%20\'animaux\'%20OR%20keywords_fr%20LIKE%20\'animal\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('animaux')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('animal')) ? 'Animaux' : false
		},
		'Solidarité': {
			APIwhere: 'keywords_fr%20LIKE%20\'solidarite\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('solidarite')) ? 'Solidarité' : false
		},
		'Association': {
			APIwhere: 'keywords_fr%20LIKE%20\'association\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('association')) ? 'Association' : false
		},
		'Gratuit': {
			APIwhere: 'keywords_fr%20LIKE%20\'gratuit\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('gratuit')) ? 'Gratuit' : false
		},
		'Nature & Écologie': {
			APIwhere: 'keywords_fr%20LIKE%20\'nature\'%20OR%20keywords_fr%20LIKE%20\'environnement\'%20OR%20keywords_fr%20LIKE%20\'ecologie\'%20OR%20keywords_fr%20LIKE%20\'biodiversite\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('nature')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('environnement')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('ecologie')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('biodiversite')) ? 'Nature & Écologie' : false
		},
		'Sport': {
			APIwhere: 'keywords_fr%20LIKE%20\'sport\'%20OR%20keywords_fr%20LIKE%20\'velo\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('sport')) ||
					keywords.find((keyword) => keyword.toLowerCase().includes('velo')) ? 'Sport' : false
		},
		'Conférence': {
			APIwhere: 'keywords_fr%20LIKE%20\'conference\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('conference')) ? 'Conférence' : false
		},
		'Emploi': {
			APIwhere: 'keywords_fr%20LIKE%20\'emploi\'',
			findSub: (keywords) =>
				keywords.find((keyword) => keyword.toLowerCase().includes('emploi')) ? 'Emploi' : false
		},
	}
};
