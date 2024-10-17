import { Flex } from "antd";
import CartBadge from "../cart-badge";
import HomeButton from "../home-button";
import styles from "./nav-buttons.module.css";

const NavButtons = () => {
  return (
    <Flex className={styles.navbuttons}>
      <HomeButton />
      <CartBadge />
    </Flex>
  );
};

export default NavButtons;
