import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = 'First Name cannot be empty';
  } else if (!Validator.isLength(data.first_name, {min:2})) {
    errors.first_name = 'First Name must be greater than 1 character';
  }
  if (Validator.isEmpty(data.last_name)) {
    errors.last_name = 'Last Name cannot be empty';
  } else if (!Validator.isLength(data.last_name, {min:2})) {
    errors.last_name = 'Last Name must be greater than 1 character';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email cannot be empty';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password cannot be empty';
  } else if (!Validator.matches(data.password, /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
    errors.password = 'Password should contain atleast one number and one special character';
  }
  if (Validator.isEmpty(data.confirm_password)) {
    errors.confirm_password = 'Confirm Password cannot be empty';
  }
  if (!Validator.equals(data.password, data.confirm_password)) {
    errors.confirm_password = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
