> **BETA** — a játék még fejlesztés alatt áll, hibák előfordulhatnak. / The game is still in development: expect bugs. / Le jeu est encore en développement : des bugs sont possibles.

# DEADWAKE

**HU** — Kalózkaland belső nézetből, pixeles, kockákból épített 3D világban, egyedül, osztott képernyőn vagy online, legfeljebb négyen. Kormányozz, bontsd ki a vitorlákat, rohanj az ágyúkhoz, foltozd be a lékeket, merd ki a vizet, és oltsd el a tüzet, mielőtt elsüllyedsz. Ásd ki a kincseket, fejtsd meg a rejtvényes térképeket, kutasd át a hajóroncsokat, gyújtsd meg az átkozott totemeket, és győzd le az Átkozott Kapitányt meg a Mélység Kígyóját. Minden fából van, és minden szétlőhető.

**EN** — A first-person pirate adventure in a pixelated, voxel-built 3D world, solo, split-screen or online with up to four players. Steer, unfurl the sails, run to the cannons, patch the leaks, bail out the water and put out the fires before you sink. Dig up treasure, solve riddle maps, search shipwrecks, light the cursed totems, and defeat the Cursed Captain and the Serpent of the Deep. Everything is made of wood and everything can be blown apart.

**FR** — Une aventure de pirates à la première personne, dans un monde 3D pixelisé fait de voxels, en solo, en écran partagé ou en ligne jusqu'à quatre. Barrez, déferlez les voiles, courez aux canons, colmatez les voies d'eau, écopez et éteignez les incendies avant de sombrer. Déterrez des trésors, résolvez des cartes à énigme, fouillez les épaves, allumez les totems maudits, et terrassez le Capitaine Maudit et le Serpent des Abysses. Tout est en bois et tout peut voler en éclats.

## Indítás / Start / Lancement

Nyisd meg az `index.html`-t egy modern böngészőben (Chrome, Edge, Firefox). / Open `index.html` in a modern browser. / Ouvrez `index.html` dans un navigateur récent.

Az online játékhoz internetkapcsolat kell (PeerJS). / Online play needs an internet connection (PeerJS). / Le jeu en ligne nécessite une connexion Internet (PeerJS).

## Irányítás / Controls / Commandes

| | Billentyűzet és egér / Keyboard & mouse | Kontroller / Controller |
|---|---|---|
| Mozgás / Move / Se déplacer | W A S D | bal kar / left stick |
| Nézelődés / Look / Regarder | egér / mouse | jobb kar / right stick |
| Futás / Sprint / Courir | Shift | bal kar lenyomva / L3 |
| Ugrás, úszás fel / Jump, swim up / Sauter | Szóköz / Space | A |
| Lemerülés / Dive / Plonger | C / Ctrl | B |
| Használat / Use / Utiliser | E | X |
| Kard, lövés, ásás, javítás / Attack, shoot, dig, repair | bal egérgomb / left mouse | RT |
| Töltés / Load / Charger | R | Y |
| Eszközváltás / Switch tool | 1–5, görgő / wheel | LB / RB |
| Kincses térkép / Treasure map | Tab (tartva / hold) | fel / up |
| Tengeri térkép / Sea chart | M | Back |
| Menü / Menu | Esc | Start |

## Zene / Music / Musique

A játék nem tartalmaz zenét. Ha a `music` mappába ezekkel a nevekkel teszel mp3 vagy ogg fájlokat, a játék magától lejátssza és a helyzethez illően váltogatja őket:
The game ships without music. Put mp3 or ogg files with these names into the `music` folder and the game will play them by situation:
Le jeu est livré sans musique. Placez des fichiers mp3 ou ogg portant ces noms dans le dossier `music` :

`title` · `day` · `calm` · `night` · `cursed` · `battle` · `island` · `outpost` · `ghost` · `shanty` · `treasure` · `death`
