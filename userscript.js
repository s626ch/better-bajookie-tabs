// ==UserScript==
// @name         better bajookie tab names
// @version      0.6.26
// @description  yeah
// @author       stitch
// @match        https://bajookie.bingle.plus/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bingle.plus
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    // map links to data that i need to get proper doc title shit from
    // also store base url here bcz looks nicer
    const urlprfx = "https://bajookie.bingle.plus/"
    const urlToTitle = {
        [urlprfx + "Game/"]: getTitleFromSelector("body > div.container.w-50.bg-dark.text-white.border.rounded.pb-3 > div.row > div.p-2.desccol > h3"),
        [urlprfx + "Games"]: "Games",
        [urlprfx + "Catalog"]: "Catalog",
        [urlprfx + "Item/"]: getTitleFromSelector("body > div > div.row > div.p-2.desccol > h3"),
        [urlprfx + "Home"]: "Home",
        [urlprfx + "Avatar"]: "Avatar",
        [urlprfx + "Users"]: "Users",
        [urlprfx + "Users/"]: getTitleFromSelector("body > div > div:nth-child(1) > div.col.border-right.p-2 > div > div.col > h4"),
        [urlprfx + "Groups"]: "Groups",
        [urlprfx + "Group/"]: getTitleFromSelector("body > div > div.row.border-bottom > div > div.row > div.col > h4")
    };
    const currentURL = window.location.href;
    const defaultTitle = "Bajookie"; // fallback if for some fucking reason i forgot something
    // iterate through mappings, break when match is found
    let matchedPrefix = null;
    for (const urlPrefix in urlToTitle) {
        if (currentURL.startsWith(urlPrefix)) {
            matchedPrefix = urlPrefix;
            break;
        }
    }
    // set to matched prefix, else fallback to le "what the fuck i forgot something"
    if (matchedPrefix) {
        document.title = `${urlToTitle[matchedPrefix]} - Bajookie`;
    } else {
        document.title = `${defaultTitle}`;
    }
})();
// fetch title from page for things that need it, ex: games, item, user, etc.
function getTitleFromSelector(selector) {
    const titleElement = document.querySelector(selector);
    return titleElement ? titleElement.innerText : "";
}
