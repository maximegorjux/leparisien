# LeParisienGratuit

## Ne fonctionne plus suite a une mise a jour du site

Le Parisien Gratuit est un script permettant de rendre visible a tous, les articles premium du [site Le Parisien](http://www.leparisien.fr). Ce script permet de :
* Supprimer la pop up d'inscription / connexion
* Supprimer le message d'inscription a la newletter
* Défloute automatiquement le texte
* Ajoute un bouton permettant de déflouter le texte (dans le cas ou le défloutage automatique ne fonctionne pas)
* [NEW] Affiche les images (qui ne s'affichaient pas avant)
* [NEW] Change message en début d'article suite a une MAJ  

# Installation
1. Installer une extension d'userscript dans votre navigateur. TamperMonkey par exemple ([Tampermonkey pour Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=fr), [Tampermonkey pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)).
Pour Opera : utilisez l'extension [Install Chrome Extension](https://addons.opera.com/fr/extensions/details/install-chrome-extensions/) qui vous permetra d'installer les extensions Chrome sur Opera.

2. Ajouter le script à TamperMonkey, le script à ajouter se trouve à [cette adresse](https://github.com/maximegorjux/leparisien/blob/master/free.js). Il faut recopier l'ensemble du script et sauvegarder

3. Se rendre sur [LeParisien.fr](http://www.leparisien.fr). Cliquer sur l'icône de TamperMonkey et vérifier que le script est bien activé :  
![alt text](https://www.zupimages.net/up/19/31/if4k.png "Extension activé")

   Le texte sera déflouté automatiquement. Si le texte reste flouté plusieurs secondes, vous pouvez cliquer sur le bouton suivant "Le texte sera déflouté automatiquement. Si le texte reste flou après plusieurs secondes, cliquez ici".
   Si ce bouton ne s'affiche pas, alors le script n'a pas correctement été chargé. Dans ce cas là actualisez la page.

# Contact
* [Maxime GORJUX](https://maxime.gorjux.com)
* maxime@gorjux.com



_Ce script peut ne plus marcher du jour au lendemain si le site décider de changer sa façon de fonctionner (c'est déjà arrivé, mais, par chance, ils ont fait machine arrière)_
