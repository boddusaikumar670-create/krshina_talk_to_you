/* =====================================================
   GET ELEMENTS
====================================================== */

const introLine =
    document.getElementById("introLine");

const continueButton =
    document.getElementById("continueButton");

const emotionalText =
    document.getElementById("emotionalText");

const emotionalSubtext =
    document.getElementById("emotionalSubtext");

const emotionalButton =
    document.getElementById("emotionalButton");

const introScene =
    document.getElementById("introScene");

const emotionalScene =
    document.getElementById("emotionalScene");

const festivalScene =
    document.getElementById("festivalScene");

const prayerScene =
    document.getElementById("prayerScene");

const prayerContent =
    document.getElementById("prayerContent");

const prayerDiyas =
    document.getElementById("prayerDiyas");

const leftDiya =
    document.getElementById("leftDiya");

const rightDiya =
    document.getElementById("rightDiya");

const lightPrayerButton =
    document.getElementById("lightPrayerButton");

const flowerOffering =
    document.getElementById("flowerOffering");

const harathiContainer =
    document.getElementById("harathiContainer");

const prayerFinal =
    document.getElementById("prayerFinal");

const krishnaPrayer =
    document.querySelector(".krishna-prayer");

const memoryScene =
    document.getElementById("memoryScene");

const letterScene =
    document.getElementById("letterScene");

const timer =
    document.getElementById("timer");

const timerLabel =
    document.getElementById("timerLabel");

const festivalMessage =
    document.getElementById("festivalMessage");

const fluteMusic =
    document.getElementById("fluteMusic");

const krishnaVoice =
    document.getElementById("krishnaVoice");

const musicButton =
    document.getElementById("musicButton");

const prayTogetherMessage =
    document.getElementById(
        "prayTogetherMessage"
    );

const godTalk =
    document.getElementById(
        "godTalk"
    );

const godTalkText =
    document.getElementById(
        "godTalkText"
    );

const blessingPage =
    document.getElementById(
        "krishnaBlessingPage"
    );


/* =====================================================
   VARIABLES
====================================================== */

let fluteStarted = false;

let festivalCountdown = null;

let blessingStarted = false;

let prayerStarted = false;


/* =====================================================
   AUDIO SETTINGS
====================================================== */

/*
   NORMAL FLUTE VOLUME
*/

const NORMAL_FLUTE_VOLUME = 0.22;


/*
   VERY SOFT FLUTE DURING KRISHNA BLESSING
*/

const KRISHNA_FLUTE_VOLUME = 0.04;


/* =====================================================
   AUDIO PREPARATION
====================================================== */

fluteMusic.loop = true;

fluteMusic.preload = "auto";

krishnaVoice.loop = false;

krishnaVoice.preload = "auto";

krishnaVoice.pause();

krishnaVoice.currentTime = 0;

krishnaVoice.playbackRate = 1.0;


/* =====================================================
   START FLUTE
====================================================== */

function startFlute() {

    if (fluteStarted) {

        if (fluteMusic.paused) {

            fluteMusic.play()
                .then(function () {

                    musicButton.innerHTML = "🔊";

                })
                .catch(function (error) {

                    console.log(
                        "Flute waiting for interaction:",
                        error
                    );

                });

        }

        return;

    }


    fluteMusic.volume =
        NORMAL_FLUTE_VOLUME;

    fluteMusic.currentTime = 0;


    fluteMusic.play()
        .then(function () {

            fluteStarted = true;

            musicButton.innerHTML =
                "🔊";

            console.log(
                "🎵 Flute started"
            );

        })
        .catch(function (error) {

            console.log(
                "🎵 Flute playback waiting:",
                error
            );

        });

}


/* =====================================================
   INTRO
====================================================== */

const introMessages = [

    "Don't click anything yet.",

    "Just look at the sky for a moment.",

    "Tonight is Janmashtami.",

    "And I know this year is different for you."

];


let introIndex = 0;


setTimeout(function () {

    typeIntro();

}, 2000);


