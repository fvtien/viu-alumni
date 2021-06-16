const createErrorMessages = (type, empty, min, max, pattern) => ({
  [`${type}.empty`]: empty,
  [`${type}.format`]: pattern,
  [`${type}.min`]: min,
  [`${type}.max`]: max,
  [`${type}.pattern.base`]: pattern,
  "any.required": empty,
});

export default {
  createErrorMessages,
};
