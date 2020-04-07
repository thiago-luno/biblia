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
  const [ data, setData ] = useState([]);

  useEffect(() => {
    let data = {version: version};

    api.get(`authors/${book}`)
      .then(chap => {
        data['chapters'] = chap.data.chapters; 
      })
      
    api.get(`verses/${version}/${book}/${chapter}`)
      .then(response => {
 
        data['cod'] = response.data[0].bookCode;
        setVerses(response.data)
        setChapterName(response.data[0].bookName)
        setData(data)

      })
  }, [chapter])

  return (
    <>
      <Header />
      <div className="container">
        <ImageBook chapterName={chapterName}/>
        <Verses data={verses} chapter={chapterName} atualChapter={chapter} />
        <Menu data={data} />
      </div>
    </>
  )
} 