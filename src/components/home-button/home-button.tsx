import styles from "./home-button.module.css";
import { HomeOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const HomeButton = () => (
  <NavLink className={styles.button} to="/">
    <HomeOutlined />
  </NavLink>
);

export default HomeButton;
