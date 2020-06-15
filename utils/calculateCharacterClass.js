export function calculateCharacterClass(currentAttrs) {
    const strength = currentAttrs.find(attr => attr.name === "Strength").value;
    const intel = currentAttrs.find(attr => attr.name === "Intelligence").value;
    const wisdom = currentAttrs.find(attr => attr.name === "Wisdom").value;
    const dexterity = currentAttrs.find(attr => attr.name === "Dexterity").value;
    const possibleClasses = {
        fighter: 0,
        magicUser: 0,
        cleric: 0,
        thief: 0,
    };


    if (strength > 13) {
        if (strength > 16) {
            possibleClasses.fighter = possibleClasses.fighter + 3;
        } else {
            possibleClasses.fighter = possibleClasses.fighter + 2;
        }
    }
    if (intel > 13) {
        if (intel > 16) {
            possibleClasses.magicUser = possibleClasses.magicUser + 3;
        } else {
            possibleClasses.magicUser = possibleClasses.magicUser + 2;
        }
    }
    if (wisdom > 13) {
        if (wisdom > 16) {
            possibleClasses.cleric = possibleClasses.cleric + 3;
        } else {
            possibleClasses.cleric = possibleClasses.cleric + 2;
        }
    }
    if (dexterity > 13) {
        if (dexterity > 16) {
            possibleClasses.thief = possibleClasses.thief + 3;
        } else {
            possibleClasses.thief = possibleClasses.thief + 2;
        }
    }
    const classList = Object.keys(possibleClasses).map((key) => {
        return { name: key, weight: possibleClasses[key] }
    });

    const sortedClasses = classList.sort((a, b) => b.weight - a.weight);

    const filteredClasses = sortedClasses.filter((cls) => cls.weight)
    console.log(filteredClasses)

    const finalClassNames = filteredClasses.map((cls) => {
        const result = cls.name.replace(/([A-Z])/g, "-$1");
        console.log('result', result)
        const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        return finalResult;
    }).join(', ')

    return finalClassNames.length ? finalClassNames : 'None';
}
