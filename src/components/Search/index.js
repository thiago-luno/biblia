import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './styles.css';

export default function Search() {
  return (
    <div className="content-search">
      <FaSearch color="#4a6da7"/>
      <input className="input-search" type="text" placeholder="Pesquisar"/>
    </div>
  );
}