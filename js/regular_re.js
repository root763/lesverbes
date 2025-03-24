const regular_re = [
    {
      infinitive: "attendre",
      translation: "to wait",
      conjugations: {
        "je": "attends",
        "tu": "attends",
        "il/elle/on": "attend",
        "nous": "attendons",
        "vous": "attendez",
        "ils/elles": "attendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "le bus depuis une heure.", pronunciation: "/a.tɑ̃/" },
        { subject: "tu", prefix: "", suffix: "quelqu'un?", pronunciation: "/a.tɑ̃/" },
        { subject: "on", prefix: "", suffix: "patiemment notre tour.", pronunciation: "/a.tɑ̃/" },
        { subject: "nous", prefix: "", suffix: "la fin du spectacle.", pronunciation: "/a.tɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "souvent au téléphone, non?", pronunciation: "/a.tɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "devant le cinéma.", pronunciation: "/a.tɑ̃d/" }
      ]
    },
    {
      infinitive: "entendre",
      translation: "to hear",
      conjugations: {
        "je": "entends",
        "tu": "entends",
        "il/elle/on": "entend",
        "nous": "entendons",
        "vous": "entendez",
        "ils/elles": "entendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "des bruits étranges la nuit.", pronunciation: "/ɑ̃.tɑ̃/" },
        { subject: "tu", prefix: "", suffix: "la musique d'ici?", pronunciation: "/ɑ̃.tɑ̃/" },
        { subject: "on", prefix: "", suffix: "mieux quand on est concentré.", pronunciation: "/ɑ̃.tɑ̃/" },
        { subject: "nous", prefix: "", suffix: "les voisins chanter sous la douche.", pronunciation: "/ɑ̃.tɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "vraiment tout ce qui se dit?", pronunciation: "/ɑ̃.tɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "des rumeurs dans le quartier.", pronunciation: "/ɑ̃.tɑ̃d/" }
      ]
    },
    {
      infinitive: "rendre",
      translation: "to give back",
      conjugations: {
        "je": "rends",
        "tu": "rends",
        "il/elle/on": "rend",
        "nous": "rendons",
        "vous": "rendez",
        "ils/elles": "rendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "ce livre à la bibliothèque.", pronunciation: "/ʁɑ̃/" },
        { subject: "tu", prefix: "", suffix: "toujours ce que tu empruntes?", pronunciation: "/ʁɑ̃/" },
        { subject: "on", prefix: "", suffix: "hommage aux anciens.", pronunciation: "/ʁɑ̃/" },
        { subject: "nous", prefix: "", suffix: "nos clés au propriétaire.", pronunciation: "/ʁɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "l'argent que vous devez?", pronunciation: "/ʁɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "le devoir à l'heure.", pronunciation: "/ʁɑ̃d/" }
      ]
    },
    {
      infinitive: "descendre",
      translation: "to go down / to descend",
      conjugations: {
        "je": "descends",
        "tu": "descends",
        "il/elle/on": "descend",
        "nous": "descendons",
        "vous": "descendez",
        "ils/elles": "descendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "du train à la prochaine gare.", pronunciation: "/de.sɑ̃/" },
        { subject: "tu", prefix: "", suffix: "cette valise tout seul?", pronunciation: "/de.sɑ̃/" },
        { subject: "on", prefix: "", suffix: "pour faire une pause.", pronunciation: "/de.sɑ̃/" },
        { subject: "nous", prefix: "", suffix: "les escaliers au lieu de prendre l'ascenseur.", pronunciation: "/de.sɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "au rez-de-chaussée, n'est-ce pas?", pronunciation: "/de.sɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "rapidement pour ne pas être en retard.", pronunciation: "/de.sɑ̃d/" }
      ]
    },
    {
      infinitive: "répondre",
      translation: "to answer",
      conjugations: {
        "je": "réponds",
        "tu": "réponds",
        "il/elle/on": "répond",
        "nous": "répondons",
        "vous": "répondez",
        "ils/elles": "répondent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "aux courriels dès que je peux.", pronunciation: "/ʁe.pɔ̃/" },
        { subject: "tu", prefix: "", suffix: "toujours au téléphone en premier.", pronunciation: "/ʁe.pɔ̃/" },
        { subject: "on", prefix: "", suffix: "souvent avec un peu de retard.", pronunciation: "/ʁe.pɔ̃/" },
        { subject: "nous", prefix: "", suffix: "aux questions du professeur ensemble.", pronunciation: "/ʁe.pɔ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "toujours de façon très détaillée?", pronunciation: "/ʁe.pɔ̃.de/" },
        { subject: "ils", prefix: "", suffix: "trop tard aux sollicitations.", pronunciation: "/ʁe.pɔ̃d/" }
      ]
    },
    {
      infinitive: "fondre",
      translation: "to melt",
      conjugations: {
        "je": "fonds",
        "tu": "fonds",
        "il/elle/on": "fond",
        "nous": "fondons",
        "vous": "fondez",
        "ils/elles": "fondent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "du chocolat au bain-marie.", pronunciation: "/fɔ̃/" },
        { subject: "tu", prefix: "", suffix: "toujours ton beurre avant de cuisiner?", pronunciation: "/fɔ̃/" },
        { subject: "on", prefix: "", suffix: "complètement quand il fait chaud.", pronunciation: "/fɔ̃/" },
        { subject: "nous", prefix: "", suffix: "cette cire pour fabriquer des bougies.", pronunciation: "/fɔ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "le fromage pour la fondue?", pronunciation: "/fɔ̃.de/" },
        { subject: "ils", prefix: "", suffix: "très vite au soleil.", pronunciation: "/fɔ̃d/" }
      ]
    },
    {
      infinitive: "prétendre",
      translation: "to claim / pretend",
      conjugations: {
        "je": "prétends",
        "tu": "prétends",
        "il/elle/on": "prétend",
        "nous": "prétendons",
        "vous": "prétendez",
        "ils/elles": "prétendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "avoir raison, mais je peux me tromper.", pronunciation: "/pʁe.tɑ̃/" },
        { subject: "tu", prefix: "", suffix: "connaître la vérité?", pronunciation: "/pʁe.tɑ̃/" },
        { subject: "on", prefix: "", suffix: "souvent tout savoir.", pronunciation: "/pʁe.tɑ̃/" },
        { subject: "nous", prefix: "", suffix: "comprendre la situation.", pronunciation: "/pʁe.tɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "vraiment être experts en la matière?", pronunciation: "/pʁe.tɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "maîtriser le sujet entièrement.", pronunciation: "/pʁe.tɑ̃d/" }
      ]
    },
    {
      infinitive: "tendre",
      translation: "to stretch / to hand out",
      conjugations: {
        "je": "tends",
        "tu": "tends",
        "il/elle/on": "tend",
        "nous": "tendons",
        "vous": "tendez",
        "ils/elles": "tendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "la main à mon ami en difficulté.", pronunciation: "/tɑ̃/" },
        { subject: "tu", prefix: "", suffix: "souvent une perche pour aider.", pronunciation: "/tɑ̃/" },
        { subject: "on", prefix: "", suffix: "à se rapprocher l'un de l'autre.", pronunciation: "/tɑ̃/" },
        { subject: "nous", prefix: "", suffix: "un piège à qui veut nous doubler.", pronunciation: "/tɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "vraiment l'oreille aux autres?", pronunciation: "/tɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "une embuscade à leurs ennemis.", pronunciation: "/tɑ̃d/" }
      ]
    },
    {
      infinitive: "pendre",
      translation: "to hang",
      conjugations: {
        "je": "pends",
        "tu": "pends",
        "il/elle/on": "pend",
        "nous": "pendons",
        "vous": "pendez",
        "ils/elles": "pendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "mon manteau au porte-manteau.", pronunciation: "/pɑ̃/" },
        { subject: "tu", prefix: "", suffix: "les décorations au plafond?", pronunciation: "/pɑ̃/" },
        { subject: "on", prefix: "", suffix: "souvent ses clés à un crochet.", pronunciation: "/pɑ̃/" },
        { subject: "nous", prefix: "", suffix: "le linge après la lessive.", pronunciation: "/pɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "toujours vos vestes correctement?", pronunciation: "/pɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "des tableaux sur chaque mur.", pronunciation: "/pɑ̃d/" }
      ]
    },
    {
      infinitive: "perdre",
      translation: "to lose",
      conjugations: {
        "je": "perds",
        "tu": "perds",
        "il/elle/on": "perd",
        "nous": "perdons",
        "vous": "perdez",
        "ils/elles": "perdent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "souvent mes clés.", pronunciation: "/pɛʁ/" },
        { subject: "tu", prefix: "", suffix: "ton temps à ne rien faire.", pronunciation: "/pɛʁ/" },
        { subject: "on", prefix: "", suffix: "facilement le fil de la discussion.", pronunciation: "/pɛʁ/" },
        { subject: "nous", prefix: "", suffix: "la partie si on ne se concentre pas.", pronunciation: "/pɛʁ.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "vraiment votre patience?", pronunciation: "/pɛʁ.de/" },
        { subject: "ils", prefix: "", suffix: "de l’argent en misant trop.", pronunciation: "/pɛʁd/" }
      ]
    },
    {
      infinitive: "répandre",
      translation: "to spread",
      conjugations: {
        "je": "répands",
        "tu": "répands",
        "il/elle/on": "répand",
        "nous": "répandons",
        "vous": "répandez",
        "ils/elles": "répandent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "la nouvelle sur les réseaux sociaux.", pronunciation: "/ʁe.pɑ̃/" },
        { subject: "tu", prefix: "", suffix: "toujours des rumeurs?", pronunciation: "/ʁe.pɑ̃/" },
        { subject: "on", prefix: "", suffix: "du bonheur autour de nous!", pronunciation: "/ʁe.pɑ̃/" },
        { subject: "nous", prefix: "", suffix: "des graines pour attirer les oiseaux.", pronunciation: "/ʁe.pɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "la bonne parole ou la désinformation?", pronunciation: "/ʁe.pɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "partout des idées nouvelles.", pronunciation: "/ʁe.pɑ̃d/" }
      ]
    },
    {
      infinitive: "confondre",
      translation: "to confuse / to mix up",
      conjugations: {
        "je": "confonds",
        "tu": "confonds",
        "il/elle/on": "confond",
        "nous": "confondons",
        "vous": "confondez",
        "ils/elles": "confondent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "souvent ces deux mots en français.", pronunciation: "/kɔ̃.fɔ̃/" },
        { subject: "tu", prefix: "", suffix: "la réalité et la fiction?", pronunciation: "/kɔ̃.fɔ̃/" },
        { subject: "on", prefix: "", suffix: "encore les jumeaux parfois.", pronunciation: "/kɔ̃.fɔ̃/" },
        { subject: "nous", prefix: "", suffix: "les dates si on ne note pas tout.", pronunciation: "/kɔ̃.fɔ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "quelquefois ces deux concepts?", pronunciation: "/kɔ̃.fɔ̃.de/" },
        { subject: "ils", prefix: "", suffix: "leurs affaires avec celles des autres.", pronunciation: "/kɔ̃.fɔ̃d/" }
      ]
    },
    {
      infinitive: "correspondre",
      translation: "to correspond / to match",
      conjugations: {
        "je": "corresponds",
        "tu": "corresponds",
        "il/elle/on": "correspond",
        "nous": "correspondons",
        "vous": "correspondez",
        "ils/elles": "correspondent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "avec mes amis à l'étranger par email.", pronunciation: "/kɔ.ʁɛs.pɔ̃/" },
        { subject: "tu", prefix: "", suffix: "vraiment aux exigences du poste?", pronunciation: "/kɔ.ʁɛs.pɔ̃/" },
        { subject: "on", prefix: "", suffix: "toujours aux critères recherchés.", pronunciation: "/kɔ.ʁɛs.pɔ̃/" },
        { subject: "nous", prefix: "", suffix: "en anglais pour progresser.", pronunciation: "/kɔ.ʁɛs.pɔ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "souvent par lettre?", pronunciation: "/kɔ.ʁɛs.pɔ̃.de/" },
        { subject: "ils", prefix: "", suffix: "à ce qu'on attend d'eux.", pronunciation: "/kɔ.ʁɛs.pɔ̃d/" }
      ]
    },
    {
      infinitive: "défendre",
      translation: "to defend",
      conjugations: {
        "je": "défends",
        "tu": "défends",
        "il/elle/on": "défend",
        "nous": "défendons",
        "vous": "défendez",
        "ils/elles": "défendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "mes idées fermement.", pronunciation: "/de.fɑ̃/" },
        { subject: "tu", prefix: "", suffix: "toujours ta position sans relâche.", pronunciation: "/de.fɑ̃/" },
        { subject: "on", prefix: "", suffix: "ses droits avec conviction.", pronunciation: "/de.fɑ̃/" },
        { subject: "nous", prefix: "", suffix: "notre cause devant le tribunal.", pronunciation: "/de.fɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "votre point de vue publiquement?", pronunciation: "/de.fɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "les valeurs de leur entreprise.", pronunciation: "/de.fɑ̃d/" }
      ]
    },
    {
      infinitive: "dépendre",
      translation: "to depend (on)",
      conjugations: {
        "je": "dépends",
        "tu": "dépends",
        "il/elle/on": "dépend",
        "nous": "dépendons",
        "vous": "dépendez",
        "ils/elles": "dépendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "trop des autres, parfois.", pronunciation: "/de.pɑ̃/" },
        { subject: "tu", prefix: "", suffix: "des circonstances pour agir?", pronunciation: "/de.pɑ̃/" },
        { subject: "on", prefix: "", suffix: "complètement de la météo aujourd'hui.", pronunciation: "/de.pɑ̃/" },
        { subject: "nous", prefix: "", suffix: "de l'avis du groupe.", pronunciation: "/de.pɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "de votre chef de service pour décider?", pronunciation: "/de.pɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "des subventions de l’État.", pronunciation: "/de.pɑ̃d/" }
      ]
    },
    {
      infinitive: "détendre",
      translation: "to relax / to loosen",
      conjugations: {
        "je": "détends",
        "tu": "détends",
        "il/elle/on": "détend",
        "nous": "détendons",
        "vous": "détendez",
        "ils/elles": "détendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "l'atmosphère en racontant des blagues.", pronunciation: "/de.tɑ̃/" },
        { subject: "tu", prefix: "", suffix: "souvent les épaules en respirant.", pronunciation: "/de.tɑ̃/" },
        { subject: "on", prefix: "", suffix: "le dos après une longue journée.", pronunciation: "/de.tɑ̃/" },
        { subject: "nous", prefix: "", suffix: "les muscles avec des exercices.", pronunciation: "/de.tɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "avec un peu de yoga?", pronunciation: "/de.tɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "pour éviter le stress.", pronunciation: "/de.tɑ̃d/" }
      ]
    },
    {
      infinitive: "mordre",
      translation: "to bite",
      conjugations: {
        "je": "mords",
        "tu": "mords",
        "il/elle/on": "mort",
        "nous": "mordons",
        "vous": "mordez",
        "ils/elles": "mordent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "dans une pomme bien croquante.", pronunciation: "/mɔʁ/" },
        { subject: "tu", prefix: "", suffix: "encore tes crayons?", pronunciation: "/mɔʁ/" },
        { subject: "on", prefix: "", suffix: "parfois ses lèvres sans s'en rendre compte.", pronunciation: "/mɔʁ/" },
        { subject: "nous", prefix: "", suffix: "dans un délicieux sandwich.", pronunciation: "/mɔʁ.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "la main qui vous nourrit?", pronunciation: "/mɔʁ.de/" },
        { subject: "ils", prefix: "", suffix: "par peur ou par défense.", pronunciation: "/mɔʁd/" }
      ]
    },
    {
      infinitive: "tordre",
      translation: "to twist",
      conjugations: {
        "je": "tords",
        "tu": "tords",
        "il/elle/on": "tord",
        "nous": "tordons",
        "vous": "tordez",
        "ils/elles": "tordent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "le linge pour enlever l'eau.", pronunciation: "/tɔʁ/" },
        { subject: "tu", prefix: "", suffix: "toujours tes chaussettes avant de les ranger?", pronunciation: "/tɔʁ/" },
        { subject: "on", prefix: "", suffix: "une serviette après la douche.", pronunciation: "/tɔʁ/" },
        { subject: "nous", prefix: "", suffix: "les faits quand on est de mauvaise foi.", pronunciation: "/tɔʁ.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "votre cheville en courant?", pronunciation: "/tɔʁ.de/" },
        { subject: "ils", prefix: "", suffix: "tout ce qu'ils entendent pour plaisanter.", pronunciation: "/tɔʁd/" }
      ]
    },
    {
      infinitive: "vendre",
      translation: "to sell",
      conjugations: {
        "je": "vends",
        "tu": "vends",
        "il/elle/on": "vend",
        "nous": "vendons",
        "vous": "vendez",
        "ils/elles": "vendent"
      },
      sentences: [
        { subject: "je", prefix: "", suffix: "ma voiture pour acheter un vélo.", pronunciation: "/vɑ̃d/" },
        { subject: "tu", prefix: "", suffix: "des vêtements en ligne.", pronunciation: "/vɑ̃d/" },
        { subject: "on", prefix: "", suffix: "sans faire beaucoup de profit.", pronunciation: "/vɑ̃d/" },
        { subject: "nous", prefix: "", suffix: "notre maison l'année prochaine.", pronunciation: "/vɑ̃.dɔ̃/" },
        { subject: "vous", prefix: "", suffix: "encore quelque chose sur internet?", pronunciation: "/vɑ̃.de/" },
        { subject: "ils", prefix: "", suffix: "des produits bios au marché local.", pronunciation: "/vɑ̃d/" }
      ]
    },
  ];
