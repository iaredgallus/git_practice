// README.md - describe project and superstructure of Nalo Sentences
// TO DO: take out 'a' in Subject Contraction; ex: ofaka > ofka
    // Under what circumstances? Not straightforward.
// TO DO: Action types: ActionTransitiveAnimate (nalo, le, ne, lewi, me, fane, piro, faka, ti, te), ActionTransitiveInanimateLand (le, piro, royu, faka, tokta), ActionTransitiveFood (mo, lo, fe, piro, time, ti), 
    // ActionIntransitive (foro, to, ukto, uka, ika), ActionSpecial (pate mi o[s] ka)
// TO DO: Split pronouns into P1, P2, P3
// Add words to all inventories (ONGOING)

// DONE: Add documentation for functions
// DONE: Added ThemeActionLand, ThemeActionWater, ThemeActionSky
// DONE: Added Adverbials to Movement and Action sentence types; currently at 33% random

/* ========== Initializing  constituent parts of SENTENCE. ========== */

let source = '';
let theme = '';
let goal = '';
let adverb = '';
let sentenceType;

/* ========== VOCABULARY ARRAYS (LISTS) ========== */

// Words are organized into arrays based on semantic content. All array names are plural by convention.
// Last array edit: 2024.06.04 (Tue)

const actions = ['le', 'ne', 'nalo', 'to', 'ukto', 'uka', 'fe', 'ika', 'lewi', 'lo', 'me', 'mo', 'fane',
    'piro', 'royu', 'faka', 'puto', 'time', 'ti', 'te', 'tokta'];
const adverbialsTime = ['suni', 'uka', 'yu', 'suyu', 'soso', 'lesupa', 'lesuka', 'suwo', 'suyo', 'se', 'su'];
// ANIMALS
const animalsLand = ['ri', 'tipika', 'toro', 'naunau', 'timeka', 'rifla', 'rifa', 'riflamohi', 'riflamohu',
    'rita', 'rilayaki', 'ripu', 'rose', 'rosefne', 'rihepu', 'timekaxu', 'rifaupu'];
const animalsSky = ['rifa', 'rifla', 'riflamohi', 'riflamohu', 'rifaupu'];
const animalsWater = ['liko', 'rifla', 'riflamohi', 'riflamohu', 'rilayaki', 'li', 'fila'];
const biomes = ['kifapla', 'kiisa', 'kihela', 'kiheku', 'kihela', 'kihexa', 'kira', 'xaseisa', 
    'xaseusa', 'xufula'];
const modes = ['naka', 'peka', 'saroka'];
// OBJECTS
const objectsNatureLand = ['xu', 'xa', 'ta', 'la', 'xe', 'ki', 'kipta', 'kilu', 'xo', 'raxa', 'raxu', 
    'rexu', 'retafila', 'kila', 'koksa', 'meyaki', 'kolesu', 'kolesi', 'lasi', 'laxu', 'puxa', 'puxu', 
    'taki', 'sa', 'tapsawo', 'toxa', 'xareti', 'xakihela', 'xase', 'xehela', 'xepu', 'xesu',
    'xese', 'xoxu', 'xuxerifa', 'xuxeti', 'xipo', 'xofota'];
const objectsNatureSky = ['lefu', 'lesupa', 'lesuka', 'selesu', 'selesi', 'suhi', 'suhu', 'lesi', 'lesu', 
    'xefu', 'xifa', 'xitalafu', 'tasupfu', 'tapfu', 'xisu'];
const objectsNatureWater = ['kula', 'laklesi', 'retafila', 'ufakula', 'ukula', 'xoyulapa', 'xula',
    'kusukxula', 'kuxula', 'xularekfa'];
// PLACES
const placesNatureLand = ['kixu', 'kilu', 'kipulu', 'kixa', 'kixi', 'kixase', 'kixapti', 'pukifu',
     'kifu', 'kisela', 'kuki', 'loki', 'moki', 'kiselaptikta', 'noki', 'nokisa', 'tyapulapa', 'pekufu'];
