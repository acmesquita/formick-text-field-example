import React from 'react';
import { Formik, Form as FrForm } from 'formik';
import { object, func, node } from 'prop-types'

function Form({ initialValues, onSubmit, validate, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSubmit(values)
        actions.setSubmitting(false);
      }}
      validate={validate}
      validationSchema={validationSchema}
    >
      {(props) => (
        <FrForm>
          {children}
        </FrForm>
      )}
    </Formik>
  );
}

Form.prpoTypes = {
  initialValues: object.isRequired,
  validate: object,
  validationSchema: object,
  onSubmit: func.isRequired,
  children: node.isRequired,
}

export default Form;