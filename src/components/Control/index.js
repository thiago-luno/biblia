import React from 'react';
import { FiHeadphones, FiHome } from 'react-icons/fi';
import { FaTextHeight } from 'react-icons/fa';

import './styles.css';

export default function Control() {
  return (
    <div className="content-controller">
      <div>
        <span>Exodus </span>
        <select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
      <FiHeadphones color="#f02a0e"/>
      <FiHome color="#f02a0e"/>
    </div>
  );
}