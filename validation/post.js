const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  // If no value exists in data, set value to empty string prior to validation
  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text =
      "Post length must be at least 10 characters and cannot exceed 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Missing text for post";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