function typeIntro() {

    const text =
        introMessages[introIndex];

    introLine.innerHTML = "";

    let index = 0;

    const typing =
        setInterval(function () {

            introLine.innerHTML +=
                text[index];

            index++;


            if (
                index >= text.length
            ) {

                clearInterval(typing);


                if (
                    introIndex <
                    introMessages.length - 1
                ) {

                    setTimeout(function () {

                        introIndex++;

                        typeIntro();

                    }, 1800);

                }

                else {

                    continueButton
                        .classList
                        .remove("hidden");

                }

            }

        }, 40);

}


/* =====================================================
   PAGE 1 → PAGE 2
====================================================== */

function nextIntro() {

    startFlute();


    introScene
        .classList
        .remove("active");


    emotionalScene
        .classList
        .add("active");


    emotionalText.innerHTML =
        "Tonight is Janmashtami.";


    emotionalSubtext.innerHTML =
        "You're probably wishing you were home right now...";


    setTimeout(function () {

        emotionalSubtext.innerHTML =
            "Where you could actually celebrate it.";

    }, 2200);


    setTimeout(function () {

        emotionalSubtext.innerHTML =
            "So I wanted to bring a little piece of that home to you.";

    }, 4400);


    setTimeout(function () {

        emotionalButton
            .classList
            .remove("hidden");

    }, 6200);

}


/* =====================================================
   PAGE 2 → FESTIVAL
====================================================== */

function startFestival() {

    startFlute();


    emotionalScene
        .classList
        .remove("active");


    festivalScene
        .classList
        .add("active");


    startFestivalTimer();

}


/* =====================================================
   FESTIVAL MESSAGES
====================================================== */

const festivalMessages = [

    {
        time: 40,
        text:
            "For the light you carry with you. 🪔"
    },

    {
        time: 33,
        text:
            "For all the happiness I hope finds you."
    },

    {
        time: 27,
        text:
            "For the day you wait for every year. 🦚"
    },

    {
        time: 20,
        text:
            "For the celebration I wish I could watch beside you."
    },

    {
        time: 13,
        text:
            "I wish distance didn't exist tonight."
    },

    {
        time: 7,
        text:
            "But even from far away... I'm thinking of you."
    },

    {
        time: 3,
        text:
            "This little moment is yours. ❤️"
    }

];


/* =====================================================
   FESTIVAL TIMER
====================================================== */

function startFestivalTimer() {

    if (festivalCountdown) {

        clearInterval(
            festivalCountdown
        );

    }


    let seconds = 40;


    timer.innerHTML =
        seconds;


    timerLabel.innerHTML =
        "Stay here for a little while...";


    festivalMessage.innerHTML =
        "";


    showFestivalMessage(seconds);


    festivalCountdown =
        setInterval(function () {

            seconds--;


            timer.innerHTML =
                seconds;


            showFestivalMessage(seconds);


            if (seconds <= 0) {

                clearInterval(
                    festivalCountdown
                );

                festivalCountdown =
                    null;


                finishFestival();

            }

        }, 1000);

}


/* =====================================================
   FESTIVAL MESSAGE
====================================================== */

function showFestivalMessage(seconds) {

    let selected = null;


    for (
        let i = 0;
        i < festivalMessages.length;
        i++
    ) {

        if (
            seconds <=
            festivalMessages[i].time
        ) {

            selected =
                festivalMessages[i];

        }

    }


    if (selected) {

        festivalMessage.style.opacity =
            "0";


        setTimeout(function () {

            festivalMessage.innerHTML =
                selected.text;


            festivalMessage.style.opacity =
                "1";

        }, 300);

    }

}


/* =====================================================
   FESTIVAL → PRAYER
====================================================== */

function finishFestival() {

    timerLabel.innerHTML =
        "Let's pray together. 🪔";


    festivalMessage.style.opacity =
        "0";


    setTimeout(function () {

        festivalScene
            .classList
            .remove("active");


        prayerScene
            .classList
            .add("active");


        startPrayer();

    }, 1500);

}


/* =====================================================
   START PRAYER
====================================================== */

function startPrayer() {

    if (prayerStarted) {

        return;

    }


    prayerStarted = true;


    startFlute();


    prayerContent
        .classList
        .remove("hide");


    prayerContent
        .classList
        .remove("prayer-lower");


    krishnaPrayer
        .classList
        .remove("active");


    flowerOffering
        .classList
        .remove("active");


    harathiContainer
        .classList
        .remove("active");


    prayTogetherMessage
        .classList
        .remove("active");


    godTalk
        .classList
        .remove("active");


    prayerFinal
        .classList
        .remove("active");


    blessingPage
        .classList
        .remove("active");


    leftDiya
        .classList
        .remove("lit");


    rightDiya
        .classList
        .remove("lit");


    const leftFlame =
        leftDiya.querySelector(
            ".prayer-flame"
        );


    const rightFlame =
        rightDiya.querySelector(
            ".prayer-flame"
        );


    leftFlame
        .classList
        .add("hidden");


    rightFlame
        .classList
        .add("hidden");


    setTimeout(function () {

        lightPrayerButton
            .classList
            .remove("hidden");

    }, 500);

}


/* =====================================================
   STEP 1 — LIGHT DIYAS
====================================================== */

lightPrayerButton.addEventListener(
    "click",
    function () {

        lightPrayerButton
            .classList
            .add("hidden");


        leftDiya
            .classList
            .add("lit");


        rightDiya
            .classList
            .add("lit");


        const leftFlame =
            leftDiya.querySelector(
                ".prayer-flame"
            );


        const rightFlame =
            rightDiya.querySelector(
                ".prayer-flame"
            );


        leftFlame
            .classList
            .remove("hidden");


        rightFlame
            .classList
            .remove("hidden");


        document.getElementById(
            "prayerTitle"
        ).innerHTML =
            "The light is for you. 🪔";


        document.getElementById(
            "prayerSubtitle"
        ).innerHTML =
            "And one for me...";


        /* -----------------------------------------
           SHOW KRISHNA
        ----------------------------------------- */

        setTimeout(function () {

            prayerContent
                .classList
                .add("prayer-lower");


            krishnaPrayer
                .classList
                .add("active");


        }, 1000);


        /* -----------------------------------------
           PRAY TOGETHER TEXT
        ----------------------------------------- */

        setTimeout(function () {

            prayTogetherMessage
                .classList
                .add("active");

        }, 2200);


        /* -----------------------------------------
           REMOVE TEXT + START FLOWERS
        ----------------------------------------- */

        setTimeout(function () {

            prayTogetherMessage
                .classList
                .remove("active");


            setTimeout(function () {

                startFlowerOffering();

            }, 800);

        }, 5000);

    }
);


/* =====================================================
   STEP 2 — FLOWERS GO TO KRISHNA
====================================================== */

function startFlowerOffering() {

    prayerContent
        .classList
        .add("hide");


    krishnaPrayer
        .classList
        .add("active");


    flowerOffering
        .classList
        .add("active");


    /* -----------------------------------------
       FLOWERS COMPLETE
       THEN 2 SECOND GAP
    ----------------------------------------- */

    setTimeout(function () {

        flowerOffering
            .classList
            .remove("active");


        setTimeout(function () {

            startHarathi();

        }, 2000);

    }, 4500);

}


/* =====================================================
   STEP 3 — HARATHI
====================================================== */

function startHarathi() {

    /*
       KEEP KRISHNA VISIBLE WHILE
       AARATHI / HARATHI IS OFFERED.
    */

    krishnaPrayer
        .classList
        .add("active");


    harathiContainer
        .classList
        .add("active");


    /* -----------------------------------------
       PHYSICAL POOJA MOMENT
       7 SECONDS
    ----------------------------------------- */

    setTimeout(function () {

        finishHarathi();

    }, 7000);

}


/* =====================================================
   STEP 4 — FINISH HARATHI
====================================================== */

function finishHarathi() {

    harathiContainer
        .classList
        .remove("active");


    krishnaPrayer
        .classList
        .add("active");


    /* -----------------------------------------
       PEACEFUL 2 SECOND GAP
    ----------------------------------------- */

    setTimeout(function () {

        startGodTalk();

    }, 2000);

}


/* =====================================================
   STEP 5 — GOD TALKS / SPIRITUAL SENTENCES
====================================================== */

