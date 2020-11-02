function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
    for (let i = 0; i < systemNames.length; i++) {
        for (let j = i; j < systemNames.length; j++) {
            if(systemNames[i] === systemNames[j]) {
                if(stepNumbers[i] > stepNumbers[j]) {
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));