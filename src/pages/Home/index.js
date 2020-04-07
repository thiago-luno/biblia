import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';
import speak from '../../util/speaker';
import defaultVersion from '../../util/defaultVersion';

import { 
  FiHeadphones, 
  FiShare2, 
  FiBookOpen, 
  FiLayers, 
  FiFeather, 
  FiMessageSquare, 
  FiBook } from 'react-icons/fi';

import './styles.css';

export default function Home() {

  const [ authors, setAuthors ] = useState([]);
  const [ versions, setVersions ] = useState([]);
  const [ atualVersion, setAtualVersion ] = useState([]);

  const text = " Porque outrora vocês eram trevas, mas agora são luz no Senhor. Vivam como filhos da luz, pois o fruto da luz consiste em toda bondade, justiça e verdade";
  
  useEffect( () => {
    localStorage.setItem('version', defaultVersion());
    setAtualVersion(defaultVersion());

    api.get('authors')
      .then(response => {
        setAuthors(response.data)
      })
    
    api.get('versions')
      .then(response => {
        setVersions(response.data)
      })
  },[])

  function setVersion(version) {
    localStorage.setItem('version', version);
  }

  return(
    <div>

      <Header />

      <div className="layer-gray">
        <div className="container">
          <div className="content-verses-day">
            <div className="verses-day-box">
              <div className="verses-day-left">
                <span className="verses-day-label"><FiMessageSquare /> Versículo do dia</span>
                <p>
                  Porque outrora vocês eram trevas, mas agora são luz no Senhor. Vivam como filhos da luz,
                  pois o fruto da luz consiste em toda bondade, justiça e verdade;
                </p>
                <span className="verses-day-footer">Efésios 5:8,9</span>
              </div>
              <div className="verses-day-right">
                <ul className="verse-control-list"> 
                  <li><FiHeadphones className="verse-control-list-icon" onClick={() => speak(text)}/></li>
                  <li><FiBookOpen className="verse-control-list-icon" /></li>
                  <li><FiShare2 className="verse-control-list-icon" /></li>
                </ul>
              </div> 
            </div> 
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content-lists">
          <div className="content-list-version">
            <h2 className="content-list-title"><FiBook /> Versões disponíveis</h2>

            <ul className="book-list versions-columns">
              {
                versions.map(version => (
                  version.language === 'pt-BR' &&
                    <li key={version.id} className="book-list-item ">
                      <Link to={`/${version.cod}/gn`} className="book-list-link" onClick={() => setVersion(version.cod)}>
                        <FiFeather color="#72b7e8" size={16}/>{version.name}
                      </Link>
                    </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content-lists border-top">
          <div className="content-list-book">
            <h2 className="content-list-title"><FiLayers /> Velho Testamento</h2>

            <ul className="book-list old-testament-columns">
              {
                authors.map(author => (
          
                  author.testament === 'old' ? 
                    <li key={author.id} className="book-list-item">
                      <Link id={author.id} to={`${atualVersion}/${author.cod}`} className="book-list-link" onClick={() => setVersion(atualVersion)}>
                        <FiBookOpen color="#72b7e8"size={16}/>{author.book}
                      </Link>
                    </li> : null
               
                ))
              }
            </ul>
          </div>  
        
          <div className="content-list-book">
            <h2 className="content-list-title"><FiLayers /> Novo Testamento</h2>

            <ul className="book-list new-testament-columns">
              {
                authors.map(author => (
          
                  author.testament === 'new' ? 
                    <li key={author.id} className="book-list-item">
                      <Link id={author.id} to={`${atualVersion}/${author.cod}`} className="book-list-link" onClick={() => setVersion(atualVersion)}>
                        <FiBookOpen color="#72b7e8"size={16}/>{author.book}
                      </Link>
                    </li> : null
               
                ))
              }
            </ul>
          </div>

        </div>
      </div>
    
      <footer className="footer">
        <div className="container">
          <span>Biblia - Todos os direitos reservados</span>
        </div>
      </footer>
    </div>
  )
} 