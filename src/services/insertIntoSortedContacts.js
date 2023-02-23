import collator from './collator';

const insertIntoSortedContacts = (contacts, newContact) => {
  const index = contacts.findIndex(
    ({ name }) => collator(newContact.name, name) <= 0
  );
  const insertIndex = index >= 0 ? index : contacts.length;
  contacts.splice(insertIndex, 0, newContact);
};

export default insertIntoSortedContacts;
