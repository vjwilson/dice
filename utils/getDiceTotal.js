export function getDiceTotal(arrNums) {
    return arrNums
        .slice()
        .sort()
        .slice(1)
        .reduce((a, b) => a + b, 0);
}
