import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import ImageBook from '../../components/ImageBook';
import Menu from '../../components/Menu';
import Verses from '../../components/Verses';

import api from '../../services/api';

import './styles.css';

export default function Scriptures() {

  const { book, chapter, version } = useParams();
  const [ verses, setVerses ] = useState([]);
  const [ chapterName, setChapterName ] = useState([]);

  useEffect(() => {      
    api.get(`verses/${version}/${book}/${chapter}`)
      .then(response => {

        setVerses(response.data)
        setChapterName(response.data[0].bookName)

      })
  }, [chapter])

  return (
    <>
      <Header />
      <div className="container">
        <ImageBook chapterName={chapterName}/>
        <Verses data={verses} chapter={chapterName} atualChapter={chapter} />
        <Menu />
      </div>
    </>
  )
} 