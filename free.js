// ==UserScript==
// @name         LeParisienGratuit
// @namespace    https://github.com/maximegorjux/leparisien/
// @version      2.0
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

    // change message pour ajouter "gratuit pour vous"
    $(".fs_14_20.fs_16_24_ad").remove();
    $(".ff_gct.pl_2.pt_150.pb_150.pr_2").append('<span class="fs_14_20 fs_16_24_ad">Cet article est réservé aux abonnés, mais gratuit pour vous.</span>');

    // supprimer la pop inscription
    $(".sticky.below_nav.piano-paywall.relative").remove();
    //ajoute le bouton pour déflouter
    $(".width_full.flex").prepend('<button class="btn btn-outline-warning">Le texte sera déflouté automatiquement.</br>Si le texte reste flou après plusieurs secondes, cliquez ici</button>');

    //enleve message newletter
    $(".nl-article-card").remove();

    //fontion déflouter
    $("button").click(function(){
        $(".content").css({"filter": "blur(0px)"});
    });

    //fonction déflouter le texte - lancée toutes les secondes
    function deFlouter(){
        $(".content").css({"filter": "blur(0px)"});

        setTimeout(deFlouter,1000); // rappel après 1 secondes = 1000 millisecondes
    }

    deFlouter();


})();
