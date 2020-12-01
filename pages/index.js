import Head from 'next/head'
import Form from './components/Form'
import TextField from './components/TextField'
import { Button } from 'vindi-ds-components'
import * as Yup from 'yup';


export default function Home() {

  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2))
  }

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    age: Yup.number()
      .min(0, 'Não é possível colocar valores negativos para a idade')
      .max(10, 'Não é possível colocar valores acima de 10 anos')
  });

  const validateForm = (values) => {
    const errors = {};  
    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.age && values.age < 0) {
      errors.age = 'Não é possível colocar valores negativos para a idade';
    } else if (!values.age && values.age > 10) {
      errors.age = 'Não é possível colocar valores acima de 10 anos';
    }
    return errors;
  };

  return (
    <div>
      <Head>
        <title>Form Formik Material UI App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Form
          initialValues={{ name: 'Candida', age: 0 }}
          onSubmit={handleSubmit}
          // validate={validateForm}
          validationSchema={DisplayingErrorMessagesSchema}
        >
          <TextField name="name" label="Name" />
          <TextField name="age" label="Age" type="number" />

          <Button type="submit" size="small">Enviar</Button>
        </Form>
      </main>
    </div>
  )
}