const placesNatureWater = ['iknola', 'keki', 'kekihu', 'kinolu', 'kinola', 'kinolafka', 'lahefka', 
    'layaki', 'lapahalu', 'lauka', 'meklapa', 'melu', 'pulu', 'sela', 'sukaka'];
const pronounsAll = ['mi', 'mipi', 'umi', 'mu', 'umu', 'mupi', 'mumu', 'mimu', 'mimuru', 'ma', 'mapi', 'uma', 'mama'];
const pronouns1P = ['mi', 'mipi', 'umi'];
const pronouns2P = ['mu', 'umu', 'mupi', 'mumu'];
const pronouns1P2P = ['mimu', 'mimuru'];
const pronouns3PS = ['ma', 'mapi']
const pronouns3PP = ['uma', 'mama'];
const qualities = ['isa', 'usa', 'ika', 'uka'];
const states = ['pta', 'we', 'wopfa', 'pti'];
const tools = ['tiro', 'fore', 'tare', 'tiko', 'tuse', 'kela'];
const weather = ['fafula', 'fapa', 'fula', 'lafu', 'talafu', 'faneufa', 'rafu', 'ufa', 'xefu'];

/* ========== WORD OBJECTS ========== */

// Each Word Object contains a name string (just in case) and a root,
// which is an array of all the vocabulary arrays (above) that semantically qualify
// for that Word type.

let wordAction = {
    name: 'wordAction',
    root: [actions]
}

let wordStates = {
    name: 'wordState',
    root: [states]
}

let wordTool = {
    name: 'wordTool',
    root: [tools],
}

let wordPronoun1P = {
    name: 'wordPronoun1P',
    root: [pronouns1P],
    mode: [modes]
}

let wordPronoun1P2P = {
    name: 'wordPronoun1P2P',
    root: [pronouns1P2P],
    mode: [modes]
}

let wordPronoun2P = {
    name: 'wordPronoun2P',
    root: [pronouns2P],
    mode: [modes]
}

let wordPronoun3PS = {
    name: 'wordPronoun3PS',
    root: [pronouns3PS],
    mode: [modes]
}

let wordPronoun3PP = {
    name: 'wordPronoun3PP',
    root: [pronouns3PP],
    mode: [modes]
}

let wordPronounAll = {
    name: 'wordPronounAll',
    root: [pronounsAll],
    mode: [modes]
}

let wordAnimalLand = {
    name: 'wordAnimalLand',
    root: [animalsLand]   
}

let wordAnimalSky = {
    name: 'wordAnimalSky',
    root: [animalsSky]   
}

let wordAnimalWater = {
    name: 'wordAnimalWater',
    root: [animalsWater]   
}

let wordObjectNatureLand = {
    name: 'wordObjectNatureLand',
    root: [objectsNatureLand]
}

let wordObjectNatureSky = {
    name: 'wordObjectNatureSky',
    root: [objectsNatureSky]
}

let wordObjectNatureWater = {
    name: 'wordObjectNatureWater',
    root: [objectsNatureWater]
}

/* ========== THEME OBJECTS ========== */

// Theme Objects are like Word Objects, except for that they stipulate what other parts of speech are allowed,
// and which semantic vocabulary lists will satisfy that part of speech based on the limits of the Theme.

// For example, a Tool can only be acted upon logically by an animal or human with agency, so the 'sources' attribute 
// for Tool only includes the Pronoun and Animal arrays.

let themeTool = {
    name: 'themeTool',
    root: [tools],
    sources: [wordPronounAll, wordAnimalLand],
    goals: [wordObjectNatureLand, wordStates],
    adverbials: []  
}

let themePronoun1P = {
    name: 'themePronoun1P',
    root: [pronouns1P],
    mode: [modes],
    adverbials: [adverbialsTime],
    adjectives: [],
    prepositions: [],
    sources: [wordPronoun2P, wordPronoun3PP, wordPronoun3PS],
    goals: [wordObjectNatureLand, wordObjectNatureWater, wordObjectNatureSky, 
        wordAnimalSky, wordAnimalWater, wordAnimalLand]
}

