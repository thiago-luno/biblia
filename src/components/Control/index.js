import React from 'react';
import { FiHeadphones, FiHome, FiSettings, FiBookOpen } from 'react-icons/fi';

import './styles.css';

export default function Control() {
  return (
    <div className="content-controller">
      <div className="control-chapter">
        {/* <FiBookOpen color="#4a6da7" size={20}/>
        <span>Exodus </span>
        <select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select> */}
        <FiHeadphones color="#4a6da7" size={20}/>
        <FiHome color="#4a6da7"size={20}/>
        <FiSettings color="#4a6da7"size={20}/>
      </div>
    </div>
  );
}