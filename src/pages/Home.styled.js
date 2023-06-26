import styled from '@emotion/styled';

export const Section = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 60px;
  width: 30vw;
  border-radius: 5px;
  box-shadow: -10px -10px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #353535;
  font-size: 30px;
  font-weight: 700;
  font-family: 'Cormorant Garamond', serif;
  line-height: 1.3;
`;

export const AppName = styled.span`
  color: #363e70;
  font-size: 38px;
`;

export const Text = styled.p`
  text-align: center;
  color: #353535;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Cormorant Garamond', serif;
  margin-top: 30px;
  line-height: 1.3;
`;
