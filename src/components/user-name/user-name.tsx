import { Consumer as UserConsumer } from "../../contexts/user";
import styles from "./user-name.module.css";

const UserName = () => {
  return (
    <UserConsumer>
      {(user) => <h2 className={styles.username}>{user.user.name}</h2>}
    </UserConsumer>
  );
};

export default UserName;
