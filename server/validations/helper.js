/**
      * @param {object} number - Minimum number
      * @param {object} number - Maximum number
      * @returns {object} Number
  */

  export const randomIntegerGenerator = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }