export const LOGIN_FORM_CONTROLLER = [
  {
    name: "email",
    label: "Email",
    type: "input",
    inputType: "email",

    placeholder: "email",
    rules: {
      required: "Email is required",
    },
  },
  {
    name: "password",
    label: "Password",
    type: "input",
    inputType: "password",
    placeholder: "password",
    isRequired: "password is required",
    rules: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Minimum 6 characters",
      },
    },
    showForgotPassword: true,
    showPasswordToggle:true
  },
];
