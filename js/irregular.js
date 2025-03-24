const irregular = [
    {
      infinitive: "être",
      translation: "to be",
      conjugations: {
        "je": "suis",
        "tu": "es",
        "il/elle/on": "est",
        "nous": "sommes",
        "vous": "êtes",
        "ils/elles": "sont"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "toujours prêt à aider.", pronunciation: "/sɥi/" },
        { subject: "tu", prefix: "", suffix: "en retard ce matin.", pronunciation: "/ɛ/" },
        { subject: "on", prefix: "", suffix: "déjà dans la voiture.", pronunciation: "/ɛ/" },
        { subject: "nous", prefix: "", suffix: "contents de te voir.", pronunciation: "/sɔm/" },
        { subject: "vous", prefix: "", suffix: "vraiment en forme?", pronunciation: "/ɛt/" },
        { subject: "ils", prefix: "", suffix: "souvent occupés le week-end.", pronunciation: "/sɔ̃/" }
      ]
    },
    {
      infinitive: "avoir",
      translation: "to have",
      conjugations: {
        "je": "ai",
        "tu": "as",
        "il/elle/on": "a",
        "nous": "avons",
        "vous": "avez",
        "ils/elles": "ont"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "souvent faim le soir.", pronunciation: "/e/" },
        { subject: "tu", prefix: "", suffix: "de la chance?", pronunciation: "/a/" },
        { subject: "on", prefix: "", suffix: "un peu de temps libre aujourd'hui.", pronunciation: "/a/" },
        { subject: "nous", prefix: "", suffix: "besoin d'un coup de main.", pronunciation: "/a.vɔ̃/" },
        { subject: "vous", prefix: "", suffix: "encore des questions?", pronunciation: "/a.ve/" },
        { subject: "ils", prefix: "", suffix: "des projets pour les vacances.", pronunciation: "/ɔ̃/" }
      ]
    },
    {
      infinitive: "aller",
      translation: "to go",
      conjugations: {
        "je": "vais",
        "tu": "vas",
        "il/elle/on": "va",
        "nous": "allons",
        "vous": "allez",
        "ils/elles": "vont"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "toujours au travail à pied.", pronunciation: "/vɛ/" },
        { subject: "tu", prefix: "", suffix: "chercher du pain?", pronunciation: "/va/" },
        { subject: "on", prefix: "", suffix: "où ce week-end?", pronunciation: "/va/" },
        { subject: "nous", prefix: "", suffix: "en France cet été.", pronunciation: "/a.lɔ̃/" },
        { subject: "vous", prefix: "", suffix: "souvent en retard?", pronunciation: "/a.le/" },
        { subject: "ils", prefix: "", suffix: "au cinéma ensemble.", pronunciation: "/vɔ̃/" }
      ]
    },
    {
      infinitive: "faire",
      translation: "to do / to make",
      conjugations: {
        "je": "fais",
        "tu": "fais",
        "il/elle/on": "fait",
        "nous": "faisons",
        "vous": "faites",
        "ils/elles": "font"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "la cuisine tous les jours.", pronunciation: "/fɛ/" },
        { subject: "tu", prefix: "", suffix: "du sport ce matin?", pronunciation: "/fɛ/" },
        { subject: "on", prefix: "", suffix: "un gâteau pour l'anniversaire.", pronunciation: "/fɛ/" },
        { subject: "nous", prefix: "", suffix: "notre possible pour réussir.", pronunciation: "/fə.zɔ̃/" },
        { subject: "vous", prefix: "", suffix: "vraiment ce qu'il faut?", pronunciation: "/fɛt/" },
        { subject: "ils", prefix: "", suffix: "trop de bruit la nuit.", pronunciation: "/fɔ̃/" }
      ]
    },
    {
      infinitive: "venir",
      translation: "to come",
      conjugations: {
        "je": "viens",
        "tu": "viens",
        "il/elle/on": "vient",
        "nous": "venons",
        "vous": "venez",
        "ils/elles": "viennent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "à ta fête ce soir.", pronunciation: "/vjɛ̃/" },
        { subject: "tu", prefix: "", suffix: "avec qui?", pronunciation: "/vjɛ̃/" },
        { subject: "on", prefix: "", suffix: "de loin pour assister à l'événement.", pronunciation: "/vjɛ̃/" },
        { subject: "nous", prefix: "", suffix: "de partir si ça te convient.", pronunciation: "/və.nɔ̃/" },
        { subject: "vous", prefix: "", suffix: "directement de la gare?", pronunciation: "/və.ne/" },
        { subject: "ils", prefix: "", suffix: "chaque année nous rendre visite.", pronunciation: "/vjɛn/" }
      ]
    },
    {
      infinitive: "prendre",
      translation: "to take",
      conjugations: {
        "je": "prends",
        "tu": "prends",
        "il/elle/on": "prend",
        "nous": "prenons",
        "vous": "prenez",
        "ils/elles": "prennent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "toujours un café le matin.", pronunciation: "/pʁɑ̃/" },
        { subject: "tu", prefix: "", suffix: "la voiture ou le vélo?", pronunciation: "/pʁɑ̃/" },
        { subject: "on", prefix: "", suffix: "son temps, on n'est pas pressé.", pronunciation: "/pʁɑ̃/" },
        { subject: "nous", prefix: "", suffix: "l'avion demain à 8h.", pronunciation: "/pʁə.nɔ̃/" },
        { subject: "vous", prefix: "", suffix: "souvent des risques?", pronunciation: "/pʁə.ne/" },
        { subject: "ils", prefix: "", suffix: "trop de bagages en voyage.", pronunciation: "/pʁɛn/" }
      ]
    },
    {
      infinitive: "vouloir",
      translation: "to want",
      conjugations: {
        "je": "veux",
        "tu": "veux",
        "il/elle/on": "veut",
        "nous": "voulons",
        "vous": "voulez",
        "ils/elles": "veulent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "toujours réussir.", pronunciation: "/vø/" },
        { subject: "tu", prefix: "", suffix: "sortir ce soir?", pronunciation: "/vø/" },
        { subject: "on", prefix: "", suffix: "avoir plus de temps libre.", pronunciation: "/vø/" },
        { subject: "nous", prefix: "", suffix: "améliorer notre français.", pronunciation: "/vu.lɔ̃/" },
        { subject: "vous", prefix: "", suffix: "un café ou un thé?", pronunciation: "/vu.le/" },
        { subject: "ils", prefix: "", suffix: "simplement du calme.", pronunciation: "/vœl/" }
      ]
    },
    {
      infinitive: "pouvoir",
      translation: "to be able to / can",
      conjugations: {
        "je": "peux",
        "tu": "peux",
        "il/elle/on": "peut",
        "nous": "pouvons",
        "vous": "pouvez",
        "ils/elles": "peuvent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "venir t'aider demain.", pronunciation: "/pø/" },
        { subject: "tu", prefix: "", suffix: "me prêter un stylo?", pronunciation: "/pø/" },
        { subject: "on", prefix: "", suffix: "toujours rêver!", pronunciation: "/pø/" },
        { subject: "nous", prefix: "", suffix: "partir plus tôt que prévu.", pronunciation: "/pu.vɔ̃/" },
        { subject: "vous", prefix: "", suffix: "répéter, s’il vous plaît?", pronunciation: "/pu.ve/" },
        { subject: "ils", prefix: "", suffix: "sortir sans autorisation spéciale?", pronunciation: "/pœv/" }
      ]
    },
    {
      infinitive: "devoir",
      translation: "to have to / must",
      conjugations: {
        "je": "dois",
        "tu": "dois",
        "il/elle/on": "doit",
        "nous": "devons",
        "vous": "devez",
        "ils/elles": "doivent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "absolument y aller.", pronunciation: "/dwa/" },
        { subject: "tu", prefix: "", suffix: "finir ton travail avant de partir.", pronunciation: "/dwa/" },
        { subject: "on", prefix: "", suffix: "respecter les règles.", pronunciation: "/dwa/" },
        { subject: "nous", prefix: "", suffix: "être prudents en conduisant.", pronunciation: "/də.vɔ̃/" },
        { subject: "vous", prefix: "", suffix: "passer par ici pour entrer?", pronunciation: "/də.ve/" },
        { subject: "ils", prefix: "", suffix: "apprendre cette leçon.", pronunciation: "/dwav/" }
      ]
    },
    {
      infinitive: "savoir",
      translation: "to know (a fact)",
      conjugations: {
        "je": "sais",
        "tu": "sais",
        "il/elle/on": "sait",
        "nous": "savons",
        "vous": "savez",
        "ils/elles": "savent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "déjà la réponse.", pronunciation: "/sɛ/" },
        { subject: "tu", prefix: "", suffix: "cuisiner toutes ces recettes?", pronunciation: "/sɛ/" },
        { subject: "on", prefix: "", suffix: "peu de choses sur ce sujet.", pronunciation: "/sɛ/" },
        { subject: "nous", prefix: "", suffix: "très bien où aller.", pronunciation: "/sa.vɔ̃/" },
        { subject: "vous", prefix: "", suffix: "pourquoi il est en retard?", pronunciation: "/sa.ve/" },
        { subject: "ils", prefix: "", suffix: "comment résoudre ce problème.", pronunciation: "/sav/" }
      ]
    },
    {
      infinitive: "voir",
      translation: "to see",
      conjugations: {
        "je": "vois",
        "tu": "vois",
        "il/elle/on": "voit",
        "nous": "voyons",
        "vous": "voyez",
        "ils/elles": "voient"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "un film ce soir.", pronunciation: "/vwa/" },
        { subject: "tu", prefix: "", suffix: "quelque chose au loin?", pronunciation: "/vwa/" },
        { subject: "on", prefix: "", suffix: "trop de détails parfois.", pronunciation: "/vwa/" },
        { subject: "nous", prefix: "", suffix: "clairement la différence.", pronunciation: "/vwa.jɔ̃/" },
        { subject: "vous", prefix: "", suffix: "ce que j'essaie de montrer?", pronunciation: "/vwa.je/" },
        { subject: "ils", prefix: "", suffix: "des opportunités partout.", pronunciation: "/vwajt/" }
      ]
    },
    {
      infinitive: "mettre",
      translation: "to put / to place",
      conjugations: {
        "je": "mets",
        "tu": "mets",
        "il/elle/on": "met",
        "nous": "mettons",
        "vous": "mettez",
        "ils/elles": "mettent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "mes clés sur la table.", pronunciation: "/mɛ/" },
        { subject: "tu", prefix: "", suffix: "toujours du temps pour les amis.", pronunciation: "/mɛ/" },
        { subject: "on", prefix: "", suffix: "de la musique pour se détendre.", pronunciation: "/mɛ/" },
        { subject: "nous", prefix: "", suffix: "en ordre nos affaires.", pronunciation: "/mɛ.tɔ̃/" },
        { subject: "vous", prefix: "", suffix: "les choses à leur place?", pronunciation: "/mɛ.te/" },
        { subject: "ils", prefix: "", suffix: "souvent beaucoup d'effort dans leur travail.", pronunciation: "/mɛt/" }
      ]
    },
    {
      infinitive: "dire",
      translation: "to say / to tell",
      conjugations: {
        "je": "dis",
        "tu": "dis",
        "il/elle/on": "dit",
        "nous": "disons",
        "vous": "dites",
        "ils/elles": "disent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "toujours la vérité.", pronunciation: "/di/" },
        { subject: "tu", prefix: "", suffix: "quelque chose de gentil?", pronunciation: "/di/" },
        { subject: "on", prefix: "", suffix: "que tout est possible.", pronunciation: "/di/" },
        { subject: "nous", prefix: "", suffix: "souvent la même chose.", pronunciation: "/di.zɔ̃/" },
        { subject: "vous", prefix: "", suffix: "votre avis sincèrement?", pronunciation: "/dit/" },
        { subject: "ils", prefix: "", suffix: "des mensonges parfois.", pronunciation: "/diz/" }
      ]
    },
    {
      infinitive: "lire",
      translation: "to read",
      conjugations: {
        "je": "lis",
        "tu": "lis",
        "il/elle/on": "lit",
        "nous": "lisons",
        "vous": "lisez",
        "ils/elles": "lisent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "un roman par semaine.", pronunciation: "/li/" },
        { subject: "tu", prefix: "", suffix: "encore les journaux papiers?", pronunciation: "/li/" },
        { subject: "on", prefix: "", suffix: "souvent des bandes dessinées.", pronunciation: "/li/" },
        { subject: "nous", prefix: "", suffix: "tranquillement au café.", pronunciation: "/li.zɔ̃/" },
        { subject: "vous", prefix: "", suffix: "des livres numériques sur tablette?", pronunciation: "/li.ze/" },
        { subject: "ils", prefix: "", suffix: "beaucoup pour se documenter.", pronunciation: "/liz/" }
      ]
    },
    {
      infinitive: "écrire",
      translation: "to write",
      conjugations: {
        "je": "écris",
        "tu": "écris",
        "il/elle/on": "écrit",
        "nous": "écrivons",
        "vous": "écrivez",
        "ils/elles": "écrivent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "dans mon journal intime.", pronunciation: "/e.kʁi/" },
        { subject: "tu", prefix: "", suffix: "encore tes lettres à la main?", pronunciation: "/e.kʁi/" },
        { subject: "on", prefix: "", suffix: "souvent des courriels formels.", pronunciation: "/e.kʁi/" },
        { subject: "nous", prefix: "", suffix: "un roman en collaboration.", pronunciation: "/e.kʁi.vɔ̃/" },
        { subject: "vous", prefix: "", suffix: "à vos amis à l'étranger?", pronunciation: "/e.kʁi.ve/" },
        { subject: "ils", prefix: "", suffix: "des articles pour le journal local.", pronunciation: "/e.kʁiv/" }
      ]
    },
    {
      infinitive: "sortir",
      translation: "to go out / to exit",
      conjugations: {
        "je": "sors",
        "tu": "sors",
        "il/elle/on": "sort",
        "nous": "sortons",
        "vous": "sortez",
        "ils/elles": "sortent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "au cinéma tous les mardis.", pronunciation: "/sɔʁ/" },
        { subject: "tu", prefix: "", suffix: "avec nous ce soir?", pronunciation: "/sɔʁ/" },
        { subject: "on", prefix: "", suffix: "souvent en boîte le week-end.", pronunciation: "/sɔʁ/" },
        { subject: "nous", prefix: "", suffix: "rarement pendant la semaine.", pronunciation: "/sɔʁ.tɔ̃/" },
        { subject: "vous", prefix: "", suffix: "en ville après le travail?", pronunciation: "/sɔʁ.te/" },
        { subject: "ils", prefix: "", suffix: "toujours à la même heure.", pronunciation: "/sɔʁt/" }
      ]
    },
    {
      infinitive: "partir",
      translation: "to leave",
      conjugations: {
        "je": "pars",
        "tu": "pars",
        "il/elle/on": "part",
        "nous": "partons",
        "vous": "partez",
        "ils/elles": "partent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "en vacances demain matin.", pronunciation: "/paʁ/" },
        { subject: "tu", prefix: "", suffix: "sans dire au revoir?", pronunciation: "/paʁ/" },
        { subject: "on", prefix: "", suffix: "dès que tout est prêt.", pronunciation: "/paʁ/" },
        { subject: "nous", prefix: "", suffix: "ensemble pour le week-end.", pronunciation: "/paʁ.tɔ̃/" },
        { subject: "vous", prefix: "", suffix: "dans cinq minutes, c'est ça?", pronunciation: "/paʁ.te/" },
        { subject: "ils", prefix: "", suffix: "avant la fin de la réunion.", pronunciation: "/paʁt/" }
      ]
    },
    {
      infinitive: "courir",
      translation: "to run",
      conjugations: {
        "je": "cours",
        "tu": "cours",
        "il/elle/on": "court",
        "nous": "courons",
        "vous": "courez",
        "ils/elles": "courent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "tous les matins pour me maintenir en forme.", pronunciation: "/kuʁ/" },
        { subject: "tu", prefix: "", suffix: "dans le parc le week-end?", pronunciation: "/kuʁ/" },
        { subject: "on", prefix: "", suffix: "ensemble pour se motiver.", pronunciation: "/kuʁ/" },
        { subject: "nous", prefix: "", suffix: "un marathon en fin d'année.", pronunciation: "/ku.ʁɔ̃/" },
        { subject: "vous", prefix: "", suffix: "de temps en temps avec un ami?", pronunciation: "/ku.ʁe/" },
        { subject: "ils", prefix: "", suffix: "plus vite que nous!", pronunciation: "/kuʁt/" }
      ]
    },
    {
      infinitive: "recevoir",
      translation: "to receive",
      conjugations: {
        "je": "reçois",
        "tu": "reçois",
        "il/elle/on": "reçoit",
        "nous": "recevons",
        "vous": "recevez",
        "ils/elles": "reçoivent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "un colis aujourd'hui.", pronunciation: "/ʁə.swa/" },
        { subject: "tu", prefix: "", suffix: "souvent des lettres de tes amis?", pronunciation: "/ʁə.swa/" },
        { subject: "on", prefix: "", suffix: "beaucoup d'appels en ce moment.", pronunciation: "/ʁə.swa/" },
        { subject: "nous", prefix: "", suffix: "des invités ce soir.", pronunciation: "/ʁə.sə.vɔ̃/" },
        { subject: "vous", prefix: "", suffix: "correctement nos messages?", pronunciation: "/ʁə.sə.ve/" },
        { subject: "ils", prefix: "", suffix: "régulièrement de bonnes nouvelles.", pronunciation: "/ʁə.swav/" }
      ]
    },
    {
      infinitive: "boire",
      translation: "to drink",
      conjugations: {
        "je": "bois",
        "tu": "bois",
        "il/elle/on": "boit",
        "nous": "buvons",
        "vous": "buvez",
        "ils/elles": "boivent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "trop de café le matin.", pronunciation: "/bwa/" },
        { subject: "tu", prefix: "", suffix: "de l'eau en quantité suffisante?", pronunciation: "/bwa/" },
        { subject: "on", prefix: "", suffix: "quelquefois un thé ensemble.", pronunciation: "/bwa/" },
        { subject: "nous", prefix: "", suffix: "un jus de fruits frais.", pronunciation: "/by.vɔ̃/" },
        { subject: "vous", prefix: "", suffix: "souvent du vin rouge au dîner?", pronunciation: "/by.ve/" },
        { subject: "ils", prefix: "", suffix: "avec modération.", pronunciation: "/bwav/" }
      ]
    },
    {
      infinitive: "entreprendre",
      translation: "to undertake",
      conjugations: {
        "je": "entreprends",
        "tu": "entreprends",
        "il/elle/on": "entreprend",
        "nous": "entreprenons",
        "vous": "entreprenez",
        "ils/elles": "entreprennent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "un long voyage l'année prochaine.", pronunciation: "/ɑ̃.tʁə.pʁɑ̃/" },
        { subject: "tu", prefix: "", suffix: "un nouveau projet ambitieux?", pronunciation: "/ɑ̃.tʁə.pʁɑ̃/" },
        { subject: "on", prefix: "", suffix: "d'abord les démarches administratives.", pronunciation: "/ɑ̃.tʁə.pʁɑ̃/" },
        { subject: "nous", prefix: "", suffix: "d'étudier tous les aspects avant d'agir.", pronunciation: "/ɑ̃.tʁə.pʁə.nɔ̃/" },
        { subject: "vous", prefix: "", suffix: "quelque chose de similaire?", pronunciation: "/ɑ̃.tʁə.pʁə.ne/" },
        { subject: "ils", prefix: "", suffix: "souvent trop d'initiatives à la fois.", pronunciation: "/ɑ̃.tʁə.pʁɛn/" }
      ]
    },
  ];