let themePronoun1P2P = {
    name: 'themePronoun1P2P',
    root: [pronouns1P2P],
    mode: [modes],
    adverbials: [adverbialsTime],
    adjectives: [],
    prepositions: [],
    sources: [wordPronoun3PP, wordPronoun3PS],
    goals: [wordObjectNatureLand, wordObjectNatureWater, wordObjectNatureSky, 
        wordAnimalSky, wordAnimalWater, wordAnimalLand]
}

let themePronoun2P = {
    name: 'themePronoun2P',
    root: [pronouns2P],
    mode: [modes],
    adverbials: [adverbialsTime],
    adjectives: [],
    prepositions: [],
    sources: [wordPronoun1P, wordPronoun3PP, wordPronoun3PS],
    goals: [wordObjectNatureLand, wordObjectNatureWater, wordObjectNatureSky, 
        wordAnimalSky, wordAnimalWater, wordAnimalLand]
}

let themePronoun3PS = {
    name: 'themePronoun3PS',
    root: [pronouns3PS],
    mode: [modes],
    adverbials: [adverbialsTime],
    adjectives: [],
    prepositions: [],
    sources: [wordPronoun1P, wordPronoun1P2P, wordPronoun2P, wordPronoun3PP],
    goals: [wordObjectNatureLand, wordObjectNatureWater, wordObjectNatureSky, 
        wordAnimalSky, wordAnimalWater, wordAnimalLand]
}

let themePronoun3PP = {
    name: 'themePronoun3PP',
    root: [pronouns3PP],
    mode: [modes],
    adverbials: [adverbialsTime],
    adjectives: [],
    prepositions: [],
    sources: [wordPronoun1P, wordPronoun1P2P, wordPronoun2P, wordPronoun3PS],
    goals: [wordObjectNatureLand, wordObjectNatureWater, wordObjectNatureSky, 
        wordAnimalSky, wordAnimalWater, wordAnimalLand]
}

let themeAnimalLand = {
    name: 'themeAnimalLand',
    root: [animalsLand],
    sources: [wordPronounAll],
    goals: [wordObjectNatureLand],
    adverbials: [adverbialsTime]    
}

let themeAnimalSky = {
    name: 'themeAnimalSky',
    root: [animalsSky],
    sources: [wordPronounAll],
    goals: [wordObjectNatureSky],
    adverbials: [adverbialsTime]
}

let themeAnimalWater = {
    name: 'themeAnimalWater',
    root: [animalsWater],
    sources: [wordPronounAll],
    goals: [wordObjectNatureWater],
    adverbials: [adverbialsTime]
}

let themeObjectNatureLand = {
    name: 'themeObjectNatureLand',
    root: [objectsNatureLand],
    sources: [wordPronounAll],
    goals: [wordObjectNatureLand, wordStates],
    adverbials: [adverbialsTime]
}

let themeAction = {
    name: 'themeAction',
    root: [actions],
    mode: [modes],
    adverbials: [adverbialsTime],
    adjectives: [],
    prepositions: [],
    sources: [wordPronounAll],
    goals: [wordObjectNatureLand, wordObjectNatureSky, wordObjectNatureWater,
        wordTool, wordAnimalLand, wordAnimalSky, wordAnimalWater]
}

let themeActionLand = {
    name: 'themeActionLand',
    root: [actions],
    mode: [modes],
    adverbials: [adverbialsTime],
    adjectives: [],
    prepositions: [],
    sources: [wordPronounAll, wordAnimalLand],
    goals: [wordObjectNatureLand, wordObjectNatureWater,
        wordTool, wordAnimalLand, wordAnimalSky, wordAnimalWater]
}
let themeActionSky = {
    name: 'themeActionSky',
    root: [actions],
    mode: [modes],
    adverbials: [adverbialsTime],
    adjectives: [],
    prepositions: [],
    sources: [wordPronounAll, wordAnimalSky],
    goals: [wordObjectNatureLand, wordObjectNatureWater, wordObjectNatureWater,
        wordTool, wordAnimalLand, wordAnimalSky, wordAnimalWater]
}

