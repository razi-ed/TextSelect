import React from "react";
import Demo from "./demo";
const suggestions = [
  {
    label: "Hindi",
    value: "hindi"
  },
  {
    label: "English",
    value: "english"
  },
  {
    label: "Marathi",
    value: "marathi"
  },
  {
    label: "Malayalam",
    value: "malayalam"
  },
  {
    label: "Tamil",
    value: "tamil"
  },
  {
    label: "Telugu",
    value: "telugu"
  },
  {
    label: "Bengali",
    value: "bangla"
  },
  {
    label: "Gujarati",
    value: "gujarati"
  },
  {
    label: "Kannada",
    value: "kannada"
  }
];

function handler(value) {
  // alert(value); Do stuffs
}

const app = () => {
  return (
    <Demo
      suggestions={suggestions}
      placeholderMsg="Language"
      handleInputValue={handler}
      fullWidth
    />
  );
};

export default app;
