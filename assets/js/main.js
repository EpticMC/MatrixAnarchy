"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

($ => {
    // Greeter
    const ARG = ["color:blue;font-weight:bold;font-size:24px", "color:red;font-weight:bold;font-size:24px", "color:blue;font-weight:bold;font-size:24px", "color:green;font-weight:bold;font-size:24px"];
    console.log("%cDEVELOPED WITH %c<3%c BY%c NULLDEV.ORG", ...ARG);

    fetch("https://api.mcsrvstat.us/2/matrixanarchy.org", { mode: "cors" })
        .then(res => res.json())
        .then(data => $("div.center-box > .inner span#stats").text(`${data.players.online} / ${data.players.max}`));

    /**
     * Initial animation workers
     */
    let workers = function(){
        setTimeout(() => $("canvas#mainCanvas"      ).addClass("loaded"), 1999);
        setTimeout(() => $("div.center-box > img"   ).addClass("loaded"), 2000);
        setTimeout(() => $("div.center-box > .inner").addClass("loaded"), 3200);
    };

    /**
     * H1 Glitch effect
     *
     * @param {String} str
     */
    let glitchText = async function(str){
        const fx = new TextScramble(document.querySelector("h1"));
        let next = () => fx.setText(str).then(() => setTimeout(next, 1500));
        next();
    };

    /**
     * Show/Hide Read-More
     * based on EventTarget
     *
     * @param {Event} e
     */
    let readMore = function(e){
        // @ts-ignore
        let tar = e.target.id === "rm" ? [1, 2] : [2, 1];
        $(".inner-content-" + tar[0]).fadeOut(1000, () => {
            $(".inner-content-" + tar[1]).fadeIn(1000);
        });
    };

    $(document).ready(() => {
        cLoad();
        init(); // Matrix -> ./vendor/matrix.min.js
        workers();
        glitchText("MatrixAnarchy"); // GlitchText -> ./vendor/glitchify.min.js
        $("#rm, #back").on("click", readMore);
    });

    window.addEventListener("resize", () => init());

// @ts-ignore
})($ || window.jQuery);
