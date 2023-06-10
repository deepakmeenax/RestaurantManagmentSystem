import React from 'react';
import './card.style.css';

function Card({
  data,
  title,
  text,
  icon = <i class="fas fa-cricket fa-4x"></i>,
}) {
  return (
    <div className="infobox">
      <div className="infobox-title">
        <p>{title}</p>
      </div>
      <div className="infobox-text">
        <p>{text}</p>
      </div>
      <div className="infobox-content">
        <div className="infobox-data">{data}</div>
      </div>
      <div className="infobox-icon">{icon}</div>
    </div>
  );
}

export default Card;
