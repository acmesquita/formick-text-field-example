import Head from 'next/head'
import Form from './components/Form'
import TextField from './components/TextField'
import { Button, Grid } from 'vindi-ds-components'
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
    email: Yup.string().email('Invalid email').required('Required'),
    age: Yup.number()
      .min(0, 'Não é possível colocar valores negativos para a idade')
      .max(10, 'Não é possível colocar valores acima de 10 anos')
  });

  return (
    <div>
      <Head>
        <title>Form Formik Material UI App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Grid item container lg={12}>
          <Form
            initialValues={{ name: 'Candida', email: '', age: 0 }}
            onSubmit={handleSubmit}
            validationSchema={DisplayingErrorMessagesSchema}
          >
            <TextField name="name" label="Name" fullWidth/>
            <TextField name="email" label="Email" type="email" fullWidth />
            <TextField name="age" label="Age" type="number" fullWidth/>

            <Button type="submit" size="small">Enviar</Button>
          </Form>
        </Grid>
      </main>
    </div>
  )
}
