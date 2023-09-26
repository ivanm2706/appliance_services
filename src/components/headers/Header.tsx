import React from 'react';
import style from './header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={style.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;
