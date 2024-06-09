import initCardInstance from "./controller/card.js";
import initSelectTalentLevel from "./controller/selectTalentLevel.js";

const na = document.querySelector('.normal-atack');
const es = document.querySelector('elemental-skill');
const eb = document.querySelector('elemental-burst');

const naLevel = document.querySelector('.normal-atack-level');
const esLevel = document.querySelector('elemental-skill-level');
const ebLevel = document.querySelector('elemental-burst-level');

const divCardParent = document.querySelector('.card__parent');

initSelectTalentLevel();
initCardInstance(divCardParent);