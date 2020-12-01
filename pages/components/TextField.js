import { useField } from 'formik';
import { TextField as VdTextField} from 'vindi-ds-components';

const TextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <VdTextField
      label={label}
      {...field}
      {...props}
      error={meta.error}
      helperText={meta.error}
      success={meta.isValid}
    />
  );
};

export default TextField;
