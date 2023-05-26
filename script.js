import java.util.Arrays;

public class ThreeSum {
    public static int threeSum(int[] arr, int target) {
        Arrays.sort(arr);
        int res = arr[0] + arr[1] + arr[2];
        
        for (int i = 0; i < arr.length - 2; i++) {
            int left = i + 1;
            int right = arr.length - 1;
            
            while (left < right) {
                int closestSum = arr[i] + arr[left] + arr[right];
                
                if (Math.abs(closestSum - target) < Math.abs(res - target)) {
                    res = closestSum;
                }
                
                if (closestSum < target) {
                    left++;
                } else if (closestSum > target) {
                    right--;
                } else {
                    return res;
                }
            }
        }
        
        return res;
    }
}