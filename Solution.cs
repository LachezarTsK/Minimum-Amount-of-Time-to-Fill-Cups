
using System;

public class Solution
{
    public int FillCups(int[] amount)
    {
        int maxValue = Math.Max(amount[0], Math.Max(amount[1], amount[2]));
        int totalSum = amount[0] + amount[1] + amount[2];
        return (maxValue >= totalSum - maxValue) ? maxValue : (totalSum / 2 + totalSum % 2);
    }
}
