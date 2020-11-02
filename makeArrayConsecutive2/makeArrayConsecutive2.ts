function makeArrayConsecutive2(statues: number[]): number {
    statues = statues.sort();
    return (statues[statues.length-1] - statues[0] - (statues.length - 2) - 1);
}

console.log(makeArrayConsecutive2([6, 2, 9]));