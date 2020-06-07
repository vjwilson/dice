export function calculateCharacterClass(currentAttrs) {
    const strength = currentAttrs.find(attr => attr.name === "Strength").value;
    const intel = currentAttrs.find(attr => attr.name === "Intelligence").value;
    const wisdom = currentAttrs.find(attr => attr.name === "Wisdom").value;
    const dexterity = currentAttrs.find(attr => attr.name === "Dexterity").value;
    if (strength > 13 && strength >= Math.max(intel, wisdom, dexterity)) {
        return "Fighter";
    } else if (intel > 13 && intel > strength && intel > wisdom && intel > dexterity) {
        return "Magic-User";
    } else if (wisdom > 13 && wisdom > strength && wisdom > intel && wisdom > dexterity) {
        return "Cleric";
    } else if (dexterity > 13 && dexterity > strength && dexterity > intel && dexterity > wisdom) {
        return "Thief";
    }
    return "None";
}
