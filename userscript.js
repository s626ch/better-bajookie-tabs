// ==UserScript==
// @name         better bajookie tab names
// @version      0.3
// @description  yeah
// @author       stitch
// @match        https://bajookie.bingle.plus/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bingle.plus
// @grant        none
// ==/UserScript==

/*
    if (window.location.href.startsWith("")) {
        document.title = " - Bajookie";
    };
*/

(function() {
    'use strict';
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Game/")) {
        document.title = document.querySelector("body > div.container.w-50.bg-dark.text-white.border.rounded.pb-3 > div.row > div.p-2.desccol > h3").innerText + " - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Games")) {
        //document.title = document.querySelector("body > div > h3").innerText + " - Bajookie";
        document.title = "Games - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Catalog")) {
        //document.title = document.querySelector("body > div > div > div.col.border-right.pb-2 > h3").innerText + " - Bajookie";
        document.title = "Catalog - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Item/")) {
        document.title = document.querySelector("body > div > div.row > div.p-2.desccol > h3").innerText + " - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Home")) {
        document.title = "Home - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Avatar")) {
        document.title = "Avatar - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Users")) {
        document.title = "Users - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Users/")) {
        document.title = document.querySelector("body > div > div:nth-child(1) > div.col.border-right.p-2 > div > div.col > h4").innerText + " - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Groups")) {
        document.title = "Groups - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Group/")) {
        document.title = document.querySelector("body > div > div.row.border-bottom > div > div.row > div.col > h4").innerText + " - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Gifts")) {
        document.title = "Gifts - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Money")) {
        document.title = "Transactions - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Create")) {
        document.title = "Develop - Bajookie";
    };
    if (window.location.href.startsWith("https://bajookie.bingle.plus/Settings")) {
        document.title = "Settings - Bajookie";
    };
})();
