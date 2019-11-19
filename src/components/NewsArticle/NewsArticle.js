import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
  return (
    <div className="newsArticle">Article
      <img src={props.articleImg} alt="stock"/>
      <h3>{props.articleHeadline}</h3>
      <p>{props.articleDescription}</p>
      <div className="linkBox">
        <a href={props.articleUrl}> Link To article</a>
        <img className='logo' src="./../logo.svg" alt="arrow logo"/>
      </div>
    </div>
)}

export default NewsArticle;
