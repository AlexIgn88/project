import styles from "./order-complete.module.css";
import { Consumer as UserConsumer } from "../../contexts/user";
import {
  useLanguageObject,
  getTextInLang,
} from "../../custom-hooks/use-text-in-lang";

const OrderComplete = () => {
  const currentLanguageObject = useLanguageObject();
  return (
    <div className={styles.completeMessage}>
      <UserConsumer>
        {({ user: { name } }) =>
          name
            ? `${name}, ${getTextInLang("your order is completed! Thank you!", currentLanguageObject)}`
            : getTextInLang(
                "Your order is completed! Thank you!",
                currentLanguageObject,
              )
        }
      </UserConsumer>
    </div>
  );
};

export default OrderComplete;