function startGodTalk() {

    godTalkText.innerHTML =
        "Where there is devotion, there is peace.";


    godTalk
        .classList
        .add("active");


    /* -----------------------------------------
       FIRST SENTENCE
       2.8 SECONDS
    ----------------------------------------- */

    setTimeout(function () {

        godTalk
            .classList
            .remove("active");


        setTimeout(function () {

            godTalkText.innerHTML =
                "May Krishna's grace always guide your way.";


            godTalk
                .classList
                .add("active");

        }, 1000);

    }, 2800);


    /* -----------------------------------------
       SECOND SENTENCE ENDS
    ----------------------------------------- */

    setTimeout(function () {

        godTalk
            .classList
            .remove("active");


        setTimeout(function () {

            startKrishnaBlessing();

        }, 1500);

    }, 6800);

}


/* =====================================================
   STEP 6 — KRISHNA BLESSING
====================================================== */

function startKrishnaBlessing() {

    if (blessingStarted) {

        return;

    }


    blessingStarted = true;


    /* -----------------------------------------
       HIDE PRAYER KRISHNA
    ----------------------------------------- */

    krishnaPrayer
        .classList
        .remove("active");


    /* -----------------------------------------
       FLUTE SMOOTHLY DECREASES
    ----------------------------------------- */

    fadeFluteVolume(
        fluteMusic.volume,
        KRISHNA_FLUTE_VOLUME,
        1500
    );


    /* -----------------------------------------
       SHOW KRISHNA BLESSING PAGE
    ----------------------------------------- */

    setTimeout(function () {

        blessingPage
            .classList
            .add("active");

    }, 300);


    /* -----------------------------------------
       START KRISHNA VOICE
    ----------------------------------------- */

    setTimeout(function () {

        krishnaVoice.currentTime = 0;

        krishnaVoice.volume = 1;


        /*
           FIRST 60 SECONDS:
           ONLY SLIGHTLY FASTER.

           1.08 = 8% faster.
           The voice remains understandable.
        */

        krishnaVoice.playbackRate = 1.08;


        krishnaVoice.play()
            .then(function () {

                console.log(
                    "🦚 Krishna blessing started at 1.08x"
                );

            })
            .catch(function (error) {

                console.log(
                    "Krishna voice waiting:",
                    error
                );

            });


        /* -----------------------------------------
           AFTER 60 SECONDS:
           RETURN TO NORMAL SPEED
        ----------------------------------------- */

        setTimeout(function () {

            /*
               Only the playback speed changes.
               Everything else stays untouched.
            */

            krishnaVoice.playbackRate = 1.0;


            console.log(
                "🦚 Krishna voice returned to normal speed"
            );

        }, 60000);


    }, 1200);


    /* -----------------------------------------
       WHEN KRISHNA VOICE FINISHES
    ----------------------------------------- */

    krishnaVoice.onended =
        function () {

            /*
               Always reset speed before
               continuing to the next page.
            */

            krishnaVoice.playbackRate = 1.0;


            finishKrishnaBlessing();

        };

}


/* =====================================================
   SMOOTH FLUTE VOLUME
====================================================== */

function fadeFluteVolume(
    startVolume,
    endVolume,
    duration
) {

    const startTime =
        performance.now();


    function animateVolume(
        currentTime
    ) {

        const elapsed =
            currentTime - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const newVolume =
            startVolume +
            (
                endVolume -
                startVolume
            ) *
            progress;


        fluteMusic.volume =
            newVolume;


        if (progress < 1) {

            requestAnimationFrame(
                animateVolume
            );

        }

    }


    requestAnimationFrame(
        animateVolume
    );

}


/* =====================================================
   STEP 7 — FINISH KRISHNA BLESSING
====================================================== */

function finishKrishnaBlessing() {

    /* -----------------------------------------
       REMOVE BLESSING PAGE
    ----------------------------------------- */

    blessingPage
        .classList
        .remove("active");


    /* -----------------------------------------
       STOP KRISHNA VOICE
    ----------------------------------------- */

    if (!krishnaVoice.paused) {

        krishnaVoice.pause();

    }


    krishnaVoice.currentTime =
        0;


    /*
       RESET PLAYBACK SPEED
       FOR NEXT PLAY
    */

    krishnaVoice.playbackRate =
        1.0;


    /* -----------------------------------------
       FLUTE RETURNS SMOOTHLY
    ----------------------------------------- */

    if (!fluteMusic.paused) {

        fadeFluteVolume(
            fluteMusic.volume,
            NORMAL_FLUTE_VOLUME,
            1800
        );

    }


    /* -----------------------------------------
       FINAL PRAYER
    ----------------------------------------- */

    setTimeout(function () {

        prayerFinal
            .classList
            .add("active");

    }, 1000);


    /* -----------------------------------------
       MEMORY PAGE
    ----------------------------------------- */

    setTimeout(function () {

        showMemory();

    }, 6800);

}


