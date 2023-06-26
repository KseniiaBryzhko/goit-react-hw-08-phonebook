import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  AddContactForm,
  Label,
  Input,
  AddButton,
  CustomErrorMessage,
} from 'components/ContactForm/ContactForm.styled.js';

export const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        'Name may contain only letters, apostrophe, dash and spaces'
      )
      .required(),
    email: yup.string().email('Email must be a valid email').required(),
    password: yup
      .string()
      .min(7, 'Password must contain at least 7 characters')
      .required(),
  });

  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, action) => {
    dispatch(register({ name, email, password }));
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
          Username
          <Input type="text" name="name" />
          <CustomErrorMessage name="name" component="div" />
        </Label>
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
        <AddButton type="submit">Register</AddButton>
      </AddContactForm>
    </Formik>
  );
};
