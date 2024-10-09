import React from 'react';
import Logo from './logo';
import styles from './header.module.css';
// import LangSelect from '../lang-select';
import CartBadge from '../cart-badge';
import HomeButton from '../home-button';

// @ts-ignore
// function Header({lang, setLang}) {
function Header() {
  return (
    <header 
    className={styles.header}
    >
      <Logo />
      <HomeButton />
      {/* <LangSelect currentLang={lang} setLang={setLang} /> */}
      <CartBadge />
    </header>
  )
}

export default Header;