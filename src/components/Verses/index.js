import React from 'react';
import { useParams } from 'react-router-dom';
import { FaTextHeight } from 'react-icons/fa';

import './styles.css';

export default function Verses(props) {
  const { data, chapter, atualChapter } = props;
  const { version } = useParams();

  return (
    <div className="container">
      <div className="content-verse">

        {<h2 className="title-body">{chapter}</h2>}
        <span className="chapter-range">{atualChapter}:1-{data.length - 1 + 1}</span>
        <div className="box-util">
          <FaTextHeight color="#4a6da7" size={20} style={{ cursor: 'pointer' }} />
        </div>

        {
          data.map((verse, index) => (
            <p key={verse.id} className="verse"><span className="verse-number">{index + 1}</span> {`${verse[version]}`}</p>
          ))
        }
      </div>
    </div>
  )
}