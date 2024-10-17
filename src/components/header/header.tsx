import Logo from "./logo";
import styles from "./header.module.css";
import LanguageBar from "../language-bar";
import NavButtons from "../nav-buttons";

function Header() {
  return (
    <header className={styles.header}>
      <LanguageBar />
      <Logo />
      <NavButtons />
    </header>
  );
}

export default Header;
