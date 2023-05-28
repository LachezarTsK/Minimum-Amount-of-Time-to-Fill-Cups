
public class Solution {

    public int fillCups(int[] amount) {
        int maxValue = Math.max(amount[0], Math.max(amount[1], amount[2]));
        int totalSum = amount[0] + amount[1] + amount[2];
        return (maxValue >= totalSum - maxValue) ? maxValue : (totalSum / 2 + totalSum % 2);
    }
}
