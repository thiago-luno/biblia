import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ImageBook from '../../components/ImageBook';
import Menu from '../../components/Menu';
import SkeletonDefault from '../../components/Skeleton';

import './styles.css';

import api from '../../services/api';

import { useState, useEffect } from 'react';

export default function DescriptionBook() {
  
  const [infoBook, setInfoBook] = useState({});
  const { book } = useParams();

  useEffect(() => {
    api.get(`authors/${book}`)
      .then(response => {
        setInfoBook(response.data);
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
              infoBook.description ? 
              
                <p 
                  key={infoBook.id} 
                  className="verse-description" 
                  dangerouslySetInnerHTML={{__html: infoBook.description}}>
                </p> : <p><SkeletonDefault /> </p>
              }
            </div>

            <div className="content-buttons">
              <Link className="btn btn-primary" to="/">Iniciar Leitura</Link>
            </div>
          </div>
          <Menu />
        </div>
      </>
    )
  }