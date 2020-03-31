import React from 'react';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Scriptures from '../../components/Scriptures';

import './styles.css';

export default function Home() {
  return(
    <div className="container-home">
      <Menu />
      <div className="container-body">
        <Header />
        <Scriptures />
      </div>
    </div>
  )
} 