let themeActionWater = {
    name: 'themeActionWater',
    root: [actions],
    mode: [modes],
    adverbials: [adverbialsTime],
    adjectives: [],
    prepositions: [],
    sources: [wordPronounAll, wordAnimalWater],
    goals: [wordObjectNatureWater, wordTool, wordAnimalWater]
}

/* ========== SENTENCE TYPES ========== */

// Sentence types determine which types of words can serve as Themes.
// It has a 'theme' attribute, which lists valid Theme Objects in an array.

 let sentenceAction = {
    name: 'sentenceAction',
    themes: [themeAction, themeActionLand, themeActionSky, themeActionWater]
}

 let sentenceMovement = {
    name: 'sentenceMovement',
    themes: [themePronoun1P, themePronoun1P2P, themePronoun2P, themePronoun3PS, themePronoun3PP, themeAnimalLand, themeAnimalSky, themeAnimalWater]
}

let sentenceChange = {
    name: 'sentenceChange',
    themes: [themeObjectNatureLand, themeTool]
}

/* ========== FUNCTIONS ========== */

/*
DOES:       Helper Function. Returns true or false at random.
PARAMS:     none
RETURNS:    bool
*/
function trueFalse() {
     zeroOne = Math.floor(Math.random() * 2);
     return (zeroOne === 1) ? true : false;
}

/*
DOES:       Picks a random sentence type.
PARAMS:     none
RETURNS:    string
*/
function pickSentenceType() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        sentenceType = 'action';
    } else if (randomNumber == 1) {
        sentenceType = 'movement'; 
    } else {
        sentenceType = 'change';
    }
}

/*
DOES:       Picks a random Theme Object (i.e. a broad semantic category) appropriate to the sentence type.
PARAMS:     sentenceType (string)
RETURNS:    Theme Object
*/
function pickThemeType(sentenceType) {
    if (sentenceType == 'action') {
        let randomTheme = Math.floor(Math.random() * sentenceAction.themes.length);
        return sentenceAction.themes[randomTheme];
    } else if (sentenceType === 'movement') {
        let randomTheme = Math.floor(Math.random() * sentenceMovement.themes.length);
        return sentenceMovement.themes[randomTheme];
    } else {
        let randomTheme = Math.floor(Math.random() * sentenceChange.themes.length);
        return sentenceChange.themes[randomTheme];    
    }
}

/*
DOES:       Picks a random semantic vocabulary list to serve as a Sentence's SOURCE (i.e. the originator of an action),
            given a designated THEME.
PARAMS:     themeType (Theme Object)
RETURNS:    array
*/
function pickSourceType(themeType) {
    let maxSource = themeType.sources.length;
    let randomSource = Math.floor(Math.random() * maxSource);
    return themeType.sources[randomSource];
}

/*
DOES:       Picks a random semantic vocabulary list to serve as a Sentence's GOAL (i.e. receiver of an action),
            given a designated THEME.
PARAMS:     themeType (Theme Object)
RETURNS:    array
*/
function pickGoalType(themeType) {
    let maxGoal = themeType.goals.length;
    //console.log('Number of Goals: ' + maxGoal);
    let randomGoal = Math.floor(Math.random() * maxGoal);
    //console.log(themeType.goals[randomGoal]);
    return themeType.goals[randomGoal];
}

/*
DOES:       Picks a random but specific word to stand in as the Sentence's THEME.
PARAMS:     themeType (Theme Object), senType (string)
RETURNS:    string - a random word with theme particle appended
*/
function pickThemeWord(wordType, senType) {
    let maxRoot = wordType.root.length;
    let randomRoot = Math.floor(Math.random() * maxRoot);
    let maxArray = wordType.root[randomRoot].length;
    let randomArray = Math.floor(Math.random() * maxArray);
    word = wordType.root[randomRoot][randomArray];
    if (word[0] === 'u') {
        return word;
    } else {
        // REMOVE 'A' OPTIONALLY
        /*
        if (word[1] === 'a' && 'f'.includes(word[0])) {
            word = word[0] + word.slice(2);
        }
        */

        // Add theme particle to the word
        word = 'o' + word;
    }
    return word;
}

