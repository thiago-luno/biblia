import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ImageBook from '../../components/ImageBook';
import Menu from '../../components/Menu';

import defaultVersion  from '../../util/defaultVersion';

import './styles.css';

import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function DescriptionBook() {
  
  const [description, setDescription] = useState({});
  const [infoBook, setInfoBook] = useState({});
  const { book, version } = useParams();



  useEffect(() => {
    api.get(`authors/${book}`)
      .then(response => {
        setDescription(response.data);
        setInfoBook(
          {
            cod: response.data.cod, 
            chapters: response.data.chapters,
            version: version,
            book: response.data.book
          })
      })
  }, []);

    return(
      <>
       <Header />
        <div className="container">
          <ImageBook chapterName={infoBook.book}/>
          <div className="header-book-descritpion content">
            <div className="header-book-description-text">
              {
                <p 
                  key={description.id} 
                  className="verse-description" 
                  dangerouslySetInnerHTML={{__html: description.description}}>
                </p>
              }
            </div>

            <div className="content-buttons">
              <Link className="btn btn-primary" to="/">Iniciar Leitura</Link>
            </div>
          </div>
          <Menu data={infoBook}/>
        </div>
      </>
    )
  }