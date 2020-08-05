import { useState } from 'react';

// Hooks customizados
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  // function que recebe a chamada com a chave e o valor e chama o state setValues
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
