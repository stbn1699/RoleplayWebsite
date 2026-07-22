import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en'],
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
                        intrusion: {
                            name: 'Intrusion',
                            content: 'Vers 2h du matin, après la fermeture progressive du bar, Elina remonte à son penthouse situé au dernier étage. En entrant, elle remarque immédiatement un détail inhabituel : une lumière est allumée dans le salon, alors qu’elle est certaine de l’avoir éteinte en partant.\n' +
                                '\n' +
                                'La sécurité n’a signalé aucune intrusion. Les caméras n’ont rien relevé d’anormal.\n' +
                                '\n' +
                                'En avançant, elle te découvre... installée chez elle, parfaitement calme, comme si elle était à sa place.'
                        },
                        privateParty: {
                            name: 'Private Party',
                            content: 'Lors d’une soirée privée organisée dans le sous-sol du bar, Elina supervise les premières tables de jeu encore en test.\n' +
                                '\n' +
                                'L’ambiance est feutrée, réservée à une poignée de clients triés sur le volet. Rapidement, tu attire son attention : tu enchaîne les victoires avec une aisance déconcertante, sans qu’aucune triche ne soit détectée.\n' +
                                '\n' +
                                ' Plutôt que de faire intervenir qui que ce soit, Elina décide de la faire venir dans un salon privé pour comprendre qui elle est… et comment elle joue.'
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
                    }
                },
            },
        },
    })

export default i18n