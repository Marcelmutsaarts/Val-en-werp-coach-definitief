import { Technique, SportProfile } from './types';

export const sportProfiles: SportProfile[] = [
    { id: 1, name: 'Grappling / wrestling' },
    { id: 2, name: 'Judo' },
    { id: 3, name: 'BJJ' },
    { id: 4, name: 'Aikido' },
    { id: 5, name: 'Jiu-Jitsu' },
    { id: 6, name: 'WWE / Catch wrestling' },
];

export const techniques: Technique[] = [
    // Achterwaarts
    { id: 't1', name: 'O soto gari', sportProfileId: 2, fallDirection: 'achterwaarts', difficulty: 'laag', youtubeUrl: 'https://www.youtube.com/watch?v=KeIPk8O58zs' },
    { id: 't2', name: 'O uchi gari', sportProfileId: 2, fallDirection: 'achterwaarts', difficulty: 'laag', youtubeUrl: 'https://www.youtube.com/watch?v=I3BWf1ZoIuc' },
    { id: 't3', name: 'Ko uchi gari', sportProfileId: 2, fallDirection: 'achterwaarts', difficulty: 'laag', youtubeUrl: 'https://www.youtube.com/watch?v=5E20xuzaXNw' },
    { id: 't4', name: 'Shiho nage', sportProfileId: 4, fallDirection: 'achterwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/T9vWR7EdQdM?si=vpjZwhrNTDgRYc_h' },
    { id: 't5', name: 'Seated Guard Double Kouchi', sportProfileId: 1, fallDirection: 'achterwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/QtJPO4AxLxI?si=XHPX-J7yHIW68OOQ' },
    { id: 't6', name: 'Tripod sweep', sportProfileId: 3, fallDirection: 'achterwaarts', difficulty: 'laag', youtubeUrl: 'https://youtube.com/shorts/GpCkOrK_kUI?si=4JFX38rymJ4YJGq9' },
    { id: 't7', name: 'Double leg (low)', sportProfileId: 3, fallDirection: 'achterwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/wxNAEByjOoA?si=bEHvccHS5pSgCwe4' },
    { id: 't8', name: 'Underhook knee tap', sportProfileId: 1, fallDirection: 'achterwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/AaImfGwY6vQ?si=EYc_1b0BnrprwUMr' },
    { id: 't9', name: 'Hip lunge breakdown', sportProfileId: 1, fallDirection: 'achterwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/J5hUhxbO-Oo?si=Y9qHw1qpvWdWFNR2' },
    { id: 't10', name: 'Leg sweep ankle pick', sportProfileId: 6, fallDirection: 'achterwaarts', difficulty: 'laag', youtubeUrl: 'https://www.youtube.com/watch?v=qxObQaTFHTU' },
    { id: 't11', name: 'Single leg (leg block)', sportProfileId: 3, fallDirection: 'achterwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/JKtXtEOvSdQ?si=fqab52eVdddc0aGt' },
    { id: 't12', name: 'Sweep single', sportProfileId: 3, fallDirection: 'achterwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/YBG9LkoAMoo?si=lRsITVtMnSpbpK5g' },
    { id: 't13', name: 'Double leg (high)', sportProfileId: 3, fallDirection: 'achterwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/NTnNuvx1pPs?si=89B6qtG5-qmRrA2n' },
    { id: 't14', name: 'Single leg', sportProfileId: 3, fallDirection: 'achterwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/4HBVdF5AXc0?si=qWmznQqSsbgamyQr' },
    { id: 't15', name: 'Single leg trap takedown', sportProfileId: 1, fallDirection: 'achterwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/JKtXtEOvSdQ?si=fqab52eVdddc0aGt' },
    { id: 't16', name: 'Imanari roll', sportProfileId: 3, fallDirection: 'achterwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/Zm7uOETsZ3g?si=B5VCpNP5J85x4KZv' },
    { id: 't17', name: 'Schoolboy takedown', sportProfileId: 1, fallDirection: 'achterwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/TwNzw40dvYs?si=24Cph_vgpeoiFd-Z' },
    { id: 't18', name: 'x-guard sweep', sportProfileId: 3, fallDirection: 'achterwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/4sEveMOIpqo?si=M7_pyVvVY2gQzC-I' },
    { id: 't19', name: 'Kiss of the dragon', sportProfileId: 3, fallDirection: 'achterwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/-z_UYv5w_Qk?si=eR1sjSuDo15jUMXT' },
    { id: 't20', name: 'Body slam', sportProfileId: 6, fallDirection: 'achterwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/1I-y9FuBz-o?si=5CL18HwF5F3ArWgT' },
    { id: 't21', name: 'Stick attack counter', sportProfileId: 5, fallDirection: 'achterwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/XLwtlcxy2eQ?si=jN3gc7JHE4vCavcK' },

    // Voorwaarts
    { id: 't22', name: 'O goshi', sportProfileId: 2, fallDirection: 'voorwaarts', difficulty: 'laag', youtubeUrl: 'https://www.youtube.com/watch?v=VLYKx-Fwhxg' },
    { id: 't23', name: 'Uki goshi', sportProfileId: 2, fallDirection: 'voorwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/5jVF6r366Kg?si=ZdzjmW8FzhPxFgeX' },
    { id: 't24', name: 'Snap down', sportProfileId: 1, fallDirection: 'voorwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/Jp96eJudDxQ?si=OgctvqPjqq1uT44S' },
    { id: 't25', name: 'Headlock takeover', sportProfileId: 6, fallDirection: 'voorwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/y8aEudoaZm0?si=z3w9b0TUPFxtLz79' },
    { id: 't26', name: 'Duck under to takedown', sportProfileId: 6, fallDirection: 'voorwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/wTIbkWnK-nw?si=r0fjLXd13CwtWjER' },
    { id: 't27', name: 'Hammerlock', sportProfileId: 6, fallDirection: 'voorwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/i2LzI2m00lU?si=hSua6FX9ZrGWpHYW' },
    { id: 't28', name: 'Snap takedown', sportProfileId: 5, fallDirection: 'voorwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/DxX3mvbM3tE?si=f53XhgeS-xR-nVoz' },
    { id: 't29', name: 'Ippon seoi nage', sportProfileId: 2, fallDirection: 'voorwaarts', difficulty: 'hoog', youtubeUrl: 'https://www.youtube.com/watch?v=OmKfUXAAdZ0' },
    { id: 't30', name: 'Kote gaeshi', sportProfileId: 4, fallDirection: 'voorwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/ll1GCzl4Bxg?si=VX3KxofYDUwBHUQj' },
    { id: 't31', name: 'Seatbelt throw', sportProfileId: 1, fallDirection: 'voorwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/7LcTzACQ7Lo?si=VQY2E901sGX6W2mP' },
    { id: 't32', name: 'Thai sweep', sportProfileId: 1, fallDirection: 'voorwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/rS-EmsmWlSo?si=4_0cZpPzhEDoVsME' },
    { id: 't33', name: 'Sunset flip', sportProfileId: 6, fallDirection: 'voorwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/YL04EGORU5w?si=nQoRzOEfe7n6luF0' },
    { id: 't34', name: 'Clothesline', sportProfileId: 6, fallDirection: 'voorwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/yVBSU_hBoQQ?si=Le5FbOCbOR86C3u_' },
    { id: 't35', name: 'Shiho nage variation (Jiu-Jitsu)', sportProfileId: 5, fallDirection: 'voorwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/33mEgh5O4NM?si=I3St3Dw-Swh8HM1d' },
    { id: 't36', name: 'Scissor roll (kani-basami)', sportProfileId: 3, fallDirection: 'voorwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/YncIOGDSps0?si=KFWIFm6S2CyS6wIg' },
    { id: 't37', name: 'Two sleeve suplex', sportProfileId: 3, fallDirection: 'voorwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/Q0n9__dQYU8?si=IrrjckDTJQWpmpdS' },
    { id: 't38', name: 'Key lock roll', sportProfileId: 1, fallDirection: 'voorwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/NExqwHV41j0?si=nDgvJOKVdGfJwsQn' },
    { id: 't39', name: 'Opofferworp: Tomoe nage', sportProfileId: 2, fallDirection: 'voorwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/880WbHvHv6A?si=EnodT6BEnARhZA6B' },
    { id: 't40', name: 'Heupworp: harai goshi', sportProfileId: 2, fallDirection: 'voorwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/_gcIWtS-9Ms?si=zvdJUOQhTWWNLlON' },

    // Zijwaarts
    { id: 't41', name: 'Knee tap', sportProfileId: 1, fallDirection: 'zijwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/phKg556osOY?si=0bAj9zM_t-ch6Ikr' },
    { id: 't42', name: 'Ankle pick', sportProfileId: 3, fallDirection: 'zijwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/FfCZQXZ6eqY?si=8gSrUpAdb0WSaDp2' },
    { id: 't43', name: 'De ashi barai', sportProfileId: 2, fallDirection: 'zijwaarts', difficulty: 'laag', youtubeUrl: 'https://youtu.be/gW9LEvVmG2o?si=HmKMc5bZsFZEMyaz' },
    { id: 't44', name: 'Ushiro Goshi (Rear Throw)', sportProfileId: 2, fallDirection: 'zijwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/pyzYfHXivs4?si=iuRS9p5pmpvbVusV' },
    { id: 't45', name: 'Koshi nage (Aikido)', sportProfileId: 4, fallDirection: 'zijwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/i8uu52XeZno?si=SHyt2ZJuzDsP07CP' },
    { id: 't46', name: 'Gator roll takedown', sportProfileId: 1, fallDirection: 'zijwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtube.com/shorts/nExjwHaYGO8?si=bdQIGN1xCoGGMp4v' },
    { id: 't47', name: 'Single leg (drive/football tackle)', sportProfileId: 1, fallDirection: 'zijwaarts', difficulty: 'hoog', youtubeUrl: 'https://youtu.be/s3Mm2PcqwpE?si=8Pr-sOyfPQsWF5Pc' },
    { id: 't48', name: 'Lateral drop suplex', sportProfileId: 1, fallDirection: 'zijwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtube.com/shorts/wgV-5iWxTSo?si=llo1AcBAhgjxi0BZ' },
    { id: 't49', name: "Fireman's carry", sportProfileId: 1, fallDirection: 'zijwaarts', difficulty: 'uitdagend', youtubeUrl: 'https://youtu.be/vHONX2Q3xAE?si=su5f8Dxayutzo3oW' }
];

