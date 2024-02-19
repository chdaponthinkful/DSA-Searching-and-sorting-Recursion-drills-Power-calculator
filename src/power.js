/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */
function power(base, exponent) {
  // Check if the exponent is negative
  if (exponent < 0) {
    throw new Error("exponent should be >= 0");
  }

  // Any number raised to the power 0 is 1
  if (exponent === 0) {
    return 1;
  }

  // Calculate the power
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

module.exports = power;
