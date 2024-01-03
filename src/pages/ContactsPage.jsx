import PhoneBookForm from '../components/PhoneBook/PhoneBookForm';
import Filter from '../components/Filter';
import PhoneBookList from '../components/PhoneBook/PhoneBookList';

export default function ContactsPage() {
  return (
    <div>
      <PhoneBookForm />
      <Filter />
      <PhoneBookList />
    </div>
  );
}
