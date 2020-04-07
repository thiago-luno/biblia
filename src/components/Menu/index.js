import React from 'react';
import { Link } from 'react-router-dom';

import { FiBookOpen } from 'react-icons/fi';

import './styles.css';

export default function Menu(props) {

  const { data } = props;

  function buildChapter(indice) {
    let chapters = [];

    for(let x=1; x <= indice; x++) {
      chapters.push(
        <li key={x} className="list-item">
          <Link className="list-link" to={`/${data.version}/${data.cod}/${x}`}>{x}</Link>
        </li>
      )
    }

    return chapters;
  }

  return(
    
    <aside className="container-menu">
      
      <h3 className="title-chapter">
        <FiBookOpen color="#72b7e8" size={20} style={{marginRight: '10px'}}/> 
        Capítulos
      </h3>

      <ul className="list">
        {data && buildChapter(data.chapters)}
      </ul>
    </aside>
  )
}