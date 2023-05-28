
/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    const maxValue = Math.max(amount[0], Math.max(amount[1], amount[2]));
    const totalSum = amount[0] + amount[1] + amount[2];
    return (maxValue >= totalSum - maxValue) ? maxValue : (Math.floor(totalSum / 2) + totalSum % 2);
};
