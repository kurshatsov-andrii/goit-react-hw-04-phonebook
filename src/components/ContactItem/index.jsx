import PropTypes from 'prop-types';
import {
  ContactData,
  ContactDelete,
  ContactItemEl,
  ContactName,
  ContactNumber,
  ButtonDelete,
} from './ContactItem.styled';

export const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number} = contact;

  return (
    <ContactItemEl>
      <ContactData>
        <ContactName>{name}: </ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactData>
      <ContactDelete type="button" onClick={() => onDeleteContact(id)}>
        <ButtonDelete>Delete</ButtonDelete>
      </ContactDelete>
    </ContactItemEl>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onDeleteContact: PropTypes.func,
};
