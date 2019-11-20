import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
  return (
    <div className="newsArticle">
      <img src={props.articleImg} alt="stock"/>
      <h3>{props.articleHeadline}</h3>
      <p>{props.articleDescription}</p>
      <button className="linkBox">
        <a href={props.articleUrl}> Link To article</a>
      </button>
    </div>
)}

export default NewsArticle;
