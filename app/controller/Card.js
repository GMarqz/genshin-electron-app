import makeCard from "../services/Card.js";
import { characters } from "../../database/characters.js";
import makeModal from "../services/modal.js";

function initCardInstance(parent) {
    makeCard(parent, characters[3].pic, characters[3].characterName, characters[3].description)
    const modalParent = document.querySelector('.card-body')
    makeModal(modalParent, characters[3].characterName)
}

export default initCardInstance;