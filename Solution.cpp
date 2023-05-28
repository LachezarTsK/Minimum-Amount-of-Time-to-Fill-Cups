
#include <algorithm>
using namespace std;

class Solution {
    
public:
    int fillCups(vector<int>& amount) {
        int maxValue = max(amount[0], max(amount[1], amount[2]));
        int totalSum = amount[0] + amount[1] + amount[2];
        return (maxValue >= totalSum - maxValue) ? maxValue : (totalSum / 2 + totalSum % 2);
    }
};
