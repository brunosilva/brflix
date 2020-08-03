import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categorias, setCategorias] = useState([]);
  // Este não pode ficar antes do array acima pq não tem "initialValue" criado
  const [values, setValues] = useState(initialValues);

  // function que recebe a chamada com a chave e o valor e chama o state setValues
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    // Na aula foi passado assim, porém nõ funcionou! sempre pede a passagem completo do infosDoEvento.target
    // const { getAttribute, value } = infosDoEvento.target;

    // setValue(
    //   getAttribute('name'),
    //   value
    // );

    // formato que funcionou
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL_CATEGORY = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://brflix.herokuapp.com/categorias';

    fetch(URL_CATEGORY)
      .then(async (response) => {
        const resposta = await response.json();
        setCategorias([
          ...resposta
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(initialValues);
      }}
      >

        <FormField
          label="Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      {categorias.length === 0 &&
        <div> Loading... </div>
      }

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
