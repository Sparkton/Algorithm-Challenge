function electionsWinners(votes: number[], k: number): number {
    votes = votes.sort();
    var ctr: number = 0;
    for (let i = 0; i < votes.length; i++) {
        if(votes[i]+k > Math.max(...votes)){
            ctr++;
        }
    }
    return ctr;
}

console.log(electionsWinners([2, 3, 5, 2], 3));