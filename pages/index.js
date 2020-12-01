import Head from 'next/head'
import Form from './components/Form'
import TextField from './components/TextField'
import { Button } from 'vindi-ds-components'

export default function Home() {

  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2))
  }

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
      </Head>

      <main>
        <Form
          initialValues={{ name: 'Candida', age: 0 }}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          <TextField name="name" label="Name" />
          <TextField name="age" label="Age" type="number" />

          <Button type="submit" size="small">Enviar</Button>
        </Form>
      </main>
    </div>
  )
}
