export default class Character {
    constructor(characterName, normalAtkLevel, elementalSkillLevel, elementalBurstLevel, talentType, description, pic){
        this.characterName = characterName
        this.normalAtkLevel = normalAtkLevel
        this.elementalSkillLevel = elementalSkillLevel
        this.elementalBurstLevel = elementalBurstLevel
        this.talentType = talentType
        this.description = description
        this.pic = pic
    }
}