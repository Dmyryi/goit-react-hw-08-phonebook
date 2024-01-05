import PhoneBookForm from '../../components/PhoneBook/PhoneBookForm';
import Filter from '../../components/Filter/Filter';
import PhoneBookList from '../../components/PhoneBook/PhoneBookList';
import styles from './ContactsPage.module.css';
export default function ContactsPage() {
  return (
    <div className={styles.pageContainer}>
      <PhoneBookForm />
      <Filter />
      <PhoneBookList />
    </div>
  );
}
