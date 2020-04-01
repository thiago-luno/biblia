import React from 'react';
import { FiMaximize2, FiBookOpen } from 'react-icons/fi';
import './styles.css';
import Image from '../../assets/logo.png';

export default function Menu() {
  return(
    <aside className="container-menu">
      <div className="header-menu">
        <div className="title">
          {/* <img src={Image} alt="teste"/>  */}
          BibliaOnline
        </div>
        <FiMaximize2 style={{ marginRight: '20px', cursor: 'pointer'}}/>

      </div>
      
      <h3 className="title-chapter"><FiBookOpen color="#4a6da7" size={20} style={{marginRight: '10px'}}/> Capítulos</h3>

      <ul className="list">
        <li className="list-item"><a className="list-link" href="/">1</a></li>
        <li className="list-item"><a className="list-link" href="/">2</a></li>
        <li className="list-item"><a className="list-link" href="/">3</a></li>
        <li className="list-item"><a className="list-link" href="/">4</a></li>
        <li className="list-item"><a className="list-link" href="/">5</a></li>
        <li className="list-item"><a className="list-link" href="/">6</a></li>
        <li className="list-item"><a className="list-link" href="/">7</a></li>
        <li className="list-item"><a className="list-link" href="/">8</a></li>
        <li className="list-item"><a className="list-link" href="/">9</a></li>
        <li className="list-item"><a className="list-link" href="/">10</a></li>
        <li className="list-item"><a className="list-link" href="/">11</a></li>
      </ul>
    </aside>
  )
}