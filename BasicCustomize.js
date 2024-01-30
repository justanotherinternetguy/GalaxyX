// ==UserScript==
// @name         BG_SpaceAlpha
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change background image of SpaceAlpha
// @author       xzwired
// @match        https://spacealpha.net/*
// @grant        none
// ==/UserScript==

(function() {

    'use strict';
    // DISABLE SCROLLING ANIM
    var styleElement = document.getElementById('disableAnimationStyle');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'disableAnimationStyle';
        document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
        @keyframes moveBg {
            0%, to {
                background-position-x: 0px !important;
                background-position-y: 0px !important;
            }
        }
    `;

    // SET TO GRADIENT
    //document.body.style.backgroundImage = 'none';
    document.body.style.background = 'radial-gradient(rgb(17, 24, 39), rgb(75, 85, 99))';

    // Replace 'Roboto' with the desired Google Font name.
    var googleFontName = 'Silkscreen';

    // Add a link to the Google Fonts stylesheet
    var link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=' + googleFontName + '&display=swap';
    link.rel = 'stylesheet';

    // Append the link to the document head
    document.head.appendChild(link);
/*
        @keyframes rainbowAnimation {
            0% { color: red; }
            16.666% { color: yellow; }
            33.333% { color: lime; }
            50% { color: aqua; }
            66.666% { color: blue; }
            83.333% { color: magenta; }
            100% { color: red; }
        }
        */
    var style = document.createElement('style');
    style.innerHTML = `
        * {
            font-family: '${googleFontName}', cursive;
            animation: rainbowAnimation 6s linear infinite;
            font-size: 1.25rem;
        }
    `;

    // Append the styles to the document head
    document.head.appendChild(style);
})();
