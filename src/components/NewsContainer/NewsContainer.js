import React from 'react';
import './NewsContainer.css'
import NewsArticle from './../NewsArticle/NewsArticle.js'

function NewsContainer(props) {
  const newsArticles = props.newsType.map(newsBit => {
    return <NewsArticle
      key = {newsBit.id}
      articleImg = {newsBit.img}
      articleHeadline = {newsBit.headline}
      articleDescription = {newsBit.description}
      articleUrl = {newsBit.url}
      />
  return newsArticles
  })

  return (
    <main className='newsContainer'>
    {newsArticles}
    </main>
  )
}

export default NewsContainer;
