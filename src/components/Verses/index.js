import React from 'react';
import { useParams } from 'react-router-dom';
import { FaTextHeight } from 'react-icons/fa';
import { FiHeadphones } from 'react-icons/fi';

import './styles.css';
import SkeletonDefault from '../../components/Skeleton';
import Skeleton from 'react-loading-skeleton';
import speak from '../../util/speaker';

function readText(array, version) {
  
  let text = '';

  for(let item in array) {
    text += array[item][version];
  }

  return text;
}

export default function Verses(props) {
  const { data, chapter, atualChapter } = props;
  const { version } = useParams();

  return (
    <div className="container">
      <div className="content-verse">

        <h2 className="title-body">{chapter.length ? chapter : <Skeleton />}</h2>
        { data.length ? 
          <span className="chapter-range">{atualChapter}:1-{data.length - 1 + 1}</span> : 
          <Skeleton /> 
        }
        
        <div className="box-util">
          <FaTextHeight color="#4a6da7" size={20} style={{ cursor: 'pointer' }} />
          <FiHeadphones color="#72b7e8" size={20} onClick={() => speak(readText(data, version))}/>
        </div>

        <div style={{width: '100%'}}>
        { data.length ?
          data.map((verse, index) => (
            <p key={verse.id} className="verse"><span className="verse-number">{index + 1}</span> {`${verse[version]}`}</p>
          )) : <SkeletonDefault />
        }

        </div>
      </div>
    </div>
  )
}