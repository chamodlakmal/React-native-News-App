import React from 'react';
import { ArticleCard } from './components';

const App = () => {
  return (
    <ArticleCard
      imageUrl='https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg'
      title="News Title"
      source="ABC"
      timeago="4 hours ago"
    />
  )
}

export default App;