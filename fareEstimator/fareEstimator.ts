function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
    var cost: number[] = cost_per_minute.map(x => x*ride_time);
    var milecost: number[] = cost_per_mile.map(x => x*ride_distance);
    for (let i = 0; i < cost.length; i++) {
        cost[i] = Math.round((cost[i]+milecost[i]) * 10) / 10;
    }
    return cost;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
