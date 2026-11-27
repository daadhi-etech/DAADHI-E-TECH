/* =====================================================================
   JOURNAL DE BORD : c'est le seul fichier à modifier pour ajouter une étape.
   1. Copie une ligne { ... } du tableau ENTRIES.
   2. Colle-la EN HAUT de la liste (la plus récente en premier).
   3. Change la date, le titre et le texte. statut : "fait" ou "à venir".
   N'oublie pas la virgule à la fin de chaque ligne sauf la dernière.
   Ne publie jamais de formulation, de structure détaillée ni de nom de fournisseur.
   ===================================================================== */
var SITE={
  contact:"à compléter",
  updated:"27 novembre 2026"
};
var ENTRIES=[
 {date:"27 nov. 2026",title:"Mise en ligne du journal de recherche",text:"Ce site documente le projet DAADHI E-TECH au fil des étapes, résultats compris.",statut:"fait"},
 {date:"26 nov. 2026",title:"Premiers échantillons de silicone reçus",text:"Un fabricant de silicones médicaux m'a envoyé gratuitement un gel adhésif doux pour la peau et un primaire d'accroche. Prochaine étape : trouver un laboratoire pour les tester.",statut:"fait"},
 {date:"26 nov. 2026",title:"Rendez-vous avec la conseillère des projets avancés",text:"PÉPITE PON me met en relation avec une conseillère spécialisée et cherche un accès à un laboratoire et à du matériel. Elle m'a conseillé de documenter mon travail publiquement : c'est l'origine de ce site.",statut:"fait"},
 {date:"24–25 nov. 2026",title:"Demandes d'échantillons envoyées à plusieurs fournisseurs",text:"Films polyuréthane ultra-fins et pigments thermochromiques. Premiers retours : un fournisseur ne fabrique pas ce type de film, un autre impose une commande minimale de 5 kg, bien au-delà d'un essai de laboratoire. Je cherche de plus petites quantités.",statut:"fait"},
 {date:"Automne 2026",title:"Enquête auprès de 73 sportifs",text:"Questionnaire sur la détection des blessures et de la surcharge musculaire, pour vérifier que le besoin existe avant de construire quoi que ce soit.",statut:"fait"},
 {date:"Automne 2026",title:"Projet accepté à PÉPITE PON pour 2026-2027",text:"Le projet est accompagné dans le cadre du dispositif étudiant-entrepreneur de l'Université Paris Nanterre.",statut:"fait"},
 {date:"À venir",title:"Premiers essais en laboratoire",text:"Tenue du film à la chaleur, adhérence, compatibilité des matériaux. Les résultats seront publiés ici.",statut:"à venir"}
];
var TESTS=[
 ["TP 0","Les matériaux se mettent-ils en œuvre ensemble (cuisson, adhérence) ?","à venir"],
 ["TP 1","Quelle est la courbe couleur–température du matériau sensible à la chaleur ?","à venir"],
 ["TP 1 bis","Combien de poses le matériau supporte-t-il ?","à venir"],
 ["TP 2","Le patch assemblé suit-il la température de la surface ?","à venir"],
 ["TP 2 bis","La couleur dépend-elle de l'historique effort, pause, lecture ?","à venir"],
 ["TP 3","Deux personnes lisent-elles la même couleur ?","à venir"],
 ["TP 4","Concordance avec une caméra de référence, sous conditions strictes","conditionnel"]
];
