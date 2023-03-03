function searchInsert(nums: number[], target: number): number {
    let ans: number = 0;
    for (let i=0; i<nums.length; i++){
        if (nums[i] < target) {
            ans += 1;
        } else {
            break;
        }
    }
    return ans;
};