export const assessmentData = {
    title: "Toetsinstructie: 'van staand naar de grond'",
    description: "De afsluiting van de show/demonstratie/verhaallijn is een summatieve toets. De attitude tijdens de lessen wordt ook meegenomen. De demonstratie wordt als geheel centraal gesteld, zonder aarzelen en op hoog tempo uitgevoerd.",
    uitvoering: {
        title: "Uitvoering van de Toets",
        intro: "De afsluiting wordt uitgevoerd in viertallen, waarbij binnen elke groep zes verschillende tweetalcombinaties worden gevormd. Elk tweetal presenteert samen twee verschillende technieken die aansluiten bij een gekozen thema.",
        bevat: {
            title: "De uitvoering bevat:",
            points: [
                "Minimaal één val- en één werpmoment uit elk sportprofiel.",
                "Showelementen zoals muziek, kleding en regie passend bij het thema.",
                "Veiligheid, samenwerking en presentatie staan centraal."
            ]
        },
        presentatie: {
            title: "De presentatie vormt de afsluiting van het leerproces waarin de student laat zien:",
            points: [
                "beheersing van val- en werptechnieken,",
                "toepassing van showelementen,",
                "en een creatieve, verzorgde uitvoering binnen een gekozen stijl of verhaal."
            ]
        },
        contingency: "De duo`s moeten ook de show kunnen uitvoeren wanneer iemand uitvalt uit de groep."
    },
    summative: {
        title: "Summatieve Leertaken",
        points: [
            "Veilig laag vallen: Veilig laag vallen en valbreken vanuit diverse lage worpen of situaties.",
            "Veilig hoog vallen: Veilig hoog vallen en valbreken vanuit diverse hoge worpen of situaties.",
            "Veilig werpen (laag en hoog): Verschillende lage en hoge worpen veilig inzetten en uitvoeren.",
            "Showelement: De demonstratie bevat showelementen (aankleding, sfeer, timing, ritme, regie) om de uitvoering visueel aantrekkelijk en overtuigend te maken."
        ]
    },
    formative: {
        title: "Formatieve Leertaken",
        points: [
            "Uitdagende technieken uitvoeren: Jezelf uitdagen met complexe of technisch moeilijke worpen en valbreektechnieken.",
            "Combinaties: Worpen en valtechnieken combineren in een vloeiende opeenvolging.",
            "Snelheid: Worpen en valtechnieken met toenemende snelheid en controle uitvoeren.",
            "Extra showelementen en/of regie: Extra showelementen of regie toevoegen om de presentatie te versterken."
        ]
    },
    attitude: {
        title: "Attitude",
        description: "De student toont een positieve, respectvolle en veilige houding tijdens de lessen en uitvoering. Hij/Zij werkt actief, samenwerkingsgericht en verantwoordelijk, gaat zorgvuldig om met medestudenten en materiaal, en toont doorzettingsvermogen en sportiviteit in elke oefensituatie."
    }
};

