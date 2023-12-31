import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const AddContactForm = styled(Form)`
  padding: 30px 60px 30px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 20vw;
  border-radius: 5px;
  box-shadow: -10px -10px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  text-align: center;
  color: #353535;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const Input = styled(Field)`
  width: 20vw;
  height: 24px;
  margin-top: 10px;
  padding: 8px;
  font-size: 20px;
  border: none;
  outline: 2px solid #ffffff;
  border-radius: 5px;
  background-color: #ffffff;
  color: #212121;
  transition: all cubic-bezier(0.25s, 0.7, 0.98, 0.86) 0s;
  &:focus {
    outline: 2px solid #d4dae3;
    border-radius: 5px;
  }
`;

export const AddButton = styled.button`
  outline: none;
  padding: 10px 25px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  color: #353535;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Cormorant Garamond', serif;
  border: 1px solid #d4dae3;
  border-radius: 4px;
  z-index: 1;
  position: relative;
  width: 15vw;
  margin: 0 auto;
  margin-top: 10px;
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    box-shadow: -10px -10px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
  }
  &:hover:after {
    top: 0;
    height: 100%;
  }
`;

export const CustomErrorMessage = styled(ErrorMessage)`
  text-align: center;
  font-size: 16px;
  max-width: 20vw;
  color: red;
  margin-top: 8px;
`;
