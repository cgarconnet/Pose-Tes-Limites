$('.burger, .overlay').click(function(){
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});



if ($(window).width() > 1280) {
var foldDeck = "510";
}
if ($(window).width() < 1280) {
var foldDeck = "460";
}

if ($(window).width() > 960) {
  $('#random-card, #random-card-mobile').click(function(){
   if ($(".card").hasClass("inPosition")) {
     $( ".card" ).animate({
        left: foldDeck
      }, 500, "easein", function() {
        $('.card').removeClass('inPosition').addClass('isHidden');
      });
    }
    if ($(".card").hasClass("isHidden")) {
     $( ".card").animate({
        left: -foldDeck
      }, 500,  function() {
        $('.card').delay(200).animate({
        left: "0"
      })
      });
    }
  });
}
//Checker le dom
document.addEventListener("DOMContentLoaded",function(){

// DATA
  //        ["Rêves scénarisés #25","⁉️ Quel soutien prévoirais-tu si poser cette limite provoquait un conflit, une sanction ou une rupture ?","📝 Comment prévoir un appui peut-il rendre ta limite plus sûre et plus tenable face aux conséquences redoutées ?","🎯 Peux-tu imaginer le pire scénario réaliste, prévoir un appui concret, puis identifier la limite que tu maintiendras malgré la pression ?","📖 Dans Avengers: Infinity War, Doctor Strange explore de nombreux scénarios pour repérer une issue possible. Quelle préparation protégerait ta limite dans le scénario difficile ?"],  

  const cardsPool = [
["Challenges sensationnels #14", "⁉️ Sortez et interpellez la première personne dans la rue par un bonjour. Prenez 3 secondes de silence et demandez-lui de vous écouter 10 minutes."]
,["Douleurs émotives #17", "⁉️ Quel effort pourrais-tu reporter aujourd’hui pour reprendre des forces ?", "📝 Et si reporter une tâche constituait une première manière concrète de dire « pas maintenant » ?", "🎯 Peux-tu déplacer aujourd’hui une tâche non essentielle dans ton agenda et protéger le créneau ainsi libéré ?", "📖 Dans Cendrillon, partir avant minuit évite que la magie ne se retourne contre elle. Quel « pas maintenant » te permettrait de t’arrêter avant l’épuisement ?"]
,["Douleurs émotives #19", "⁉️ Comment pourrais-tu dire « je me sens dépassé·e » sans t’excuser ?", "📝 En quoi exprimer ton état sans culpabilité pourrait-il rendre ta limite plus claire et plus légitime ?", "🎯 Peux-tu enregistrer une note vocale de vingt secondes disant « je me sens dépassé·e, j’ai besoin de… », puis l’écouter ?", "📖 Dans Le Discours d’un roi, George progresse en parlant malgré la gêne, sans prétendre qu’elle n’existe pas. Quelle phrase simple rendrait ton état audible ?"]
,["Douleurs émotives #16", "⁉️ À qui pourrais-tu dire que tu n’as plus la force de tout supporter seul·e ?", "📝 En quoi demander du soutien permettrait-il de ne plus accepter automatiquement une charge devenue trop lourde ?", "🎯 Peux-tu choisir une personne sûre et lui envoyer : « J’ai besoin de ne pas porter cela seul·e. Peux-tu m’aider sur… ? »", "📖 Dans Le Seigneur des anneaux, Frodon porte l’Anneau, mais Sam l’aide quand le poids devient trop lourd. Quel soutien accepterais-tu avant de t’effondrer ?"]
,["Douleurs émotives #18", "⁉️ Quelle vérité émotionnelle n’oses-tu pas exprimer par peur de fragiliser une relation ?", "📝 Quel prix paies-tu dans cette relation lorsque tu protèges le lien en taisant systématiquement ce que tu ressens ?", "🎯 Peux-tu confier ta vérité émotionnelle à une personne sûre avant de décider comment la formuler dans la relation concernée ?", "📖 Dans Encanto, Mirabel ose nommer les fissures que toute la famille préfère ignorer. Quelle vérité protégerait le lien en le rendant plus honnête ?"]
,["Douleurs émotives #11", "⁉️ De quoi as-tu envie de t'indigner ?", "📝 Prends un carnet et écris quelques lignes"]
,["Douleurs émotives #13", "⁉️ Quel compromis fais-tu chaque jour sous prétexte d'éviter un conflit, alors qu'il alimente ta propre rancœur ?", "📝 Rédige sur une note secrète dans ton téléphone ce que tu aimerais vraiment dire. Garde-la de côté pour la relire avant ta prochaine décision."]
,["Douleurs émotives #12", "⁉️ Quelle situation répétitive te donne la sensation de siphonner ton énergie sans rien recevoir en retour ?", "📝 La prochaine fois que cette situation se présente, fixe une limite de temps stricte au départ (ex. « Je n'ai que 15 minutes devant moi »).", "🎯 Si cette situation est ton travail, le sujet est trop gros pour être traité par ce jeu. Mais as-tu pensé à faire un bilan de compétences ? Tu peux aussi prendre un appel avec l'un des coachs de PTL"]
,["Douleurs émotives #2", "⁉️ Les temps sont durs, tu n'arrives pas à t'en sortir …. Ça fait mal à l'égo, tu souffres mentalement, tu souffres à en être malade …. Et Si au lieu d'en souffrir, cette douleur était un carburant, un ami, un allié pour passer à l'action …", "📝 Là, tout de suite, laisse cette douleur te conseiller, laisse la t'accompagner", "🎯 Quand enfin la douleur te parle et que tu l'entends, quelles limites celle-ci demande-t-elle de poser pour passer à l'action, penser à toi, sortir de cette situation ?"]
,["Douleurs émotives #1", "⁉️ Et si c'était possible de mettre la ou les émotions qui sont liées au fait que les temps sont durs et que tu n'arrives pas à t'en sortir …. Qu'il s'agisse de la peur, la frustration, la honte, la tristesse, la colère, la haine, le désarroi ou autre…", "📝 Prend ton temps, ferme les yeux, ou respire, l'objectif étant d'oublier ce contexte et pour l'occasion", "🎯 Imagine une baguette magique, celle-ci permet tout…. Alors quels seraient les premiers sorts pour que tu te sentes joyeux, serein ou encore fier de toi ? Quels sorts représentent des limites à poser ? quelles seraient donc ces limites ?"]
,["Peurs amusantes #29", "⁉️ Quelle limite poserais-tu si la peur de décevoir ne décidait plus à ta place ?", "📝 Comment imaginer cette réponse libérée de la peur révèle-t-il la limite dont tu as réellement besoin ?", "🎯 Peux-tu formuler la limite que tu poserais sans peur, puis en tester une version plus petite mais réelle aujourd’hui ?", "📖 Dans The Truman Show, Truman franchit la porte malgré la peur entretenue autour de lui. Quelle limite apparaîtrait si la crainte de décevoir cessait de commander ?"]
,["Peurs amusantes #28", "⁉️ Quelle règle proposerais-tu pour pouvoir quitter une partie dès qu’elle te coûte plus qu’elle ne t’amuse ?", "📝 En quoi poser cette règle avant de commencer protège-t-il ton droit de te retirer sans devoir te justifier ?", "🎯 Peux-tu proposer avant la partie une règle de retrait simple : chacun peut arrêter sans justification ni moquerie ?", "📖 Dans un match, le remplacement permet de sortir sans invalider toute l’équipe. Quelle règle rendrait ton retrait normal plutôt que coupable ?"]
,["Peurs amusantes #30", "⁉️ À quelle personne de confiance pourrais-tu annoncer la petite limite que tu veux essayer de poser ?", "📝 Comment ce soutien peut-il renforcer ta confiance et t’aider à ne pas rester seul·e face à l’appréhension ?", "🎯 Peux-tu annoncer aujourd’hui ta petite limite à une personne de confiance et lui demander de te recontacter après ton essai ?", "📖 Dans Harry Potter, le héros traverse rarement l’épreuve sans Hermione et Ron. Quelle personne pourrait soutenir ta première limite sans parler à ta place ?"]
,["Peurs amusantes #10", "⁉️ Si la personne à qui tu n'oses pas dire non piquait une crise de colère façon enfant de trois ans au milieu de la pièce, comment réagirais-tu ?", "📝 Répète trois fois devant le miroir : « Sa réaction lui appartient, ma tranquillité m'appartient. »"]
,["Peurs amusantes #9", "⁉️ Quel est le scénario le plus absurde et ridicule que ton cerveau imagine si tu refuses cette sollicitation à laquelle tu n'as pas encore osé dire non ?", "📝 Raconte ce scénario catastrophe à voix haute sur un ton de comédien, puis donne-lui une note de réalité sur 10."]
,["Challenges sensationnels #27", "⁉️ Quelle condition de sécurité poserais-tu avant d’accepter une expérience plus intense ?", "📝 En quoi le fait de formuler cette condition transforme-t-il une envie en choix encadré par une limite claire ?", "🎯 Peux-tu annoncer à une personne la règle de sécurité et le mot d’arrêt qui conditionnent ta participation ?", "📖 Dans Top Gun: Maverick, la mission n’est possible qu’avec des paramètres précis de temps, d’altitude et d’équipe. Quelle règle conditionne ton oui ?"]
,["Challenges sensationnels #26", "⁉️ Quelle sensation agréable pourrait te redonner un peu d’élan sans t’épuiser ni te mettre en danger ?", "📝 Comment cette distinction t’aide-t-elle à choisir ce qui te stimule tout en respectant tes forces du moment ?", "🎯 Peux-tu choisir une sensation agréable, gratuite et sûre, puis lui consacrer cinq minutes aujourd’hui en observant ton niveau d’énergie après ?", "📖 Dans Ratatouille, une seule bouchée réveille chez le critique un souvenir vivant. Quelle sensation simple pourrait te redonner de l’élan sans t’épuiser ?"]
,["Ressources inespérées #15", "⁉️ Quel non avez-vous reçu récemment ? Dans quel contexte ? Qu'est ce qui a permis cette personne de vous le donner ?"]
,["Ressources inespérées #32", "⁉️ Sur quel sujet pourrais-tu simplement dire « je ne partage pas cet avis » ?", "📝 Comment cette phrase peut-elle t’entraîner à marquer une différence sans attaquer la personne ni renoncer à toi ?", "🎯 Peux-tu dire aujourd’hui « je ne partage pas cet avis » sur un sujet sans ajouter d’argument pendant dix secondes ?", "📖 Dans Douze hommes en colère, un juré ose simplement ne pas suivre l’avis unanime. Sur quel sujet pourrais-tu marquer calmement ta différence ?"]
,["Ressources inespérées #33", "⁉️ Comment répondrais-tu à quelqu’un qui insiste pour te faire changer d’avis après que tu as déjà dit non ?", "📝 En quoi répéter calmement ta décision t’aide-t-il à ne pas transformer l’insistance de l’autre en obligation de céder ?", "🎯 Peux-tu pratiquer la technique du disque rayé : répéter trois fois la même décision, avec le même ton calme ?", "📖 Dans Erin Brockovich, Erin maintient son point malgré les interlocuteurs qui minimisent sa parole. Quelle décision peux-tu répéter sans transformer l’insistance en débat ?"]
,["Ressources inespérées #31", "⁉️ Quelle ressource essentielle refuserais-tu désormais de sacrifier, même pour répondre aux attentes des autres ?", "📝 Comment rendre cette ressource non négociable peut-il empêcher que l’urgence d’autrui épuise ce qui te maintient debout ?", "🎯 Peux-tu écrire ta ressource essentielle en haut d’une page et éliminer une dépense de temps, d’énergie ou d’argent qui la menace ?", "📖 Dans WALL-E, une petite plante devient la ressource qui rend l’avenir possible. Quelle réserve essentielle ne peux-tu plus sacrifier aux urgences des autres ?"]
,["Ressources inespérées #7", "⁉️ Quelle personne de ton entourage serait sincèrement ravie de t'aider si tu osais lui avouer que tu es débordé.e ?", "📝 Si le message \"Sois Fort\" te parle, c'est que ton comportement à ne pas demander de l'aide est devenu une norme pour toi. Mais sache que c'est l'un des 5 messages contraignants que tu as probablement reçu dans ton enfance. Et il n'est pas toujours à ton service.", "🎯 Envoie-lui ce SMS précis : « Je suis sous l'eau en ce moment, tu aurais 15 minutes à me accorder cette semaine pour m'aider sur un sujet ? »."]
,["Ressources inespérées #8", "⁉️ Quel « défaut » qu'on te reproche parfois (ex. être têtu.e, trop direct.e, froid.e) pourrait devenir ton meilleur bouclier pour poser une limite aujourd'hui ?", "📝 Tu connais le principe du yin & yang ? Ceux sont deux forces opposées mais complémentaires issues de la philosophie taoïste. Le yin (noir) représente l'ombre, le calme et le féminin, tandis que le yang (blanc) incarne la lumière, l'action et le masculin. Dans sa représentation en cercle blanc et noir, les petits points de couleur inverse rappellent que chaque force contient une part de l'autre.", "🎯 Lors de ta prochaine sollicitation impromptue, utilise ce trait de caractère pour répondre fermement en une seule phrase, sans te justifier."]
,["Rêves scénarisés #23", "⁉️ Dans un quotidien idéal mais réaliste, à quoi dirais-tu plus souvent « pas maintenant » ?", "📝 En quoi nommer ce « pas maintenant » transforme-t-il ton rêve en une limite concrète ?", "🎯 Peux-tu inscrire dans ton agenda un « pas maintenant » concret qui libère trente minutes pour ce que veux retrouver ?", "📖 Dans Le Magicien d’Oz, Dorothy progresse en suivant une prochaine étape visible plutôt qu’en résolvant tout d’un coup. Quel « pas maintenant » ouvrirait ton chemin ?"]
,["Rêves scénarisés #24", "⁉️ Quel moment de repos, de plaisir ou de calme aimerais-tu protéger chaque semaine ?", "📝 Comment réserver ce moment rend-il visible une ressource personnelle qui mérite d’être protégée ?", "🎯 Peux-tu réserver cette semaine vingt minutes de calme, de repos ou de plaisir et traiter ce rendez-vous comme un engagement réel ?", "📖 Dans Le Fabuleux Destin d’Amélie Poulain, de minuscules plaisirs redonnent couleur au quotidien. Quel moment simple mériterait d’être protégé dans ton agenda ?"]
,["Rêves scénarisés #25", "⁉️ Quel soutien prévoirais-tu si poser cette limite provoquait un conflit, une sanction ou une rupture ?", "📝 Comment prévoir un appui peut-il rendre ta limite plus sûre et plus tenable face aux conséquences redoutées ?", "🎯 Peux-tu imaginer le pire scénario réaliste, prévoir un appui concret, puis identifier la limite que tu maintiendras malgré la pression ?", "📖 Dans Avengers: Infinity War, Doctor Strange explore de nombreux scénarios pour repérer une issue possible. Quelle préparation protégerait ta limite dans le scénario difficile ?"]
,["Solutions logiques #22", "⁉️ Parmi ce qui t’arrive, qu’est-ce qui dépend réellement de toi aujourd’hui ?", "📝 Comment séparer ce qui dépend de toi du reste peut-il t’éviter de porter l’impossible ?", "🎯 Peux-tu diviser une feuille en « dépend de moi » et « ne dépend pas de moi », puis déplacer une charge hors de ton camp ?", "📖 La prière de la sérénité distingue ce que l’on peut changer de ce que l’on ne contrôle pas. Quelle charge rendrais-tu à la réalité ?"]
,["Solutions logiques #20", "⁉️ Quelle demande pourrais-tu accepter seulement avec plus de temps, moins de charge ou de l’aide ?", "📝 Comment poser une condition claire te permet-il de chercher une issue sans accepter toute la charge ?", "🎯 Peux-tu reformuler une demande sous la forme « oui, si… » avec une seule condition mesurable de temps, d’aide ou de périmètre ?", "📖 Dans Apollo 13, chaque solution doit respecter les limites d’énergie et d’oxygène. Quelle condition transformerait ton accord en solution réellement viable ?"]
,["Solutions logiques #21", "⁉️ Et si une solution juste risquait de déplaire, laquelle choisirais-tu pour ne plus t’épuiser ?", "📝 Quelle limite devient possible lorsque tu privilégies une solution soutenable à l’approbation de tous ?", "🎯 Peux-tu choisir la solution la plus soutenable, écrire la déception possible d’autrui et maintenir ton choix pendant vingt-quatre heures ?", "📖 Dans Le Stratège, Billy Beane choisit une méthode soutenable malgré les critiques du milieu. Quelle solution garderais-tu même si elle ne plaît pas à tous ?"]
,["Solutions logiques #5", "⁉️ Et si la solution pour poser des limites était déjà utilisée par un enfant de 5 ans, elle ressemblerait à quoi ?"]
,["Solutions logiques #6", "⁉️ Quel est le « non » le plus simple et évident que tu pourrais prononcer cette semaine ? Et qu'est ce qu'il te ferait gagner ? Et quel risque prendrais-tu en disant non ? Notes tes réponses, puis écoute ton coeur", "📝 Identifie cet engagement et envoie un message dès aujourd'hui pour l'annuler ou le décaler, sans inventer d'excuse.", "🎯 Et si tu faisais relire ton brouillon par un ami, un proche ?"]
    ];

// VARIABLES
  let oldCardIndex;
  let oldColorIndex;

function display_hidden_fields()
{
  
    document.getElementById("hidden").style.display = "block";
}

// Choisir une carte mais pas la précédente
  function generateNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
  }

//1. Obtenir le n° de la carte précédente
//2. Vérifier que ce n'est pas la précédente
//3. Générer un nouveau n°
//4. Afficher la carte
  function generatenewCard() {
    let index = generateNumber(cardsPool);
// Tant que ce n'est pas la carte précédente
    while (index === oldCardIndex) {
      index = generateNumber(cardsPool);
    }
    let newCard = cardsPool[index];
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let rationnel = document.getElementById("rationnel");
    let mission = document.getElementById("mission");
    let exemple = document.getElementById("exemple");
// Afficher la carte
    title.innerHTML = newCard[0];
    description.innerHTML = newCard[1] || "";
    rationnel.innerHTML = newCard[2] || "";
    mission.innerHTML = newCard[3] || "";
    exemple.innerHTML = newCard[4] || "";

    pictureChange(index+2);
// Rafraichir le tweet
   // let tweet = document.getElementById("tweet-card");
  //  tweet.href = 'https://twitter.com/intent/tweet?hashtags=whatif&text="' + newCard[0] + '" -' + newCard[1];
//Conserver le n° de la carte
    oldCardIndex = index;
  }

  function pictureChange(newCard)
    {
    document.getElementById('card-image').src="img/"+ newCard +".jpg";
    }

// Au clic sur le bouton, générer une carte
  function onQuoteButtonClick() {
    let randomQuoteButton = document.querySelector("#random-card");
    randomQuoteButton.addEventListener("click", function(){
           setTimeout(function(){
    generatenewCard();
    // Chris ajout via Gemini : Fait apparaître la carte sur mobile après avoir cliqué sur la pioche
    //  document.querySelector("#random-card-mobile").style.display = "block";

    }, 500);
    });
  }

  function onQuoteButtonClickMobile() {
    let randomQuoteButton = document.querySelector("#random-card-mobile");
    randomQuoteButton.addEventListener("click", function(){
      setTimeout(function(){
    generatenewCard();
    }, 500);
    });
  }


  onQuoteButtonClick();
  onQuoteButtonClickMobile(); //Mis en commentaire par Chris
// Générer une carte au démarrage
  window.onload = function () {
//    generatenewCard(); //Mis en commentaire par Chris pour permettre d'afficher celle qui est par défaut dans le code index.html
  };
});
