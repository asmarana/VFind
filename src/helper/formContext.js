import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [form1Filled, setForm1Filled] = useState(false);
  const [form2Filled, setForm2Filled] = useState(false);
  const [form3Filled, setForm3Filled] = useState(false);

  const isAllFormsFilled = form1Filled && form2Filled && form3Filled;

  return (
    <FormContext.Provider
      value={{
        form1Filled,
        setForm1Filled,
        form2Filled,
        setForm2Filled,
        form3Filled,
        setForm3Filled,
        isAllFormsFilled,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };