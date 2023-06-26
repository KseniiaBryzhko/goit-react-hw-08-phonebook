import { Section, Title, Container, AppName, Text } from './Home.styled.js';

export default function Home() {
  return (
    <Section>
      <Container>
        <Title>
          Welcome to the <AppName>Phonebook app</AppName> - an indispensable
          assistant in organizing your contacts.
        </Title>
        <Text>
          If you are a registered user - log into your account using your email
          and password.
        </Text>
        <Text>
          If you don't have an account yet, please register and login.
        </Text>
      </Container>
    </Section>
  );
}
