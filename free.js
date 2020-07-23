// ==UserScript==
// @name         LeParisienGratuit
// @namespace    https://github.com/maximegorjux/leparisien/
// @version      1.0
// @description  Affiche les articles du parisien gratuitement
// @author       Maxime Gorjux
// @include		 *leparisien.fr/*
// @require		 https://code.jquery.com/jquery-3.3.1.min.js
// @require		 https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// ==/UserScript==

(function() {
    'use strict';

	const baseUrl = "http://www.leparisien.fr/";
    var $ = window.jQuery;

    //ajoute css bootstrap
    $(".width_full.flex").prepend('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">');

    //supprime label "abonnés"
    $(".tag.label.abo").remove();
    //ajoute label "gratuit" a la place de "abonnés"
    $(".col.tag_wrapper.flex_wrap").prepend('<span class="tag label abo">Gratuit !</span>');
    $(".story-overlay").append('<span class="tag label abo">Gratuit !</span>');

    // supprimer la pop inscription
    $(".sticky.below_nav.piano-paywall.relative").remove();
    //ajoute le bouton pour déflouter
    $(".width_full.flex").prepend('<button class="btn btn-outline-warning" style="font-size : 50px; height: 200px; width: 600px">AFFICHER LE TEXTE !</button>');
    //enlève les pop newletter
    $(".margin_bottom_md").remove();

    //fontion déflouter / enlève bouton
    $("button").click(function(){
        $(".content").css({"filter": "blur(0px)"});
        $(".btn.btn-outline-warning").remove();
  });


})();
