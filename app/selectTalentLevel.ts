const levels = [
    0,
    3,
    2,
    4,
    6,
    9,
    4,
    6,
    12,
    16
]

function generateParagraphContent(level: any) {
    let talentMaterialRarity: string;

    if (level == 1) {
        talentMaterialRarity = 'teachings';
    } else if (level >= 2 && level < 6) {
        talentMaterialRarity = 'guides';
    } else if (level >= 6) {
        talentMaterialRarity = 'philosophies';
    }

    if(level == 10){
        return "This talent is crowned."
    }

    return `You need ${levels[level]} ${talentMaterialRarity} for the next level`;
}

export default generateParagraphContent;
