import React from 'react';
import { Link } from 'react-router-dom';

import { FiHeadphones, FiHome, FiSettings } from 'react-icons/fi';

import './styles.css';

export default function Control() {
  return (
    <div className="content-controller">
      <div className="control-chapter">
        <Link to="/"><FiHeadphones color="#72b7e8" size={20}/></Link>
        <Link to="/"><FiHome color="#72b7e8"size={20}/></Link>
        <Link to="/"><FiSettings color="#72b7e8"size={20}/></Link>
      </div>
    </div>
  );
}