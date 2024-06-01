export class Card {
    constructor(characterName, normalAtkLevel, elementalSkillLevel, elementalBurstLevel, talentType, pic){
        this.characterName = characterName
        this.normalAtkLevel = normalAtkLevel
        this.elementalSkillLevel = elementalSkillLevel
        this.elementalBurstLevel = elementalBurstLevel
        this.talentType = talentType
        this.pic = pic
    }

    render() {
        const card = document.createElement('div')
        card.className = 'card'
        card.style.width = '18rem'

        const img = document.createElement('img')
        img.src = this.pic
        img.className = 'card-img-top'
        img.alt = `${this.characterName}'s Pic`

        const cardBody = document.createElement('div')
        cardBody.className = 'caird-body'

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title'
        cardTitle.textContent = this.characterName

        
    }

}