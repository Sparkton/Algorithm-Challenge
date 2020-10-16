function containsCloseNums(nums: number[], k: number): boolean {
    var flag: number = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] == nums[j] && Math.abs(i - j) <= k){
                flag++;
            }
        }
    }
    if(flag == 1){
        return true;
    }
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));