import React from 'react';
import { FaBible, FaRibbon } from 'react-icons/fa';
import { FiMaximize2 } from 'react-icons/fi';
import './styles.css';

export default function Menu() {
  return(
    <aside className="container-menu">
      <div className="header-menu">
        <div className="title">
          <FaBible /> Menu
        </div>
        <FiMaximize2 style={{ marginRight: '20px', cursor: 'pointer'}}/>

      </div>
      <ul className="list">
        <li className="list-item active"><a className="list-link" href="/">Genesis</a></li>
        <li className="list-item"><a className="list-link" href="/">Exodus</a></li>
        <li className="list-item"><a className="list-link" href="/">Levítico</a></li>
        <li className="list-item"><a className="list-link" href="/">Números</a></li>
        <li className="list-item"><a className="list-link" href="/">Deuteronomios</a></li>
        <li className="list-item"><a className="list-link" href="/">José</a></li>
      </ul>
    </aside>
  )
}