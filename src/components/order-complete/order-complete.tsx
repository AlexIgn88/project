import styles from "./order-complete.module.css";
import { Consumer as UserConsumer } from "../../contexts/user";
import { useLanguageObject } from "../../custom-hooks/use-language-object";
import { getTextInLang } from "../../utils/getTextInLang";

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
