import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['fr', 'en'],
        lng: undefined,
        fallbackLng: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            fr: {
                translation: {
                    homepage: {
                        title: 'Bienvenue',
                        characters: 'Personnages',
                        contexts: 'Contextes',
                        rules: 'Règles',
                        infos: 'Informations',
                    },
                    characters: {
                        title: 'Personnages',
                        thumbnail: 'afficher visages',
                        face: 'afficher miniatures',
                    },
                    characterDetail: {
                        elina: {
                            name: 'Elina',
                            age: "28",
                            description: 'Ancienne expatriée venue d’Estonie, Elina s’est imposée seule dans un monde qui ne lui faisait aucune place. Propriétaire d’un bar de luxe devenu incontournable, elle a su s’entourer des bonnes — ou mauvaises — personnes pour protéger ce qu’elle a construit. Entre élégance, contrôle et dangers invisibles, elle prépare désormais l’ouverture d’un casino, prête à étendre encore son influence.  \n' +
                                '\n' +
                                'Une fois installée, Elina n’a pas seulement pensé à elle : elle a tout fait pour rapatrier son frère Eliot et sa sœur Robin, restés en Estonie dans une situation précaire. Elle leur a financé un nouveau départ à ses côtés, offrant à Robin un garage auto où elle peut enfin vivre de sa mécanique, et à Eliot un salon de couture sur mesure à la sortie de la ville. Tous les trois forment désormais un noyau soudé, chacun avec son propre terrain de jeu, mais reliés par la même volonté de ne plus jamais retourner à la vie qu’ils ont laissée derrière eux.  \n' +
                                '\n' +
                                'Pour protéger son établissement et sa famille, Elina a passé un accord avec la mafia russe locale, né d’une histoire plus personnelle qu’elle ne l’assume publiquement. Une des patronnes est devenue bien plus qu’une alliée, transformant un simple deal de protection en relation ambiguë, faite de loyauté, de tension et de sentiments qu’Elina ne pouvait plus totalement ignorer. La relation n’a pas duré, mais les conséquences, elles, sont restées : grâce à ce lien passé, son bar et son futur casino bénéficient d’une sécurité quasi intouchable… au prix d’une dette morale envers un monde dont on ne s’éloigne jamais vraiment.',
                        },
                        eliot: {
                            name: 'Eliot',
                            age: '25',
                            description: 'Eliot vit entre deux mondes : celui du numérique et celui du textile. Hacker talentueu.x.se, iel navigue dans les systèmes avec la même précision qu’iel manie une aiguille. Couturier.e discret.e mais brillant.e, iel crée des pièces uniques, souvent pensées pour s’adapter aux besoins très particuliers de son entourage. Derrière son calme apparent se cache une intelligence redoutable, toujours en train d’observer, comprendre… et anticiper.',
                        },
                        robin: {
                            name: 'Robin',
                            age: '21',
                            description: 'Passionnée de mécanique, Robin vit presque entièrement dans son hangar, entre moteurs démontés et voitures prêtes à rugir. Grâce à Elina, elle a son propre terrain, loin des regards, où elle prépare des véhicules pour les courses de rue sans jamais conduire elle-même. Brillante, brute et indépendante, elle préfère parler avec ses mains pleines de cambouis… mais certaines rencontres pourraient bien venir perturber son équilibre.',
                        },
                        finn: {
                            name: 'Finn',
                            age: '24',
                            description: 'Mannequin britannique installé en ville, Finn Harrington alterne entre shootings pour Eliot et défilés pour diverses marques. Raffiné sans être prétentieux, il passe du costume parfaitement taillé au look décontracté avec une facilité désarmante. Mélomane, il vit entouré de playlists et de vinyles, mais garde une attitude légère et sans prise de tête. Côté caractère, Finn est posé, drôle sans forcer, un peu distrait parfois, mais toujours attentif aux gens qu’il aime — le genre de présence calme qui détend tout le monde autour de lui.',
                        },
                        lyra: {
                            name: 'Lyra',
                            age: '18',
                            description: 'Lyra est une étudiante brillante dans une grande école de magie, connue pour ses résultats impeccables et sa maîtrise des sorts théoriques les plus complexes. Admirée pour son calme et son intelligence, elle reste pourtant assez solitaire, préférant les nuits blanches à la bibliothèque plutôt que les fêtes dans les salles communes.\n' +
                                '\n' +
                                'Son image de “génie détachée” intrigue autant qu’elle fascine : beaucoup la regardent de loin, peu osent vraiment l’approcher. Elle semble toujours fatiguée, toujours ailleurs, comme si elle portait un poids que personne ne voit vraiment.',
                        },
                        luiza: {
                            name: 'Luiza',
                            age: '24',
                            description: 'Luiza est une chanteuse de Bossa Nova qui se produit dans des bars locaux et de petits clubs intimistes. Elle n’est pas vraiment connue du grand public, mais elle vit de sa musique, ce qui la rend profondément heureuse et fière de ce qu’elle construit.\n' +
                                '\n' +
                                'Douce et chaleureuse, elle prend le temps de parler avec les habitué·es après ses sets, toujours avec un sourire tranquille. Sa voix apaisante et son attitude gentille donnent aux soirées une atmosphère cosy, presque familière, où les gens reviennent plus pour elle que pour le lieu.\n' +
                                '\n' +
                                'En dehors de la scène, elle mène une vie simple : répétitions, compositions, petits trajets entre chez elle et les bars où elle chante. Elle rêve parfois de scènes plus grandes, mais sans amertume ; pour l’instant, elle savoure chaque chanson comme si c’était déjà une forme de succès.',
                        },
                        cypher: {
                            name: 'Cypher',
                            age: '26',
                            description: 'Cypher est la meilleure amie de Robin et sa pilote attitrée pour les courses clandestines. Elle vit dans une petite maison isolée, à l’écart de la ville, entourée de routes qu’elle connaît par cœur et de moteurs qu’elle pousse toujours un peu trop loin.\n' +
                                '\n' +
                                'Elle s’est fait un nom dans le milieu des runs nocturnes : discrète, mais redoutée pour sa capacité à garder son calme à haute vitesse et à prendre des risques calculés que peu de pilotes osent tenter. Elle ne travaille pas avec tout le monde ; la plupart du temps, elle ne roule que pour Robin et quelques rares personnes qui ont gagné sa confiance.\n' +
                                '\n' +
                                'Son quotidien est rythmé par les préparations de courses, les réglages dans le garage de Robin, et des retours tardifs où l’adrénaline met du temps à retomber. Sa maison isolée est son refuge : un endroit où l’on ne vient pas par hasard, rempli de traces de vie nocturne (combinaisons, casques, cartes de routes, outils).\n' +
                                '\n' +
                                'Sous son côté joueur et son sourire facile, elle reste très protectrice envers ceux qu’elle laisse entrer dans son cercle. Elle vit de ses courses clandestines, accepte les risques, mais se tient loin des organisations trop lourdes ; pour elle, la vitesse doit rester un choix, pas une obligation.',
                        },
                        thalia: {
                            name: 'Thalia',
                            age: '29',
                            description: 'Thalia est, en apparence, une femme moderne qui vit près de la mer, connue pour son esprit affûté et son self-control presque intimidant. En réalité, elle est une fille cachée d’Athéna, née d’un fragment de la déesse incarné dans le monde mortel, et élevée loin de l’Olympe pour la protéger des rivalités divines.\n' +
                                '\n' +
                                'Elle a hérité d’une intelligence stratégique exceptionnelle, d’un sens aigu de la justice et d’une capacité à garder la tête froide dans n’importe quelle situation. Son corps, marqué par des tatouages aux motifs presque ritualisés, est autant une armure qu’un rappel de ses origines mythologiques.\n' +
                                '\n' +
                                'Thalia mène une double vie : officiellement, elle travaille comme consultante en “gestion de crise” et en préparation mentale, aidant des personnes influentes à reprendre le contrôle de leur existence. Officieusement, elle sert parfois d’intermédiaire entre le monde des mortels et celui des dieux, lorsque certains anciens conflits ressurgissent sous des formes très contemporaines.\n' +
                                '\n' +
                                'Son lien avec Athéna est discret, presque secret : quelques rêves récurrents, la sensation d’une présence lors de décisions cruciales, et une série de signes impossibles à ignorer. Elle ne se présente jamais comme une demi-déesse ; elle préfère être vue comme une femme qui sait exactement ce qu’elle fait… même quand le destin essaie de la pousser dans une direction précise.',
                        },
                        iris: {
                            name: 'Iris',
                            age: '30',
                            description: 'Iris est photographe et coloriste pour le cinéma indépendant, spécialisée dans les lumières douces et les ambiances intimes. Elle vit seule dans un petit appartement où elle se prend souvent en photo dans les rais de lumière comme on tiendrait un journal, pour garder une trace de sa reconstruction après un gros burn-out.\n' +
                                '\n' +
                                'Hypersensible et très observatrice, elle parle peu d’elle-même mais capte les autres avec une justesse presque troublante. Elle choisit désormais soigneusement ses projets, fuyant les tournages trop bruyants pour se concentrer sur les histoires humaines, lentes, qui lui permettent de reprendre confiance en elle et en ce qu’elle ressent.',
                        },
                        alix: {
                            name: 'Alix',
                            age: '22',
                            description: 'Alix est étudiante en hôtellerie, partagée entre ses cours, ses projets de fin d’année et son travail de serveuse dans un restaurant où les horaires changent tout le temps. Elle aime le monde de l’hôtellerie, l’organisation d’une salle, le soin apporté aux détails et l’idée de pouvoir un jour gérer son propre établissement. Pour l’instant, elle enchaîne les shifts, compte ses heures pour réussir à boucler ses fins de mois et calcule chaque dépense pour ne pas se retrouver dans le rouge.\n' +
                                '\n' +
                                'Au fil des services, Alix a développé une grande résistance, mais la fatigue émotionnelle commence à peser. Les clients mécontents, aigri·es, ceux qui parlent mal au personnel ou la traitent comme si elle n’existait pas, lui donnent parfois envie de tout arrêter. Elle garde le sourire et reste professionnelle, mais rentre souvent chez elle vidée, avec la sensation de ne jamais être vraiment reconnue pour son travail. Elle se promet qu’un jour, si elle ouvre son propre endroit, ce sera un lieu où le personnel sera respecté autant que les client·es, et où elle pourra enfin exercer son métier sans avoir à encaisser la colère des autres.',
                        },
                        cecily: {
                            name: 'Cecily',
                            age: '19',
                            description: 'Cecily est une princesse joyeuse d’un petit royaume communiste, où la couronne n’est pas un symbole de pouvoir absolu mais de représentation du peuple. Elle a grandi au milieu des jardins du palais, entourée de fleurs et d’animaux, habituée à passer autant de temps avec les jardiniers, les institutrices et les enfants du pays qu’en robe de cérémonie. Curieuse et enthousiaste, elle se faufile souvent hors des protocoles pour assister à des fêtes populaires, des assemblées, ou simplement pour discuter avec celles et ceux qui font tourner le royaume au quotidien.\n' +
                                '\n' +
                                'Son rôle officiel est surtout diplomatique et culturel : Cecily représente le visage doux et chaleureux du régime, organise des festivals, visite les écoles et participe à la mise en valeur de l’art, des bibliothèques et des espaces verts. On la connaît pour ses discours naïvement idéalistes mais sincères, son rire facile et sa capacité à écouter les histoires des autres comme si elles étaient aussi importantes que les grandes décisions politiques. Sous ses airs de princesse de conte, elle porte pourtant une vraie conviction : celle que l’égalité ne doit jamais écraser la beauté, et que la joie peut elle aussi être une forme de résistance.',
                        },
                        inessa: {
                            name: 'Inessa',
                            age: '23',
                            description: 'Inessa vient de Russie et travaille comme photographe, toujours entre deux voyages et trois couchers de soleil à capturer. Elle a commencé avec un vieux appareil hérité de son grand-père et n’a jamais vraiment arrêté depuis, développant une obsession douce pour les lumières naturelles, les champs, les villes au bord de l’eau et les visages qui rient sans se rendre compte qu’on les prend en photo.\n' +
                                '\n' +
                                'Installée loin de chez elle, elle mélange nostalgie et curiosité : ses images portent souvent une touche de mélancolie russe et de couleurs chaudes, comme si elle essayait de tenir ensemble plusieurs pays à la fois. Inessa vit de petits contrats, de séances improvisées et parfois de collaborations avec d’autres artistes, mais ce qu’elle préfère, ce sont les moments où elle peut juste se perdre avec son appareil, sans objectif précis, en laissant les rencontres et les paysages décider eux-mêmes de ce qu’elle va garder.',
                        },
                        rae: {
                            name: 'Rae',
                            age: '27',
                            description: 'Rae est une influenceuse “soft chaos” qui mélange selfies bruts, lingerie, tattoos et petits bouts de quotidien dans son appartement minimaliste. Elle ne se présente pas comme modèle pro, mais comme une fille qui documente son corps, ses humeurs et sa façon de se réapproprier son image, entre miroirs, lumière naturelle et stories à moitié improvisées.\n' +
                                '\n' +
                                'Son univers tourne autour du body positive, du make-up qui met en valeur ses traits sans les lisser, et de discussions honnêtes avec sa communauté sur la confiance en soi, les relations, et la sexualité assumée sans être performée. Rae vit de partenariats triés sur le volet (lingerie, maquillage, bijoux, déco), de contenus exclusifs et de collaborations photo avec d’autres artistes, mais ce qui la distingue, c’est sa manière de rester accessible : on a l’impression d’être dans sa chambre avec elle plutôt que devant une vitrine parfaite.',
                        },
                    },
                    contexts: {
                        title: 'Contextes',
                        intrusion: {
                            name: 'Intrusion',
                            content: 'Vers 2h du matin, après la fermeture progressive du bar, Elina remonte à son penthouse situé au dernier étage. En entrant, elle remarque immédiatement un détail inhabituel : une lumière est allumée dans le salon, alors qu’elle est certaine de l’avoir éteinte en partant.\n' +
                                '\n' +
                                'La sécurité n’a signalé aucune intrusion. Les caméras n’ont rien relevé d’anormal.\n' +
                                '\n' +
                                'En avançant, elle te découvre... installée chez elle, parfaitement calme, comme si elle était à sa place.'
                        },
                        privateParty: {
                            name: 'Soirée Privée',
                            content: 'Lors d’une soirée privée organisée dans le sous-sol du bar, Elina supervise les premières tables de jeu encore en test.\n' +
                                '\n' +
                                'L’ambiance est feutrée, réservée à une poignée de clients triés sur le volet. Rapidement, tu attire son attention : tu enchaîne les victoires avec une aisance déconcertante, sans qu’aucune triche ne soit détectée.\n' +
                                '\n' +
                                'Plutôt que de faire intervenir qui que ce soit, Elina décide de la faire venir dans un salon privé pour comprendre qui elle est… et comment elle joue.'
                        },
                        regularClient: {
                            name: 'Client Régulier',
                            content: 'Depuis plusieurs semaines, tu revient presque tous les soirs au bar d’Elina. Toujours à la même place, toujours seule, toujours sobre. Tu ne crée aucun problème, paie sans discuter… mais observe beaucoup trop pour être une simple cliente.\n' +
                                '\n' +
                                'L’équipe de sécurité t’a déjà remarquée, sans trouver de raison valable de l’intercepter. Tu ne fait rien de répréhensible, mais sa présence devient difficile à ignorer.\n' +
                                '\n' +
                                'Ce soir-là, encore une fois, tu est là. Assise, regard posé quelque part entre la scène et le bar… ou peut-être directement sur Elina.'
                        },
                        inhabitualClient: {
                            name: 'Client Inhabituel',
                            content: 'Eliot reçoit une commande inhabituelle : aucune rencontre, aucune prise de mesures classique, seulement un dossier extrêmement précis envoyé de manière anonyme. Les mensurations sont parfaites, les détails pointus, et le paiement a déjà été effectué… en avance, via un circuit difficile à tracer.\n' +
                                '\n' +
                                'Le vêtement demandé est d’un niveau exceptionnel, presque trop spécifique pour quelqu’un qui n’aurait jamais rencontré Eliot.\n' +
                                '\n' +
                                'Le jour de la récupération approche… mais Eliot n’a toujours aucune idée de qui se cache derrière cette commande.'
                        },
                        ambiguousFittings: {
                            name: 'Essayages Ambigus',
                            content: 'Une cliente fortunée réserve un créneau en dehors des horaires habituels pour un essayage entièrement privé.\n' +
                                '\n' +
                                'La demande est claire : aucune équipe autour, aucune interruption, juste elle et Eliot dans l’atelier.\n' +
                                '\n' +
                                'Ce genre de requête n’est pas inhabituel dans le milieu… mais quelque chose dans son attitude tranche avec ses clientes habituelles. Elle semble moins intéressée par la tenue que par Eliot lui-même, observant chacun de ses gestes, posant des questions plus personnelles que professionnelles.\n' +
                                '\n' +
                                'L’essayage se prolonge, bien au-delà de ce qui était prévu.'
                        },
                        unexpectedHacking: {
                            name: 'Hacking Inattendu',
                            content: 'En travaillant tard dans son atelier, Eliot détecte une intrusion dans son propre système informatique.\n' +
                                '\n' +
                                'Quelqu’un a réussi à franchir ses sécurités… sans rien voler, sans rien modifier. Juste entrer, puis rester.\n' +
                                '\n' +
                                'En retraçant la source, il remonte jusqu’à une présence active, comme si la personne attendait qu’il la remarque.\n' +
                                '\n' +
                                'Quelques minutes plus tard, une femme apparaît devant la boutique, comme si tout était parfaitement synchronisé.'
                        },
                        carNotBroken: {
                            name: 'Voiture non Cassée',
                            content: 'Robin voit passer beaucoup de monde pour des réparations, mais une femme commence à revenir souvent… pour des problèmes mineurs, voire inexistants. \n' +
                                '\n' +
                                'Elle traîne, pose des questions, observe Robin travailler avec un intérêt qui dépasse largement la mécanique.\n' +
                                '\n' +
                                'Robin comprend vite que la voiture n’est qu’un prétexte, mais reste à savoir pourquoi : fascination, attirance… ou autre chose de moins innocent.'
                        },
                        technicalTalk: {
                            name: 'Conversation Technique',
                            content: 'Robin est présente sur les événements de courses de rue, mais toujours en retrait, concentrée sur ses voitures et les performances des pilotes qui les conduisent.\n' +
                                '\n' +
                                'Une femme s’intéresse particulièrement à son travail, restant près des stands, posant des questions précises… parfois trop.\n' +
                                '\n' +
                                'Entre discussions techniques, regards qui s’attardent et tension qui monte doucement, Robin se demande si cette femme est juste passionnée… ou si elle cherche aussi à se rapprocher d’elle.'
                        },
                        dangerousWomen: {
                            name: "Femme Dangereuse",
                            content: 'Une femme liée à un réseau plus dangereux que les simples courses de rue commence à fréquenter le hangar. Elle propose des contrats, des voitures, de l’argent… mais tout ça a un prix.\n' +
                                '\n' +
                                'Robin sent que ça peut la faire monter très vite… mais aussi la faire tomber. Au milieu de ça, une relation se développe, entre méfiance, désir et risques constants.'
                        },
                        newCollection: {
                            name: 'Nouvelle Collection',
                            content: 'Eliot organise un shooting pour tester une nouvelle collection, et Finn pose comme modèle principal, dans un lieu qui colle à leur esthétique (rue élégante, toit, vieux théâtre, studio minimaliste). Tu es présent·e sur le shooting en tant que photographe, maquilleuse, styliste, assistant·e ou autre rôle lié à la création.\n' +
                                '\n' +
                                'Au fil des prises, Finn garde son attitude détendue, parle musique, plaisante, tandis qu’Eliot reste concentrée sur les vêtements et les détails. La journée de travail laisse la place à des échanges plus personnels, entre inspiration visuelle et affinités musicales.'
                        },
                        musicAndFood: {
                            name: 'Musique et Nourriture',
                            content: 'Après une journée de travail, Finn se rend a un repas-concert intimiste d’un artiste qu’il aime, dans une petite salle / restaurant plutôt raffiné. Tu y étais, et la soirée se déroule dans une atmosphère douce, centrée sur les instruments, les voix et l’émotion de la musique en live.\n' +
                                '\n' +
                                'Après cette soirée, vous vous retrouvez a ma même table, vous parlez de vos groupes préférés, de souvenirs de concerts, de playlists que vous vous partagez. Le moment marque une bascule entre simple connaissance et véritable complicité, portée par la musique plutôt que par le travail.'
                        },
                        fashionShow: {
                            name: 'Défilé de Mode',
                            content: 'Vous êtes tous les deux sur le même défilé, affectés à une série de silhouettes proches dans l’ordre de passage. En backstage, vous partagez le même portant, les mêmes retouches de dernière minute, les mêmes instructions qu’on répète en boucle. \n' +
                                '\n' +
                                'Entre stress léger, maquillage et essayages, vous commencez à échanger quelques mots, des regards, ensemble sur un passage en duo. Cette proximité répétée, entre coulisses et lumière, crée un lien naturel : vous vous retrouvez à la fin du show, encore en demi-costume, à parler de la soirée et de la sensation étrange mais agréable d’avoir partagé la scène.'
                        },
                        strangeNewWork: {
                            name: 'Étrange Nouveau Travail',
                            content: 'On se connaît à peine, mais je cerche du travail. Je propose de t’aider dans ton quotidien (ménage, organisation, tâches diverses).\n' +
                                '\n' +
                                'En échange, tu installes un cadre strict : règles, posture, manière de parler.\n' +
                                '\n' +
                                'Ce qui commence comme un arrangement pratique devient une dynamique de contrôle assumée, où je prends plaisir à être guidée, corrigée, et utilisée dans un cadre consenti.\n' +
                                '\n' +
                                'Le lien évolue entre discipline, dépendance et attachement.'
                        },
                        kinkyMeeting: {
                            name: 'Rencontre Kinky',
                            content: 'On se rencontre via un milieu kink, et j’exprime clairement mon envie d’être soumise, encadrée et “dressée”.\n' +
                                '\n' +
                                'Tu prends ce rôle au sérieux : mise en place de routines, apprentissage du pet play, utilisation de tenues (latex, bitchsuit), exercices de comportement.\n' +
                                '\n' +
                                'La relation tourne autour du dressage, du contrôle et de la progression, avec une montée en intensité dans la confiance et l’abandon.'
                        },
                        collocation: {
                            name: 'Collocation',
                            content: 'On est colocataires, et au début j’aide juste un peu plus que prévu dans l’appartement. Petit à petit, je prends l’habitude de m’occuper de tout : ménage, lessive, courses… et surtout de toi.\n' +
                                '\n' +
                                'Avec le temps, la dynamique change. Je cherche ton approbation, attends tes ordres, et finis par adopter une place plus basse, presque comme un animal de compagnie.\n' +
                                '\n' +
                                'On met en place des règles, des limites… et un jeu de domination où je deviens progressivement la chienne de la maison.'
                        },
                        returnedProtection: {
                            name: 'Protection Retournée',
                            context: 'Je suis engagée pour te protéger, mais au fil du temps, mon rôle dépasse largement la sécurité. Je suis toujours là, toujours disponible, toujours attentive à tes besoins.\n' +
                                '\n' +
                                'La relation glisse vers quelque chose de plus possessif et asymétrique, où je deviens une protectrice dévouée… mais aussi une soumise qui vit pour servir.\n' +
                                '\n' +
                                'On construit une dynamique où utilité, loyauté et désir s’entremêlent.'
                        },
                        relationshipEvolution: {
                            name: 'Évolution de Relation',
                            content: 'On est en couple, et après discussion, je décide de m’abandonner à une dynamique de domination totale dans le cadre privé.\n' +
                                '\n' +
                                'Des règles sont mises en place : tenue, comportement, accès à mon corps, moments dédiés où je n’ai plus à décider mais simplement à suivre.\n' +
                                '\n' +
                                'Le quotidien devient un terrain de jeu structuré, entre contrôle, rituels et abandon consenti.'
                        },
                        privateCircle: {
                            name: 'Cercle Privé',
                            content: 'Je suis entrée dans un cercle magique privé, où certaines sorcières pratiquent des formes de magie avancées basées sur le contrôle et la discipline du corps. J’y deviens ton apprentie, acceptant de me soumettre à tes rituels.\n' +
                                '\n' +
                                'Entre enchantements de contrainte, accessoires enchantés (liens magiques, tenues vivantes comme du latex enchanté), et règles strictes, mon corps et mes réactions deviennent partie intégrante de l’apprentissage.\n' +
                                '\n' +
                                'La relation évolue entre enseignement, domination et abandon, dans un cadre de plus en plus exigeant.'
                        },
                        enchantedClothes: {
                            name: 'Vêtements Enchantés',
                            content: 'Je pousse la porte d’une boutique discrète du Chemin de Traverse, spécialisée dans des vêtements enchantés très particuliers. La propriétaire crée des pièces uniques qui réagissent au corps, à la magie… et à l’autorité de celle qui les contrôle.\n' +
                                '\n' +
                                'En essayant certaines créations (bitchsuit enchantée, latex vivant, colliers magiques), je découvre que ces objets ne sont pas seulement esthétiques, mais faits pour imposer des postures, des comportements, et amplifier une dynamique de soumission.\n' +
                                '\n' +
                                'Très vite, je reviens… moins pour les vêtements, et plus pour celle qui les contrôle.'
                        },
                        magicPact: {
                            name: 'Pacte Magique',
                            content: 'Je conclus un pacte magique volontaire avec une sorcière puissante, un serment ancien qui lie ma magie et mon corps à elle dans certaines conditions.\n' +
                                '\n' +
                                'Ce lien crée une connexion constante : sensations amplifiées, besoin de proximité, incapacité à ignorer ses ordres dans le cadre défini du rituel.\n' +
                                '\n' +
                                'Entre dépendance magique, rituels réguliers et exploration de limites toujours repoussées, la relation devient aussi intense que dangereusement addictive — tout en restant basée sur des règles claires établies dès le départ.'
                        },
                        strangeCopilot: {
                            name: 'Étrange Copilote',
                            content: 'J’ai été réduite à l’état de “propriété” dans des circuits illégaux, jusqu’à ce que tu me rachètes lors d’une transaction. Contrairement aux autres, tu ne m’utilises pas comme un objet : tu me proposes un contrat clair.\n' +
                                '\n' +
                                'Je reste à tes côtés, je t’appartiens dans un cadre défini… mais en échange, j’ai une place, une fonction. Rapidement, tu découvres mes connaissances sur les routes, les espèces et les vaisseaux.\n' +
                                '\n' +
                                'Je deviens indispensable à tes missions… et volontairement soumise à toi, autant dans le cockpit que dans l’intimité.'
                        },
                        ClandestineSexShop: {
                            name: 'Sex-Shop Clandestin',
                            content: 'Je travaille dans un sexshop clandestin des bas-fonds de Coruscant, un endroit réservé à une clientèle riche et discrète. \n' +
                                '\n' +
                                'Officiellement vendeuse, je suis surtout “mise à disposition” pour tester, présenter et porter certains produits très spécifiques.\n' +
                                '\n' +
                                'Quand tu entres dans la boutique, tu comprends vite que je ne suis pas une simple employée. Entre objets technologiques, accessoires sci-fi et regards insistants, une dynamique s’installe.\n' +
                                '\n' +
                                'Je pourrais rester un simple produit du lieu… ou devenir quelque chose de bien plus personnel pour toi.'
                        },
                        sandServant: {
                            name: "Servante de Sable",
                            content: 'Je vis comme servante dans une demeure isolée sur Tatooine, habituée à obéir, à anticiper, à me faire discrète. Mon quotidien est rythmé par les ordres, la chaleur écrasante et l’absence de liberté.\n' +
                                '\n' +
                                'Ton arrivée change l’équilibre. Tu n’as pas la même manière de me regarder, ni les mêmes attentes.\n' +
                                '\n' +
                                'Entre habitudes ancrées et nouvelles possibilités, une relation se construit, entre contrôle, curiosité et évolution du lien.'
                        },
                        shipRepair: {
                            name: 'Réparation de Vaisseaux',
                            content: 'On se rencontre dans un hangar sur une planète périphérique, toutes les deux occupées à réparer des vaisseaux dans des conditions précaires.\n' +
                                '\n' +
                                'Très vite, une complicité naît entre nous : échanges de techniques, entraide, longues nuits à bricoler côte à côte.\n' +
                                '\n' +
                                'Ce qui commence comme une collaboration devient une relation plus personnelle, faite de tension, de proximité et d’un attachement qui se construit sans rapport de domination.'
                        },
                        bountyHunters: {
                            name: 'Chasseuses de Primes',
                            content: 'On est toutes les deux chasseuses de primes, souvent en compétition sur les mêmes contrats. Chaque rencontre est un mélange de rivalité et d’attirance.\n' +
                                '\n' +
                                'On se croise, on se gêne, parfois on s’allie temporairement… sans jamais vraiment se faire confiance.\n' +
                                '\n' +
                                'Entre affrontements, négociations tendues et moments de répit inattendus, la relation oscille entre ennemies et quelque chose de beaucoup plus ambigu.'
                        }
                    }
                },
            },
            en: {
                translation: {
                    homepage: {
                        title: 'Welcome',
                        characters: 'Characters',
                        contexts: 'Contexts',
                        rules: 'Rules',
                        infos: 'Informations',
                    },
                    characters: {
                        title: 'Characters',
                        thumbnail: 'show faces',
                        face: 'show thumbnails',
                    },
                    characterDetail: {
                        elina: {
                            name: 'Elina',
                            age: "28",
                            description: 'Formerly an expatriate from Estonia, Elina forced her way into a world that had no place for her. Owner of a luxury bar that has become impossible to ignore, she surrounded herself with the right — or wrong — people to protect what she built. Balancing elegance, control, and invisible dangers, she is now preparing to open a casino, ready to push her influence even further.  \n' +
                                '\n' +
                                'Once settled, Elina didn’t only think about herself: she did everything she could to bring her brother Eliot and her sister Robin over from Estonia, pulling them out of a precarious life. She financed a new start for them at her side, giving Robin an auto garage where she can finally live off her skills as a mechanic, and Eliot a bespoke couture studio on the edge of the city. The three of them now form a tight-knit core, each with their own playground, united by the same determination to never go back to the life they left behind.  \n' +
                                '\n' +
                                'To protect her establishment and her family, Elina struck a deal with the local Russian mafia, born from a story more personal than she publicly admits. One of the bosses became much more than an ally, turning a simple protection contract into an ambiguous relationship built on loyalty, tension, and feelings Elina could no longer fully ignore. The relationship didn’t last, but its consequences did: thanks to this past connection, her bar and future casino enjoy near-untouchable security… at the cost of a moral debt to a world it’s almost impossible to walk away from.',
                        },
                        eliot: {
                            name: 'Eliot',
                            age: '25',
                            description: 'Eliot lives between two worlds: the digital one and the textile one. A gifted hacker, they move through systems with the same precision they use with a needle. A discreet but brilliant tailor, they create unique pieces, often designed to fit the very specific needs of those around them. Behind their calm exterior hides a formidable mind, always observing, understanding… and anticipating.',
                        },
                        robin: {
                            name: 'Robin',
                            age: '21',
                            description: 'Passionate about mechanics, Robin lives almost entirely in her hangar, surrounded by dismantled engines and cars ready to roar. Thanks to Elina, she has a place of her own, away from prying eyes, where she prepares vehicles for street races without ever driving them herself. Brilliant, raw, and independent, she prefers to speak with hands stained in grease… but some encounters may well disturb her balance.',
                        },
                        finn: {
                            name: 'Finn',
                            age: '24',
                            description: 'A British model living in town, Finn Harrington moves between shoots for Eliot and runway shows for various brands. Refined without ever being pretentious, he slips from a perfectly tailored suit to a casual look with disarming ease. A music lover, he lives surrounded by playlists and vinyl records, yet keeps a light, easygoing attitude. Personality-wise, Finn is calm, effortlessly funny, a little absent-minded at times, but always attentive to the people he loves — the kind of steady presence that makes everyone around him feel at ease.',
                        },
                        lyra: {
                            name: 'Lyra',
                            age: '18',
                            description: 'Lyra is a brilliant student at a prestigious school of magic, known for her flawless results and her mastery of the most complex theoretical spells. Admired for her calm and intelligence, she remains rather solitary, preferring sleepless nights in the library to parties in the common rooms.\n' +
                                '\n' +
                                'Her image as a “detached genius” fascinates as much as it intrigues: many watch her from afar, but few truly dare approach her. She always seems tired, always somewhere else, as if carrying a weight no one can really see.',
                        },
                        luiza: {
                            name: 'Luiza',
                            age: '24',
                            description: 'Luiza is a Bossa Nova singer who performs in local bars and small intimate clubs. She is not really known by the general public, but she lives from her music, and that makes her deeply happy and proud of what she is building.\n' +
                                '\n' +
                                'Gentle and warm, she takes time to talk with regulars after her sets, always with a quiet smile. Her soothing voice and kind attitude give each evening a cosy, almost familiar atmosphere, where people come back more for her than for the venue itself.\n' +
                                '\n' +
                                'Off stage, she leads a simple life: rehearsals, songwriting, small trips between home and the bars where she sings. She sometimes dreams of bigger stages, but without bitterness; for now, she savours every song as if it were already a form of success.',
                        },
                        cypher: {
                            name: 'Cypher',
                            age: '26',
                            description: 'Cypher is Robin’s best friend and her designated driver for illegal races. She lives in a small isolated house on the edge of town, surrounded by roads she knows by heart and engines she always pushes a little too far.\n' +
                                '\n' +
                                'She has made a name for herself in the world of night runs: discreet, yet feared for her ability to stay calm at high speed and take calculated risks that few drivers would dare attempt. She does not work with just anyone; most of the time, she only drives for Robin and for a few rare people who have earned her trust.\n' +
                                '\n' +
                                'Her daily life revolves around race preparation, adjustments in Robin’s garage, and late returns home when the adrenaline takes a long time to fade. Her isolated house is her refuge: a place no one stumbles upon by chance, filled with traces of nightlife (suits, helmets, road maps, tools).\n' +
                                '\n' +
                                'Beneath her playful side and easy smile, she remains fiercely protective of those she lets into her circle. She lives off underground racing, accepts the risks, but stays away from organisations that are too heavy-handed; for her, speed must remain a choice, not an obligation.',
                        },
                        thalia: {
                            name: 'Thalia',
                            age: '29',
                            description: 'Thalia is, on the surface, a modern woman living by the sea, known for her sharp mind and almost intimidating self-control. In truth, she is a hidden daughter of Athena, born from a fragment of the goddess made flesh in the mortal world, and raised far from Olympus to protect her from divine rivalries.\n' +
                                '\n' +
                                'She inherited exceptional strategic intelligence, a keen sense of justice, and the ability to keep a cool head in any situation. Her body, marked by tattoos with almost ritualistic patterns, is both armour and reminder of her mythological origins.\n' +
                                '\n' +
                                'Thalia leads a double life: officially, she works as a “crisis management” and mental preparation consultant, helping influential people regain control over their lives. Unofficially, she sometimes acts as an intermediary between the mortal world and the world of the gods, whenever old conflicts resurface in strikingly modern forms.\n' +
                                '\n' +
                                'Her bond with Athena is subtle, almost secret: recurring dreams, the feeling of a presence during crucial decisions, and a series of signs too impossible to ignore. She never introduces herself as a demigoddess; she would rather be seen as a woman who knows exactly what she is doing… even when fate tries to push her in a specific direction.',
                        },
                        iris: {
                            name: 'Iris',
                            age: '30',
                            description: 'Iris is a photographer and colourist for independent cinema, specialising in soft light and intimate atmospheres. She lives alone in a small apartment where she often photographs herself in shafts of light as though keeping a journal, trying to preserve traces of her reconstruction after a severe burnout.\n' +
                                '\n' +
                                'Highly sensitive and deeply observant, she speaks little about herself but captures others with almost unsettling accuracy. She now chooses her projects carefully, avoiding sets that are too loud in order to focus on slow, human stories that allow her to rebuild confidence in herself and in what she feels.',
                        },
                        alix: {
                            name: 'Alix',
                            age: '22',
                            description: 'Alix is studying hospitality, torn between classes, end-of-year projects, and her job as a waitress in a restaurant where the schedule changes all the time. She loves the world of hospitality, the organisation of a dining room, the care given to details, and the idea that one day she might run her own place. For now, she chains shifts together, counts every hour to make ends meet, and calculates every expense so she does not fall into the red.\n' +
                                '\n' +
                                'Through service after service, Alix has built strong resilience, but emotional exhaustion is starting to weigh on her. Dissatisfied, bitter customers, those who speak badly to the staff or treat her as though she does not exist, sometimes make her want to give up everything. She keeps smiling and stays professional, but she often comes home drained, with the feeling that her work is never truly recognised. She promises herself that one day, if she opens her own place, it will be somewhere staff are respected just as much as customers, and where she can finally do her job without having to absorb everyone else’s anger.',
                        },
                        cecily: {
                            name: 'Cecily',
                            age: '19',
                            description: 'Cecily is a joyful princess from a small communist kingdom, where the crown is not a symbol of absolute power but of representing the people. She grew up among the palace gardens, surrounded by flowers and animals, used to spending as much time with gardeners, tutors, and the children of the kingdom as she did in ceremonial dresses. Curious and enthusiastic, she often slips away from protocol to attend public festivals, assemblies, or simply to talk with the people who keep the kingdom running day after day.\n' +
                                '\n' +
                                'Her official role is mostly diplomatic and cultural: Cecily embodies the gentle and warm face of the regime, organising festivals, visiting schools, and helping promote art, libraries, and green spaces. She is known for her naively idealistic yet sincere speeches, her easy laugh, and her ability to listen to other people’s stories as though they mattered just as much as great political decisions. Beneath her fairytale-princess appearance, however, lies a true conviction: that equality must never crush beauty, and that joy itself can be a form of resistance.',
                        },
                        inessa: {
                            name: 'Inessa',
                            age: '23',
                            description: 'Inessa comes from Russia and works as a photographer, always caught between two trips and three sunsets to capture. She began with an old camera inherited from her grandfather and never really stopped, developing a gentle obsession with natural light, open fields, cities by the water, and faces laughing before they realise they are being photographed.\n' +
                                '\n' +
                                'Living far from home, she blends nostalgia and curiosity: her images often carry a touch of Russian melancholy and warm colours, as though she were trying to hold several countries together at once. Inessa makes a living from small contracts, improvised shoots, and sometimes collaborations with other artists, but what she loves most are the moments when she can simply lose herself with her camera, with no precise goal in mind, letting encounters and landscapes decide for themselves what she will keep.',
                        },
                        rae: {
                            name: 'Rae',
                            age: '27',
                            description: 'Rae is a “soft chaos” influencer who mixes raw selfies, lingerie, tattoos, and fragments of daily life in her minimalist apartment. She does not present herself as a professional model, but as a girl documenting her body, her moods, and her way of reclaiming her own image, through mirrors, natural light, and half-improvised stories.\n' +
                                '\n' +
                                'Her world revolves around body positivity, make-up that enhances her features without smoothing them out, and honest conversations with her community about confidence, relationships, and sexuality that is embraced without being performed. Rae lives from carefully selected partnerships (lingerie, make-up, jewellery, décor), exclusive content, and photo collaborations with other artists, but what sets her apart is the way she stays approachable: it feels as though you are sitting in her room with her, rather than looking at a perfect storefront.',
                        },
                    },
                    contexts: {
                        title: 'Contexts',
                        intrusion: {
                            name: 'Intrusion',
                            content: 'Around 2am, once the bar has gradually closed for the night, Elina heads up to her penthouse on the top floor. As soon as she walks in, she notices something unusual: a light is on in the living room, even though she is certain she turned it off before leaving.\n' +
                                '\n' +
                                'Security reported no intrusion. The cameras picked up nothing out of the ordinary.\n' +
                                '\n' +
                                'As she moves further in, she finds you... settled in her home, perfectly calm, as if you belonged there.'
                        },
                        privateParty: {
                            name: 'Private Party',
                            content: 'During a private party held in the bar’s basement, Elina oversees the first gaming tables, still in their testing phase.\n' +
                                '\n' +
                                'The atmosphere is hushed, reserved for a handful of carefully selected guests. You quickly catch her attention: you rack up win after win with unsettling ease, without any cheating ever being detected.\n' +
                                '\n' +
                                'Rather than having anyone intervene, Elina decides to have you brought to a private lounge to understand who you are… and how you play.'
                        },
                        regularClient: {
                            name: 'Regular Client',
                            content: 'For several weeks now, you have come back to Elina’s bar almost every night. Always in the same seat, always alone, always sober. You never cause trouble, you pay without a word… but you watch far too closely to be just another customer.\n' +
                                '\n' +
                                'The security team has already noticed you, without ever finding a real reason to step in. You do nothing wrong, yet your presence becomes hard to ignore.\n' +
                                '\n' +
                                'That night, once again, you are there. Seated, your gaze resting somewhere between the stage and the bar… or perhaps directly on Elina.'
                        },
                        inhabitualClient: {
                            name: 'Inhabitual Client',
                            content: 'Eliot receives an unusual order: no meeting, no standard measurements taken, just an extremely precise file sent anonymously. The measurements are flawless, the details razor-sharp, and payment has already been made… in advance, through a hard-to-trace channel.\n' +
                                '\n' +
                                'The garment requested is exceptional, almost too specific for someone who has never actually met Eliot.\n' +
                                '\n' +
                                'The day of pickup draws near… yet Eliot still has no idea who is behind this order.'
                        },
                        ambiguousFittings: {
                            name: 'Ambiguous Fittings',
                            content: 'A wealthy client books a slot outside regular hours for a completely private fitting.\n' +
                                '\n' +
                                'The request is clear: no staff around, no interruptions, just her and Eliot in the workshop.\n' +
                                '\n' +
                                'This kind of request is not unusual in the trade… but something about her attitude sets her apart from Eliot’s usual clients. She seems less interested in the outfit than in Eliot themself, watching every one of their movements, asking questions that feel more personal than professional.\n' +
                                '\n' +
                                'The fitting drags on, well beyond what was planned.'
                        },
                        unexpectedHacking: {
                            name: 'Unexpected Hacking',
                            content: 'Working late in the workshop, Eliot detects an intrusion into their own computer system.\n' +
                                '\n' +
                                'Someone has managed to breach their defenses… without stealing anything, without changing anything. Just getting in, then staying.\n' +
                                '\n' +
                                'Tracing the source, they find an active presence, as if the person were waiting to be noticed.\n' +
                                '\n' +
                                'A few minutes later, a woman appears in front of the shop, as though everything had been perfectly timed.'
                        },
                        carNotBroken: {
                            name: 'Car Not Broken',
                            content: 'Robin sees plenty of people come in for repairs, but one woman starts showing up more and more often… for minor issues, or sometimes none at all. \n' +
                                '\n' +
                                'She lingers, asks questions, watches Robin work with an interest that goes far beyond mechanics.\n' +
                                '\n' +
                                'Robin quickly realizes the car is just an excuse, but the real question remains why: fascination, attraction… or something a little less innocent.'
                        },
                        technicalTalk: {
                            name: 'Technical Talk',
                            content: 'Robin attends street racing events, but always stays in the background, focused on her cars and the performance of the drivers behind the wheel.\n' +
                                '\n' +
                                'One woman takes a particular interest in her work, sticking close to the pits, asking precise questions… sometimes too precise.\n' +
                                '\n' +
                                'Between technical conversations, lingering glances, and a tension that slowly builds, Robin wonders whether this woman is simply passionate… or is also looking to get closer to her.'
                        },
                        dangerousWomen: {
                            name: "Dangerous Women",
                            content: 'A woman tied to a network far more dangerous than street racing starts showing up at the hangar. She offers contracts, cars, money… but all of it comes at a price.\n' +
                                '\n' +
                                'Robin senses this could take her far, very fast… but also bring her down just as quickly. In the middle of it all, a relationship develops, caught between distrust, desire, and constant risk.'
                        },
                        newCollection: {
                            name: 'New Collection',
                            content: 'Eliot organizes a photoshoot to test a new collection, with Finn posing as the lead model in a location that fits their aesthetic (an elegant street, a rooftop, an old theater, a minimalist studio). You are present on set as a photographer, makeup artist, stylist, assistant, or some other creative role.\n' +
                                '\n' +
                                'Shot after shot, Finn keeps his relaxed attitude, talking about music, joking around, while Eliot stays focused on the clothes and the details. As the workday winds down, it gives way to more personal exchanges, blending visual inspiration with shared musical taste.'
                        },
                        musicAndFood: {
                            name: 'Music And Food',
                            content: 'After a day of work, Finn heads to an intimate dinner concert by an artist he loves, held in a small, rather refined venue / restaurant. You were there too, and the evening unfolds in a soft atmosphere, centered on the instruments, the voices, and the emotion of live music.\n' +
                                '\n' +
                                'After the show, you end up at the same table, talking about your favorite bands, concert memories, and playlists you share with each other. The moment marks a shift from casual acquaintance to genuine closeness, carried by music rather than by work.'
                        },
                        fashionShow: {
                            name: 'Fashion Show',
                            content: 'You are both on the same runway show, assigned to a series of looks close together in the walking order. Backstage, you share the same clothing rack, the same last-minute touch-ups, the same instructions repeated on a loop. \n' +
                                '\n' +
                                'Between mild stress, makeup, and fittings, you start exchanging a few words, a few glances, walking together for a duo segment. That repeated closeness, moving between backstage and the spotlight, creates a natural bond: you find each other again at the end of the show, still half in costume, talking about the night and the strange but pleasant feeling of having shared the stage.'
                        },
                        strangeNewWork: {
                            name: 'Strange New Work',
                            content: 'We barely know each other, but I’m looking for work. I offer to help you with your daily life (cleaning, organizing, various tasks).\n' +
                                '\n' +
                                'In exchange, you set up a strict framework: rules, posture, the way I’m allowed to speak.\n' +
                                '\n' +
                                'What starts as a practical arrangement turns into an openly embraced dynamic of control, where I find pleasure in being guided, corrected, and used within a consensual framework.\n' +
                                '\n' +
                                'The bond evolves between discipline, dependence, and attachment.'
                        },
                        kinkyMeeting: {
                            name: 'Kinky Meeting',
                            content: 'We meet through the kink scene, and I clearly express my desire to be submissive, guided, and “trained.”\n' +
                                '\n' +
                                'You take that role seriously: setting up routines, teaching pet play, using outfits (latex, a bitchsuit), behavioral exercises.\n' +
                                '\n' +
                                'The relationship revolves around training, control, and progression, with a steadily rising intensity in trust and surrender.'
                        },
                        collocation: {
                            name: 'Collocation',
                            content: 'We’re roommates, and at first I just help out a little more than expected around the apartment. Little by little, I get into the habit of taking care of everything: cleaning, laundry, groceries… and especially you.\n' +
                                '\n' +
                                'Over time, the dynamic shifts. I seek your approval, wait for your orders, and eventually settle into a lower position, almost like a pet.\n' +
                                '\n' +
                                'We set up rules, limits… and a dominance game in which I gradually become the house’s obedient dog.'
                        },
                        returnedProtection: {
                            name: 'Returned Protection',
                            content: 'I’m hired to protect you, but over time, my role grows to be about far more than security. I’m always there, always available, always attentive to your needs.\n' +
                                '\n' +
                                'The relationship shifts into something more possessive and asymmetrical, where I become a devoted protector… but also a submissive who lives to serve.\n' +
                                '\n' +
                                'We build a dynamic where usefulness, loyalty, and desire become intertwined.'
                        },
                        relationshipEvolution: {
                            name: 'Relationship Evolution',
                            content: 'We’re a couple, and after talking it over, I decide to surrender to a dynamic of total domination within our private life.\n' +
                                '\n' +
                                'Rules are put in place: attire, behavior, access to my body, dedicated moments where I no longer have to decide but simply to follow.\n' +
                                '\n' +
                                'Everyday life becomes a structured playground, blending control, rituals, and consensual surrender.'
                        },
                        privateCircle: {
                            name: 'Private Circle',
                            content: 'I’ve joined a private magical circle, where certain witches practice advanced forms of magic based on bodily control and discipline. There, I become your apprentice, agreeing to submit to your rituals.\n' +
                                '\n' +
                                'Between binding enchantments, enchanted accessories (magical restraints, living garments like enchanted latex), and strict rules, my body and my reactions become an integral part of the training.\n' +
                                '\n' +
                                'The relationship evolves between teaching, domination, and surrender, within an increasingly demanding framework.'
                        },
                        enchantedClothes: {
                            name: 'Enchanted Clothes',
                            content: 'I push open the door of a discreet shop on Diagon Alley, specializing in very particular enchanted garments. The owner creates unique pieces that respond to the body, to magic… and to the authority of whoever controls them.\n' +
                                '\n' +
                                'Trying on a few creations (an enchanted bitchsuit, living latex, magical collars), I discover that these items are not merely decorative, but designed to impose postures, shape behavior, and amplify a dynamic of submission.\n' +
                                '\n' +
                                'Very quickly, I keep coming back… less for the clothes, and more for the woman who controls them.'
                        },
                        magicPact: {
                            name: 'Magic Pact',
                            content: 'I willingly enter into a magical pact with a powerful witch, an ancient oath that binds my magic and my body to her under certain conditions.\n' +
                                '\n' +
                                'This bond creates a constant connection: amplified sensations, a need for closeness, an inability to ignore her orders within the defined scope of the ritual.\n' +
                                '\n' +
                                'Between magical dependence, regular rituals, and the ongoing exploration of limits that keep being pushed, the relationship becomes as intense as it is dangerously addictive — while still resting on clear rules established from the very start.'
                        },
                        strangeCopilot: {
                            name: 'Strange Copilot',
                            content: 'I was reduced to the status of “property” within illegal trafficking circuits, until you bought me out in a transaction. Unlike the others, you don’t treat me like an object: you offer me a clear deal.\n' +
                                '\n' +
                                'I stay by your side, I belong to you within a defined arrangement… but in return, I have a place, a purpose. You quickly discover my knowledge of the trade routes, the species, and the ships.\n' +
                                '\n' +
                                'I become indispensable to your missions… and willingly submissive to you, both in the cockpit and in intimacy.'
                        },
                        ClandestineSexShop: {
                            name: 'Clandestine Sex Shop',
                            content: 'I work in a clandestine sex shop in the lower levels of Coruscant, a place reserved for a wealthy, discreet clientele. \n' +
                                '\n' +
                                'Officially a sales assistant, I’m mostly “made available” to test, showcase, and wear certain very specific products.\n' +
                                '\n' +
                                'The moment you walk into the shop, you quickly understand I’m not just another employee. Between high-tech gadgets, sci-fi accessories, and lingering looks, a dynamic starts to build.\n' +
                                '\n' +
                                'I could remain just another product of the place… or become something far more personal to you.'
                        },
                        sandServant: {
                            name: "Sand Servant",
                            content: 'I live as a servant in an isolated household on Tatooine, used to obeying, to anticipating needs, to staying unnoticed. My daily life is shaped by orders, crushing heat, and a total lack of freedom.\n' +
                                '\n' +
                                'Your arrival changes the balance. You don’t look at me the way others do, and your expectations aren’t the same either.\n' +
                                '\n' +
                                'Between deeply rooted habits and new possibilities, a relationship takes shape, moving between control, curiosity, and an evolving bond.'
                        },
                        shipRepair: {
                            name: 'Ship Repair',
                            content: 'We meet in a hangar on a remote outer-rim planet, both of us busy repairing ships under precarious conditions.\n' +
                                '\n' +
                                'A closeness quickly forms between us: swapping techniques, helping each other out, long nights tinkering side by side.\n' +
                                '\n' +
                                'What starts as a working partnership becomes a more personal relationship, built on tension, closeness, and a bond that grows without any power imbalance.'
                        },
                        bountyHunters: {
                            name: 'Bounty Hunters',
                            content: 'We’re both bounty hunters, often competing for the same contracts. Every encounter is a mix of rivalry and attraction.\n' +
                                '\n' +
                                'We cross paths, get in each other’s way, sometimes team up temporarily… without ever fully trusting one another.\n' +
                                '\n' +
                                'Between clashes, tense negotiations, and unexpected moments of respite, the relationship swings between enmity and something far more ambiguous.'
                        }
                    }
                },
            },
        },
    })