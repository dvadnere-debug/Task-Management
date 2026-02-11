export const PROFILE_FORM_CONTROLLER = [
  {
    name: "fullname",
    label: "FullName",
    type: "text",
    placeholder: "Enter full name",
    rules: {
      required: {value: true, message:"username is required"},
      
    },
  },
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter username",
    rules: {
      required: "username is required",
      minLength: { value: 2, message: "Min 2 characters" },
    },
    disabled: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    disabled: true,
  },
  {
    name: "phone",
    label: "Phone No.",
    type: "text",
    placeholder: "Enter phone number",
    rules: {
      required: "Phone is required",
      maxLength: { value: 10, message: "enter valid phone number" },
      minLength: { value: 10, message: "enter valid phone number" },
    },
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: ["Male", "Female"],
    rules: {
      required: { value: true, message: "this is required" },
    },
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "input",
    inputType: "date",
    placeholder: "YYYY-MM-DD",
    minDate:"1900-01-01",
    maxDate:"2027-01-01",
    rules: {
      value:true,
      required: { value: true, message: "this is required" },
    },
    validate: (value) => {
      if (value < "1900-01-01") {
        return "Date of birth cannot be before 1900";
      }
      if (value > "2027-01-01") {
        return "Date of birth cannot be after 2027";
      }
      return true;
    },
  
  },
  {
    name: "address",
    label: "Address",
    type: "text",
  },
  {
    name: "zipCode",
    label: "Zip Code",
    type: "text",
  },
  {
    name: "state",
    label: "State",
    type: "select",
    options: ["Karnataka", "Tamil Nadu", "Assam", "Gujarat", "Rajasthan"],
  },
];
