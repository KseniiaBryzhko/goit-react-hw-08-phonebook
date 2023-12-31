import styled from '@emotion/styled';

export const FilterLabel = styled.label`
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

export const FilterInput = styled.input`
  width: 20vw;
  height: 24px;
  margin: 20px auto;
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
