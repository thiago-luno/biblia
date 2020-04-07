import React from 'react';
import { useParams } from 'react-router-dom';

import './styles.css';


export default function ImageBook(props) {
    console.log('props', props)
  const { book } = useParams();
  const { chapterName } = props;
  const styles = {
    image:{ 
      backgroundImage: `url(${require("../../assets/book-description/"+book+".jpg")})`
    }
  }

  return (
    <div className="content-header-book" style={styles.image}>
      <div className="header-book-legend">
        <span className="header-book-text-secundary">O Livro de</span>
        <span className="header-book-text-primary">{chapterName}</span>
      </div>
    </div>
  )
}