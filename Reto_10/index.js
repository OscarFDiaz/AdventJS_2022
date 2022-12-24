function checkJump(heights) {
  let isUp = false;
  let isFalling = false;

  for (let i = 0; i < heights.length; i++) {
    if (isFalling && heights[i + 1] > heights[i]) {
      return false;
    }

    if (heights[i + 1] < heights[i]) {
      isFalling = true;
    }

    if (heights[i + 1] > heights[i]) {
      isUp = true;
    }
  }

  return isUp && isFalling;
}
