import React from 'react';
import { Formik, Form as FrForm } from 'formik';
import { object, func, node } from 'prop-types'

function Form({ initialValues, onSubmit, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSubmit(values)
        actions.setSubmitting(false);
      }}
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
  onSubmit: func.isRequired,
  children: node.isRequired,
}

export default Form;