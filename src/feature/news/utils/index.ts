export function getRundomItemsFromArray(array: Array<number>, numberOfRundomElements: number): Array<number>{
    return array.slice().sort(() => .5 - Math.random()).slice(0,numberOfRundomElements);
}; 

export function getRundomArray(arrayLength: number): Array<number> {
    return Array.from(Array(arrayLength).keys()).sort(() => .5 - Math.random());
}