/*
DOES:       Picks a random but specific word to stand in as the Sentence's SOURCE.
PARAMS:     themeType (Theme Object), senType (string)
RETURNS:    string - a random word with source particle appended
*/
function pickSourceWord(wordType, senType) {
    let maxRoot = wordType.root.length;
    let randomRoot = Math.floor(Math.random() * maxRoot);
    let maxArray = wordType.root[randomRoot].length;
    let randomArray = Math.floor(Math.random() * maxArray);
    word = wordType.root[randomRoot][randomArray];
    if (senType === 'change' || senType === 'movement') {
        if (word[0] === 'p') {
            word = 'wa' + word;
        } else {
            word = 'pa' + word;
        }
    }
    return word;
}

/*
DOES:       Picks a random but specific word to stand in as the Sentence's GOAL.
PARAMS:     themeType (Theme Object), senType (string)
RETURNS:    string - a random word with goal particle appended
*/
function pickGoalWord(wordType, senType) {
    let maxRoot = wordType.root.length;
    let randomRoot = Math.floor(Math.random() * maxRoot);
    let maxArray = wordType.root[randomRoot].length;
    let randomArray = Math.floor(Math.random() * maxArray);
    word = wordType.root[randomRoot][randomArray];
    if (word[0] === 'k') {
        return 'ya' + word;
    } else {
        return 'ka' + word;
    }
}

/*
DOES:       Picks an adverbial at random. Will append adverbial + particle 33% of the time.
PARAMS:     wordType (Theme Object), senType (string)
RETURNS:    string - a random adverbial phrase with adverbial particle OR empty string
*/
function pickAdverb(wordType, senType) {
    if (wordType.adverbials.length === 0) {
        //console.log('ADVERB: none');
        return '';
    }
    let word = '';
    let randomTo10 = Math.random() * 10;
    if (randomTo10 < 3.33) {
        let maxRoot = wordType.adverbials.length;
        let randomRoot = Math.floor(Math.random() * maxRoot);
        let maxArray = wordType.adverbials[randomRoot].length;
        let randomArray = Math.floor(Math.random() * maxArray);
        word = wordType.adverbials[randomRoot][randomArray];
        //console.log('ADVERB: ' + word);
    }
    //console.log('adverb: ' + word)
    if (word !== '') {
        return ' a' + word;
    } else {
        return word;
    }
}

/*
DOES:       Constructs a sentence by picking a Theme at random (Theme Object), then picking a random but logical
            Source and Goal based on the chosen Theme, with optional Adjectives and Adverbials.
PARAMS:     sentenceType (string)
RETURNS:    string - a concatenation of all of the individual sentence part strings
*/
function buildSentence(sentenceType) {
    // Pick random Theme (Object) and word based on sentenceType.
    themeType = pickThemeType(sentenceType);
    theme = pickThemeWord(themeType, sentenceType);
    // Pick random Source (Object) and word based on themeType.
    sourceType = pickSourceType(themeType);
    source = pickSourceWord(sourceType, sentenceType);
    // Pick random Goal (Object) and word based on themeType.
    goalType = pickGoalType(themeType);
    goal = pickGoalWord(goalType, sentenceType);
    // Add an adverb (optional)
    adverb = pickAdverb(themeType, sentenceType);

    // DETERMINE SYNTAX / Put Parts in correct order (based on sentenceType)
    if (sentenceType === 'action') {
        return `${theme} ${source}${adverb} ${goal}`;
    } else if (sentenceType === 'movement') {
        // Randomly add a source 
        if (trueFalse() === false) {
            source = ''; // Delete source word
        } else {
            source = source + ' ';
        }
        return `${theme}${adverb} ${source}${goal}`;
    } else if (sentenceType === 'change') {
        return `${source} ${theme} ${goal}`;
    }
}

/* ========== MAIN PROGRAM ========== */
function main() {
    // Create n sentences (currently 8)
    for (let i = 0; i < 8; i++) {
        pickSentenceType();
        sentence = buildSentence(sentenceType);
        console.log(sentence);
    }
}

main();