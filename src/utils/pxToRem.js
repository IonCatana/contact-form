/**
 * @param {number} px
 * @param {number} [baseFontSize=16]
 * @returns {string}

 */
export const pxToRem = (px, baseFontSize = 16) => {
  if (typeof px !== "number" || typeof baseFontSize !== "number") {
    throw new TypeError("Both px and baseFontSize should be numbers");
  }
  if (baseFontSize <= 0) {
    throw new RangeError("baseFontSize should be a positive non-zero number");
  }
  return `${px / baseFontSize}rem`;
};
