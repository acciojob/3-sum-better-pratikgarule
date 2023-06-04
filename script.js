function threeSum(arr, target) {
// write your code here
	arr.sort();
	let diff = Number.MAX_VALUE;
	let ans = 0;

	for(let i=0; i<arr.length; i++) {
		let first = i;
		let left = i+1;
		let right = arr.length-1;
		 while (left < right) {
		 	let sum = arr[first] + arr[left] + arr[right];

			 if (sum == target) {
			 	return target;
			 } else if (Math.abs(sum-target) < diff) {
				diff = Math.abs(sum-target);
				ans = sum;
			 }

			 if(sum < target) {
				 left++;
			 } else if (sum > target) {
			 	right--;
			 } else {
				 break;
			 }
		 }
	}
	 return ans;
  
}

module.exports = threeSum;