/* =====================================================
   MEMORY PAGE
====================================================== */

function showMemory() {

    if (!krishnaVoice.paused) {

        krishnaVoice.pause();

    }


    krishnaVoice.currentTime =
        0;


    krishnaVoice.playbackRate =
        1.0;


    if (!fluteMusic.paused) {

        fluteMusic.volume =
            NORMAL_FLUTE_VOLUME;

    }


    prayerScene
        .classList
        .remove("active");


    memoryScene
        .classList
        .add("active");

}


/* =====================================================
   MEMORY → LETTER
====================================================== */

function showLetter() {

    memoryScene
        .classList
        .remove("active");


    letterScene
        .classList
        .add("active");


    letterScene.scrollTop =
        0;


    createParticles();

}


/* =====================================================
   MUSIC BUTTON
====================================================== */

function toggleMusic() {

    if (
        prayerScene
            .classList
            .contains("active")
    ) {

        return;

    }


    if (fluteMusic.paused) {

        fluteMusic.play()
            .then(function () {

                fluteStarted =
                    true;


                musicButton.innerHTML =
                    "🔊";


                if (krishnaVoice.paused) {

                    fluteMusic.volume =
                        NORMAL_FLUTE_VOLUME;

                }

            })
            .catch(function (error) {

                console.log(
                    "Music playback error:",
                    error
                );

            });

    }

    else {

        fluteMusic.pause();


        musicButton.innerHTML =
            "🔇";

    }

}


/* =====================================================
   FLOATING PARTICLES
====================================================== */

function createParticles() {

    const symbols = [

        "❤️",
        "🦚",
        "✨",
        "🌸",
        "💛"

    ];


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.position =
            "fixed";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            "-30px";


        particle.style.fontSize =
            Math.random() * 15 +
            15 +
            "px";


        particle.style.zIndex =
            "1000";


        particle.style.pointerEvents =
            "none";


        particle.style.transition =
            "transform 5s linear, opacity 5s";


        document.body.appendChild(
            particle
        );


        setTimeout(function () {

            particle.style.transform =
                "translateY(110vh) rotate(500deg)";


            particle.style.opacity =
                "0";

        }, 100);


        setTimeout(function () {

            particle.remove();

        }, 5200);

    }

}


/* =====================================================
   AUDIO DEBUGGING
====================================================== */

fluteMusic.addEventListener(
    "error",
    function () {

        console.error(
            "❌ flute.mp3 could not be loaded."
        );

        console.error(
            "Make sure flute.mp3 is in the SAME folder as index.html."
        );

    }
);


krishnaVoice.addEventListener(
    "error",
    function () {

        console.error(
            "❌ krishna.mp3 could not be loaded."
        );

        console.error(
            "Make sure krishna.mp3 is in the SAME folder as index.html."
        );

    }
);


/* =====================================================
   AUDIO LOADING DEBUG
====================================================== */

fluteMusic.addEventListener(
    "loadedmetadata",
    function () {

        console.log(
            "🎵 Flute duration:",
            fluteMusic.duration,
            "seconds"
        );

    }
);


krishnaVoice.addEventListener(
    "loadedmetadata",
    function () {

        console.log(
            "🦚 Krishna audio duration:",
            krishnaVoice.duration,
            "seconds"
        );

    }
);


/* =====================================================
   INITIAL AUDIO STATE
====================================================== */

fluteMusic.volume =
    NORMAL_FLUTE_VOLUME;


krishnaVoice.volume =
    1;


/*
   IMPORTANT:
   Always start Krishna voice at normal
   speed before the blessing begins.
*/

krishnaVoice.playbackRate =
    1.0;


console.log(
    "🪷 Janmashtami experience ready."
);
