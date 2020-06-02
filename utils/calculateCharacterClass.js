export function calculateCharacterClass(currentAttrs) {
    const strength = currentAttrs.find(attr => attr.name === "Strength").value;
    const intel = currentAttrs.find(attr => attr.name === "Intelligence").value;
    const wisdom = currentAttrs.find(attr => attr.name === "Wisdom").value;
    if (strength > 13 && strength > intel && strength > wisdom) {
        return "Fighter";
    } else if (intel > 13 && intel > strength && intel > wisdom) {
        return "Magic-User";
    } else if (wisdom > 13 && wisdom > strength && wisdom > intel) {
        return "Cleric";
    }
    return "None";
}
