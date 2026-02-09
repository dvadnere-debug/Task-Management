export const TASK_FORM_CONFIG = [
  {
    name: "title",
    label: "Title",
    type: "text",
    placeholder: "Enter task title",
    rules: {
      required: "Title is required",
    },
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
    rules: {
      required: "Description is required",
    },
  },
  {
    name: "deadline",
    label: "Deadline",
    type: "input",
inputType:"date",
    rules: {
      required: "Deadline is required",
    },
  },
  {
    name: "priority",
    label: "Priority",
    type: "select",
    options: ["Low", "Medium", "High"],
    rules: {
      required: "Priority is required",
    },
  },
];
