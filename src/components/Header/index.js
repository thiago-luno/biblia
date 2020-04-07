import React from 'react';
import Search from '../../components/Search';
import Control from '../Control';

import './styles.css';

export default function Header() {
  return (
    <header className="content-header">
      <div className="container container-header">
        <Control />
        <Search />
      </div>
    </header>
  );
}