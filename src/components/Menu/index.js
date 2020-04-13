import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { FiBookOpen } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Menu(props) {
  
  const { version, book } = useParams();
  const [infoBook, setInfoBook] = useState();

  useEffect(() => {
    api.get(`authors/${book}`)
    .then(response => {
      setInfoBook(response.data)
    })
  }, []);

  function buildChapter(indice) {
  
    let chapters = [];

    for(let x=1; x <= indice; x++) {
      chapters.push(
        <li key={x} className="list-item">
          <Link className="list-link" to={`/${version}/${infoBook.cod}/${x}`}>{x}</Link>
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
        {infoBook && buildChapter(infoBook.chapters)}
      </ul>
    </aside>
  )
}