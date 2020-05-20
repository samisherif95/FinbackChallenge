const Validator = require('validator');
const validText = require('./validText');

module.exports = function validatePostsInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 2, max: 200 })) {
    errors.text = 'Post must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Post field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};