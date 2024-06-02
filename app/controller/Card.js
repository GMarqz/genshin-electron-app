import makeCard from "../services/Card.js";
import { characters } from "../../database/characters.js";
import makeModal from "../services/modal.js";

function initCardInstance(parent) {
    characters.forEach(character => {
        makeCard(parent, character.pic, character.characterName, character.description);
        const modalParent = document.querySelector('.card-body');
        makeModal(modalParent, character.characterName, character);
    });
}

export default initCardInstance;
