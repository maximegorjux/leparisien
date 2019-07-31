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

    // supprimer la pop inscription
    $(".sticky.below_nav.piano-paywall.relative").remove();
    //ajoute le bouton pour déflouter
    $(".width_full.flex").prepend('<button class="button button--blue pn-meter__login" style="font-size : 50px; height: 200px; width: 600px">Afficher le texte !</button>');
    //enlève les pop newletter
    $(".margin_bottom_md").remove();

    //fontion déflouter / enlève bouton
    $("button").click(function(){
        $(".content").css({"filter": "blur(0px)"});
        $(".button.button--blue.pn-meter__login").remove();
  });


})();
