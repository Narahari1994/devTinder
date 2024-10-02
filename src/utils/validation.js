const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Please enter the name");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter strong password");
  }
};

const validateProfileData = async (req) => {
  const allowedEditFields = [
    "age",
    "about",
    "photoUrl",
    "firstName",
    "lastName",
    "gender",
    "skills",
    "emailId",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;
};

module.exports = { validateSignUpData, validateProfileData };
