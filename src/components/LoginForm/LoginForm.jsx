import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  AddContactForm,
  Label,
  Input,
  AddButton,
  CustomErrorMessage,
} from 'components/ContactForm/ContactForm.styled.js';

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email('Email must be a valid email').required(),
    password: yup.string().required(),
  });

  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, action) => {
    dispatch(logIn({ email, password }));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <AddContactForm autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
          <CustomErrorMessage name="email" component="div" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
          <CustomErrorMessage name="password" component="div" />
        </Label>
        <AddButton type="submit">Log In</AddButton>
      </AddContactForm>
    </Formik>
  );
};
