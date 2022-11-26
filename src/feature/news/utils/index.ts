export function getRundomItemsFromArray(array: Array<number>, numberOfRundomElements: number): Array<number>{
    return array.sort(() => .5 - Math.random()).slice(0,numberOfRundomElements);
}; 