export const learningTasksData = [
    {
        title: "Fase 1: Imitatie (onvoldoende)",
        description: "Een vaardigheid na observatie proberen te doen en accepteren dat het resultaat nog niet altijd goed is."
    },
    {
        title: "Fase 2: Oefen (matig)",
        description: "Verbeteren van de vaardigheid door lessen te volgen, instructies te krijgen of door erover te lezen en te oefenen."
    },
    {
        title: "Fase 3: Verfijn (voldoende)",
        description: "Verfijnen van de vaardigheid totdat deze zelfstandig op een hoog niveau kan worden uitgevoerd en gedemonstreerd aan anderen."
    },
    {
        title: "Fase 4: Combinatie (ruim voldoende)",
        description: "Toevoegen van nieuwe (deel-)vaardigheden waardoor iets nieuws of eigens wordt verkregen."
    },
    {
        title: "Fase 5: Automatisering (goed)",
        description: "Doorontwikkelen van de vaardigheid waardoor deze geheel geautomatiseerd en onbewust plaatsvindt en er ruimte ontstaat voor nieuwe ontwikkelingen."
    }
];

export const breakfallData = {
    title: "Methodische Opbouw Valbreken",
    description: "De leerlijn Valbreken is opgebouwd volgens een methodische, veilige en didactische opbouw van laag naar hoog, eenvoudig naar complex en individueel naar samenwerkend. In week 6 en 7 worden de technieken toegepast in spel- en lessituaties.",
    weeks: [
        { week: 1, focus: "Basisvaltechnieken (voorwaarts) vanuit lage posities." },
        { week: 2, focus: "Basisvaltechnieken (achterwaarts) vanuit lage posities." },
        { week: 3, focus: "Basisvaltechnieken (zijwaarts) vanuit lage posities." },
        { week: 4, focus: "Toenemende moeilijkheid: valreacties op commando, hogere snelheid." },
        { week: 5, focus: "Toenemende moeilijkheid: combinaties en samenwerking." },
        { week: 6, focus: "Toepassing in spel- en lessituaties." },
        { week: 7, focus: "Integratie in dynamische, creatieve en didactisch verantwoorde vormen." },
        { week: 8, focus: "Oefenen en uitvoeren van de show/demonstratie (evaluatie)." }
    ],
    inspiration: [
        { title: "Rol vormen", url: "https://youtu.be/U9PXtqwI57M?si=SnZ72YGMCtkMcAjF" },
        { title: "Basis valbreken", url: "https://youtu.be/Tbi1Y9zRQsg?si=wZLdjnQrLhi9ucI5" },
        { title: "Zijwaarts (shoulder) rollen", url: "https://youtu.be/exkwjkM0P7U?si=LfaF-_AIo5EPu2WM" },
        { title: "Barrel roll", url: "https://youtu.be/eAwidAAZAmw?si=LJsm4muS8a-h7lT6" },
        { title: "Carthweel out", url: "https://youtu.be/tY2DMllpQWk?si=3BoQ5FNtZoWoLHDX" },
        { title: "Carthweel out (Short)", url: "https://youtube.com/shorts/KWmzHMSaAvE?si=DS7DWQgr1ei57wLR" },
    ],
    safetyTips: [
        "Kin op de borst houden bij vallen.",
        "Actief afslaan met arm en handpalm om de klap te verdelen.",
        "Begin langzaam en bouw het tempo geleidelijk op.",
        "Communiceer altijd goed met je partner."
    ],
    importance: {
        title: "Waarom is valbreken belangrijk in het onderwijs?",
        intro: "Valbreken is een basisvaardigheid voor veiligheid, motoriek en zelfvertrouwen. In het bewegingsonderwijs leren leerlingen niet alleen vallen zonder pijn, maar ook hoe ze met risico’s omgaan en controle over hun lichaam behouden.",
        points: [
            {
                title: "Veiligheid en blessurepreventie",
                content: "Kinderen vallen regelmatig — tijdens gym, op het schoolplein, bij sport of buitenspelen. Door valbreekvaardigheden te leren, weten ze hoe ze spanning opbouwen in het lichaam, de klap opvangen met armen en schouders en het hoofd beschermen. Dat verkleint de kans op blessures aanzienlijk."
            },
            {
                title: "Motorische ontwikkeling en lichaamsbesef",
                content: "Valbreken traint coördinatie, balans, timing en rotatie — fundamentele motorische vaardigheden die de basis vormen voor veel andere sporten (turnen, judo, freerunnen, voetbal). Leerlingen leren hun lichaamszwaartepunt beheersen, spanning opbouwen en gecontroleerd bewegen."
            },
            {
                title: "Omgaan met spanning, angst en vertrouwen",
                content: "Vallen vraagt lef en controle. Leerlingen leren om te gaan met spanning, angst te overwinnen en te vertrouwen op hun eigen kunnen — én op hun docent of partner. Het versterkt zelfvertrouwen en mentale veerkracht."
            },
            {
                title: "Sociale en pedagogische waarde",
                content: "Veel valbreekvormen gebeuren in tweetallen of groepjes: leerlingen leren samenwerken, elkaar vertrouwen en verantwoordelijkheid nemen voor veiligheid. Dit draagt bij aan een positief pedagogisch klimaat in de gymles."
            }
        ]
    }
};

