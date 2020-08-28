import React from 'react';
import { ArticleCard } from './components';

const App = () => {
  return (
    <ArticleCard
      imageUrl='https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg'
      title="News Title"
      source="ABC"
      timeago="2020-08-28T11:26:37Z"
    />
  )
}

export default App;