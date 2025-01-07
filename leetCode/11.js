/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const currentHeight = Math.min(height[left], height[right]);
    const currentWidth = right - left;
    const area = currentHeight * currentWidth;

    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxArea;
};