export const sportenData = {
    title: "Uitleg Sportprofielen",
    description: "Elk sportprofiel heeft een unieke benadering van werpen, vallen en controleren. Ontdek hier de achtergrond van elke stijl. Iedere week komt er een ander sportprofiel aan bod waarbij jullie verschillende vormen krijgen die bij deze sport horen.",
    profiles: [
        {
            title: "Judo",
            description: "Judo is een Japanse vechtsport waarbij de nadruk ligt op balans, controle en het veilig werpen of naar de grond brengen van de tegenstander. Respect, techniek en timing staan centraal binnen deze discipline. Wereldwijd zijn er meer dan vijftig miljoen judoka’s actief in ruim tweehonderd landen, met name in Japan, Frankrijk, Brazilië, Canada en Rusland. Typische worpen die je binnen judo ziet zijn de o-soto-gari (grote beenveeg), ippon seoi-nage (schouderworp), tai-otoshi (lichaamsvalworp) en koshi-guruma (heupworp). Op het YouTube-kanaal van de International Judo Federation zijn veel officiële techniekvideo’s en wedstrijden te vinden die een goed beeld geven van de sport.",
            youtubeUrl: "https://youtu.be/pgfKasoI5yc?si=XVb3IKsLAGw7ULNF"
        },
        {
            title: "Brazilian Jiu-Jitsu (BJJ)",
            description: "BJJ richt zich vooral op grondgevechten, controle en submissies zoals klemmen en verwurgingen. In deze sport zijn techniek, hefboomwerking en timing belangrijker dan fysieke kracht. Wereldwijd beoefenen ongeveer zes miljoen mensen BJJ, met grote aantallen in Brazilië, de Verenigde Staten en Japan. Veelvoorkomende takedowns zijn de double-leg takedown, hip throw, trip sweep en arm drag. Op YouTube biedt het kanaal BJJ Fanatics uitgebreide uitleg van basis- en gevorderde technieken.",
            youtubeUrl: "https://youtu.be/MsD1ZdG8m8c?si=mP8-Woky52NjJIx3"
        },
        {
            title: "Wrestling (Worstelen)",
            description: "Olympisch worstelen is een van de oudste sporten ter wereld en richt zich op het controleren, verplaatsen en naar de grond brengen van een tegenstander zonder trappen of stoten. De sport vraagt veel kracht, snelheid en uithoudingsvermogen. Ze is bijzonder populair in de Verenigde Staten, Rusland (vooral in Dagestan), Iran en Turkije, met wereldwijd miljoenen beoefenaars. Bekende worpen zijn de single-leg takedown, double-leg takedown, suplex, body lock throw en ankle pick. Op het YouTube-kanaal van USA Wrestling zijn technische trainingen en wedstrijdfragmenten te vinden.",
            youtubeUrl: "https://youtu.be/gp-hWr-opUc?si=ALdSONcBjcExIU_W"
        },
        {
            title: "Catch wrestling / WWE",
            description: "Ook wel bekend als show- of WWE-worstelen, combineert traditionele worsteltechnieken met theatrale showelementen. Veiligheid, samenwerking en expressie staan centraal, met nadruk op spektakel en presentatie. De stijl ontstond in Engeland en werd wereldwijd populair via de Verenigde Staten en de professionele showworstelwereld. Typische worpen zijn de arm drag, hip toss, scoop slam, suplex en powerbomb, meestal in veilige, aangepaste vorm uitgevoerd. Het WWE Performance Center op YouTube biedt een kijkje achter de schermen in de trainings- en demonstratiepraktijk.",
            youtubeUrl: "https://youtu.be/tYxJmEu4c0M?si=U18x7nDhknudebvL"
        },
        {
            title: "Aikido",
            description: "Is eveneens afkomstig uit Japan en richt zich op het gebruiken van de energie van de tegenstander om deze uit balans te brengen. De bewegingen zijn vloeiend, gecontroleerd en gericht op harmonie in plaats van kracht. Wereldwijd wordt Aikido door enkele honderdduizenden mensen beoefend, vooral in Japan, Frankrijk, de Verenigde Staten en Nederland. Bekende technieken zijn de irimi-nage (inkomworp), kote-gaeshi (polsklemworp), shiho-nage (vierwindworp) en tenchi-nage (hemel-en-aardeworp). Op het YouTube-kanaal van Aikido Journal staan veel demonstraties van klassieke en moderne stijlen.",
            youtubeUrl: "https://youtu.be/vZXt0_Kf5GE?si=erUhZov_z4pT6f_Q"
        },
        {
            title: "Jiu-Jitsu",
            description: "Een Japanse zelfverdedigingskunst waarin worpen, klemmen, stoten en trappen worden gecombineerd. De nadruk ligt op efficiëntie, controle en weerbaarheid. De sport wordt veel beoefend in Japan, Nederland, Duitsland en de Verenigde Staten, met wereldwijd tienduizenden actieve beoefenaars. Typische worpen zijn de o-goshi (heupworp), tomoe-nage (offerworp), tai-otoshi (lichaamsvalworp) en diverse beenvegen. Op het YouTube-kanaal van de Ju-Jitsu International Federation zijn officiële technieken en wedstrijduitleg te bekijken.",
            youtubeUrl: "https://youtu.be/o6Cm5ZitMk4?si=rIdhF5XsI_8xQMm4"
        }
    ],
    summary: "Samen tonen deze zes vechtsporten hoe veelzijdig het werpen, valbreken en samenwerken binnen verschillende stijlen kan zijn, van de gecontroleerde elegantie van Aikido tot de expressieve show van WWE, en van de technische precisie van BJJ tot de kracht en timing van judo en worstelen."
};