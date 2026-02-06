export const PROFILE_FORM_CONTROLLER = [
  {
    name: "fullname",
    label: "FullName",
    type: "text",
    placeholder: "Enter full name",
    column:"left"
  },
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter username",
    column:"right"
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    disabled: true, 
    column:"left"
  },
  {
    name: "phone",
    label: "Phone No.",
    type: "text",
    placeholder: "Enter phone number",
    column: "right"
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: ["Male", "Female"],
    column:"left"
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "date",
    column: "right"
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    column:"left"
  },
  {
    name: "zipCode",
    label: "Zip Code",
    type: "text",
    column: "right"
  },
  {
    name: "state",
    label: "State",
    type: "text",
    column:"left"
  },
];
