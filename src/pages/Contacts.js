import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading, getFilter } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {
  Phonebook,
  PhonebookWrapper,
  ContactsWrapper,
  Title,
  ContactsTitle,
  Message,
} from 'components/App/App.styled.js';

// import { Section, Container } from 'pages/Home.styled.js';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Phonebook>
      <PhonebookWrapper>
        <Title>Phonebook</Title>
        <ContactForm />
      </PhonebookWrapper>
      <ContactsWrapper>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter}></Filter>{' '}
        {(isLoading && !error && (
          <>
            <Message>Loading...</Message>
          </>
        )) || <ContactList />}
        {error && <Message>Something went wrong. Please try again!</Message>}
      </ContactsWrapper>
    </Phonebook>
  );
}
